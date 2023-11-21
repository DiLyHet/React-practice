import React from 'react';
import './index.scss';
import Spinner from './Spinner';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="login btn" onClick={this.props.onLogin}>
        Login
      </button>
    );
  }
}

export default Login;
