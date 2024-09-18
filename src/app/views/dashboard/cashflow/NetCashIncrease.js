// import React from 'react';
// import Cash2 from './Cash2';
// import Cash3 from './Cash3';

// const NetCashIncrease = ({ subcategory }) => {
//   // Get the values from the Cash2 and Cash3 components
//   const priorYearCashValue = parseFloat(Cash2({ subcategory }));
//   const currentYearCashValue = parseFloat(Cash3({ subcategory }));

//   // Calculate the net increase in cash
//   const netIncreaseCash = currentYearCashValue - priorYearCashValue;

//   return (
//     <div>
//       {/* Display the net increase in cash */}
//       <p>Net Increase in Cash: {netIncreaseCash.toFixed(2)}</p>
//     </div>
//   );
// };

// export default NetCashIncrease;
import React from "react";
import Cash2 from "./Cash2";
import Cash3 from "./Cash3";

const NetCashIncrease = ({ subcategory }) => {
  // Get the values from the Cash2 and Cash3 components
  const priorYearCashValue = Cash2({ subcategory });
  const currentYearCashValue = Cash3({ subcategory });

  // Calculate the net increase in cash
  const netIncreaseCash = Math.round(currentYearCashValue - priorYearCashValue);

  return (
    <div>
      {/* Display the net increase in cash */}
      <p>{Math.round(netIncreaseCash)}</p>
    </div>
  );
};

export default NetCashIncrease;
