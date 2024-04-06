import React from 'react';
import { ThemeContext } from './themes-context';

class UserMenu extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { userData } = this.context;
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${userData.name}`}</span>
        <img
          alt="User Avatar"
          src={userData.avatar_url}
          className="menu__avatar"
        />
      </div>
    );
  }
}

export default UserMenu;
