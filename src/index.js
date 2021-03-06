import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "milligram";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth0ProviderWithHistory from './auth0-provider-with-history';



ReactDOM.render(
  <Router>
<Auth0ProviderWithHistory>

  <React.StrictMode>
    <Route path="/" component={App} />
  </React.StrictMode>
  </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
