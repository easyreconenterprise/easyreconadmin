import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import MappedTable from "./MappedTable";
import DropDown from "./DropDown";

// const UnMappedTable = ({
//   data,
//   headers,
//   handleDragStart,
//   setData,
//   handleDropUnmapped,

//   setMappedData,
// }) => {
//   // ... (same code as before)
//   const totalAmount = data
//     .reduce((sum, rowData) => {
//       const lastColumnKey =
//         Object.keys(rowData)[Object.keys(rowData).length - 1];
//       const lastColumnValue = parseFloat(
//         rowData[lastColumnKey].replace(/[\s,]/g, "")
//       );
//       return isNaN(lastColumnValue) ? sum : sum + lastColumnValue;
//     }, 0)
//     .toFixed(2);

//   useEffect(() => {
//     const isTotalAmountZero = totalAmount === "0.00" || totalAmount === "-0.00";
//     if (!isTotalAmountZero) {
//       toast.error("Account must be zero sum, reconcile data", {
//         toastId: "accountReconciliation",
//       });
//     }
//   }, []);

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();

//     const droppedData = JSON.parse(
//       event.dataTransfer.getData("application/json")
//     );
//     console.log("Dropped data:", droppedData);
//     // Check if the dropped item is no longer in the mappedData
//     // Call the handleDropMapped function
//     handleDropMapped(droppedData);

//     // Update the mappedData state
//     setMappedData((prevMappedData) =>
//       prevMappedData.filter((item) => item !== droppedData)
//     );

//     // Show success message or other actions
//   };
//   const handleDropMapped = (droppedItem) => {
//     console.log("Dropped Item:", droppedItem);

//     // Remove the dropped item from mappedData and update state
//     setMappedData((prevMappedData) =>
//       prevMappedData.filter((item) => item !== droppedItem)
//     );

//     // Add the dropped item back to the unmapped table's data
//     setData((prevData) => [...prevData, droppedItem]);
//   };

//   return (
//     <>
//       <table>
//         {/* ... (same code as before) */}
//         <thead>
//           <tr>
//             {headers?.map((header) => (
//               <th key={header}>{header}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((rowData, index) => (
//             <tr
//               key={index}
//               draggable
//               onDragStart={(event) => handleDragStart(event, rowData)}
//               onDragOver={handleDragOver}
//               onDrop={handleDrop}
//             >
//               {headers?.map((header) => (
//                 <td key={header}>{rowData[header]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <ToastContainer
//         position="bottom-right"
//         autoClose={15000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </>
//   );
// };

// export default UnMappedTable;
const UnMappedTable = ({
  data,
  headers,
  handleDragStart,
  setData,
  handleDropUnmapped,
  setMappedData,
}) => {
  // useEffect(() => {
  //     const isTotalAmountZero =
  //         totalAmount === '0.00' || totalAmount === '-0.00'
  //     if (!isTotalAmountZero) {
  //         toast.error('Account must be zero sum, reconcile data', {
  //             toastId: 'accountReconciliation',
  //         })
  //     }
  // }, [])

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedData = JSON.parse(
      event.dataTransfer.getData("application/json")
    );
    handleDropMapped(droppedData);
    setMappedData((prevMappedData) =>
      prevMappedData.filter((item) => item !== droppedData)
    );
  };

  const handleDropMapped = (droppedItem) => {
    setMappedData((prevMappedData) =>
      prevMappedData.filter((item) => item !== droppedItem)
    );
    setData((prevData) => [...prevData, droppedItem]);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {headers?.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((rowData, index) => (
            <tr
              key={index}
              draggable
              onDragStart={(event) => handleDragStart(event, rowData)}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {headers?.map((header) => (
                <td key={header}>{rowData[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer
        position="bottom-right"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default UnMappedTable;
