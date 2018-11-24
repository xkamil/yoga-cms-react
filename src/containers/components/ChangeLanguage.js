import React, {Component} from 'react';
import LanguageService from "../../services/LanguageService";
import {List, ListItemText} from '@material-ui/core';

class ChangeLanguage extends Component {

    changeLanguage = (lang) => {
        LanguageService.setLanguage(lang);
    };

    render() {
        const languages = LanguageService.getLanguages();

        return (
            <List>
                {languages.map((lang, key) =>
                    <ListItemText key={key}
                                  onClick={() => this.changeLanguage(lang)}>{lang}</ListItemText>
                )}
            </List>
        );
    }
}

export default ChangeLanguage;
