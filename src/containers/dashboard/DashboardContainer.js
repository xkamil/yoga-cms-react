import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {Route, Switch} from "react-router-dom";
import PortalsListContainer from "../portal_list/PortalsListContainer";
import PortalContainer from "../portal/PortalContainer";
import UserMenu from '../components/UserMenu';
import MainMenu from "../components/MainMenu";

class DashboardContainer extends Component {

    render() {
        return (
            <Grid container direction="row">
                <UserMenu/>
                <MainMenu/>

                <Switch>
                    <Route exact path='/portals' component={PortalsListContainer}/>
                    <Route path='/portals/:portal_id' component={PortalContainer}/>
                </Switch>
            </Grid>
        );
    }
}

export default DashboardContainer;
