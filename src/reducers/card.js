import * as types from '../constants/ActionTypes';

const initialState = {
  phones: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.ADD_PHONE:
    return {
      ...state,
      phones: state.phones.concat([action.data])
    };
  default:
    return state;
  }
};
