import { enableMapSet } from 'immer'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store/store";
import { AuthContext, AuthProvider, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
enableMapSet()
const authConfig: TAuthConfig = {
    clientId: 'browser-client',
    authorizationEndpoint: 'http://localhost:9000/oauth2/authorize',
    tokenEndpoint: 'http://localhost:9000/oauth2/token',
    redirectUri: 'http://localhost:3000/',
    scope: 'openid clients profile',
    onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
    autoLogin:false,
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <AuthProvider authConfig={authConfig}>
          <Provider store={store}>
              <App />
          </Provider>
      </AuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
