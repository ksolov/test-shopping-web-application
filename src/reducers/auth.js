import * as types from '../constants/ActionTypes';

const initialState = {
  loggedIn: false,
  authorized: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.AUTH_SUCCESS:
    return {
      ...state,
      authorized: true
    };
  case types.LOGIN_SUCCESS:
    return {
      ...state,
      loggedIn: true
    };
  case types.LOGIN_FAILURE:
    return {
      ...state,
      error: action.error
    };
  case types.LOGIN_CLEAR:
    return {
      ...initialState
    };
  case types.LOGOUT_SUCCESS:
    return {
      ...state,
      loggedIn: false,
      authorized: false
    };
  default:
    return state;
  }
};
