import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import welcomeHelper from './FunctionalComponents/WelcomeAction'
import shipperHelper from './FunctionalComponents/ShipperAction'



// UI Components
import Web3InitContainer from './web3/Web3InitContainer'
import WelcomeComponent from './FunctionalComponents/Welcome'
import ShipperContainer from './ShipperContainer/ShipperComponent'
import InitiatorContainer from './InitiatorContainer/InitiatorComponent'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <div className="App">
                        <nav className="navbar pure-menu pure-menu-horizontal">
                            <Link to="/" className="pure-menu-heading pure-menu-link">UT Dallas BCSO</Link>

                            <ul className="pure-menu-list navbar-right">
                            <span>
                            <li className="pure-menu-item">
                            <Link to="/initiators" className="pure-menu-link">For Initiators</Link>
                            </li>
                            <li className="pure-menu-item">
                            <Link to="/shippers" className="pure-menu-link">For Shippers</Link>
                            </li>
                            </span>
                            </ul>
                            <Web3InitContainer />
                        </nav>
                    </div>
                    a<div className="underNav">
                    <Switch>
                        <Route path="/shippers" component={ShipperContainer} />
                        <Route path="/initiators" component={InitiatorContainer} />
                        <Route path="/" component={WelcomeComponent} />

                    </Switch>

                </div>
                </div>
            </Router>
        );
    }
}

export default App
