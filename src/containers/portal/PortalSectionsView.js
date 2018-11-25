import React, {Component} from 'react';
import {Button, Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

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
                sectionIds: nextProps.sections.map(s => s._id)
            };
        }
        return null;
    }

    render() {
        const {lang, onSectionOrderChanged} = this.props;
        const sections = this.props.sections || [];

        const sectionRow = (section, key) => <Grid key={key} item container direction='row' spacing={8}>

            <Grid item>
                <Button size='small' variant='outlined'>
                    <ArrowDownward onClick={() => onSectionOrderChanged(section._id, 1)}/>
                </Button>
            </Grid>
            <Grid item>
                <Button size='small' variant='outlined'>
                    <ArrowUpward onClick={() => onSectionOrderChanged(section._id, -1)}/>
                </Button>
            </Grid>


            <Grid item>{section.name}</Grid>
        </Grid>;

        return (
            <React.Fragment>
                {sections && sections.map(sectionRow)}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.config.lang
});

export default connect(mapStateToProps)(PortalSectionsView);
