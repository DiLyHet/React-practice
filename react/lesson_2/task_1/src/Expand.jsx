import React from 'react';

const Expand = ({ children, isOpen, title, showButton }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={showButton}>
          <i className={isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
        </button>
      </div>
      {isOpen && <div className="expand__content">{children}</div>}
    </div>
  );
};

export default Expand;
