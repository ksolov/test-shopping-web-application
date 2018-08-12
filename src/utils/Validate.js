import { ERRORS } from '../constants/errors';

const Validate = {
  validateEmail(email) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let error = null;
    if (email.match(mailformat)) {
      error = null;
    } else if (!email.length) {
      error = ERRORS.emailEmpty;
    } else {
      error = ERRORS.emailIncorrect;
    }
    return error;
  },
  validatePassword(password) {
    let error = null;
    if (!password.length) {
      error = ERRORS.passwdEmpty;
    }
    return error;
  },
  validateConfirmPassword(confirmPass) {
    let error = null;
    if (!confirmPass.length) {
      error = ERRORS.passwdConfirmEmpty;
    }
    return error;
  },
  validatePasswordBoth(pass, confirmPass) {
    if (pass.length > 0 && pass === confirmPass) {
      return null;
    }
    return ERRORS.passwIncorrect;
  }
};

export default Validate;
