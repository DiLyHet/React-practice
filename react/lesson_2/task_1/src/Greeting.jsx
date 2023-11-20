import React from 'react';
import './index.scss';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <GuestGreeting />;
    } else return <UserGreeting />;
  }
}

export default Greeting;
