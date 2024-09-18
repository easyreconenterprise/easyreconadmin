import React from 'react';
import Category from './Category'; // Import the original Category component

const IncomeCat = ({ subcategory }) => {
  const incomeSubcategory = subcategory['Income'];

  if (!incomeSubcategory) {
    return <div>No data available for Income category</div>;
  }

  return <Category subcategory={{ Income: incomeSubcategory }} />;
};

export default IncomeCat;
