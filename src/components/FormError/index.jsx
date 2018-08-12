import React from 'react';
import { Alert } from 'react-bootstrap';

if (process.env.BROWSER) {
  require('./styles.scss');
}

const FormError = ({ error }) => (
  <Alert className='alert' bsStyle="danger">
    {error}
  </Alert>);

export default FormError;
