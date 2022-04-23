import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ChatPage } from '../pages/ChatPage';
import { AuthContext } from '../context/AuthContext';
import { PublicRoute } from './Public';
import { PrivateRoute } from './Private';
import { AuthRouter } from './Auth';

export const AppRouter = () => {

    const { verifyToken, auth } = useContext(AuthContext)

    // Every time the screen is refreshed
    useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    if (auth.checking) {
        return <h1> Wait please... </h1>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={auth.logged} path='/auth' component={AuthRouter} />
                    <PrivateRoute isAuthenticated={auth.logged} exact={true} path='/' component={ChatPage} />

                    <Redirect to='/' /> {/* Any other routes */}
                </Switch>
            </div>
        </Router>
    )
}