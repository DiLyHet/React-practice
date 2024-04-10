import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log('Поточний стан користувачів:', store.getState().usersList);
});

store.dispatch(addUser({ id: 1, name: 'John' }));
store.dispatch(addUser({ id: 2, name: 'Alice' }));

store.dispatch(deleteUser(1));
