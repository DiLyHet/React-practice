import React, { useState, useEffect } from 'react';
import CreateTaskInput from './components/CreateTaskInput';
import TasksList from './components/TasksList';

const App = () => {
  const apiLink = 'https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/tasks';
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(apiLink)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const createTask = (taskName) => {
    fetch(apiLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: taskName, completed: false }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks((prevTasks) => [...prevTasks, data]);
      })
      .catch((error) => console.error('Error creating task:', error));
  };
  

  const toggleTask = (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
  
    fetch(`${apiLink}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then(() => {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? updatedTask : task
        );
        setTasks(updatedTasks);
      })
      .catch((error) => console.error('Error updating task:', error));
  };
  

  const deleteTask = (taskId) => {
    fetch(`${apiLink}/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => setTasks(tasks.filter((task) => task.id !== taskId)))
      .catch((error) => console.error('Error deleting task:', error));
  };

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={createTask} />
        <TasksList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>
    </div>
  );
};

export default App;
