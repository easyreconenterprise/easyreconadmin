import React, { useState } from 'react';

const AccountingData = [
  { category: 'Sales', amount: 1000, type: 'Revenue' },
  { category: 'Sales', amount: 500, type: 'Revenue' },
  { category: 'Expenses', amount: 200, type: 'Expenditure' },
  { category: 'Expenses', amount: 300, type: 'Expenditure' },
  { category: 'Sales', amount: 800, type: 'Revenue' },
  { category: 'Expenses', amount: 150, type: 'Expenditure' },
];

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);

  // Function to calculate revenue and expenditure summary for each category
  const calculateSummary = () => {
    const summary = AccountingData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = {
          category: item.category,
          revenue: 0,
          expenditure: 0,
        };
      }

      if (item.type === 'Revenue') {
        acc[item.category].revenue += item.amount;
      } else if (item.type === 'Expenditure') {
        acc[item.category].expenditure += item.amount;
      }

      return acc;
    }, {});

    const summaryArray = Object.values(summary);
    setCategoryData(summaryArray);
  };

  // Calculate the summary when the component is rendered
  useState(calculateSummary);

  return (
    <div>
      <h2>Accounting Categories</h2>
      <button onClick={calculateSummary}>Recalculate Summary</button>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Revenue</th>
            <th>Expenditure</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((category) => (
            <tr key={category.category}>
              <td>{category.category}</td>
              <td>{category.revenue}</td>
              <td>{category.expenditure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
