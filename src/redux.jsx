import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import store from "./store";
import App from './containers/App'

const ReduxApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default ReduxApp
