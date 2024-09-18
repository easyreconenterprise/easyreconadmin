import React from "react";

const Culi2 = ({ subcategory }) => {
  let totalNonCurrentLiability = 0;

  // Check if the subcategory and "Equity and Liability" category exist
  if (
    subcategory &&
    subcategory["Equity and Liability"] &&
    subcategory["Equity and Liability"]["Current-liability"]
  ) {
    const nonCurrentLiabilitySubcategory =
      subcategory["Equity and Liability"]["Current-liability"];

    for (const subSubcategoryKey in nonCurrentLiabilitySubcategory) {
      const subSubcategoryData =
        nonCurrentLiabilitySubcategory[subSubcategoryKey];

      // Check if subSubcategoryData is an array
      if (Array.isArray(subSubcategoryData)) {
        const subSubcategoryTotal = subSubcategoryData.reduce((sum, item) => {
          const lastColumnValue =
            item[Object.keys(item)[Object.keys(item).length - 2]];
          sum += parseFloat(lastColumnValue.replace(/,/g, ""));
          return sum;
        }, 0);

        totalNonCurrentLiability += subSubcategoryTotal;
      }
    }
  }

  return Math.round(totalNonCurrentLiability); // Return the calculated total as a number
};

export default Culi2;
