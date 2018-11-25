import React, {Component} from 'react';
import {FormHelperText, Grid,Button, Switch, TextField} from '@material-ui/core';
import {connect} from 'react-redux'
import PortalSectionsView from './PortalSectionsView';


class PortalView extends Component {
    static DIRECTION_UP = 1;
    static DIRECTION_DOWN = -1;

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

    updatePortal = () =>{
        const sections = this.state.portal.sections.map(s=>s._id);
        const portal = {...this.state.portal,sections};
        console.log('SENDING', portal);
    };

    isPortalChanged = () => {
        const original =  JSON.stringify(this.props.portal);
        const current = JSON.stringify(this.state.portal);

        if(this.props.portal){
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
    };g

    render() {
        const {lang} = this.props;
        const portal = this.state.portal || {};

        const textInput = (id, value, disabled) => <TextField id={id}
                                                              value={portal[value] || ''}
                                                              label={lang[id]}
                                                              onChange={i => this.onChange(i.target.id, i.target.value)}
                                                              disabled={disabled}/>;

        return (
            <Grid>
                <h1>Portal View</h1>

                {this.isPortalChanged() || <Button onClick={this.updatePortal}>{lang.save}</Button>}

                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        {textInput('id', '_id', true)}
                    </Grid>
                    <Grid item xs={12}>
                        <FormHelperText>{lang.active}</FormHelperText>
                        <Switch id='active'
                                label={lang.active}
                                checked={portal.active || false}

                                onChange={i => this.onChange('active', i.target.checked)}/>
                    </Grid>
                    <Grid item xs={12}>
                        {textInput('name', 'name', false)}
                    </Grid>
                    <Grid item xs={12}>
                        {textInput('label', 'label', false)}
                    </Grid>

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
