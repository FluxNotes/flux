import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer
});


// import { combineReducers } from 'redux';
// // import { routerReducer } from 'react-router-redux';
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

// const rootReducer = combineReducers({
//   routing: routerReducer
//   // additional reducers added here
// });

// export default rootReducer;
