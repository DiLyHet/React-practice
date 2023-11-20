import React from 'react';
import './index.scss';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Greeting from './Greeting.jsx';

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
          <Greeting authComp={this}/>
          <Login authComp={this} />
        </div>
      );
    else
      return (
        <div className='panel'>
          <Greeting authComp={this}/>
          <Logout authComp={this} />
        </div>
      );
  }
}

export default Auth;
