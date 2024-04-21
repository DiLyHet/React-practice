import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../App';

export const itemCount = 3;

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.users.currentPage);
  const users = useSelector(state => state.users.usersList);
  const totalPages = Math.ceil(users.length / itemCount);
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = currentPage < totalPages - 1;
  const goPrev = () => {
    if (currentPage === 0) {
      return;
    }
    dispatch(decrement());
  };

  const goNext = () => {
    dispatch(increment());
  };

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        ←
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        →
      </button>
    </div>
  );
};

export default Pagination;
