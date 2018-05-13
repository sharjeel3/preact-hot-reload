import { h, render } from 'preact'
import About from './components/About'
import Home from './components/Home'
import Router from 'preact-router'
import { Link } from 'preact-router/match';

const App = () => (
    <div>
        <h1>Hello Preact App!</h1>
        <div>
            <h2>More components are here: </h2>
            <div>
                <h3>Switch links here: </h3>
                <div>
                    <Link href="/about">About</Link>
                </div>
                <div>
                    <Link href="/">Home</Link>
                </div>
            </div>
            <div>
                <h3>Content appears here: </h3>
                <Router>
                    <About path="/about"/>
                    <Home path="/"/>
                </Router>
            </div>
        </div>
    </div>
)

export default App
