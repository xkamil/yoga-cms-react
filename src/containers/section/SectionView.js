import React, {Component} from 'react';
import {Button, FormControlLabel, FormHelperText, Grid, Switch, TextField} from '@material-ui/core';
import {connect} from 'react-redux'
import SectionContentItemsView from './SectionContentItemsView';

class PortalView extends Component {

    constructor() {
        super();

        this.state = {
            section: null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.section === null) {
            return {section: nextProps.section};
        }
        return null;
    }

    updateSection = () => {
        const data = this.state.section.data.map(i => i._id);
        const section = {...this.state.section, data};
        console.log('SENDING', section);
    };

    resetChanges = () => {
        this.setState({section: this.props.section});
    };

    isSectionChanged = () => {
        const original = JSON.stringify(this.props.section);
        const current = JSON.stringify(this.state.section);
        if (this.props.section) {
            return original === current;
        }
        return false;
    };

    onChange = (id, value) => {
        const section = {...this.state.section};
        section[id] = value;
        this.setState({section});
    };

    onContentItemOrderChanged = (currentIndex, mod) => {
        const newContentItems = JSON.parse(JSON.stringify( this.state.section.data));
        const newIndex = currentIndex + mod;
        
        if(newIndex >= 0 && newIndex < newContentItems.length){
            const tmp = newContentItems[newIndex];
            newContentItems[newIndex] = newContentItems[currentIndex];
            newContentItems[currentIndex] = tmp;
            const section = {...this.state.section, data: newContentItems};
            this.setState({section})
        }
    };

    render() {
        const {lang} = this.props;
        const section = this.state.section || {};

        const textInput = (id, value, disabled) => <TextField id={id}
                                                              fullWidth={true}
                                                              value={section[value] || ''}
                                                              label={lang[id]}
                                                              onChange={i => this.onChange(i.target.id, i.target.value)}
                                                              disabled={disabled}/>;

        return (
            <Grid container spacing={16} direction='row' alignItems="flex-start">
                <Grid item xs={12}>
                    <h1>Section</h1>
                    <hr/>
                </Grid>

                <Grid item container xs={12} spacing={8} direction='row'>
                    <Grid item>
                        <Button disabled={this.isSectionChanged()} variant='contained' color='primary'
                                onClick={this.updateSection}>{lang.save}</Button>
                    </Grid>
                    <Grid item>
                        <Button disabled={this.isSectionChanged()} variant='contained' color='secondary'
                                onClick={this.resetChanges}>{lang.undo_changes}</Button>
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
                                                  checked={section.active || false}
                                                  onChange={i => this.onChange('active', i.target.checked)}
                                          />
                                      }
                    />
                </Grid>

                <Grid item container direction='column' spacing={8}>
                    <FormHelperText>Content itemy</FormHelperText>

                    <SectionContentItemsView contentItems={section.data} onContentItemOrderChanged={this.onContentItemOrderChanged}/>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.config.lang
});

export default connect(mapStateToProps)(PortalView);
