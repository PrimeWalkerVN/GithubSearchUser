import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, user } = useAuth0();
    const isUser = isAuthenticated && user;
    return (
        <Route
            {...rest}
            render={(props) => {
                return isUser ? <Component {...props} /> : <Redirect to='/login'></Redirect>;
            }}
        ></Route>
    );
};

export default PrivateRoute;