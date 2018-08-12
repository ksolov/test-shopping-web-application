import { SET_COOKIE } from '../constants/ActionTypes';
import { COOKIE_NAME_IS_SHOW_CANSELED_MEETIONGS } from '../constants/meetings';
import Utils from '../utils/Utils';

const getCookie = () => {
  if (process.env.BROWSER) {
    Utils.getCookie(COOKIE_NAME_IS_SHOW_CANSELED_MEETIONGS);
  }

  return false;
};

const setCookie = (cookie) => {
  if (process.env.BROWSER) {
    Utils.setCookie(COOKIE_NAME_IS_SHOW_CANSELED_MEETIONGS, cookie);
  }

  return { type: SET_COOKIE, [COOKIE_NAME_IS_SHOW_CANSELED_MEETIONGS]: Boolean(cookie) };
};

const detectCookie = () => {
  let cookieFromLocalStorage;
  if (process.env.BROWSER) {
    cookieFromLocalStorage = Utils.getCookie(COOKIE_NAME_IS_SHOW_CANSELED_MEETIONGS);
  }
  return (cookieFromLocalStorage !== undefined) ? cookieFromLocalStorage : true;
};

const loadCurrentCookie = (cookie) =>
  async (dispatch) => {
    await dispatch(setCookie(cookie || detectCookie()));
  };

const init = (cookie) =>
  async (dispatch) => {
    await dispatch(loadCurrentCookie(cookie));
  };

export {
  init,
  setCookie,
  getCookie
};
