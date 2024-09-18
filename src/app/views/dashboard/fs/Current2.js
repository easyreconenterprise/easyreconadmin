import React from "react";

const Current2 = ({ subcategory }) => {
  let totalCurrent = 0;

  // Check if the subcategory and "Asset" category exist
  if (subcategory && subcategory.Asset && subcategory.Asset["Current"]) {
    const currentSubcategory = subcategory.Asset["Current"];

    for (const subSubcategoryKey in currentSubcategory) {
      const subSubcategoryData = currentSubcategory[subSubcategoryKey];

      // Check if subSubcategoryData is an array
      if (Array.isArray(subSubcategoryData)) {
        const subSubcategoryTotal = subSubcategoryData.reduce((sum, item) => {
          // Assuming you want to use the 2021 column for the total
          const column2021Value =
            item[Object.keys(item)[Object.keys(item).length - 2]];
          sum += parseFloat(column2021Value.replace(/,/g, ""));
          return sum;
        }, 0);

        totalCurrent += subSubcategoryTotal;
      }
    }
  }

  return Math.round(totalCurrent).toFixed(0);
};

export default Current2;
