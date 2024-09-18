import React from "react";

const Taxation2 = ({ subcategory }) => {
  console.log(subcategory?.Income?.["Taxation"]);

  const properties = subcategory?.Income?.["Taxation"];

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
      <p>{formattedTotalKmlValue}</p>
    </div>
  );
};

export default Taxation2;
