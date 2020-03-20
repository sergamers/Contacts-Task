import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css'

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  ,document.getElementById("root"));
