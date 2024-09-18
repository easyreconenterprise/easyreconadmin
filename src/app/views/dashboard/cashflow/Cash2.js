import React, { useEffect, useState } from "react";

const Cash2 = ({ subcategory }) => {
  const properties =
    subcategory?.Asset?.["Current"]["Cash and cash equivalent"];

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
  const formattedTotalKmlValues = Math.round(totalKmlValues);

  // Calculate the values for prior year and current year bank overdrafts
  let priorYearBankValue = 0;

  const priorYearBankProperties =
    subcategory?.["Equity and Liability"]?.["Current-liability"]?.[
      "Bank Overdraft"
    ];

  if (priorYearBankProperties) {
    priorYearBankProperties.forEach((property) => {
      const lastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 2]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ""));

      if (!isNaN(kmlValue)) {
        priorYearBankValue += Math.round(kmlValue);
      }
    });
  }

  // Calculate the total cash and cash equivalent per statement of cashflow
  const priorYearCashValue = Math.round(
    parseFloat(formattedTotalKmlValues) + priorYearBankValue
  );

  return Math.round(priorYearCashValue);
};

export default Cash2;
