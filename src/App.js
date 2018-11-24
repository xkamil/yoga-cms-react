import React, {Component} from 'react';
import './App.css';
import LoginContainer from "./containers/login/LoginContainer";
import ChangeLanguage from "./containers/components/ChangeLanguage";
import LanguageService from "./services/LanguageService";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DashboardContainer from "./containers/dashboard/DashboardContainer";

import {connect} from 'react-redux'


class App extends Component {

    constructor() {
        super();
        LanguageService.init();
    }

    render() {
        return (
            <React.Fragment>

                <ChangeLanguage/>

                <Router>
                    <Route path="/" exact render={() => {
                        if (this.props.user) {
                            return <DashboardContainer/>
                        } else {
                            return <LoginContainer/>
                        }
                    }}/>
                </Router>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(App);
