import Store from '../redux/Store';
import {login, logout} from "../redux/actions/authActions";
import TokenService from "./TokenService";
import YogaApiService from './YogaApiService';

class AuthService {

    static login(username, password) {
        return new Promise((resolve, reject) => {
            YogaApiService.authenticate(username, password)
                .then(token => {
                    TokenService.saveToken(token);
                    Store.dispatch(login(username));
                    resolve();
                })
                .catch(() => reject());
        });
    }

    static logout() {
        Store.dispatch(logout());
        TokenService.clearToken();
    }

}

export default AuthService;