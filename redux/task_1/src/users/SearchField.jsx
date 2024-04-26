import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from './actions';

const SearchField = ({ fetchUserData }) => {
  const [username, setUsername] = useState('');

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    fetchUserData(username);
  };

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={username}
        onChange={handleChange}
      />
      <button className="name-form__btn btn" onClick={handleClick}>
        Show
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  fetchUserData
};

export default connect(null, mapDispatchToProps)(SearchField);
