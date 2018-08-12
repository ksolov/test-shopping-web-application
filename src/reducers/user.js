import * as types from '../constants/ActionTypes';

const initialState = {
  name: '',
  email: ''
};

const mockUser = {
  name: 'Vasya Pupkin'
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.USER_SUCCESS:
    return {
      ...state,
      ...mockUser,
      ...action.user
    };
  default:
    return state;
  }
};
