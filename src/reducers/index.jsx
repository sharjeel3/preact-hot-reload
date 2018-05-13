import { combineReducers } from 'redux'
import game from './game'
import app from './app'

const combinedReducers = combineReducers({
    app,
    game
})

export default combinedReducers
