import React from 'react';
import moment from 'moment';

class Clock extends React.Component {

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{moment().utcOffset(this.props.offset).format('LTS')}</div>
      </div>
    );
  }
}

export default Clock;
