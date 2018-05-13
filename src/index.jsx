import { h, render } from 'preact'

let elem, App;
function reload() {
    App = require('./App').default;
    elem = render(<App/>, document.getElementById('root'), elem);
}

if(module.hot) {
    module.hot.accept('./App', reload)
}

reload()
