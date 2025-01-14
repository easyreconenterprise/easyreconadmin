import React from "react";

const Noncurrent = ({ subcategory }) => {
  let totalNonCurrent = 0;

  // Check if the subcategory and "Asset" category exist
  if (subcategory && subcategory.Asset && subcategory.Asset["Non-current"]) {
    const nonCurrentSubcategory = subcategory.Asset["Non-current"];

    for (const subSubcategoryKey in nonCurrentSubcategory) {
      const subSubcategoryData = nonCurrentSubcategory[subSubcategoryKey];

      // Check if subSubcategoryData is an array
      if (Array.isArray(subSubcategoryData)) {
        const subSubcategoryTotal = subSubcategoryData.reduce((sum, item) => {
          const lastColumnValue =
            item[Object.keys(item)[Object.keys(item).length - 1]];
          sum += parseFloat(lastColumnValue.replace(/,/g, ""));
          return sum;
        }, 0);

        totalNonCurrent += subSubcategoryTotal;
      }
    }
  }

  return Math.round(totalNonCurrent).toFixed(0);
};

export default Noncurrent;
