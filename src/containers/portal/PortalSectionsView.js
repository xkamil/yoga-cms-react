import React, {Component} from 'react';
import {FormHelperText, Button, Grid, Switch, TextField} from '@material-ui/core';
import {connect} from 'react-redux'
import Debug from "../components/Debug";

class PortalSectionsView extends Component {

    constructor() {
        super();

        this.state = {
            sectionIds: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.sections) {
            return {
                sectionIds: nextProps.sections.map(s=>s._id)
            };
        }
        return null;
    }

    render() {
        const {lang, onSectionOrderChanged} = this.props;
        const sections = this.props.sections || [];

        const sectionRow = (section, key)=><Grid key={key} container item xs={12} direction='row'>
            <Grid item>{section.name}</Grid>
            <Grid item><Button onClick={()=>onSectionOrderChanged(section._id, 1)}>UP</Button></Grid>
            <Grid item><Button onClick={()=>onSectionOrderChanged(section._id, -1)}>DOWN</Button></Grid>
        </Grid>;

        return (
            <Grid>
                {sections && sections.map(sectionRow)}
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.config.lang
});

export default connect(mapStateToProps)(PortalSectionsView);
