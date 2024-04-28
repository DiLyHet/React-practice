import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateTaskInput = ({ onCreate }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleCreateTask = () => {
    if (taskName.trim() !== '') {
      onCreate(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={taskName}
        onChange={handleInputChange}
      />
      <button className="btn create-task__btn" onClick={handleCreateTask}>
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
