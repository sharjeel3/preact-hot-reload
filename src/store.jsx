import { createStore, applyMiddleware } from 'redux'
import combinedReducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [thunk]

middleware.push(createLogger())

const store = createStore(
    combinedReducer,
    applyMiddleware(...middleware)
)

export default store
