import React, { useState, useEffect } from "react";
import { TablePanel } from "./TablePanel";
import Profit from "../notes/Profit";
import axios from "axios";

export const calculateSummations = (incomeSubcategory) => {
  if (!incomeSubcategory || !incomeSubcategory["Income"]) {
    return [];
  }

  let summations = [];
  let grossProfit = 0;
  let priorYearGrossProfit = 0;
  let operatingActivities = 0;
  let priorYearOperatingActivities = 0;
  let netFinanceCost = 0;
  let priorYearNetFinanceCost = 0;
  let isGrossProfitCalculated = false;

  let subCategorySums = {};
  let priorYearSums = {};

  for (let subCategoryKey in incomeSubcategory["Income"]) {
    let subCategorySum = 0;
    let priorYearSum = 0;

    incomeSubcategory["Income"][subCategoryKey].forEach((item) => {
      const lastColumnValue =
        item[Object.keys(item)[Object.keys(item).length - 1]];
      const priorYearValue = item.prioryear
        ? parseFloat(item.prioryear.replace(/,/g, ""))
        : 0;
      const value = parseFloat(lastColumnValue.replace(/,/g, ""));

      if (!isNaN(value)) {
        // subCategorySum += value;
        // priorYearSum += priorYearValue;
        subCategorySum -= Math.round(value);

        priorYearSum -= Math.round(priorYearValue);
      }
    });

    subCategorySums[subCategoryKey] = Math.round(subCategorySum);
    priorYearSums[subCategoryKey] = Math.round(priorYearSum);

    if (subCategorySum !== 0) {
      if (subCategoryKey === "Revenue") {
        grossProfit += subCategorySum;
        priorYearGrossProfit += Math.round(priorYearSum);
        summations.push({
          Subcategory: subCategoryKey,
          Sum: subCategorySum,
          PriorYear: priorYearSum,
        });
      } else if (subCategoryKey === "Cost of sales") {
        grossProfit -= subCategorySum;
        priorYearGrossProfit -= Math.round(priorYearSum);
        summations.push({
          Subcategory: subCategoryKey,
          Sum: subCategorySum,
          PriorYear: priorYearSum,
        });
        isGrossProfitCalculated = true;
        summations.push({
          Subcategory: <strong>Gross Profit</strong>,
          Sum: grossProfit,
          PriorYear: priorYearGrossProfit,
        });
      } else if (
        subCategoryKey === "Other income" ||
        subCategoryKey === "Administrative, selling and expenses" ||
        subCategoryKey === "Impairment loss on trade receivables"
      ) {
        operatingActivities += subCategorySum;
        priorYearOperatingActivities += Math.round(priorYearSum);

        summations.push({
          Subcategory: subCategoryKey,
          Sum: subCategorySum,
          PriorYear: priorYearSum,
        });
      } else if (subCategoryKey === "Finance income") {
        netFinanceCost += subCategorySum;
        priorYearNetFinanceCost += Math.round(priorYearSum);
        summations.push({
          Subcategory: subCategoryKey,
          Sum: subCategorySum,
          PriorYear: priorYearSum,
        });
      } else if (subCategoryKey === "Finance cost") {
        netFinanceCost -= Math.round(subCategorySum);
        priorYearNetFinanceCost -= Math.round(priorYearSum);
        summations.push({
          Subcategory: subCategoryKey,
          Sum: subCategorySum,
          PriorYear: priorYearSum,
        });
      } else if (!isGrossProfitCalculated) {
        summations.push({
          Subcategory: <strong>Gross Profit</strong>,
          Sum: grossProfit,
          PriorYear: priorYearGrossProfit,
        });
        isGrossProfitCalculated = true;
        summations.push({
          Subcategory: subCategoryKey,
          Sum: subCategorySum,
          PriorYear: priorYearSum,
        });
      } else {
        summations.push({
          Subcategory: subCategoryKey,
          Sum: subCategorySum,
          PriorYear: priorYearSum,
        });
      }
    }
  }
  // Now, insert "Result from Operating Activities" immediately after "Impairment loss on trade receivables"
  const impairmentIndex = summations.findIndex(
    (item) => item.Subcategory === "Impairment loss on trade receivables"
  );
  if (impairmentIndex !== -1) {
    const resultFromOperatingActivities = Math.round(
      grossProfit + operatingActivities
    );
    const priorYearResultFromOperatingActivities = Math.round(
      priorYearGrossProfit + priorYearOperatingActivities
    );

    summations.splice(impairmentIndex + 1, 0, {
      Subcategory: "Result from Operating Activities",
      Sum: resultFromOperatingActivities,
      PriorYear: priorYearResultFromOperatingActivities,
    });
  }
  const resultFromOperatingActivities = Math.round(
    grossProfit + operatingActivities
  );
  const priorYearResultFromOperatingActivities = Math.round(
    priorYearGrossProfit + priorYearOperatingActivities
  );

  // summations.push({
  //   Subcategory: "Result from Operating Activities",
  //   Sum: resultFromOperatingActivities,
  //   PriorYear: priorYearResultFromOperatingActivities,
  // });
  const financecostIndex = summations.findIndex(
    (item) => item.Subcategory === "Finance cost"
  );
  if (financecostIndex !== -1) {
    const netFinanceCostSum = Math.round(netFinanceCost + operatingActivities);
    // Calculate net finance cost as the sum of finance income and finance cost

    // const priorYearNetFinanceCostSum =
    //   priorYearNetFinanceCost + priorYearOperatingActivities;
    summations.splice(financecostIndex + 1, 0, {
      Subcategory: "Net Finance cost",
      Sum: netFinanceCost,
      PriorYear: priorYearNetFinanceCost,
      fontWeight: "bold", // Set fontWeight to "bold"
    });
  }

  // summations.push({
  //   Subcategory: "Net Finance cost",
  //   Sum: netFinanceCost,  // Calculate it as the sum of Finance Income and Finance Cost
  //   PriorYear: priorYearNetFinanceCost,
  //   fontWeight: "bold", // Set fontWeight to "bold"
  // });
  const netFinanceCostSum = Math.round(netFinanceCost + operatingActivities);
  const priorYearNetFinanceCostSum = Math.round(
    priorYearNetFinanceCost + priorYearOperatingActivities
  );

  // summations.push({
  //   Subcategory: "Net Finance Cost",
  //   Sum: netFinanceCostSum,
  //   PriorYear: priorYearNetFinanceCostSum,
  // });
  const financecostIndex2 = financecostIndex + 1; // Increment the index

  const profitBeforeMinimumTaxIndex = summations.findIndex(
    (item) => item.Subcategory === "Profit before Minimum Tax"
  );

  if (financecostIndex2 !== -1 && profitBeforeMinimumTaxIndex !== -1) {
    const financeCost = summations[financecostIndex2]; // Use financecostIndex2
    summations.splice(financecostIndex2, 1); // Remove Net Finance Cost
    summations.splice(profitBeforeMinimumTaxIndex, 0, financeCost); // Insert Net Finance Cost before Profit before Minimum Tax
  }

  const profitBeforeMinimumTax = Math.round(
    resultFromOperatingActivities + netFinanceCostSum
  );
  const priorYearProfitBeforeMinimumTax = Math.round(
    priorYearResultFromOperatingActivities + priorYearNetFinanceCostSum
  );

  summations.push({
    Subcategory: "Profit before Minimum Tax",
    Sum: profitBeforeMinimumTax,
    PriorYear: priorYearProfitBeforeMinimumTax,
  });

  const minimumTaxExpense = subCategorySums["Minimum tax expense"]
    ? subCategorySums["Minimum tax expense"]
    : 0;
  const priorYearMinimumTaxExpense = priorYearSums["Minimum tax expense"]
    ? priorYearSums["Minimum tax expense"]
    : 0;

  const profitBeforeIncomeTax = Math.round(
    profitBeforeMinimumTax + minimumTaxExpense
  );
  const priorYearProfitBeforeIncomeTax = Math.round(
    priorYearProfitBeforeMinimumTax + priorYearMinimumTaxExpense
  );

  summations.push({
    Subcategory: "Profit before Income Tax",
    Sum: profitBeforeIncomeTax,
    PriorYear: priorYearProfitBeforeIncomeTax,
  });

  // Calculate Profit from Continuing Operations
  const taxationExpense = subCategorySums["Taxation"]
    ? subCategorySums["Taxation"]
    : 0;
  const priorYearTaxationExpense = priorYearSums["Taxation"]
    ? priorYearSums["Taxation"]
    : 0;

  const profitFromContinuingOperations = Math.round(
    profitBeforeIncomeTax + taxationExpense
  );
  const priorYearProfitFromContinuingOperations = Math.round(
    priorYearProfitBeforeIncomeTax + priorYearTaxationExpense
  );

  summations.push({
    Subcategory: "Profit from Continuing Operations",
    Sum: profitFromContinuingOperations,
    PriorYear: priorYearProfitFromContinuingOperations,
  });

  // ... (other calculations)

  //calculate profit for the year

  const LossFromDiscontinuedOperations = subCategorySums[
    "Loss from discontinued operations"
  ]
    ? subCategorySums["Loss from discontinued operations"]
    : 0;
  const priorYearLossFromDiscontinuedOperations = priorYearSums[
    "Loss from discontinued operations"
  ]
    ? priorYearSums["Loss from discontinued operations"]
    : 0;
  const profitForTheYear = Math.round(
    profitFromContinuingOperations + LossFromDiscontinuedOperations
  );
  const priorYearProfitForTheYear = Math.round(
    priorYearProfitFromContinuingOperations +
      priorYearLossFromDiscontinuedOperations
  );

  summations.push({
    Subcategory: "Profit for the year",
    Sum: profitForTheYear,
    PriorYear: priorYearProfitForTheYear,
  });

  return summations;
};

const LossandProfit = () => {
  const [incomeSum, setIncomeSum] = useState([]);
  const [incomeSubcategory, setIncomeSubcategory] = useState({});
  const [subcategory, setSubcategory] = useState({});
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the authentication token from wherever you've stored it (e.g., local storage)
        const token = localStorage.getItem("jwtToken");

        // Include the token in the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Make an API call to fetch categorized data
        const response = await axios.get(
          `${apiUrl}/api/mapped-data`,
          { headers } // Include the headers in the request
        );

        // Assuming the fetched data structure matches your requirements
        const mappedData = response.data[0];

        // Set the subcategory state with the fetched data
        setSubcategory(mappedData.subcategory);

        // Calculate summations and set state for incomeSum
        const summations = calculateSummations(mappedData.subcategory);
        setIncomeSum(summations);
      } catch (error) {
        console.error("Error fetching mapped data:", error);
      }
    };

    fetchData();
  }, []);

  // You might not need this useEffect if subcategory updates are not necessary
  useEffect(() => {
    setIncomeSubcategory(subcategory);
    // Calculate summations and set state for incomeSum
    const summations = calculateSummations(subcategory);
    setIncomeSum(summations);
  }, [subcategory]);

  // useEffect(() => {
  //   const summations = calculateSummations(incomeSubcategory);
  //   setIncomeSum(summations);
  // }, [incomeSubcategory]);

  // You can remove this useEffect as the calculations are now done in the above useEffect
  // useEffect(() => {
  //   // Calculate summations and set state for incomeSum
  //   const summations = calculateSummations(incomeSubcategory);
  //   setIncomeSum(summations);
  // }, [incomeSubcategory]);

  return (
    <TablePanel title="Statement of profit or loss and other comprehensive income">
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}>Subcategory</th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2021</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
          </tr>
        </thead>
        <tbody>
          {incomeSum.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", color: "black" }}>
                No data found
              </td>
            </tr>
          ) : (
            <>
              {incomeSum.map((subCategory, index) => (
                <tr key={index}>
                  <td
                    className="statement-key"
                    style={{
                      fontSize: 16,
                      width: "100%",
                      fontWeight:
                        subCategory.Subcategory === "Gross Profit" ||
                        subCategory.Subcategory ===
                          "Result from Operating Activities" ||
                        subCategory.Subcategory === "Net Finance Cost" ||
                        subCategory.Subcategory ===
                          "Profit before Minimum Tax" ||
                        subCategory.Subcategory ===
                          "Profit before Income Tax" ||
                        subCategory.Subcategory ===
                          "Profit from Continuing Operations" ||
                        subCategory.Subcategory === "Profit for the year" ||
                        subCategory.Subcategory === "Net Finance cost"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    {subCategory.Subcategory}
                  </td>
                  <td className="statement-value">
                    {Math.round(subCategory.Sum).toLocaleString()}
                  </td>
                  <td className="statement-value">
                    {Math.round(subCategory.PriorYear).toLocaleString()}
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </TablePanel>
  );
};

export default LossandProfit;
