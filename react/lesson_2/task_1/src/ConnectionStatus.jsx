import React from 'react';
import moment from 'moment';

class ConnectionStatus extends React.Component {
  constructor(props){
    super(props);
    this.offlineStatus = this.offlineStatus.bind(this);
    this.onlineStatus = this.onlineStatus.bind(this);
  }

  state = {
    status: 'online',
  };

  componentDidMount(){
    window.addEventListener('online', this.onlineStatus);
    window.addEventListener('offline', this.offlineStatus);
  }

  componentWillUnmount(){
    window.removeEventListener('online', this.onlineStatus);
    window.removeEventListener('offline', this.offlineStatus);
  }

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
    const {status} = this.state; 
    if (status === 'online') {
      return <div className="status">Online</div>;
    } else {
      return <div className="status status_offline">Offline</div>;
    }
  }
}

export default ConnectionStatus;
