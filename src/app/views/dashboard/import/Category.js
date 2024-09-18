/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';

const Category = ({ subcategory }) => {
  // eslint-disable-next-line no-unused-vars
  const [categorySum, setCategorySum] = useState([]);

  const calculateSummations = () => {
    let summations = [];
    let categorySums = {};
    let subCategorySums = {};

    for (let category in subcategory) {
      for (let subCategoryKey in subcategory[category]) {
        let subCategorySum = 0;

        for (let subSubcategoryKey in subcategory[category][subCategoryKey]) {
          let sum = 0;
          subcategory[category][subCategoryKey][subSubcategoryKey].forEach((item) => {
            // Replace 'item.KML' with the value of the last column
            const lastColumnValue = item[Object.keys(item)[Object.keys(item).length - 1]];
            sum += parseFloat(lastColumnValue.replace(/,/g, ''));
          });
          summations.push({
            Category: category,
            Subcategory: subCategoryKey,
            SubSubcategory: subSubcategoryKey,
            Sum: sum,
          });
        }
        if (subCategorySum > 0) {
          subCategorySums[subCategoryKey] = subCategorySum;
        }

        if (categorySums[category]) {
          categorySums[category] += subCategorySum;
        } else {
          categorySums[category] = subCategorySum;
        }
      }
    }

    return { summations, categorySums, subCategorySums };
  };

  useEffect(() => {
    const { summations, categorySums, subCategorySums } = calculateSummations();

    const categorySumsArray = Object.entries(categorySums)
      .map(([key, value]) => ({ Category: key, Sum: value }))
      .filter((item) => item.Sum > 0);
    const subCategorySumsArray = Object.entries(subCategorySums)
      .map(([key, value]) => ({ Subcategory: key, Sum: value }))
      .filter((item) => item.Sum > 0);

    setCategorySum([
      ...summations.filter((item) => item.Sum > 0),
      ...categorySumsArray,
      ...subCategorySumsArray,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subcategory]);

  return (
    <>
      <div className="summary">
        <h2>Financial Statement</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(subcategory).map((category, index) => {
              let totalCategory = 0;
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td
                      className="statement-key"
                      style={{
                        textAlign: 'center',
                        fontSize: 24,
                        marginBottom: 10,
                      }}
                    >
                      {category}
                    </td>
                  </tr>
                  {Object.keys(subcategory[category]).map((subCategoryKey) => {
                    let totalSubCategory = 0;
                    const subSubcategoryElements = Object.keys(
                      subcategory[category][subCategoryKey]
                    ).map((subSubcategoryKey) => {
                      let sum = 0;
                      subcategory[category][subCategoryKey][subSubcategoryKey].forEach((item) => {
                        // Replace 'item.KML' with the value of the last column
                        const lastColumnValue =
                          item[Object.keys(item)[Object.keys(item).length - 1]];
                        sum += parseFloat(lastColumnValue.replace(/,/g, ''));
                      });
                      totalSubCategory += sum;
                      totalCategory += sum;
                      if (sum === 0) {
                        return null;
                      }
                      return (
                        <tr key={subSubcategoryKey}>
                          <td className="statement-key">{subSubcategoryKey}</td>
                          <td className="statement-value">{sum.toLocaleString()}</td>
                        </tr>
                      );
                    });
                    if (totalSubCategory === 0) {
                      return null;
                    }
                    return (
                      <React.Fragment key={subCategoryKey}>
                        <tr>
                          <td className="statement-key" style={{ paddingLeft: 20, fontSize: 20 }}>
                            {subCategoryKey}
                          </td>
                        </tr>
                        {subSubcategoryElements}
                        <tr>
                          <td className="statement-key" style={{ paddingLeft: 20, fontSize: 18 }}>
                            Total {subCategoryKey}:
                          </td>
                          <td className="statement-value" style={{ fontWeight: 'bold' }}>
                            {totalSubCategory.toLocaleString()}
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                  <tr>
                    <td className="statement-key" style={{ paddingLeft: 50, fontSize: 20 }}>
                      Total {category}:
                    </td>
                    <td className="statement-value" style={{ fontWeight: 'bold' }}>
                      {totalCategory.toLocaleString()}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Category;
