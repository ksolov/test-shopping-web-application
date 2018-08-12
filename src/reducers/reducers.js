import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';

const reducers = {
  auth,
  user
};

export default combineReducers(reducers);
