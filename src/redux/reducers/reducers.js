import {combineReducers} from 'redux';
import {CHANGE_LANGUAGE} from "../actions/configActions";
import {LOGIN, LOGOUT} from "../actions/authActions";

// AUTH -------------------------------------------------------------------

const authInitialState = {
    user: null,
};

function auth(state = authInitialState, action) {
    switch (action.type) {
        case LOGIN :
            return {...state, user: action.data};
        case LOGOUT :
            return {...state, user: null};
        default:
            return state;
    }
}

// CONFIG ------------------------------------------------------------------

const configInitialState = {
    lang: {}
};

function config(state = configInitialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE :
            return {...state, lang: action.data};
        default:
            return state;
    }
}


export default combineReducers({
    auth,
    config
});