import React from 'react';

const Payable2 = ({ subcategory }) => {
  console.log(
    subcategory?.['Equity and Liability']?.['Non-current-Liability']?.['Trade and other payables']
  );

  const properties =
    subcategory?.['Equity and Liability']?.['Non-current-Liability']?.['Trade and other payables'];

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

  const changeInInventories = (totalKmlValues - totalKmlValue).toFixed(2);

  return (
    <div>
      <div>
        <b>
          {' '}
          <p>4. Trade and other payables</p>
        </b>

        <table>
          <tbody>
            <tr>
              <td>Opening balance</td>
              <td>{formattedTotalKmlValues}</td>
            </tr>
            <tr>
              <td>Opening balance</td>
              <td>{formattedTotalKmlValues}</td>
            </tr>

            <tr>
              <td>Changes in Trade</td>
              <td>{changeInInventories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payable2;
