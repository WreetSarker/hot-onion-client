import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from './userTypes';

const initialState = {
    loading: false,
    userInfo: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_LOGIN_SUCCESS: return {
            loading: false,
            userInfo: action.payload,
            error: ''
        }
        case USER_LOGIN_FAILURE: return {
            loading: false,
            userInfo: [],
            error: action.payload
        }

        default: return state
    }
}

export default userReducer;