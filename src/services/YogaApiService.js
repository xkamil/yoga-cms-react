import Request from "./Request";
import TokenService from "./TokenService";
import Store from '../redux/Store';
import {login, logout} from '../redux/actions/authActions';

class YogaApiService {
    static url = 'https://yoga-server.herokuapp.com';

    static authenticate(user, password) {
        const credentials = {user, password};
        const path = '/api/auth/login';

        return new Promise((resolve, reject) => {
            new Request(this.url + path)
                .withMethod('post')
                .withData(credentials)
                .perform()
                .then(res => {
                    TokenService.saveToken(res.data);
                    Store.dispatch(login(user));
                    resolve();
                })
                .catch(err => {
                    TokenService.clearToken();
                    Store.dispatch(logout());
                    reject();
                })
        })
    }

    static getPortals() {
        const path = '/api/portals';

        return new Promise((resolve, reject) => {
            new Request(this.url + path).withMethod('get')
                .perform()
                .then(res => resolve(res.data))
                .catch(err => reject())
        })
    }

    static getLogs() {
        const path = '/api/logs';

        return new Promise((resolve, reject) => {
            new Request(this.url + path)
                .withMethod('get')
                .withToken()
                .perform()
                .then(res => resolve(res.data))
                .catch(err => YogaApiService.catchError(err, reject))
        })
    }

    static catchError(error, reject) {
        if (error.response.status === 401) {
            Store.dispatch(logout());
            TokenService.clearToken();
        }
        
        reject();
    }
}

export default YogaApiService;