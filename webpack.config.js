const webpack = require('webpack')
const path = require('path')

const config = {
    entry:  path.resolve(__dirname, "./src/index.jsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}

module.exports = config
