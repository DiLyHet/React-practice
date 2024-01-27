import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Expand from './Expand';

const root = document.querySelector('#root');

ReactDOM.render(<Expand title='HOOKS' content='Hooks are a new addition in React 16.8. They let you use state and other React features
without writing a class.' />, root);
