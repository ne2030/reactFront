import {
  REQUEST_STACK, RECEIVE_STACK, POST_STACK, COMPLETE_STACK
} from '../actions/actionTypes.js';

const stackInitialState = {
  items: [],
  onRequest: false,
  lastUpdated: undefined,
  onPost: false,
  status: undefined
};

const stack = (state = stackInitialState, action) => {
  switch(action.type) {
    case REQUEST_STACK:
      return Object.assign({}, state, {
        onRequest: true
      });
    case RECEIVE_STACK:
      return Object.assign({}, state, {
        onRequest: false,
        items: action.items,
        lastUpdated: new Date()
      });
    case POST_STACK:
      return Object.assign({}, state, {
        onPost: true,
        status: 'pending'
      });
    case COMPLETE_STACK:
      return Object.assign({}, state, {
        onPost: false,
        status: action.status
      });

    default:
      return state;
  }
};

export default stack;
