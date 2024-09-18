import React from "react";

const Def = ({ subcategory }) => {
  console.log(
    subcategory?.["Equity and Liability"]?.["Current-liability"]?.[
      "Deferred Incomes"
    ]
  );

  const properties =
    subcategory?.["Equity and Liability"]?.["Current-liability"]?.[
      "Deferred Incomes"
    ];

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
  const formattedTotalKmlValues = Math.round(totalKmlValues);

  const changeInInventories = (totalKmlValues - totalKmlValue).toFixed(2);

  return (
    <div>
      <p>{formattedTotalKmlValues}</p>
    </div>
  );
};

export default Def;
