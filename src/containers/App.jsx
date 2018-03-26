import React from 'react';
import { Route } from 'react-router-dom';

import AppManager from '../apps/AppManager';
import WithTracker from '../components/WithTracker';

const apps = new AppManager().getSupportedApps();

const App = () => (
    <div className="App">
        {apps.map((appObject, i) =>
            <Route exact={appObject.isExact} path={appObject.path} component={(props) => {
                return React.createElement(WithTracker(appObject.app), { ...props, ...appObject });
            }} key={i}/>
        )}
    </div>
);

export default App;
