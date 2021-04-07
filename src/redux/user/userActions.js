import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from './userTypes';

export const userLoginRequest = () => {
    return {
        type: USER_LOGIN_REQUEST
    }
}

export const userLoginSuccess = user => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user
    }
}

export const userLoginFailure = error => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error
    }
}