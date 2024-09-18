import React from "react";
import "./Style.css";
const Admin = ({ subcategory }) => {
  console.log(subcategory?.Income?.["Administrative and selling expenses"]);

  const properties =
    subcategory?.Income?.["Administrative and selling expenses"];

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
      <table className="admin-table">
        <tbody>
          <tr>
            <td
              style={{ textAlign: "left", padding: "8px", fontWeight: "bold" }}
            >
              Administrative Expenses
            </td>
            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            ></td>
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

export default Admin;
