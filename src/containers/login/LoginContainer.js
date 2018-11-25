import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import LoginForm from "./LoginForm";
import AuthService from "../../services/AuthService";

class LoginContainer extends Component {
    constructor() {
        super();

        this.state = {
            authErrors: null,
            showProgress: false
        }
    }

    onLogin = (username, password) => {
        if (!username || !password) {
            return;
        }

        this.setState({showProgress: true});

        AuthService.login(username, password)
            .then(() => this.handleLogin(true))
            .catch(() => this.handleLogin(false))
    };

    handleLogin = (success) => {
        this.setState({showProgress: false, authErrors: !success});
    };

    render() {
        return (
            <Grid
                container
                style={{minHeight: '80vh', textAlign: 'center'}}
                direction="row"
                justify="center"
                alignItems="center"><LoginForm showProgress={this.state.showProgress} onLogin={this.onLogin}
                                               authErrors={this.state.authErrors}/>
            </Grid>
        );
    }
}

export default LoginContainer;
