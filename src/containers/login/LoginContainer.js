import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import LoginForm from "./LoginForm";
import YogaApiService from "../../services/YogaApiService";

class LoginContainer extends Component {

    onLogin = (user, password) => {
        YogaApiService.authenticate(user, password)
            .catch(()=>console.log('authentication failed'));
    };
    
    render() {
        return (
            <Grid
                container
                style={{minHeight: '80vh', textAlign: 'center'}}
                direction="row"
                justify="center"
                alignItems="center"><LoginForm onLogin={this.onLogin}/>
            </Grid>
        );
    }
}

export default LoginContainer;
