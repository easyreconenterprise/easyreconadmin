import React, { useEffect, useState } from 'react';
import Bank from '../cashflow/Bank';
import Bank2 from '../cashflow/Bank2';

const Cash = ({ subcategory }) => {
  console.log(subcategory?.Asset?.['Current']['Cash and cash equivalent']);

  const properties = subcategory?.Asset?.['Current']['Cash and cash equivalent'];

  let totalKmlValue = 0;
  let totalKmlValues = 0;
  if (properties) {
    properties.forEach((property) => {
      const lastColumnValue = property[Object.keys(property)[Object.keys(property).length - 1]];
      const secondLastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 2]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ''));
      const kmlValues = parseFloat(secondLastColumnValue.replace(/[\s,]/g, ''));

      if (!isNaN(kmlValue)) {
        totalKmlValue += kmlValue;
      }

      if (!isNaN(kmlValues)) {
        totalKmlValues += kmlValues;
      }
    });
  }

  const formattedTotalKmlValue = totalKmlValue.toFixed(2);
  const formattedTotalKmlValues = totalKmlValues.toFixed(2);

  // Calculate the values for prior year and current year bank overdrafts
  let priorYearBankValue = 0;
  let currentYearBankValue = 0;

  const priorYearBankProperties =
    subcategory?.['Equity and Liability']?.['Current-liability']?.['Bank Overdraft'];

  const currentYearBankProperties =
    subcategory?.['Equity and Liability']?.['Current-liability']?.['Bank Overdraft'];

  if (priorYearBankProperties) {
    priorYearBankProperties.forEach((property) => {
      const lastColumnValue = property[Object.keys(property)[Object.keys(property).length - 2]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ''));

      if (!isNaN(kmlValue)) {
        priorYearBankValue += kmlValue;
      }
    });
  }

  if (currentYearBankProperties) {
    currentYearBankProperties.forEach((property) => {
      const lastColumnValue = property[Object.keys(property)[Object.keys(property).length - 1]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ''));

      if (!isNaN(kmlValue)) {
        currentYearBankValue += kmlValue;
      }
    });
  }

  // Create states for calculated values
  const [priorYearCash, setPriorYearCash] = useState(0);
  const [currentYearCash, setCurrentYearCash] = useState(0);

  useEffect(() => {
    // Calculate the total cash and cash equivalent per statement of cashflow
    const priorYearCashValue = parseFloat(formattedTotalKmlValues) + priorYearBankValue;
    const currentYearCashValue = parseFloat(formattedTotalKmlValue) + currentYearBankValue;

    // Update the state with the calculated values
    setPriorYearCash(priorYearCashValue);
    setCurrentYearCash(currentYearCashValue);
  }, [
    subcategory,
    formattedTotalKmlValues,
    formattedTotalKmlValue,
    priorYearBankValue,
    currentYearBankValue,
  ]);

  return (
    <div style={{ margin: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>
              Description
            </th>
            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>
              Prior Year
            </th>
            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>
              Current Year
            </th>
          </tr>
        </thead>
        <tbody>
          {properties?.map((property, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>
                {property.Description}
              </td>
              <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>
                {property[Object.keys(property)[Object.keys(property).length - 2]]}
              </td>
              <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>
                {property[Object.keys(property)[Object.keys(property).length - 1]]}
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: 'left', padding: '8px', fontWeight: 'bold' }}>
              Cash and cash equivalent per statement of financial
            </td>
            <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>
              {formattedTotalKmlValues}
            </td>
            <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>
              {formattedTotalKmlValue}
            </td>
          </tr>
          <tr>
            <td>Bank overdrafts</td>
            <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>
              <Bank subcategory={subcategory} />
            </td>
            <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>
              <Bank2 subcategory={subcategory} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left', padding: '8px', fontWeight: 'bold' }}>
              Cash and cash equivalent per statement of cashflow
            </td>
            <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>
              {priorYearCash.toFixed(2)}
            </td>
            <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>
              {currentYearCash.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cash;
