import React from 'react';
import './index.scss';
import Clock from './Clock.jsx';

function App() {
  return (
    <>
      <Clock location="New York" offset={-5}/>
      <Clock location="Kyiv" offset={3}/>
      <Clock location="London" offset={0}/>
    </>
  );
}

export default App;
