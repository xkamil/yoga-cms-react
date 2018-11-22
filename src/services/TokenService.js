class TokenService  {

    static getToken(){
        return sessionStorage.getItem('api_token');
    }

    static clearToken(){
        sessionStorage.setItem('api_token', null);
    }

    static saveToken(token){
        sessionStorage.setItem('api_token', token);
    }
}

export default TokenService;