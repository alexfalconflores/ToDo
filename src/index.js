import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index.jsx';

const body = document.querySelector('body');
body.style.background = '#2b2b2b'
body.style.height = '97vh';
body.style.color = '#f5f5f5';


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);