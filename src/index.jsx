import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './App';

import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import './index.css';

const store = configureStore();

axios.defaults.baseURL = 'http://localhost:3000';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
