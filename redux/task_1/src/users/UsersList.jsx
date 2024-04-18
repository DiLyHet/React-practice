import React from 'react';
import { connect } from 'react-redux'; // Импорт connect из react-redux
import User from './User';

const UsersList = ({ usersList }) => (
  <div>
    {/* pagination */}
    {/* users list */}
    <ul className="users">
      {usersList.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  </div>
);

// Функция mapStateToProps для получения данных из Redux store
const mapStateToProps = (state) => ({
  usersList: state.users.usersList, // Получаем список пользователей из состояния Redux
});

// Подключение компонента UsersList к Redux store с помощью connect
export default connect(mapStateToProps)(UsersList);
