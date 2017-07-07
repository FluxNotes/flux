import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import FullApp from './views/FullApp';
import SlimApp from './views/SlimApp';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={SlimApp} />
          <Route path='/patient' component={FullApp} />  
        </div>
      </Router>
    )
  }
}
export default App;
