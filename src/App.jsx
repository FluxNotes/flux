import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import ViewManager from './views/ViewManager';

// For Google Analytics 
ReactGA.initialize('UA-82650858-3', { 
    debug: true
});

class App extends Component {
  
    constructor(props) { 
        super(props);
    
        this.views = new ViewManager().getSupportedViews();
        this.logPageView = () => {
            ReactGA.pageview(window.location.hash);
        }

    }

    render() {
        return (
            <Router onUpdate={this.logPageView}>
                <div>
                    {this.views.map((viewObject, i) => {
                        if (viewObject.isExact) { 
                            return <Route exact path={viewObject.path} component={viewObject.app} key={i}/>
                        } else { 
                            return <Route path={viewObject.path} component={viewObject.app} key={i}/>
                        }
                    })}
                </div>
            </Router>
        )
    }
}
export default App;
