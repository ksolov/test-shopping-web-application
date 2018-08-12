import * as types from '../constants/ActionTypes';

export const setUser = (user) => ({
  type: types.USER_SUCCESS,
  user
});
