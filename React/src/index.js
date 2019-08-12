import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainNavbar from './Navbar';
import Main from './Main';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<MainNavbar />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
