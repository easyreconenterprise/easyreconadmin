import React from "react";

const ChangeInv2 = ({ subcategory }) => {
  console.log(subcategory?.Asset?.["Current"]["Inventories"]);
  console.log("subcategory:", subcategory);
  console.log("Inventories:", subcategory?.Asset?.Current?.Inventories);

  const properties = subcategory?.Asset?.["Current"]["Inventories"];

  let totalKmlValue = 0;
  let totalKmlValues = 0;
  if (properties) {
    properties.forEach((property) => {
      const lastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 1]];
      const secondLastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 2]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ""));
      const kmlValues = parseFloat(secondLastColumnValue.replace(/[\s,]/g, ""));

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
          {" "}
          <p>1. Inventories</p>
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
              <td>Changes in Inventories</td>
              <td>{changeInInventories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChangeInv2;
