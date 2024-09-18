import React, { useEffect, useState } from "react";
import Bank from "./Bank";
import Bank2 from "./Bank2";

const Cash3 = ({ subcategory }) => {
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

  const formattedTotalKmlValue = Math.round(totalKmlValue);
  const formattedTotalKmlValues = totalKmlValues.toFixed(2);

  // Calculate the values for prior year and current year bank overdrafts
  let priorYearBankValue = 0;
  let currentYearBankValue = 0;

  const priorYearBankProperties =
    subcategory?.["Equity and Liability"]?.["Current-liability"]?.[
      "Bank Overdraft"
    ];

  const currentYearBankProperties =
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

  if (currentYearBankProperties) {
    currentYearBankProperties.forEach((property) => {
      const lastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 1]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ""));

      if (!isNaN(kmlValue)) {
        currentYearBankValue += Math.round(kmlValue);
      }
    });
  }

  // Calculate the total cash and cash equivalent per statement of cashflow
  const currentYearCashValue = Math.round(
    parseFloat(formattedTotalKmlValue) + currentYearBankValue
  );

  return Math.round(currentYearCashValue).toFixed(0);
};

export default Cash3;
