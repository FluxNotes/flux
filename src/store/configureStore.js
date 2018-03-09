import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  let middleware = applyMiddleware(
    promiseMiddleware(),
    thunkMiddleware,
    createLogger()
  );

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(rootReducer, initialState, composeEnhancers(middleware));

  return store;
}
