import React from 'react';

const Prepayment = ({ subcategory }) => {
  console.log(subcategory?.Asset?.['Current']['prepayment and advances']);

  const properties = subcategory?.Asset?.['Current']['prepayment and advances'];

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
              Total Prepayment and Advances
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

export default Prepayment;
