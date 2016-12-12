import {
  REQUEST_LIST, RECEIVE_LIST, POST_ITEM, COMPLETE_ITEM
} from '../actions/actionTypes.js';

const listInitialState = {
  onRequest: false,
  count: 0,
  items: [],
  onPost: false,
  status: undefined
};

const list = (state = listInitialState, action) => {
  switch(action.type) {
    case REQUEST_LIST:
      return Object.assign({}, state, {
        onRequest: true
      });
    case RECEIVE_LIST:
      return Object.assign({}, state, {
        onRequest: false,
        count: action.count,
        items: action.items
      });
    case POST_ITEM:
      return Object.assing({}, state, {
        onPost: true,
        status: 'pending'
      });
    case COMPLETE_ITEM:
      return Object.assign({}, state, {
        onPost: false,
        status: action.status
      });
    default:
      return state;
  }
};

export default list;
