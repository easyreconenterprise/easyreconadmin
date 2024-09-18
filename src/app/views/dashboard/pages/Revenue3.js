import React from "react";

const Revenue3 = ({ subcategory }) => {
  console.log(subcategory?.Income?.["Revenue"]);

  const properties = subcategory?.Income?.["Revenue"];

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
        // Check if kmlValue is negative, and if so, convert it to positive
        totalKmlValue += kmlValue < 0 ? Math.abs(kmlValue) : kmlValue;
      }

      if (!isNaN(kmlValues)) {
        // Check if kmlValues is positive, and if so, make it negative
        totalKmlValues += kmlValues > 0 ? -kmlValues : kmlValues;
      }
    });
  }

  const formattedTotalKmlValue = Math.round(totalKmlValue);
  const formattedTotalKmlValues = totalKmlValues.toFixed(2);

  return (
    <div>
      <p>{formattedTotalKmlValue}</p>
    </div>
  );
};

export default Revenue3;
