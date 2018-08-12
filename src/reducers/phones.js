import * as types from '../constants/ActionTypes';

const initialState = {
  phones: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.USER_SUCCESS:
    return {
      ...state,
    };
  default:
    return state;
}
};
