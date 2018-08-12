import * as types from '../constants/ActionTypes';
import { CALL_API } from '../middleware/refresh';

const loadProfile = () => {
  return {
    [CALL_API]: {
      types: [types.PROFILE_REQUEST, types.PROFILE_SUCCESS, types.PROFILE_FAILURE],
      endpoint: 'profile',
      method: 'GET'
    }
  };
};

export const profile = () => dispatch => dispatch(loadProfile());
