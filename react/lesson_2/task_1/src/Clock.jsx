import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: true,
    };
    setInterval(() => {
      this.setState({
        updating: !this.state.updating,
      });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps;
  }

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
