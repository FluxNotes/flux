import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer
  // additional reducers added here
});

export default rootReducer;
