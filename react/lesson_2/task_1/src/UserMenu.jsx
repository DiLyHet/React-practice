import React from 'react';

const UserMenu = () => {
  return (
    <div className="menu">
      <span className="menu__greeting">{`Hello, `}</span>
      <img alt="User Avatar" src={""} className="menu__avatar" />
    </div>
  );
};

export default UserMenu;
