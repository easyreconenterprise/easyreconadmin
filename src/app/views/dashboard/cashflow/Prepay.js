import React from "react";

const Prepay = ({ subcategory }) => {
  console.log(subcategory?.Asset?.["Current"]["prepayment and advances"]);

  const properties = subcategory?.Asset?.["Current"]["prepayment and advances"];

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

  const formattedTotalKmlValue = totalKmlValue.toFixed(2);
  const formattedTotalKmlValues = totalKmlValues.toFixed(2);

  const changeInInventories = Math.round(totalKmlValues - totalKmlValue);

  return (
    <div>
      <p> {changeInInventories}</p>
    </div>
  );
};

export default Prepay;
