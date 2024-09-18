import React from 'react';

const Loans = ({ subcategory }) => {
  console.log(
    subcategory?.['Equity and Liability']?.['Current-liability']?.['Loans and borrowing']
  );

  const properties =
    subcategory?.['Equity and Liability']?.['Current-liability']?.['Loans and borrowing'];

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

  return (
    <div style={{ margin: '20px' }}>
      <table>
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
              Total loans and borrowing
            </td>
            <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>
              {formattedTotalKmlValues}
            </td>
            <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>
              {formattedTotalKmlValue}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Loans;
