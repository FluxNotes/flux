import React from 'react';
import { Route } from 'react-router';

import AppManager from './apps/AppManager';
import WithTracker from './components/WithTracker';
import Root from './components/Root';

const apps = new AppManager().getSupportedApps();

const routeComponents = app.map(({path, component, isExact}, key) => {
    return <Route {isExact ? exact}
});

export default (
    <Route component={Root}>
        {apps.map((appObject, i) => {
            if (appObject.isExact) {
                return <Route exact path={appObject.path} component={(props) => {
                    return React.createElement(WithTracker(appObject.app), {...props, appObject});
                }} key={i}/>
            } else {
                return <Route path={appObject.path} component={(props) => {
                    return React.createElement(WithTracker(appObject.app), {...props, appObject});
                }} key={i}/>
            }
        })}
    </Route>
);
