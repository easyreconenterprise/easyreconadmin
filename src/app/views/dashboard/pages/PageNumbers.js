import React, { useState } from 'react';

const PageNumbers = ({ totalPages, currentPage }) => {
  const getPageNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(
        <span key={i} className={i === currentPage ? 'active' : ''}>
          {i}
        </span>
      );
    }
    return numbers;
  };

  return <div className="page-numbers">{getPageNumbers()}</div>;
};

export default PageNumbers;
