import React from 'react';
import './index.scss';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter start={5} interval={1000}/>
      <Counter start={12} interval={100}/>
      <Counter start={-21} interval={200}/>
    </>
  );
}

export default App;
