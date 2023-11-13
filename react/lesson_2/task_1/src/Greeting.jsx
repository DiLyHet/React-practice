import React from 'react';
import './index.scss';
import moment from 'moment';

function Greeting(props) {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${moment(
      props.birthDate,
      'YYYYMMDD',
    ).fromNow(true)} old`}</div>
  );
}

export default Greeting;
