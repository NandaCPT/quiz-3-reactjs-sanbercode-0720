import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isLogin} from './context/token';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;