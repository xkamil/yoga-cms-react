import React, {Component} from 'react';
import SectionView from "./SectionView";
import YogaApiService from "../../services/YogaApiService";
import {Grid} from '@material-ui/core';

class SectionContainer extends Component {
    constructor() {
        super();
        this.state = {
            showProgress: false,
            section: null
        }
    }

    componentDidMount() {
        const sectionId = this.props.match.params.section_id;

        YogaApiService.getSection(sectionId)
            .then(section=>this.setState({section}))
            .catch(err=>this.onGetSectionError(err));
    }

    onGetSectionError = (error) => {
        console.log("error occuret when getting section", error);
    };

    render() {
        const {section} = this.state;

        return (
            <Grid container item spacing={8}>
                <SectionView section={section} />
            </Grid>
        );
    }
}

export default SectionContainer;
