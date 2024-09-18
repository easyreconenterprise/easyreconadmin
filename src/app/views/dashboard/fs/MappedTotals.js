import React, { useState, useEffect } from "react";

const MappedTotals = () => {
  const [categorizedData, setCategorizedData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/mapped-data`)
      .then((response) => response.json())
      .then((data) => {
        setCategorizedData(data);
      })
      .catch((error) => {
        console.error("Error fetching categorized data:", error);
      });
  }, []);

  const sumSubItems = (subItems) => {
    let sum = 0;
    let sumSecondToLast = 0;
    let secondToLastColumnKey = null;

    for (const key in subItems) {
      const item = subItems[key];
      const lastColumnKey = Object.keys(item)[Object.keys(item).length - 1];

      if (!secondToLastColumnKey) {
        secondToLastColumnKey = Object.keys(item)[Object.keys(item).length - 2];
      }

      const value = item[lastColumnKey];
      const secondToLastValue = item[secondToLastColumnKey];

      // Check if the value is a string before performing replace
      const parsedValue =
        typeof value === "string"
          ? parseFloat(value.replace(/,/g, "")) || 0
          : 0;
      const parsedSecondToLastValue =
        typeof secondToLastValue === "string"
          ? parseFloat(secondToLastValue.replace(/,/g, "")) || 0
          : 0;

      sum += parsedValue;
      sumSecondToLast += parsedSecondToLastValue;
    }

    return { sum, sumSecondToLast };
  };

  const calculateSummations = (data) => {
    let categorySums = {};

    data.forEach((item) => {
      const { category, subcategory, subSubcategory, item: subItems } = item;

      if (!subItems) {
        return;
      }

      const { sum, sumSecondToLast } = sumSubItems(subItems);

      // Calculate category sums
      if (categorySums[category]) {
        categorySums[category].sum += sum;
        categorySums[category].sumSecondToLast += sumSecondToLast;
      } else {
        categorySums[category] = { sum, sumSecondToLast };
      }

      // Calculate subcategory sums
      if (subcategory) {
        if (categorySums[subcategory]) {
          categorySums[subcategory].sum += sum;
          categorySums[subcategory].sumSecondToLast += sumSecondToLast;
        } else {
          categorySums[subcategory] = { sum, sumSecondToLast };
        }
      }

      // Calculate subsubcategory sums
      if (subSubcategory) {
        if (categorySums[subSubcategory]) {
          categorySums[subSubcategory].sum += sum;
          categorySums[subSubcategory].sumSecondToLast += sumSecondToLast;
        } else {
          categorySums[subSubcategory] = { sum, sumSecondToLast };
        }
      }
    });

    return categorySums;
  };

  const categorySums = calculateSummations(categorizedData);

  return (
    <div>
      <h1>Statement of Financial Position</h1>
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}>Category</th>
            <th style={{ fontSize: "15px" }}>Sum of Last Item</th>
            <th style={{ fontSize: "15px" }}>Sum of Second-to-Last Item</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categorySums).map(([key, value]) => (
            <tr key={key}>
              <td style={{ fontSize: "15px", fontWeight: "800" }}>{key}</td>
              <td style={{ fontSize: "15px" }}>{value.sum.toLocaleString()}</td>
              <td style={{ fontSize: "15px" }}>
                {value.sumSecondToLast.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MappedTotals;
