import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx';
import './index.scss';

const root = document.querySelector('.profile');

export const userData = {
    firstName: 'James',
    lastName: 'Bond',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London',
  };
  
ReactDOM.render(<Profile userData={userData}/>, root);
