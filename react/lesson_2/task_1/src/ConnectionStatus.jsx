import React from 'react';
import moment from 'moment';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  offlineStatus() {
    this.setState({
      status: 'offline',
    });
  }
  onlineStatus() {
    this.setState({
      status: 'online',
    });
  }

  render() {
    if (this.state.status === 'online') {
      window.addEventListener('online', this.onlineStatus);
      return <div className="status">Online</div>;
    } else {
      window.addEventListener('offline', this.offlineStatus);
      return <div className="status status_offline">Offline</div>;
    }
  }
}

export default ConnectionStatus;
