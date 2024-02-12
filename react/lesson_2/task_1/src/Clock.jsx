import React, { useEffect } from 'react';
import moment from 'moment';

export default function Clock(props) {
  const [, forceUpdate] = React.useReducer(o => !o);

  useEffect(() => {
    let interval = setInterval(() => {
      forceUpdate();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{props.location}</div>
      <div className="clock__time">{moment().utcOffset(props.offset).format('LTS')}</div>
    </div>
  );
}
