import React, { useState } from 'react';

const accountingData = [
  {
    ACCOUNT_ID: '10010',
    ACCOUNT_NAME: 'Petty cash- GMD Office',
    FINANCIAL_STATEMENT_CAPTION: 'Cash and Cash Equivalents',
    CATEGORIES: 'income',
    AMOUNT: 1000,
  },
  {
    ACCOUNT_ID: '13000',
    ACCOUNT_NAME: 'Current A/c - FCMB (NGN)',
    FINANCIAL_STATEMENT_CAPTION: 'Property, Plant and Equipments',
    CATEGORIES: 'income',
    AMOUNT: 2000,
  },
  {
    ACCOUNT_ID: '13000',
    ACCOUNT_NAME: 'Current A/c - FCMB (NGN)',
    FINANCIAL_STATEMENT_CAPTION: 'Property, Plant and Equipments',
    CATEGORIES: 'expenditure',
    AMOUNT: 1500,
  },
  {
    ACCOUNT_ID: '13001',
    ACCOUNT_NAME: 'Current A/c - FCMB (NGN)',
    FINANCIAL_STATEMENT_CAPTION: 'Property, Plant and Equipments',
    CATEGORIES: 'expenditure',
    AMOUNT: 500,
  },
];

const HeaderSelection = () => {
  const [selectedHeaders, setSelectedHeaders] = useState([]);

  // Function to handle header selection
  const handleHeaderSelect = (header) => {
    if (selectedHeaders.includes(header)) {
      setSelectedHeaders(selectedHeaders.filter((h) => h !== header));
    } else {
      setSelectedHeaders([...selectedHeaders, header]);
    }
  };

  // Function to render the selected headers
  const renderSelectedHeaders = () => {
    return selectedHeaders.map((header) => <th key={header}>{header}</th>);
  };

  // Function to filter the data based on selected headers
  const filterDataBySelectedHeaders = () => {
    return accountingData.map((item) => {
      const filteredItem = {};
      selectedHeaders.forEach((header) => {
        filteredItem[header] = item[header];
      });
      return filteredItem;
    });
  };

  return (
    <div>
      <h2>Header Selection</h2>
      <div>
        <label>Select Headers:</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={selectedHeaders.includes('ACCOUNT_ID')}
              onChange={() => handleHeaderSelect('ACCOUNT_ID')}
            />
            ACCOUNT_ID
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedHeaders.includes('ACCOUNT_NAME')}
              onChange={() => handleHeaderSelect('ACCOUNT_NAME')}
            />
            ACCOUNT_NAME
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedHeaders.includes('FINANCIAL_STATEMENT_CAPTION')}
              onChange={() => handleHeaderSelect('FINANCIAL_STATEMENT_CAPTION')}
            />
            FINANCIAL_STATEMENT_CAPTION
          </label>
          {/* Add more checkbox inputs for other headers */}
        </div>
      </div>
      <h2>Filtered Data</h2>
      <table>
        <thead>
          <tr>{renderSelectedHeaders()}</tr>
        </thead>
        <tbody>
          {filterDataBySelectedHeaders().map((item, index) => (
            <tr key={index}>
              {selectedHeaders.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeaderSelection;
