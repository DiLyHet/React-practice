import React from 'react';
import './index.scss';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="logout btn" onClick={this.props.onLogout}>
        Logout
      </button>
    );
  }
}

export default Logout;
