import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import LoginView from "./LoginView";

class LoginContainer extends Component {

    onLogin = (username, password) => {
        console.log(username, password)
    };

    render() {
        return (
            <Grid
                container
                style={{minHeight: '80vh'}}
                direction="row"
                justify="center"
                alignItems="center"><LoginView onLogin={this.onLogin}/>
            </Grid>

        );
    }
}

export default LoginContainer;
