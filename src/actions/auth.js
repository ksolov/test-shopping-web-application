import * as types from '../constants/ActionTypes';
import md5 from 'md5';
import Utils from '../utils/Utils';
import { setUser } from './user';

const logoutAction = () => ({
  type: types.LOGOUT_SUCCESS
});

const loginAction = () => ({
  type: types.LOGIN_SUCCESS
});

const loginErrorAction = () => ({
  type: types.LOGIN_FAILURE,
  error: 'User does not exist'
});

export const loginClear = () => ({
  type: types.LOGIN_CLEAR
});

const registrationAction = () => ({
  type: types.AUTH_SUCCESS
});

export const registration = ({ email, password }) => dispatch => {
  Utils.setStorageItem('email', email);
  Utils.setStorageItem('password', md5(password));
  dispatch(registrationAction());
};

export const login = ({ email, password }) => dispatch => {
  const storageEmail = Utils.getStorageItem('email');
  const storagePassword = Utils.getStorageItem('password', password);
  if (storageEmail === email && md5(password) === storagePassword) {
    dispatch(setUser({ email: storageEmail }));
    return dispatch(loginAction());
  }
  return dispatch(loginErrorAction());
};


export const logout = () => dispatch => {
  dispatch(logoutAction());
  Utils.deleteStorageItem('email');
  Utils.deleteStorageItem('password');
};
