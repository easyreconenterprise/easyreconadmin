// // ... your imports and component definition
// import React, { useState, useEffect } from 'react';
// import { TablePanel } from '../fs/TablePanel';

// const Incomes = () => {
//   // Your state and useEffect definitions
//   // const [categorySum, setCategorySum] = useState();
//   // const [subcategory, setsubcategory] = useState({});

//   // const calculateSummations = () => {
//   //   let summations = [];
//   //   let categorySums = {};
//   //   let subCategorySums = {};

//   //   for (let category in subcategory) {
//   //     for (let subCategoryKey in subcategory[category]) {
//   //       let subCategorySum = 0;
//   //       for (let subSubcategoryKey in subcategory[category][subCategoryKey]) {
//   //         let sum = 0;
//   //         subcategory[category][subCategoryKey][subSubcategoryKey].forEach((item) => {
//   //           // Assuming `item` is an object and the last column is represented by the last property
//   //           const lastColumnValue = item[Object.keys(item)[Object.keys(item).length - 1]];

//   //           sum += parseFloat(lastColumnValue.replace(/,/g, ''));
//   //         });

//   //         if (sum > 0) {
//   //           summations.push({
//   //             Category: category,
//   //             Subcategory: subCategoryKey,
//   //             SubSubcategory: subSubcategoryKey,
//   //             Sum: sum,
//   //           });
//   //         }

//   //         subCategorySum += sum;
//   //       }

//   //       if (subCategorySum > 0) {
//   //         subCategorySums[subCategoryKey] = subCategorySum;
//   //       }

//   //       if (categorySums[category]) {
//   //         categorySums[category] += subCategorySum;
//   //       } else {
//   //         categorySums[category] = subCategorySum;
//   //       }
//   //     }
//   //   }

//   //   return { summations, categorySums, subCategorySums };
//   // };

//   // useEffect(() => {
//   //   const { summations, categorySums, subCategorySums } = calculateSummations();

//   //   const categorySumsArray = Object.entries(categorySums)
//   //     .map(([key, value]) => ({ Category: key, Sum: value }))
//   //     .filter((item) => item.Sum > 0);
//   //   const subCategorySumsArray = Object.entries(subCategorySums)
//   //     .map(([key, value]) => ({ Subcategory: key, Sum: value }))
//   //     .filter((item) => item.Sum > 0);

//   //   setCategorySum([
//   //     ...summations.filter((item) => item.Sum > 0),
//   //     ...categorySumsArray,
//   //     ...subCategorySumsArray,
//   //   ]);
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, [subcategory]);

//   // useEffect(() => {
//   //   const storedData = localStorage.getItem('data');
//   //   // Parse the JSON string back to an object (if applicable)
//   //   setsubcategory(JSON.parse(storedData));

//   //   //
//   // }, []);
//   const [categorySum, setCategorySum] = useState();
//   const [subcategory, setsubcategory] = useState({});

//   useEffect(() => {
//     const calculateSummations = () => {
//       let summations = [];
//       let categorySums = {};
//       let subCategorySums = {};

//       for (let category in subcategory) {
//         for (let subCategoryKey in subcategory[category]) {
//           let subCategorySum = 0;
//           for (let subSubcategoryKey in subcategory[category][subCategoryKey]) {
//             let sum = 0;
//             subcategory[category][subCategoryKey][subSubcategoryKey].forEach((item) => {
//               // Assuming `item` is an object and the last column is represented by the last property
//               const lastColumnValue = item[Object.keys(item)[Object.keys(item).length - 1]];

//               sum += parseFloat(lastColumnValue.replace(/,/g, ''));
//             });

//             if (sum > 0) {
//               summations.push({
//                 Category: category,
//                 Subcategory: subCategoryKey,
//                 SubSubcategory: subSubcategoryKey,
//                 Sum: sum,
//               });
//             }

//             subCategorySum += sum;
//           }

//           if (subCategorySum > 0) {
//             subCategorySums[subCategoryKey] = subCategorySum;
//           }

//           if (categorySums[category]) {
//             categorySums[category] += subCategorySum;
//           } else {
//             categorySums[category] = subCategorySum;
//           }
//         }
//       }

//       return { summations, categorySums, subCategorySums };
//     };

//     const { summations, categorySums, subCategorySums } = calculateSummations();

//     const categorySumsArray = Object.entries(categorySums)
//       .map(([key, value]) => ({ Category: key, Sum: value }))
//       .filter((item) => item.Sum > 0);
//     const subCategorySumsArray = Object.entries(subCategorySums)
//       .map(([key, value]) => ({ Subcategory: key, Sum: value }))
//       .filter((item) => item.Sum > 0);

//     setCategorySum([
//       ...summations.filter((item) => item.Sum > 0),
//       ...categorySumsArray,
//       ...subCategorySumsArray,
//     ]);
//   }, [subcategory]);

//   useEffect(() => {
//     const storedData = localStorage.getItem('data');
//     // Parse the JSON string back to an object (if applicable)
//     setsubcategory(JSON.parse(storedData));
//   }, []);
//   return (
//     <TablePanel title="Statement of financial position">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Subcategory</th>
//             <th>2022</th>
//             <th>2023</th>
//           </tr>
//         </thead>
//         <tbody>
//           {subcategory['Income'] &&
//             Object.keys(subcategory['Income']).map((subCategoryKey, subIndex) => {
//               let totalSubCategory = 0;
//               let totalSubCategorys = 0;

//               // Calculate the sums and totals here

//               const subSubcategoryElements = Object.keys(subcategory['Income'][subCategoryKey]).map(
//                 (subSubcategoryKey) => {
//                   let sum = 0; // Placeholder for sum calculation
//                   let minus = 0; // Placeholder for minus calculation

//                   subcategory[subCategoryKey][subSubcategoryKey].forEach((item) => {
//                     // Replace 'item.KML' with the value of the last column
//                     const lastColumnValue = item[Object.keys(item)[Object.keys(item).length - 1]];
//                     const secondColumnValue = item[Object.keys(item)[Object.keys(item).length - 2]];

//                     sum += parseFloat(lastColumnValue.replace(/,/g, ''));
//                     minus += parseFloat(secondColumnValue.replace(/,/g, ''));
//                   });
//                   totalSubCategory += sum;

//                   totalSubCategorys += minus;

//                   if (sum === 0) {
//                     return null;
//                   }
//                   if (minus === 0) {
//                     return null;
//                   }

//                   return (
//                     <tr key={subSubcategoryKey}>
//                       <td className="statement-key" style={{ fontSize: 16, width: '100%' }}>
//                         {subSubcategoryKey}
//                       </td>
//                       <td></td>
//                       <td>{minus.toLocaleString()}</td>
//                       <td className="statement-value">{sum.toLocaleString()}</td>
//                     </tr>
//                   );
//                 }
//               );
//               if (totalSubCategory === 0) {
//                 return null;
//               }
//               if (totalSubCategorys === 0) {
//                 return null;
//               }
//               // ... your logic for calculating `totalSubCategory` and `totalSubCategorys`

//               return (
//                 <React.Fragment key={subIndex}>
//                   <tr>
//                     <td
//                       className="statement-key"
//                       style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
//                     >
//                       {subCategoryKey}
//                     </td>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                   {subSubcategoryElements}
//                   <tr>
//                     <td
//                       className="statement-key"
//                       style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
//                     >
//                       Total {subCategoryKey}:
//                     </td>
//                     <td></td>
//                     <td> {totalSubCategorys.toLocaleString()}</td>
//                     <td
//                       className="statement-value"
//                       style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
//                     >
//                       {totalSubCategory.toLocaleString()}
//                     </td>
//                   </tr>
//                 </React.Fragment>
//               );
//             })}
//         </tbody>
//       </table>
//     </TablePanel>
//   );
// };

// export default Incomes;
import React, { useState, useEffect } from 'react';

const Incomes = () => {
  const [subcategory, setSubcategory] = useState({});
  const [CategorySum, setCategorySum] = useState({});

  const calculateIncomeSummations = () => {
    let summations = [];
    let categorySums = {};
    let subCategorySums = {};

    const incomeSubcategory = subcategory['Income'];

    if (incomeSubcategory) {
      for (let subCategoryKey in incomeSubcategory) {
        let subCategorySum = 0;
        incomeSubcategory[subCategoryKey].forEach((item) => {
          const lastColumnValue = item[Object.keys(item)[Object.keys(item).length - 1]];
          const sum = parseFloat(lastColumnValue.replace(/,/g, ''));
          subCategorySum += sum;
        });

        if (subCategorySum > 0) {
          subCategorySums[subCategoryKey] = subCategorySum;
        }
      }
    }

    return { summations, subCategorySums };
  };
  useEffect(() => {
    const { summations, subCategorySums } = calculateIncomeSummations();

    console.log(summations, subCategorySums);

    const subCategorySumsArray = Object.entries(subCategorySums)
      .map(([key, value]) => ({ Subcategory: key, Sum: value }))
      .filter((item) => item.Sum > 0);

    setCategorySum([...summations.filter((item) => item.Sum > 0), ...subCategorySumsArray]);
  }, [subcategory]);

  console.log(subcategory);
  useEffect(() => {
    const storedData = localStorage.getItem('data');
    const parsedData = JSON.parse(storedData);

    if (parsedData && parsedData['Income']) {
      setSubcategory({
        Income: parsedData['Income'],
      });
    }
  }, []);

  // useEffect(() => {
  //   const storedData = localStorage.getItem('data');
  //   const parsedData = JSON.parse(storedData);

  //   if (parsedData && parsedData['Income']) {
  //     const incomeData = parsedData['Income'];
  //     console.log('Income Data:', incomeData); // Log the income data to check if it's populated correctly
  //     setIncome(incomeData);
  //   }
  // }, []);

  return (
    <div title="Income Statement">
      <table className="table">
        <thead>
          <tr style={{ textDecoration: 'underline 2px' }}>
            <th style={{ fontSize: '15px', fontWeight: '500' }}>As at 31 December</th>

            <th style={{ fontSize: '15px' }}>Notes</th>
            <th style={{ fontSize: '15px' }}>2022</th>
            <th style={{ fontSize: '15px' }}>2023</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style={{ fontSize: '15px' }}></th>

            <th></th>
            <th style={{ fontSize: '15px' }}>N0.00</th>
            <th style={{ fontSize: '15px' }}>N0.00</th>
          </tr>
        </thead>
        <tbody>
          {subcategory['Income'] &&
            Object.keys(subcategory['Income']).map((subCategoryKey) => {
              let totalSubCategory = 0;

              const subCategoryElements = subcategory['Income'][subCategoryKey].map((item) => {
                const lastColumnValue = item[Object.keys(item)[Object.keys(item).length - 1]];
                const sum = parseFloat(lastColumnValue.replace(/,/g, ''));
                totalSubCategory += sum;

                return (
                  <tr key={subCategoryKey}>
                    <td className="statement-key" style={{ fontSize: 16, width: '100%' }}>
                      {subCategoryKey}
                    </td>
                    <td></td>
                    <td className="statement-value">{sum.toLocaleString()}</td>
                  </tr>
                );
              });

              if (totalSubCategory === 0) {
                return null;
              }

              return (
                <React.Fragment key={subCategoryKey}>
                  <tr>
                    <td
                      className="statement-key"
                      style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
                    >
                      {subCategoryKey}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  {subCategoryElements}
                  <tr>
                    <td
                      className="statement-key"
                      style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
                    >
                      Total {subCategoryKey}:
                    </td>
                    <td></td>
                    <td
                      className="statement-value"
                      style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
                    >
                      {totalSubCategory.toLocaleString()}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Incomes;
