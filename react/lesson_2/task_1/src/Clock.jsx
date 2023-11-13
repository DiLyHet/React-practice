import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';




class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
    currentTime: this.getTimeWithOffset()
    }
   setInterval(() => {
   
    this.setState({
        currentTime: this.getTimeWithOffset()
    });
   }, 1000);
  }
  
   getTimeWithOffset(){
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + this.props.offset + utcOffset));
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{moment(this.state.currentTime.toString()).format('h:mm:ss A')}</div>
      </div>
    );
  }
  
}

// put your code here




// put your code here

export default Clock;
