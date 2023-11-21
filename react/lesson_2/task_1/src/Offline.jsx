import React from 'react';
import './index.scss';

const Offline = () => {
  return (
    <div className="status">
      <span className="status__text">Offline</span>
      <button className="status__btn">Reconnect</button>
    </div>
  );
};

export default Offline;
