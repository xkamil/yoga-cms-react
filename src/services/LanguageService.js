import Language from '../lang/Language'
import StateService from "./StateService";

class LanguageService  {

    static init() {
        const lang = localStorage.getItem("lang");

        if(!Language[lang]){
            StateService.setLanguage(Language.default);
        }else{
            StateService.setLanguage(Language[lang]);
        }
    };

    static setLanguage(lang){
        if(Language[lang]){
            StateService.setLanguage(Language[lang]);
            localStorage.setItem("lang", lang);
        }
    };

    static getLanguages(){
        let languages = Object.keys(Language);

        const index = languages.indexOf("default");
        if (index > -1) {
            languages.splice(index, 1);
        }

        return languages;
    }
}

export default LanguageService;