import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import createHistory from 'history/createBrowserHistory';
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// import rootReducer from '../reducers';

// export default function configureStore(initialState) {
//   // Create browser history
//   const history = createHistory();

//   // Build the middleware for intercepting and dispatching navigation actions
//   const middleware = routerMiddleware(history);

//   // Add the reducer to your store on the `router` key
//   // Also apply our middleware for navigating
//   const store = createStore(
//     combineReducers({
//       ...reducers,
//       router: routerReducer
//     }),
//     applyMiddleware(middleware)
//   );

//   const middleware = applyMiddleware(
//     promiseMiddleware(),
//     thunkMiddleware,
//     createLogger()
//   );

//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   return createStore(rootReducer, initialState, composeEnhancers(middleware));
// }
