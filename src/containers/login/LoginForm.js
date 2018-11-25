import React, {Component} from 'react';
import {Button, CircularProgress, Grid, TextField} from '@material-ui/core';
import {connect} from 'react-redux'

class LoginView extends Component {
    usernameField = React.createRef();
    passwordField = React.createRef();

    onLogin = () => {
        const username = this.usernameField.current.value;
        const password = this.passwordField.current.value;
        this.props.onLogin(username, password);
    };

    render() {
        const {lang, authErrors, showProgress} = this.props;

        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <CircularProgress style={{visibility: showProgress ? 'visible' : 'hidden'}} color="secondary"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField inputRef={this.usernameField} label={lang.username} error={authErrors}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" inputRef={this.passwordField} label={lang.password} error={authErrors}/>
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
