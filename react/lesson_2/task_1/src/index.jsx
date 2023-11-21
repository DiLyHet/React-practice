import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Status from './Status.jsx';

const root = document.querySelector('#root');

ReactDOM.render(<Status isOnline={false}/>, root);
