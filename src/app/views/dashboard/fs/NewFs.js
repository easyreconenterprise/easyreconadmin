import React, { useState, useEffect } from 'react';
import { TablePanel } from './TablePanel';

const NewFs = () => {
  const [incomeSum, setIncomeSum] = useState([]); // Declare incomeSum state variable
  const [incomeSubcategory, setIncomeSubcategory] = useState({});

  const calculateSummations = () => {
    let summations = [];
    let grossProfit = 0;
    let priorYearGrossProfit = 0;
    let operatingActivities = 0;
    let priorYearOperatingActivities = 0;
    let isGrossProfitCalculated = false;

    for (let subCategoryKey in incomeSubcategory['Income']) {
      let subCategorySum = 0;
      let priorYearSum = 0;

      incomeSubcategory['Income'][subCategoryKey].forEach((item) => {
        const lastColumnValue = item[Object.keys(item)[Object.keys(item).length - 1]];
        const priorYearValue = item.prioryear ? parseFloat(item.prioryear.replace(/,/g, '')) : 0;
        const value = parseFloat(lastColumnValue.replace(/,/g, ''));

        if (!isNaN(value)) {
          subCategorySum += value;
          priorYearSum += priorYearValue;
        }
      });

      if (subCategorySum !== 0) {
        if (subCategoryKey === 'Revenue') {
          grossProfit += subCategorySum;
          priorYearGrossProfit += priorYearSum;
          summations.push({
            Subcategory: subCategoryKey,
            Sum: subCategorySum,
            PriorYear: priorYearSum,
          });
        } else if (subCategoryKey === 'Cost of sales') {
          grossProfit -= subCategorySum;
          priorYearGrossProfit -= priorYearSum;
          summations.push({
            Subcategory: subCategoryKey,
            Sum: subCategorySum,
            PriorYear: priorYearSum,
          });
          isGrossProfitCalculated = true;
          summations.push({
            Subcategory: <strong>Gross Profit</strong>, // Apply bold styling
            Sum: grossProfit,
            PriorYear: priorYearGrossProfit,
          });
        } else if (
          subCategoryKey === 'Other income' ||
          subCategoryKey === 'Administrative, selling and expenses' ||
          subCategoryKey === 'Impairment loss on trade receivables'
        ) {
          operatingActivities += subCategorySum;
          priorYearOperatingActivities += priorYearSum;
          summations.push({
            Subcategory: subCategoryKey,
            Sum: subCategorySum,
            PriorYear: priorYearSum,
          });
        } else if (!isGrossProfitCalculated) {
          summations.push({
            Subcategory: <strong>Gross Profit</strong>, // Apply bold styling
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

    const resultFromOperatingActivities = grossProfit + operatingActivities;
    const priorYearResultFromOperatingActivities =
      priorYearGrossProfit + priorYearOperatingActivities;

    summations.push({
      Subcategory: 'Result from Operating Activities',
      Sum: resultFromOperatingActivities,
      PriorYear: priorYearResultFromOperatingActivities,
    });

    return summations;
  };

  useEffect(() => {
    const summations = calculateSummations();
    setIncomeSum(summations);
  }, [incomeSubcategory]);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    setIncomeSubcategory(JSON.parse(storedData));
  }, []);

  return (
    <TablePanel title="Income Statement">
      <table className="table">
        <thead>
          <tr style={{ textDecoration: 'underline 2px' }}>
            <th style={{ fontSize: '15px', fontWeight: '500' }}>Subcategory</th>
            <th style={{ fontSize: '15px' }}>2022</th>
            <th style={{ fontSize: '15px' }}>Prior Year</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style={{ fontSize: '15px' }}></th>
            <th style={{ fontSize: '15px' }}>N0.00</th>
            <th style={{ fontSize: '15px' }}>N0.00</th>
          </tr>
        </thead>
        <tbody>
          {incomeSum.map((subCategory, index) => (
            <tr key={index}>
              <td
                className="statement-key"
                style={{
                  fontSize: 16,
                  width: '100%',
                  fontWeight:
                    subCategory.Subcategory === 'Gross Profit' ||
                    subCategory.Subcategory === 'Result from Operating Activities'
                      ? 'bold'
                      : 'normal',
                }}
              >
                {subCategory.Subcategory}
              </td>
              <td className="statement-value">{subCategory.Sum.toLocaleString()}</td>
              <td className="statement-value">{subCategory.PriorYear.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TablePanel>
  );
};

export default NewFs;
