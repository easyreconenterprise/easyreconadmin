import React from "react";
import "./Style.css";
const Cost = ({ subcategory }) => {
  console.log(subcategory?.Income?.["Cost of sales"]);

  const properties = subcategory?.Income?.["Cost of sales"];

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

  return (
    <div>
      <table className="cost-table">
        <tbody>
          <tr>
            <td
              style={{ textAlign: "left", padding: "8px", fontWeight: "bold" }}
            >
              Cost of sales
            </td>

            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            >
              {formattedTotalKmlValues}
            </td>
            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            >
              {formattedTotalKmlValue}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cost;
