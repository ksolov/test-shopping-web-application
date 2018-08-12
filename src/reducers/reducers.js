import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import phones from './phones';
import card from './card';

const reducers = {
  auth,
  user,
  card,
  phones
};

export default combineReducers(reducers);
