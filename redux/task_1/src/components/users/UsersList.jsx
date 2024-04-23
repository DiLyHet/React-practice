import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const UsersList = ({ users, filterText, setFilterText }) => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = event => {
    setFilterText(event.target.value);
  };

  return (
    <div>
      <div className="filter">
        <span className="filter__count">{filteredUsers.length}</span>
        <input
          type="text"
          className="filter__input"
          value={filterText}
          onChange={handleFilterChange}
          placeholder="Filter by name..."
        />
      </div>
      <ul className="users">
        {filteredUsers.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
    users: state.usersList,
    filterText: state.filterText,
  });
  
  const mapDispatchToProps = dispatch => ({
    setFilterText: filterText => dispatch({ type: 'SET_FILTER_TEXT', payload: filterText }),
  });

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
