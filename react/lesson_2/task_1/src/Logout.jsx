import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props);

  }

  onLogout = () => {
    this.props.authComp.setState({
        isLoggedIn: false
    });
   
  };

  render() {
    return <button className='btn logout' onClick={this.onLogout}>Logout</button>;
  }
}

export default Logout;