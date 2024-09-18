// import React, { useEffect, useState } from "react";
// import MappedTable from "./MappedTable"; // Import the MappedTable component
// import axios from "axios";

// const OnlyMap = () => {
//   const [categorizedData, setCategorizedData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch the authorization token from local storage
//         const token = localStorage.getItem("jwtToken");

//         // Include the token in the request headers
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // Fetch the categorized data from the backend API with the token included
//         const response = await axios.get(
//           "http://localhost:5000/api/mapped-data",
//           config
//         );

//         // Log the response data to see what's being received
//         console.log("Fetched data:", response.data);

//         // Set the categorized data in the component state
//         setCategorizedData(response.data);
//       } catch (error) {
//         console.error("Error fetching categorized data:", error);
//       }
//     };

//     fetchData(); // Call the fetchData function when the component mounts
//   }, []);

//   // Log the categorized data to check if it's being set correctly
//   console.log("Categorized data:", categorizedData);

//   return (
//     <div>
//       <h2>All Mapped Table</h2>
//       <MappedTable subcategory={categorizedData} />{" "}
//       {/* Render the MappedTable component with the fetched data */}
//     </div>
//   );
// };

// export default OnlyMap;

// import React from "react";
// import "./Map.css";
// const MappedTable = ({ subcategory }) => {
//   const flattenSubcategoryData = () => {
//     let flattenedData = [];
//     for (let category in subcategory) {
//       for (let subCategoryKey in subcategory[category]) {
//         if (category === "Income") {
//           // Treat subcategories of "Income" as sub-subcategories of other categories
//           subcategory[category][subCategoryKey].forEach((item) => {
//             flattenedData.push({
//               Category: category,
//               Subcategory: subCategoryKey,
//               SubSubcategory: "",
//               ...item,
//             });
//           });
//         } else {
//           for (let subSubcategoryKey in subcategory[category][subCategoryKey]) {
//             subcategory[category][subCategoryKey][subSubcategoryKey].forEach(
//               (item) => {
//                 flattenedData.push({
//                   Category: category,
//                   Subcategory: subCategoryKey,
//                   SubSubcategory: subSubcategoryKey,
//                   ...item,
//                 });
//               }
//             );
//           }
//         }
//       }
//     }
//     return flattenedData;
//   };

//   const data = flattenSubcategoryData();
//   const headers = data.length > 0 ? Object.keys(data[0]) : [];

//   return (
//     <table>
//       <thead>
//         <tr>
//           {headers.map((header, index) => (
//             <th key={index}>{header}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index}>
//             {headers.map((header, colIndex) => (
//               <td key={`${index}-${colIndex}`}>{row[header]}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default MappedTable;
import React from "react";
import "./Map.css";

const OnlyMap = ({ subcategory }) => {
  const flattenSubcategoryData = () => {
    let flattenedData = [];

    for (let categoryKey in subcategory) {
      const category = subcategory[categoryKey];

      for (let subCategoryKey in category) {
        const subCategory = category[subCategoryKey];

        for (let subSubcategoryKey in subCategory) {
          const subSubcategory = subCategory[subSubcategoryKey];

          if (Array.isArray(subSubcategory)) {
            // If it's an array, iterate over the items in the subSubcategory
            subSubcategory.forEach((item) => {
              flattenedData.push({
                Category: categoryKey,
                Subcategory: subCategoryKey,
                SubSubcategory: subSubcategoryKey,
                ...item,
              });
            });
          }
        }
      }
    }

    return flattenedData;
  };

  const data = flattenSubcategoryData();
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header, colIndex) => (
              <td key={`${index}-${colIndex}`}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OnlyMap;
