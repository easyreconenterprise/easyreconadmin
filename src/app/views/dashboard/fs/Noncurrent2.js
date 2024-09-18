import React from "react";

const Noncurrent2 = ({ subcategory }) => {
  let totalNonCurrent = 0;

  // Check if the subcategory and "Asset" category exist
  if (subcategory && subcategory.Asset && subcategory.Asset["Non-current"]) {
    const nonCurrentSubcategory = subcategory.Asset["Non-current"];

    for (const subSubcategoryKey in nonCurrentSubcategory) {
      const subSubcategoryData = nonCurrentSubcategory[subSubcategoryKey];

      // Check if subSubcategoryData is an array
      if (Array.isArray(subSubcategoryData)) {
        const subSubcategoryTotal = subSubcategoryData.reduce((sum, item) => {
          // Assuming you want to use the 2021 column for the total
          const column2021Value =
            item[Object.keys(item)[Object.keys(item).length - 2]];
          sum += parseFloat(column2021Value.replace(/,/g, ""));
          return sum;
        }, 0);

        totalNonCurrent += subSubcategoryTotal;
      }
    }
  }

  return Math.round(totalNonCurrent).toFixed(0);
};

export default Noncurrent2;
