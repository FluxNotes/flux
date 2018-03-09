import 'es6-shim';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './components/Root';
import configureStore from './store/configureStore';
// import './styles/app.scss'; // add when SASS conversion complete
import './index.css';

const store = configureStore();

window.store = store;

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Root store={store} />,
  document.getElementById('root')
);
