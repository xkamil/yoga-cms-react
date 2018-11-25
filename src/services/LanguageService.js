import Language from '../lang/Language'
import {changeLanguage} from "../redux/actions/configActions";
import Store from '../redux/Store';

class LanguageService {

    static init() {
        Store.dispatch(changeLanguage(LanguageService.getCurrent()));
    };

    static setLanguage(lang) {
        if (Language[lang]) {
            Store.dispatch(changeLanguage(Language[lang]));
            localStorage.setItem("lang", lang);
        }
    };

    static getCurrent(){
        const savedLang = localStorage.getItem("lang");
        return Language[savedLang] ? Language[savedLang] : Language.default;
    }

    static getLanguages() {
        let languages = Object.keys(Language);

        const index = languages.indexOf("default");
        if (index > -1) {
            languages.splice(index, 1);
        }

        return languages;
    }
}

export default LanguageService;