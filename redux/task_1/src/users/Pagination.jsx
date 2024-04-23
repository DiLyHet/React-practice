import React from 'react';
import { useSelector } from 'react-redux';

const Pagination = ({ itemsPerPage, goNext, goPrev }) => {
  const currentPage = useSelector(state => state.users.currentPage);
  const users = useSelector(state => state.users.usersList);
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = currentPage < totalPages - 1;

return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
