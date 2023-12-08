import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Life from './Life.jsx';

const something = [1, 2, 3, 4, 5];

const root = document.querySelector('#root');

ReactDOM.render(<Life something={something}/>, root);
