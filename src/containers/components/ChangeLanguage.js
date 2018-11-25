import React, {Component} from 'react';
import LanguageService from "../../services/LanguageService";
import {Collapse, List, ListItemText} from '@material-ui/core';
import {connect} from 'react-redux'

class ChangeLanguage extends Component {

    constructor() {
        super();

        this.state = {
            open: false,
            current: null
        }
    }

    handleClick = (lang) => {
        if (lang) {
            LanguageService.setLanguage(lang);
            this.setState(state => ({...state, open: false}))
        } else {
            this.setState(state => ({...state, open: !state.open}))
        }
    };

    render() {
        const {lang} = this.props;
        const languages = LanguageService.getLanguages();

        const listItemText = (key, lang) => <ListItemText key={key}
                                                          style={{padding: 0}}
                                                          onClick={() => this.handleClick(lang)}>{lang}</ListItemText>;

        return (
            <React.Fragment>
                <List style={{cursor: 'pointer', position: 'absolute', top: 10, right: 10}}>
                    <ListItemText onClick={() => this.handleClick()}>{lang.lang}</ListItemText>

                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        {languages.map((lang, key) => listItemText(key, lang))}
                    </Collapse>
                </List>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.config.lang
});

export default connect(mapStateToProps)(ChangeLanguage);

