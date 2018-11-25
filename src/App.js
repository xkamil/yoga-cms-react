import React, {Component} from 'react';
import LoginContainer from "./containers/login/LoginContainer";
import ChangeLanguage from "./containers/components/ChangeLanguage";
import LanguageService from "./services/LanguageService";
import {BrowserRouter as Router} from "react-router-dom";
import DashboardContainer from "./containers/dashboard/DashboardContainer";

import {connect} from 'react-redux'


class App extends Component {

    constructor() {
        super();
        LanguageService.init();
    }

    render() {
        const {user} = this.props;

        return (
            <Router>
                <React.Fragment>
                    <ChangeLanguage/>
                    {user && <DashboardContainer/>}
                    {!user && <LoginContainer/>}
                </React.Fragment>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(App);
