import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// import 'es6-shim';
// import 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import Root from './components/Root';
// import configureStore from './store/configureStore';
// // import './styles/app.scss'; // add when SASS conversion complete
// import './index.css';

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



// const store = configureStore();

// window.store = store;



// render(
//   <Root store={store} />,
//   document.getElementById('root')
// );
