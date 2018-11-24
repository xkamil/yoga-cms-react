import React, {Component} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import { connect } from 'react-redux'

class LoginView extends Component {
    usernameField = React.createRef();
    passwordField = React.createRef();

    onLogin = () =>{
       const username = this.usernameField.current.value;
       const password = this.passwordField.current.value;
       this.props.onLogin(username, password);
    };

    render() {
        const {lang} = this.props;

        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <TextField inputRef={this.usernameField} label={lang.username}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" inputRef={this.passwordField} label={lang.password}/>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={this.onLogin}>{lang.login}</Button>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
  lang: state.config.lang,
    state
});

export default connect(mapStateToProps)(LoginView);
