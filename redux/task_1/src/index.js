import './index.scss';
import { store, increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
    store.dispatch(increment());
};
const onDecrement = () => {
    store.dispatch(decrement());
};
const onReset = () => {
    store.dispatch(reset());
};

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
    const state = store.getState();
    const currentValue = state.history.length > 0
        ? state.history.reduce((acc, curr) => acc + curr, 0)
        : 0;
    const historyString = state.history.map(num => {
        if (num > 0) {
            return `+${num}`;
        } else {
            return `${num}`;
        }
    }).join('');
    resultElem.textContent = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});