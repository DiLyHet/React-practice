import React from 'react';
import Info from './Online.jsx';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends React.Component {

  setInfo = info => {
    this.setState({
      info,
    });
  };

  render() {
      if (this.props.isOnline === true) {
        return <Online />
      }
      else return <Offline />
  }
}

export default Status;
