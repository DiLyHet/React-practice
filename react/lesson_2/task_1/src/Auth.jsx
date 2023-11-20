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

  logoutFunc = () => this.setState({ isLoggedIn: false });
  loginFunc = () => this.setState({ isLoggedIn: true });

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.logoutFunc} />
        ) : (
          <Login onLogin={this.loginFunc} />
        )}
      </div>
    );
  }
}

export default Auth;
