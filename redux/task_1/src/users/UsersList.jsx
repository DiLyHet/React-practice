import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import Pagination, { itemCount } from './Pagination';


const UsersList = () => {
    const usersList = useSelector((state) => state.users.usersList.slice(state.users.currentPage*itemCount, (state.users.currentPage + 1)*itemCount));
    return (
  <div>
    <Pagination />
    <ul className="users">
      {usersList.map(user => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  </div>
)};

export default UsersList;