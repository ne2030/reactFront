import axios from 'axios';

//Counter [increment, decrement, setDiff]
const endPoint = 'http://eleclion.asia';


export function increment() {
  return {
    type: "INCREMENT"
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

export function setDiff(value) {
  return {
    type: "SET_DIFF",
    diff: value
  };
}

// Login [requestsLogin, receiveLogin, logOut]


export function requestLogin() {
  return {
    type: "REQUEST_LOGIN"
  };
}

export function receiveLogin(data) {
  return {
    type: "RECEIVE_LOGIN",
    refreshToken: data.refreshToken,
    jwToken: data.jwToken,
    user: data.user
  };
}

export function logOut() {
  return {
    type: "LOG_OUT"
  };
}

// Profile [requestStack, receiveStack, postStack, completeStack]

export function requestStack() {
  return {
    type: "REQUEST_STACK"
  };
}

export function receiveStack(data) {
  return {
    type: "RECEIVE_STACK",
    items: data
  };
}

export function postStack() {
  return {
    type: 'POST_STACK'
  };
}

export function completeStack(status) {
  return {
    type: 'COMPLETE_STACK',
    status
  };
}

// Chat [requestList, receiveList, requestPostItem]

export function requestList() {
  return {
    type: "REQUEST_LIST"
  };
}

export function receiveList(data) {
  return {
    type: "RECEIVE_LIST",
    id: data.id,
    items: data.items,
    count: data.count
  };
}

export function postItem() {
  return {
    type: "POST_ITEM"
  };
}

export function completeItem(status) {
  return {
    type: "COMPLETE_ITEM",
    status
  };
}



/*
**
** Thunk Creator
**
*/



export function _login(id, pw) {
  const user = {
    "userEmail": id,
    "password": pw
  };
  return dispatch => {
    dispatch(requestLogin());
    return axios.post(endPoint + '/auth/login', user)
      .then(res => {
        dispatch(receiveLogin(res.data));
      });
  };
}

export function _getStack() {
  return dispatch => {
    dispatch(requestStack());
    return axios.get(endPoint + '/api/stack')
      .then(res => {
        dispatch(receiveStack(res.data));
      });
  };
}

export function _createStack(form) {
  return dispatch => {
    dispatch(postStack());
    return axios.post(endPoint + '/api/stack', form)
      .then(res => {
        dispatch(completeStack(res.status));
        dispatch(_getStack());
      });
  };
}

export function _getList() {
  return dispatch => {
    dispatch(requestList());
    return axios.get(endPoint +  '/api/route2')
      .then(res => {
        dispatch(receiveList(res.data));
      }
    );
  };
}

export function _createItem(name, chat) {
  const data = {
    name,
    chat
  };
  return dispatch => {
    dispatch(postItem());
    return axios.post(endPoint + '/api/route2', data)
      .then(res => {
        dispatch(completeItem(res.status));
        dispatch(_getList());
      });
  };
}

export function _deleteItem(id) {
  return dispatch => {
    dispatch(postItem());
    return axios.delete(endPoint + `/api/route2/${id}`)
      .then(res => {
        dispatch(completeItem(res.status));
        dispatch(_getList());
      });
  };
}
