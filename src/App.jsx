import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import FullApp from './views/FullApp';
import SlimApp from './views/SlimApp';
import TestApp from './views/TestApp';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={SlimApp} />
          <Route path='/patient' component={FullApp} />  
		  <Route path='/test' component={TestApp} />
        </div>
      </Router>
    )
  }
}
export default App;
