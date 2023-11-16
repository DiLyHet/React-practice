import React from 'react';
import moment from 'moment';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    }

    this.setOn = this.setOn.bind(this);
  };

  setOn() {
    console.log(this.state.status)
    this.setState({
      status: !this.state.status,
    });
  }

  render() {
    return (
      <div className="toggler"
      onClick={this.setOn}
      >{this.state.status?"on":"off"}</div>
    );
  }
}

export default Toggler;
