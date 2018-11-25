import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import YogaApiService from "../../services/YogaApiService";
import PortalsList from './PortalsList';

class PortalsListContainer extends Component {
    constructor() {
        super();
        this.state = {
            showProgress: false,
            portals: []
        }
    }

    componentDidMount() {
        this.setState({showProgress: true});

        YogaApiService.getPortals()
            .then(portals => this.setState({portals}))
            .catch(err => this.onGetPortalsError(err))
    }

    onGetPortalsError = (error) => {
        console.log('error fetching portals', error);
    };


    render() {
        const {portals} = this.state;

        return (
            <Grid container direction='column'>
                <Grid item>
                    <h1>Portals list</h1>
                </Grid>
                <Grid item>
                    <PortalsList portals={portals}/>
                </Grid>
            </Grid>
        );
    }
}

export default PortalsListContainer;
