import { h, render, Component } from 'preact'
import { connect } from 'preact-redux'
import GameComponent from '../components/Game'

class Game extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        return (
            <GameComponent/>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.game.name
})

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch({
            type: 'REFRESH_GAME',
            name: 'Name'
        })
    }
})

const MainGame = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default MainGame
