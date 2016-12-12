import { combineReducers } from 'redux';
import counter from './counterReducer';
import login from './loginReducer';
import stack from './stackReducer';
import list from './listReducer';

const rootReducer = combineReducers({
  counter,
  login,
  stack,
  list
});

export default rootReducer;
