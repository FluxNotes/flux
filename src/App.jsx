import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WithTracker from './components/WithTracker';
import AppManager from './apps/AppManager';

class App extends Component {
    constructor(props) {
        super(props);
        this.apps = new AppManager().getSupportedApps();
    }

    render() {
        return (
            <Router>
                <div>
                    {this.apps.map((appObject, i) => {
                        if (appObject.isExact) {
                            return <Route exact path={appObject.path} render={(props) => {
                                return React.createElement(WithTracker(appObject.app), Object.assign(props, appObject));
                            }} key={i}/>
                        } else {
                            return <Route path={appObject.path} render={(props) => {
                                return React.createElement(WithTracker(appObject.app), Object.assign(props, appObject));
                            }} key={i}/>
                        }
                    })}
                </div>
            </Router>
        )
    }
}

export default App;
