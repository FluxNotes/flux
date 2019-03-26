import React from 'react';
import { Route } from 'react-router-dom';
import 'fhirclient';

import AppManager from '../apps/AppManager';
import WithTracker from '../components/WithTracker';

const apps = AppManager.getSupportedApps();
const base = AppManager.config.basename || ''
let pathName = (path) => {
  if(path.startsWith('/') && base !== '/'){
    return base + path ;
  }
  else {
    return path;
  }
}
const App = () => (
    <div className="App">
        {apps.map((appObject, i) =>
            <Route exact={appObject.isExact} path={pathName(appObject.path)} component={(props) => {
                return React.createElement(WithTracker(appObject.app), { ...props, ...appObject });
            }} key={i}/>
        )}
    </div>
);

export default App;
