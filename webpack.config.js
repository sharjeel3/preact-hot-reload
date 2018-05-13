const webpack = require('webpack')
const path = require('path')

const config = {
    entry:  path.resolve(__dirname, "./src/index.jsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.resolve(__dirname)
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}

module.exports = config
