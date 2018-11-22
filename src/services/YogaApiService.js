import Request from "./Request";
import TokenService from "./TokenService";
import StateService from "./StateService";

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
                    StateService.setUser(user);
                    resolve();
                })
                .catch(err => {
                    TokenService.clearToken();
                    StateService.setUser(null);
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
            StateService.setUser(null);
            TokenService.clearToken();
        }

        console.log(reject);
        
        reject();
    }
}

export default YogaApiService;