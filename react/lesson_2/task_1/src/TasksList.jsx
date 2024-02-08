import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const baseUrl = 'https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/TasksList';

class TasksList extends React.Component {
  state = {
    tasks: [],
    id: 5,
  };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetch(baseUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(tasksList => {
        this.setState({
          tasks: tasksList,
        });
      });
  };

  onCreate = text => {
    this.setState({ id: this.state.id + 1 });
    const newTask = {
      id: this.state.id,
      text: text,
      done: false,
    };
    console.log(JSON.stringify(newTask));
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to create task');
      }
    });
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to updated task');
      }
    });
  };

  handleTaskDelete = id => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to delete task');
      }
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
