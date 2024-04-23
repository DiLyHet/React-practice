import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Пример middleware (необязательно)

// Импорт редьюсеров
import optionsReducer from './reducers/optionsReducer';
// Другие редьюсеры, если есть

// Комбинирование редьюсеров
const rootReducer = combineReducers({
  options: optionsReducer,
  // Другие редьюсеры, если есть
});

// Создание Redux store с применением middleware (по желанию)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
