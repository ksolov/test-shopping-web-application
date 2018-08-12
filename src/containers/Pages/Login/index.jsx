import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import LoginForm from '../../../components/LoginForm';
import { login, loginClear } from '../../../actions/auth';
import * as routes from '../../../constants/routes';

class Login extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeForm: PropTypes.func,
    loggedIn: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };

  handleSubmit = (data) => {
    this.props.onSubmit(data);
  };

  handleChange = () => {
    this.props.onChangeForm();
  };

  render() {
    const { error, loggedIn } = this.props;
    if (loggedIn) {
      return <Redirect to={{ pathname: routes.search }} />;
    }
    return (
      <React.Fragment>
        <Jumbotron className='auth-jumbotron'>
          <LoginForm
            error={error}
            onChangeForm={this.handleChange}
            onSubmit={this.handleSubmit} />
        </Jumbotron>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
  error: auth.error
});

const mapDispatchToProps = {
  onSubmit: login,
  onChangeForm: loginClear
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
