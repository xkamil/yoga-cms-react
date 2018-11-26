import React, {Component} from 'react';
import {Button, Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

class SectionContentItemsView extends Component {

    constructor() {
        super();

        this.state = {
            contentItemIds: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.contentItems) {
            return {
                contentItemIds: nextProps.contentItems.map(s => s._id)
            };
        }
        return null;
    }

    render() {
        const {lang, onContentItemOrderChanged} = this.props;
        const contentItems = this.props.contentItems || [];


        const sectionRow = (contentItem, key) => <Grid key={key} item container direction='row' spacing={8}>

            <Grid item>
                <Button size='small' variant='outlined'>
                    <ArrowDownward onClick={() => onContentItemOrderChanged(key, 1)}/>
                </Button>
            </Grid>
            <Grid item>
                <Button size='small' variant='outlined'>
                    <ArrowUpward onClick={() => onContentItemOrderChanged(key,-1)}/>
                </Button>
            </Grid>


            <Grid item>{contentItem}</Grid>
        </Grid>;

        return (
            <React.Fragment>
                {contentItems && contentItems.map(sectionRow)}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.config.lang
});

export default connect(mapStateToProps)(SectionContentItemsView);
