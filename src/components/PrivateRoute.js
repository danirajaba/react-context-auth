import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../store/states/useAuth';
import { useAuthDispatcher } from '../store/actions/useAuthDispatcher';

const PrivateRoute = (props) => {

    const { checkAuth } = useAuthDispatcher();
    const authstate = useAuth();

    useEffect(() => {
        checkAuth()
    }, [authstate.token])

    return authstate.is_authenticated ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute;
