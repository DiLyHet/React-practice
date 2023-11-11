import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import './index.scss';
import './comment.scss';

const rootElement = document.querySelector('#root');

export const author = {
  name: 'Tom',
  avatarUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};
console.log(author);
ReactDOM.render(<Comment author={author} text="Good job!" date={new Date()} />, rootElement);
