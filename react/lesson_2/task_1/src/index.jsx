import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const root = document.querySelector('#root');

ReactDOM.render(
  <UsersList
    users={[
      { name: 'Lydia', age: 23 },
      { name: 'Ann', age: 45 },
    ]}
  />,
  root,
);
