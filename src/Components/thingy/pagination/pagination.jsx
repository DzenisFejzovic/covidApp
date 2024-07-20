import React, { useState } from "react";
import "./pagination.css";

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const [currentBlock, setCurrentBlock] = useState(1);
  const pages = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxPagesToShow = 10;
  const totalBlocks = Math.ceil(totalPages / maxPagesToShow);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePreviousBlock = () => {
    if (currentBlock > 1) {
      setCurrentBlock(currentBlock - 1);
    }
  };

  const handleNextBlock = () => {
    if (currentBlock < totalBlocks) {
      setCurrentBlock(currentBlock + 1);
    }
  };

  const startPage = (currentBlock - 1) * maxPagesToShow;
  const endPage = Math.min(startPage + maxPagesToShow, totalPages);

  return (
    <div className="pagination">
      <button onClick={handlePreviousBlock} disabled={currentBlock === 1}>
        &laquo; Previous
      </button>
      {pages.slice(startPage, endPage).map((page, index) => (
        <button key={index} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      <button onClick={handleNextBlock} disabled={currentBlock === totalBlocks}>
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
