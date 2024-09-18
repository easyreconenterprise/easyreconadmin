import React from "react";

const Taxation3 = ({ subcategory }) => {
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
        totalKmlValue += Math.round(kmlValue);
      }

      if (!isNaN(kmlValues)) {
        totalKmlValues += Math.round(kmlValues);
      }
    });
  }

  // Convert positive totalKmlValues to negative and vice versa
  const formattedTotalKmlValues =
    totalKmlValues >= 0 ? -totalKmlValues : Math.abs(totalKmlValues);

  return (
    <div>
      <p>{Math.round(formattedTotalKmlValues).toFixed(0)}</p>
    </div>
  );
};

export default Taxation3;
