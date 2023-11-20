import React from 'react';
import Auth from './Auth';
class Login extends React.Component {
  constructor(props) {
    super(props);

  }

  onLogin = () => {
    this.props.authComp.setState({
        isLoggedIn: true
    });
   
  };

  render() {
   
    return <button className='btn login' onClick={this.onLogin}>Login</button>;
    
}
}

export default Login;