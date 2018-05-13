import { h, render, Component } from 'preact'
import { connect } from 'preact-redux'
import AppComponent from '../App'

class Apps extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        return (
            <AppComponent/>
        )
    }
}

const mapStateToProps = (state) => ({
    json: state.app.json
})

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch({
            type: 'REFRESH_APP',
            json: {updatedTime: Date.now()}
        })
    }
})


const MainApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Apps)


export default MainApp
