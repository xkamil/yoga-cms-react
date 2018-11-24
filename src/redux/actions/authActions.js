export const LOGIN = 'LOGIN_USER';
export const LOGOUT = 'LOGOUT_USER';

export function login(username) {
    return {type: LOGIN, data: username}
}

export function logout() {
    return {type: LOGOUT}
}