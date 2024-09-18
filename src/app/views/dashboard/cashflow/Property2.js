import React from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Property2 = ({ subcategory }) => {
  console.log(subcategory?.Asset?.['Non-current']['Property plant and equipment']);

  const properties = subcategory?.Asset?.['Non-current']['Property plant and equipment'];

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
          <p>7. Property, plant and equipment</p>
        </b>

        <table>
          <tbody>
            <tr>
              <td>Opening balance</td>
              <td>{formattedTotalKmlValues}</td>
            </tr>
            <tr>
              <td>Additions</td>
              <td>
                <EditText defaultValue="56788" />
              </td>
            </tr>
            <tr>
              <td>Disposal</td>
              <td>
                <EditText defaultValue="56788" />
              </td>
            </tr>
            <tr>
              <td>Depreciation</td>
              <td>
                <EditText defaultValue="56788" />
              </td>
            </tr>
            <tr>
              <td>Closing balance</td>
              <td> {formattedTotalKmlValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Property2;
