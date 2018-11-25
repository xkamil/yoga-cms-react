import React, {Component} from 'react';
import {Button, FormControlLabel, FormHelperText, Grid, Switch, TextField} from '@material-ui/core';
import {connect} from 'react-redux'
import PortalSectionsView from './PortalSectionsView';

class PortalView extends Component {

    constructor() {
        super();

        this.state = {
            portal: null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.portal === null) {
            return {portal: nextProps.portal};
        }
        return null;
    }

    updatePortal = () => {
        const sections = this.state.portal.sections.map(s => s._id);
        const portal = {...this.state.portal, sections};
        console.log('SENDING', portal);
    };

    resetChanges = () => {
        this.setState({portal: this.props.portal});
    };

    isPortalChanged = () => {
        const original = JSON.stringify(this.props.portal);
        const current = JSON.stringify(this.state.portal);
        if (this.props.portal) {
            return original === current;
        }
        return false;
    };

    onChange = (id, value) => {
        const portal = {...this.state.portal};
        portal[id] = value;
        this.setState({portal});
    };

    onSectionOrderChanged = (id, direction) => {
        const {sections} = this.state.portal;
        let newSections = JSON.parse(JSON.stringify(sections));
        let oldIndex = -1;
        let newIndex = -1;
        let section = null;

        sections.forEach((aSection, idx) => {
            if (aSection._id === id) {
                section = aSection;
                oldIndex = idx;
            }
        });

        if (oldIndex + direction >= 0 && oldIndex + direction < sections.length) {
            newIndex = oldIndex + direction;
        }

        if (newIndex >= 0 && section) {
            newSections.splice(oldIndex, 1);
            newSections.splice(newIndex, 0, section);

            const portal = {...this.state.portal, sections: newSections};
            this.setState({portal})
        }
    };

    render() {
        const {lang} = this.props;
        const portal = this.state.portal || {};

        const textInput = (id, value, disabled) => <TextField id={id}
                                                              fullWidth={true}
                                                              value={portal[value] || ''}
                                                              label={lang[id]}
                                                              onChange={i => this.onChange(i.target.id, i.target.value)}
                                                              disabled={disabled}/>;

        return (
            <Grid container spacing={16} direction='row' alignItems="flex-start">
                <Grid item xs={12}>
                    <h1>Portal</h1>
                    <hr/>
                </Grid>

                <Grid item container xs={12} spacing={8} direction='row'>
                    <Grid item>
                        <Button disabled={this.isPortalChanged()} variant='contained' color='primary'
                                onClick={this.updatePortal}>{lang.save}</Button>
                    </Grid>
                    <Grid item>
                        <Button disabled={this.isPortalChanged()} variant='contained' color='secondary'
                                onClick={this.resetChanges}>{lang.cancel_changes}</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    {textInput('name', 'name', false)}
                </Grid>
                <Grid item xs={12} md={4}>
                    {textInput('label', 'label', false)}
                </Grid>
                <Grid item xs={12} md={4}>
                    {textInput('id', '_id', true)}
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel label={lang.active}
                                      control={
                                          <Switch id='active'
                                                  label={lang.active}
                                                  checked={portal.active || false}
                                                  onChange={i => this.onChange('active', i.target.checked)}
                                          />
                                      }
                    />
                </Grid>

                <Grid item container direction='column' spacing={8}>
                    <FormHelperText>Sekcje</FormHelperText>

                    <PortalSectionsView sections={portal.sections} onSectionOrderChanged={this.onSectionOrderChanged}/>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.config.lang
});

export default connect(mapStateToProps)(PortalView);
