import axios from 'axios';
import TokenService from "./TokenService";

class Request {

    constructor(url) {
        this.options = {
            method: '',
            url: url,
            headers: {},
            data: null
        };
    }

    withMethod(method) {
        this.options.method = method;
        return this;
    }

    withToken() {
        this.options.headers['token'] = TokenService.getToken();
        return this;
    }

    withData(data) {
        this.options.data = data;
        return this;
    }

    perform() {
        return axios(this.options);
    }
}

export default Request;