import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {Route, Switch} from "react-router-dom";
import PortalsListContainer from "../portal_list/PortalsListContainer";
import PortalContainer from "../portal/PortalContainer";
import UserMenu from '../components/UserMenu';
import MainMenu from "../components/MainMenu";
import SectionContainer from "../section/SectionContainer";

class DashboardContainer extends Component {

    render() {
        return (
            <Grid container direction="row">
                <UserMenu/>


                <Grid container item xs={2}>
                    <MainMenu/>
                </Grid>

                <Grid container item xs>
                    <Switch>
                        <Route exact path='/portals' component={PortalsListContainer}/>
                        <Route path='/portals/:portal_id' component={PortalContainer}/>
                        <Route path='/sections/:section_id' component={SectionContainer}/>
                    </Switch>
                </Grid>


            </Grid>
        );
    }
}

export default DashboardContainer;
