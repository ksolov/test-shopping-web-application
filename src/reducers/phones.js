import * as types from '../constants/ActionTypes';

const initialState = {
  phones: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.GET_PHONES_SUCCESS:
    return {
      ...state,
      isFetching: false,
      phones: action.data
    };
  case types.GET_PHONES_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case types.GET_PHONES_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  default:
    return state;
  }
};
