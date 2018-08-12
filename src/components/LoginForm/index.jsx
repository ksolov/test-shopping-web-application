import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Validate from '../../utils/Validate';
import FormError from '../../components/FormError';

class LoginForm extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeForm: PropTypes.func
  };

  static defaultTypes = {
    onChangeForm: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      passwd: '',
      error: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.error !== nextProps.error && nextProps.error) {
      return {
        error: nextProps.error
      };
    }
    return null;
  }

  handleChange = (e) => {
    e.preventDefault();
    this.props.onChangeForm();
    this.setError(null);
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.getValidationStateForm();
    if (isValid) {
      this.props.onSubmit({ email: this.state.email, password: this.state.passwd });
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

    this.setError(error);
    return !error;
  };

  render() {
    const error = this.state.error;
    return (
      <React.Fragment>
        <h1>Log in</h1>
        {error && <FormError error={error} /> }
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
          <Button
            type='submit'
            bsStyle='primary'>Log in</Button>
        </form>
      </React.Fragment>
    );
  }
}


export default LoginForm;
