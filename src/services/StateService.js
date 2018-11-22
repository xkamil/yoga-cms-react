class StateService {

    static init(setGlobal, global) {
        this.setGlobal = setGlobal;
        this.global = global;

        setGlobal({
            lang: null,
            user: null
        })
    };

    static setUser(user) {
        this.setGlobal({...this.global, user});
    }

    static setLanguage(lang) {
        console.log('setting lang');
        this.setGlobal({...this.global, lang});
    }

}

export default StateService;