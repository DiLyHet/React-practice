import React from 'react';
import './index.scss';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (!this.state.isLoggedIn)
      return (
        <div className='panel'>
          <GuestGreeting />
          <Login authComp={this} />
        </div>
      );
    else
      return (
        <div className='panel'>
          <UserGreeting />
          <Logout authComp={this} />
        </div>
      );
  }
}

export default Auth;
