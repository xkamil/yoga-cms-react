import React, {Component} from 'reactn';
import {Button, Grid, TextField} from '@material-ui/core';

class LoginView extends Component {

    constructor(){
        super();
        this.usernameField = React.createRef();
        this.passwordField = React.createRef();
    }

    onLogin = () =>{
       const username = this.usernameField.current.value;
       const password = this.passwordField.current.value;
       this.props.onLogin(username, password);
    };

    render() {
        const {lang} = this.global;

        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <TextField inputRef={this.usernameField} label={lang.usernameField}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" inputRef={this.passwordField} label={lang.passwordField}/>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={this.onLogin}>{lang.login}</Button>
                </Grid>
            </Grid>
        );
    }
}

export default LoginView;
