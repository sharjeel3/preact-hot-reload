import { h, render } from 'preact'

let elem, App;
function reload() {
    App = require('./redux').default;
    elem = render(<App/>, document.getElementById('root'), elem);
}

if(module.hot) {
    module.hot.accept()
    module.hot.accept('./redux', reload)
}

reload()

