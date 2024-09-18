import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';

const TableComponent = ({ data, headers, handleDragStart }) => {
  const totalAmount = data
    .reduce((sum, rowData) => {
      const kmlValue = parseFloat(rowData.KML.replace(/[\s,]/g, ''));
      return isNaN(kmlValue) ? sum : sum + kmlValue;
    }, 0)
    .toFixed(2);

  // Function to format number with commas
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    // Check if the total amount is zero before enabling drag and drop
    const isTotalAmountZero = totalAmount === '0.00' || totalAmount === '-0.00';
    if (!isTotalAmountZero) {
      toast.error('account must be zero sum, reconcile data', {
        toastId: 'success1',
      });
    }
  }, []);

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
              // draggable={isTotalAmountZero} // Only enable drag if totalAmount is zero
              onDragStart={(event) => handleDragStart(event, rowData)}
            >
              {headers?.map((header) => (
                <td key={header}>{rowData[header]}</td>
              ))}
            </tr>
          ))}
          <tr className="zero-sum">
            <td colSpan={headers.length - 1}>Total Amount</td>
            <td>{formatNumberWithCommas(totalAmount)}</td>
          </tr>
        </tbody>
      </table>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
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

export default TableComponent;
