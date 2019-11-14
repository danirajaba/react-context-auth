import React, { useContext } from 'react'
import { AuthContextDispatch } from '../Providers/AuthProvider';
import { useHistory } from 'react-router-dom';
import { actionTypes } from './actionTypes';



export const useAuthDispatcher = () => {

    const dispatch = useContext(AuthContextDispatch);
    const history = useHistory();

    const login = (username, password) => {

        if (username === 'admin' && password === '1234') {

            const token = 'myspecialtoken'

            dispatch({
                type: actionTypes.AUTH_SUCCESS,
                payload: token
            })

            history.push('/');

        }
        else {

            dispatch({
                type: actionTypes.AUTH_FAIL,
                payload: 'username or password are wrong'
            })

        }
    }

    const logout = () => {
        dispatch({
            type: actionTypes.AUTH_LOGOUT
        })
    }

    const checkAuth = () => {
        const token = localStorage.getItem('token') || null

        if (token) {
            dispatch({
                type: actionTypes.AUTH_SUCCESS,
                payload: token
            })
        }
    }

    return { login, logout, checkAuth }

}
