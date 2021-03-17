import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from 'react-auth-kit'

import { App } from './app/App';
import { _authProps } from './config/auth'

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';

ReactDOM.render(
  // Active to show all errors/warnings
  // <React.StrictMode>
  <AuthProvider {..._authProps}>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();