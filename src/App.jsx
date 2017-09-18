import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withTracker from './analyticsTracker/withTracker';
import ViewManager from './views/ViewManager';

class App extends Component {
  
    constructor(props) { 
        super(props);
        this.views = new ViewManager().getSupportedViews();
    }

    render() {
        return (
            <Router>
                <div>
                    {this.views.map((viewObject, i) => {
                        if (viewObject.isExact) { 
                            return <Route exact path={viewObject.path} component={withTracker(viewObject.app)} key={i}/>
                        } else { 
                            return <Route path={viewObject.path} component={withTracker(viewObject.app)} key={i}/>
                        }
                    })}
                </div>
            </Router>
        )
    }
}
export default App;
