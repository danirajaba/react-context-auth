import { actionTypes } from '../actions/actionTypes';

const AuthReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                is_authenticated: true,
                token: action.payload,
                error: null
            }
        case actionTypes.AUTH_FAIL:
            return {
                is_authenticated: false,
                token: null,
                error: action.payload
            }
        case actionTypes.AUTH_LOGOUT:
            localStorage.removeItem('token')
            return {
                is_authenticated: false,
                token: null,
                error: null
            }
        default:
            return state
    }

}


export default AuthReducer;