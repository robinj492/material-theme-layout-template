import React from 'react';import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import './index.css';
import theme from "./muiTheme";
import MuiLayout from 'layout/MuiLayout';

import reportWebVitals from './reportWebVitals';

const hist = createBrowserHistory();

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <Router history={hist}>
        <React.StrictMode>
            <MuiLayout />
        </React.StrictMode>
    </Router>
       </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
