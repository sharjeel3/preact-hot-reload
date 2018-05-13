const defaultState = {
    name: ''
}

const game = (state = defaultState, action) => {
    switch (action.type) {
        case 'REFRESH_GAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}

export default game
