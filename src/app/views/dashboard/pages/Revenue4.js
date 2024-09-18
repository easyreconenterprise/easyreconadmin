import React from "react";

const Revenue4 = ({ subcategory }) => {
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
        // Invert the sign of kmlValue
        totalKmlValue += -kmlValue;
      }

      if (!isNaN(kmlValues)) {
        // Invert the sign of kmlValues
        totalKmlValues += -kmlValues;
      }
    });
  }

  const formattedTotalKmlValue = totalKmlValue.toFixed(2);
  const formattedTotalKmlValues = Math.round(totalKmlValues);

  return (
    <div>
      <p>{formattedTotalKmlValues}</p>
    </div>
  );
};

export default Revenue4;
