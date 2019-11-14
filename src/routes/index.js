import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Login from '../screens/Login';
import PrivateRoute from '../components/PrivateRoute';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;