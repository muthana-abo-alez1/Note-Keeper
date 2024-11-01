import React from "react";
import "./Pagination.scss";

const Pagination = ({ currentPage, onNextPage, onPreviousPage, isNextDisabled }) => (
  <div className="pagination">
    <button 
      className="pagination__button" 
      onClick={onPreviousPage} 
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span className="pagination__info">Page {currentPage}</span>
    <button 
      className="pagination__button" 
      onClick={onNextPage} 
      disabled={isNextDisabled}
    >
      Next
    </button>
  </div>
);

export default Pagination;
