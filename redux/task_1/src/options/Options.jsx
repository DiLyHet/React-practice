import React from 'react';

const Options = ({ title, options, moveOption }) => {
  const handleOptionClick = (id) => {
    const selectedOption = options.find(option => option.id === id);
    moveOption(selectedOption);
  };

  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map(option => (
          <li key={option.id}>
            <button
              className="options__list-item"
              onClick={() => handleOptionClick(option.id)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
