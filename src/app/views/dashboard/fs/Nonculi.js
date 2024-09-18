import React from "react";

const Nonculi = ({ subcategory }) => {
  let totalNonCurrentLiability = 0;

  // Check if the subcategory and "Equity and Liability" category exist
  if (
    subcategory &&
    subcategory["Equity and Liability"] &&
    subcategory["Equity and Liability"]["Non-current-Liability"]
  ) {
    const nonCurrentLiabilitySubcategory =
      subcategory["Equity and Liability"]["Non-current-Liability"];

    for (const subSubcategoryKey in nonCurrentLiabilitySubcategory) {
      const subSubcategoryData =
        nonCurrentLiabilitySubcategory[subSubcategoryKey];

      // Check if subSubcategoryData is an array
      if (Array.isArray(subSubcategoryData)) {
        const subSubcategoryTotal = subSubcategoryData.reduce((sum, item) => {
          const lastColumnValue =
            item[Object.keys(item)[Object.keys(item).length - 1]];
          sum += parseFloat(lastColumnValue.replace(/,/g, ""));
          return sum;
        }, 0);

        totalNonCurrentLiability += subSubcategoryTotal;
      }
    }
  }

  return Math.round(totalNonCurrentLiability); // Return the calculated total as a number
};

export default Nonculi;
