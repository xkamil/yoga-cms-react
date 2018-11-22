import React, {Component} from 'react';
import {Grid, Button} from '@material-ui/core';
import StateService from "../../services/StateService";
import TokenService from "../../services/TokenService";
import YogaApiService from "../../services/YogaApiService";

class DashboardContainer extends Component {

    onLogOut = () => {
        StateService.setUser(null);
        TokenService.clearToken();
    };

    onInvalidateToken = () =>{
        TokenService.saveToken("dupa_zly_token");
    };

    onLogsRequest = () =>{
        YogaApiService.getLogs()
            .catch(()=>console.log('blad autoryzacji'))
    };

    render() {
        return (
            <Grid
                container
                style={{minHeight: '80vh'}}
                direction="row"
                justify="center"
                alignItems="center">

                <h1>jupi</h1>
                <Button onClick={this.onLogOut}>Wyloguj</Button>
                <Button onClick={this.onInvalidateToken}>Unieważnij token</Button>
                <Button onClick={this.onLogsRequest}>Request z tokenem</Button>

            </Grid>

        );
    }
}

export default DashboardContainer;
