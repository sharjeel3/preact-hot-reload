const defaultState = {
    json: {}
}

const app = (state = defaultState, action) => {
    switch (action.type) {
        case 'REFRESH_APP':
            return {
                ...state,
                json: action.json
            }
        default:
            return state
    }
}

export default app
