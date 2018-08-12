import * as types from '../constants/ActionTypes';

export const addPhoneToCard = (phone) => ({
  type: types.ADD_PHONE,
  data: phone
});
