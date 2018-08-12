import React from 'react';
import { hot } from 'react-hot-loader';

import Routes from '../../components/app/Routes';

if (process.env.BROWSER) {
  require('./app.scss');
}

function App() {
  return (<Routes />);
}

export default hot(module)(App);
