import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/app/Root';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(<Root />, document.getElementById('react-app'));
