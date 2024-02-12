import React, { useState, useEffect } from 'react';
import Clock from './Clock';

export default function App() {
  const [hide, setHide] = useState(false);
    function ClickHandler(){
      setHide(!hide);
    }
  return (
    <>
        {hide === false && (
          <>
            <Clock location={'New York'} offset={-5} />
            <Clock location={'Kyiv'} offset={2} />
            <Clock location={'London'} offset={0} />
          </>
        )}
      <button onClick={ClickHandler}>{!hide ? 'Hide' : 'Show'}</button>
    </>
  );
}
