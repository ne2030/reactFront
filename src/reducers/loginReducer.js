import {
  REQUEST_LOGIN, RECEIVE_LOGIN, LOG_OUT,
} from '../actions/actionTypes.js';

const loginInitialState = { onRequset: false, refreshToken: undefined, jwToken: undefined, user: undefined };

const login = (state = loginInitialState, action) => {
  switch(action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        onRequest: true
      });
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        onRequest: false,
        refreshToken: action.refreshToken,
        jwToken: action.jwToken,
        user: action.user
      });
    case LOG_OUT:
      return Object.assign({}, state, {
        refreshToken: undefined,
        jwToken: undefined,
        user: undefined
      });
    default:
      return state;
  }
};

export default login;
