import React, {Component, setGlobal} from 'reactn';
import './App.css';
import LoginContainer from "./containers/login/LoginContainer";
import LanguageService from "./services/LanguageService";
import ChangeLanguage from "./containers/components/ChangeLanguage";

class App extends Component {
    constructor(){
        super();
        console.log(window.navigator.language);
        LanguageService.init(setGlobal);
    }
    render() {

        console.log(this.global);
        return (
            <div className="App">
                <ChangeLanguage/>
                <LoginContainer/>
            </div>
        );
    }
}

export default App;
