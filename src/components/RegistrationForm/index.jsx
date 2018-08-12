import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Validate from '../../utils/Validate';
import FormError from '../../components/FormError';

class RegistrationForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      passwd: '',
      confirmPasswd: '',
      error: null
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setError(null);
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.getValidationStateForm();
    if (isValid) {
      this.props.onSubmit({
        email: this.state.email,
        password: this.state.passwd
      });
    }
  };

  setError = (error = null) => {
    this.setState({
      error: error
    });
  };

  getValidationStateForm = () => {
    let error = Validate.validateEmail(this.state.email);
    if (!error) {
      error = Validate.validatePassword(this.state.passwd);
    }
    if (!error) {
      error = Validate.validateConfirmPassword(this.state.confirmPasswd);
    }
    if (!error) {
      error = Validate.validatePasswordBoth(this.state.passwd, this.state.confirmPasswd);
    }
    this.setError(error);
    return !error;
  };

  render() {
    const error = this.state.error;
    return (
      <React.Fragment>
        {error && <FormError error={error} /> }
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId='email'>
            <ControlLabel>Email:</ControlLabel>
            <FormControl
              type='text'
              name='email'
              value={this.state.email}
              placeholder='Enter email'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId='passwd'>
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              type={this.state.passwd !== '' ? 'password' : 'text'}
              name='passwd'
              value={this.state.passwd}
              placeholder='Enter password'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId='confirmPasswd'>
            <ControlLabel>Password confirm:</ControlLabel>
            <FormControl
              type={this.state.confirmPasswd !== '' ? 'password' : 'text'}
              name='confirmPasswd'
              value={this.state.confirmPasswd}
              placeholder='Confirm password'
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            type='submit'
            bsStyle='primary'>Sign up</Button>
        </form>
      </React.Fragment>
    );
  }
}


export default RegistrationForm;
