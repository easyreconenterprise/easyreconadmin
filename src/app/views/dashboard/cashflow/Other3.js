import React from "react";

const Other3 = ({ subcategory }) => {
  console.log(subcategory?.Income?.["Other income"]["Gain on disposal of PPE"]);

  const properties =
    subcategory?.Income?.["Other income"]["Gain on disposal of PPE"];

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

  // const formattedTotalKmlValue = totalKmlValue.toFixed(2);
  // const formattedTotalKmlValues = totalKmlValues.toFixed(2);

  const formattedTotalKmlValues = Math.round(totalKmlValues);

  return (
    <div>
      <p>{formattedTotalKmlValues}</p>
    </div>
  );
};

export default Other3;
