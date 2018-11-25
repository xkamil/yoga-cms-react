import React, {Component} from 'react';
import PortalView from "./PortalView";
import YogaApiService from "../../services/YogaApiService";
import {Grid} from '@material-ui/core';

class PortalContainer extends Component {
    constructor() {
        super();
        this.state = {
            showProgress: false,
            portal: null
        }
    }

    componentDidMount() {
        const portalId = this.props.match.params.portal_id;

        YogaApiService.getPortal(portalId)
            .then(portal=>this.setState({portal}))
            .catch(err=>this.onGetPortalError(err));
    }

    onGetPortalError = (error) => {
        console.log("error occuret when getting portal", error);
    };

    render() {
        const {portal} = this.state;

        return (
            <Grid container item>
                <PortalView portal={portal} />
            </Grid>
        );
    }
}

export default PortalContainer;
