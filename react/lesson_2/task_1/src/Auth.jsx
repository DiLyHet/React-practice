import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'login',
    };
  }

  onLogin = () => {
    this.setState({
      status: 'spinner',
    });
  };

  onSpinner = () => {
    this.setState({
      status: 'logout',
    });
  };

  onLogout = () => {
    this.setState({
      status: 'login',
    });
  };

  render() {
    return (
      <div>
        {this.state.status === 'login' && (<Login onLogin={this.onLogin}/>)}
        {this.state.status === 'spinner' && (<Spinner onSpinner={this.onSpinner} size='50px'/>)}
        {this.state.status === 'logout' && (<Logout onLogout={this.onLogout}/>)}
      </div>
    );
  }
}

export default Auth;
