import Language from '../lang/Language'

class LanguageService  {

    static init(fnSetGlobal) {
        this.setGlobal = fnSetGlobal;
        const lang = localStorage.getItem("lang");

        if(!Language[lang]){
            this.setGlobal({lang: Language.default})
        }else{
            this.setGlobal({lang: Language[lang]})
        }
    };

    static setLanguage(lang){
        if(Language[lang]){
            this.setGlobal({lang: Language[lang]});
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