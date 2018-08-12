/* eslint-disable no-console, no-use-before-define */
import Express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { configureStore } from '../store/store';
import App from '../components/app/app';
const app = new Express();
const port = 3005;

app.use(Express.static('build'));

app.get('*', (req, res) => {
  const preloadedState = {};
  const store = configureStore(preloadedState);
  const finalState = store.getState();
  const content = renderToString(<Provider store={ store }>
    <StaticRouter basename='/'>
      <App />
    </StaticRouter>
  </Provider>);
  res.send(renderFullPage(content, finalState));
});

const renderFullPage = (html, preloadedState) => {
  return `<!doctype html>
        <html>
            <head>
                <title>Server app</title>
                <link rel="shortcut icon" type="image/x-icon" href="./static/favicon.ico" />
                <link href="assets/app.css" rel="stylesheet"></head>
            </head>
            <body>
                <div id="react-app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
                </script>
                <script src='assets/polyfills.js'></script>
                <script src='assets/app.js'></script>
            </body>
        </html>`;
};

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
