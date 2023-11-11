import React from 'react';
import Avatar from './Avatar.jsx';

const UserInfo = props => {
  return (
    <div className="user-info">
      <Avatar url={props.url} name={props.name}/>
      <div className="user-info__name">{props.name}</div>
    </div>
  );
};

export default UserInfo;
