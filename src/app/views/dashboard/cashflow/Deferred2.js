import React from 'react';

const Deferred2 = ({ subcategory }) => {
  console.log(subcategory?.['Equity and Liability']?.['Current-liability']?.['Deferred Incomes']);

  const properties =
    subcategory?.['Equity and Liability']?.['Current-liability']?.['Deferred Incomes'];

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
          <p>6. Deferred Income</p>
        </b>

        <table>
          <tbody>
            <tr>
              <td>Opening balance</td>
              <td>{formattedTotalKmlValues}</td>
            </tr>
            <tr>
              <td>Closing balance</td>
              <td> {formattedTotalKmlValue}</td>
            </tr>
            <tr>
              <td>Changes in Deferred income</td>
              <td>{changeInInventories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deferred2;
