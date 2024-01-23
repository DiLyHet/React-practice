import React from 'react';
import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.fetchUserData = this.fetchUserData.bind(this);
    this.state = {
      userData: undefined,
    };
  }

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = userId => {
    const userUrl = `https://api.github.com/users/${userId}`;

    fetch(userUrl)
      .then(response => response.json())
      .then(userData =>
        this.setState(
          {
            userData,
          },
          () => {
            console.log(this.state.userData);
          },
        ),
      );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default Page;
