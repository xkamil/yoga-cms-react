import Request from "./Request";
import AuthService from "./AuthService";

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
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

    static getPortals() {
        const path = '/api/portals';

        return new Promise((resolve, reject) => {
            new Request(this.url + path).withMethod('get')
                .perform()
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

    static getPortal(id) {
        const path = `/api/portals/${id}`;

        return new Promise((resolve, reject) => {
            new Request(this.url + path).withMethod('get')
                .perform()
                .then(res => resolve(res.data))
                .catch(err => reject(err))
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
            AuthService.logout();
        }
        
        reject();
    }
}

export default YogaApiService;