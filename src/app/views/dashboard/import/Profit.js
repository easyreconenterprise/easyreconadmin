import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dashboard } from '../fs/Dashboard';

// const accountingData = [

const Profit = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};
export default Profit;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// // const accountingData = [

// const Profit = () => {
//   const [categoryData, setCategoryData] = useState([]);
//   useEffect(() => {
//     const cat = JSON.parse(localStorage.getItem('categoryData'));
//     console.log('categoryData');
//     if (cat) {
//       setCategoryData(cat);
//     }
//   }, []);

//   return (
//     <div>
//       <div>
//         <h2>Accounting Summation</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Asset</th>
//               <th>Total </th>
//             </tr>
//           </thead>

//           <tbody>
//             {Object.entries(categoryData).map(([category, data]) => (
//               <tr key={category}>
//                 <td>{category}</td>
//                 <td>{data.totalExpenditure.toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//           <div></div>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default Profit;
