import React from 'react';

const Options = ({ title, options, onItemClick }) => {
  const handleItemClick = (id) => {
    const clickedOption = options.find(option => option.id === id);
    onItemClick(clickedOption);
  };

  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map(option => (
          <li key={option.id}>
            <button
              className="options__list-item"
              onClick={() => handleItemClick(option.id)}
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
