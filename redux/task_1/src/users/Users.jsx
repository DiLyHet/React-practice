import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

class Users extends React.Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    this.props.createUsers(newUser);
  };
  render() {
    const { users } = this.props;
    return (
      <div className="users">
        <button onClick={this.onUserCreate} className="users__create-btn">
          Create User
        </button>
        <ul className="users__list">
          {users.map(user => (
            <li className="users__list-item">{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUsers: usersActions.addUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
