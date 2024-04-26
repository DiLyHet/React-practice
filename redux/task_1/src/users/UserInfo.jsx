import React from 'react';
import { connect } from 'react-redux';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <span className="spinner">Loading...</span>;
  }

  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userData: state.userData,
  isFetching: state.isFetching
});

export default connect(mapStateToProps)(UserInfo);
