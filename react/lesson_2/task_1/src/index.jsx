import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox.jsx';

const messagesArray = ['1', '2', '3', '4'];

const root = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={['1', '2', '3', '4'].length} />, root);
