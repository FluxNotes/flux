import 'babel-polyfill';
import 'es6-shim';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store, { history } from './store/configureStore';
import App from './containers/App';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
if (!Element.prototype.matches)	
    Element.prototype.matches = Element.prototype.msMatchesSelector || 	
                                Element.prototype.webkitMatchesSelector;	
	
if (!Element.prototype.closest)	
    Element.prototype.closest = function(s) {	
        var el = this;	
        if (!document.documentElement.contains(el)) return null;	
        do {	
            if (el.matches(s)) return el;	
            el = el.parentElement || el.parentNode;	
        } while (el !== null && el.nodeType === 1); 	
        return null;	
    }; 