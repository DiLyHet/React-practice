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
    setTimeout(()=>{
      this.setState({
        status: 'logout',
      });
    }, 2000);
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
        {this.state.status === 'spinner' && (<Spinner size='50px'/>)}
        {this.state.status === 'logout' && (<Logout onLogout={this.onLogout}/>)}
      </div>
    );
  }
}

export default Auth;
