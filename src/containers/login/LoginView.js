import React, {Component} from 'reactn';
import {Button, Grid, TextField} from '@material-ui/core';

class LoginView extends Component {

    constructor(){
        super();

        this.username = React.createRef();
        this.password = React.createRef();
    }

    onLogin = () =>{
       const username = this.username.current.value;
       const password = this.password.current.value;
       this.props.onLogin(username, password);
    };

    render() {
        const {lang} = this.global;

        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <TextField inputRef={this.username} label={lang.username}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" inputRef={this.password} label={lang.password}/>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={this.onLogin}>{lang.login}</Button>
                </Grid>
            </Grid>
        );
    }
}

export default LoginView;
