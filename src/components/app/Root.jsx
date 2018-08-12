import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';

import { configureStore } from '../../store/store';

const preloadedState = typeof window !== 'undefined' && window && window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <App/>
      </BrowserRouter>
    </Provider>);
};

export default Root;
