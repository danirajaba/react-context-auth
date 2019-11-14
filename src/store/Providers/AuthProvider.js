import React, { useReducer } from 'react';
import AuthReducer from '../reducers/AuthReducer';


export const AuthContextState = React.createContext();
export const AuthContextDispatch = React.createContext();

const initialauthstate = {
    is_authenticated: false,
    token: null,
    error: null
}

const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, initialauthstate)

    return (
        <AuthContextState.Provider value={state}>
            <AuthContextDispatch.Provider value={dispatch}>
                {children}
            </AuthContextDispatch.Provider>
        </AuthContextState.Provider>
    )
}

export default AuthProvider;