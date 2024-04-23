import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination';
import { decrement, increment } from '../App';
import { useDispatch } from 'react-redux';

const UsersList = ({ users, currentPage }) => {
  const itemsPerPage = 3;
  const dispatch = useDispatch();
  const usersList = users.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const goPrev = () => {
    if (currentPage === 0) {
      return;
    }
    dispatch(decrement());
  };

  const goNext = () => {
    dispatch(increment());
  };

  return (
    <div>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersList.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = dispatch => {
  return {
    goNext: () => {
      dispatch();
    },
    goPrev: () => {
      dispatch();
    },
  };
};

export default connect(mapState, mapDispatch)(UsersList);
