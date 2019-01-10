import { combineReducers } from 'redux';

import mcodeReducer from './mcode';

export default combineReducers({
  mcode: mcodeReducer
});
