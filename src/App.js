import React, {Component, setGlobal} from 'reactn';
import './App.css';
import LoginContainer from "./containers/login/LoginContainer";
import ChangeLanguage from "./containers/components/ChangeLanguage";
import StateService from "./services/StateService";
import LanguageService from "./services/LanguageService";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DashboardContainer from "./containers/dashboard/DashboardContainer";


class App extends Component {

    constructor() {
        super();
        console.log(this);
        StateService.init(setGlobal, this.global);
        LanguageService.init();
    }

    render() {

        console.log(this.global);
        
        return (
            <React.Fragment>
                <ChangeLanguage/>

                <Router>
                    <Route path="/" exact render={() => {
                        if (this.global.user) {
                            return <DashboardContainer/>
                        } else {
                            return <LoginContainer/>
                        }
                    }}/>
                </Router>

            </React.Fragment>
        );
    }
}

export default App;
