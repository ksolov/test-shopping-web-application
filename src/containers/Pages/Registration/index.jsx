import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegistrationForm from '../../../components/RegistrationForm';
import { registration } from '../../../actions/auth';
import * as routes from '../../../constants/routes';

class Registration extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    authorized: PropTypes.bool
  };

  handleSubmit = (data) => {
    this.props.onSubmit(data);
  };

  render() {
    if (this.props.authorized) {
      return <Redirect to={{ pathname: routes.login }} />;
    }
    return (
      <Jumbotron className='auth-jumbotron'>
        <RegistrationForm onSubmit={this.handleSubmit} />
      </Jumbotron>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  authorized: auth.authorized
});

const mapDispatchToProps = {
  onSubmit: registration
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
