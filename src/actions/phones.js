import * as types from '../constants/ActionTypes';
import phones from '../static/phones';

const requestPhonesAction = () => ({
  type: types.GET_PHONES_REQUEST
});
const failurePhonesAction = () => ({
  type: types.GET_PHONES_FAILURE,
  error: 'Something bad happened'
});

export const loadPhones = () => dispatch => {
  dispatch(requestPhonesAction());
  if (!phones) {
    return dispatch(failurePhonesAction());
  }
  return dispatch({
    type: types.GET_PHONES_SUCCESS,
    data: phones
  });
};
