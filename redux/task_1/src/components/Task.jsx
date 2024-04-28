import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className={`list-item ${task.completed ? 'list-item_done' : ''}`}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span className="list-item__text">{task.name}</span>
      <button className="list-item__delete-btn" onClick={handleDelete}></button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
