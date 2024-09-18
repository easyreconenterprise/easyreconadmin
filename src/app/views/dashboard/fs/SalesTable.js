import React, { useState, useEffect } from 'react';
import { TablePanel } from './TablePanel';

export const SalesTable = ({ subcategory }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [categorySum, setCategorySum] = useState([]);

  const calculateSummations = () => {
    let summations = [];
    let categorySums = {};
    let subCategorySums = {};
    for (let category in subcategory) {
      for (let subCategoryKey in subcategory[category]) {
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

          if (categorySums[category]) {
            categorySums[category] += sum;
          } else {
            categorySums[category] = sum;
          }

          if (subCategorySums[subCategoryKey]) {
            subCategorySums[subCategoryKey] += sum;
          } else {
            subCategorySums[subCategoryKey] = sum;
          }
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
  }, [subcategory]);
  useEffect(() => {
    const cat = JSON.parse(localStorage.getItem('categoryData'));
    // console.log('categoryData');
    if (cat) {
      setCategoryData(cat);
    }
  }, []);
  const totalData = [
    {
      id: 1,
      description: 'Finance income',
      value: 34563,
    },
    {
      id: 1,
      description: 'Finance cost',
      value: 34563,
    },
  ];
  const totalAsset2 = [
    {
      id: 1,
      description: 'Net finance costs',
      value: 34563,
    },
  ];
  const totalnonData = [
    {
      id: 1,
      description: 'Other income',
      value: 34563,
    },
    {
      id: 1,
      description: 'Administrative, selling and expenses',
      value: 34563,
    },
    {
      id: 1,
      description: 'Impairment loss on trade receivables',
      value: 34563,
    },
  ];
  const totalAsset = [
    {
      id: 1,
      description: 'Result from operations',
      value: 34563,
    },
  ];
  const totalEquit = [
    {
      id: 1,
      description: 'Profit for the year',
      value: 34563,
    },
  ];
  const totalComp = [
    {
      id: 1,
      description: 'Total comprehensive income for the year',
      value: 34563,
    },
  ];
  const currentEquit = [
    {
      id: 1,
      description: 'Loss from discontinued operations, net of tax',
      value: 34563,
    },
  ];
  const noncurrentEquit = [
    {
      id: 1,
      description: 'Minimum tax expense',
      value: 34563,
    },
  ];
  const Revenue = [
    {
      id: 1,
      description: 'Revenue',
      value: 33200,
      itemCount: 40,
    },

    {
      id: 2,
      description: 'Cost of sales',
      value: 33200,
      itemCount: 40,
    },
  ];
  const tableQuit = [
    {
      id: 1,
      description: 'Profit before minimum tax',
      value: 33200,
      itemCount: 40,
    },
  ];
  const tableLia = [
    {
      id: 1,
      description: 'Profit from continuing operations',
      value: 33200,
      itemCount: 40,
    },
  ];
  const tablenonLia = [
    {
      id: 1,
      description: 'Profit before income tax',
      value: 33200,
      itemCount: 40,
    },
  ];
  const Tax = [
    {
      id: 1,
      description: 'Taxation',
      value: 33200,
      itemCount: 40,
    },
  ];
  const grossProfit = [
    {
      id: 1,
      description: 'Gross profit',
      value: 33200,
      itemCount: 40,
    },
  ];
  return (
    <TablePanel title="Statement of Profit and Loss and other comprehensive income">
      <p style={{ fontSize: '15px' }}>For the year ended 31 December 2022</p>
      <table className="table">
        <thead>
          <tr style={{ textDecoration: 'underline 2px' }}>
            <th style={{ fontSize: '15px', fontWeight: '500' }}></th>

            <th style={{ fontSize: '15px' }}></th>
            <th style={{ fontSize: '15px' }}>2022</th>
            <th style={{ fontSize: '15px' }}>2023</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style={{ fontSize: '15px', width: '100%' }}>Continuing Operations</th>

            <th></th>
            <th style={{ fontSize: '15px' }}></th>
            <th style={{ fontSize: '15px' }}></th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style={{ fontSize: '15px' }}></th>

            <th></th>
            <th style={{ fontSize: '15px' }}>N0.00</th>
            <th style={{ fontSize: '15px' }}>N0.00</th>
          </tr>
        </thead>
        {Revenue.map((sale) => (
          <tr key={sale.id}>
            <td>{sale.description}</td>

            <td></td>

            <td></td>
            <td>N{sale.value}</td>
          </tr>
        ))}
        {grossProfit.map((sale) => (
          <tr
            key={sale.id}
            style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}
          >
            <b>
              {' '}
              <td>{sale.description}</td>
            </b>
            <td></td>

            <td></td>
            <td>N{sale.value}</td>
          </tr>
        ))}
        {totalnonData.map((sale) => (
          <tr key={sale.id}>
            <td>{sale.description}</td>

            <td></td>

            <td></td>
            <td>N{sale.value}</td>
          </tr>
        ))}

        <tbody>
          {totalAsset.map((sale) => (
            <tr
              key={sale.id}
              style={{
                fontSize: '15px',
                border: 'none',
                borderBottom: '2px solid black',
                borderTop: '2px solid black',
              }}
            >
              <b>
                {' '}
                <td>{sale.description}</td>
              </b>

              <td></td>

              <td></td>
              <td style={{ fontSize: '15px', border: 'none' }}>N{sale.value}</td>
            </tr>
          ))}
          {totalData.map((sale) => (
            <tr key={sale.id}>
              <td style={{ fontSize: '15px', border: 'none' }}>{sale.description}</td>

              <td></td>

              <td></td>
              <td style={{ fontSize: '15px', border: 'none' }}>N{sale.value}</td>
            </tr>
          ))}
        </tbody>

        {totalAsset2.map((sale) => (
          <tr
            key={sale.id}
            style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}
          >
            <b>
              {' '}
              <td>{sale.description}</td>
            </b>
            <td></td>

            <td></td>
            <td>N{sale.value}</td>
          </tr>
        ))}

        <tbody>
          {tableQuit.map((sale) => (
            <tr key={sale.id} style={{ border: 'none' }}>
              <td style={{ border: 'none', fontSize: '15px' }}>{sale.description}</td>
              <td style={{ border: 'none', fontSize: '15px' }}>(4)</td>

              <td style={{ border: 'none', fontSize: '15px' }}></td>
              <td style={{ border: 'none', fontSize: '15px' }}>N{sale.value}</td>
            </tr>
          ))}
          {noncurrentEquit.map((sale) => (
            <tr
              key={sale.id}
              style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}
            >
              <b>
                {' '}
                <td style={{ border: 'none' }}> {sale.description}</td>
              </b>
              <td style={{ border: 'none' }}></td>

              <td style={{ border: 'none' }}></td>
              <td style={{ border: 'none' }}>N{sale.value}</td>
            </tr>
          ))}
        </tbody>

        {tablenonLia.map((sale) => (
          <tr key={sale.id} style={{ border: 'none' }}>
            <td style={{ border: 'none', fontSize: '15px' }}>{sale.description}</td>
            <td style={{ border: 'none', fontSize: '15px' }}>(16)</td>

            <td style={{ border: 'none', fontSize: '15px' }}></td>
            <td style={{ border: 'none', fontSize: '15px' }}>N{sale.value}</td>
          </tr>
        ))}
        {Tax.map((sale) => (
          <tr
            key={sale.id}
            style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}
          >
            <b>
              {' '}
              <td style={{ border: 'none' }}> {sale.description}</td>
            </b>
            <td style={{ border: 'none' }}></td>

            <td style={{ border: 'none' }}></td>
            <td style={{ border: 'none' }}>N{sale.value}</td>
          </tr>
        ))}

        <tbody>
          {tableLia.map((sale) => (
            <tr
              key={sale.id}
              style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}
            >
              <td style={{ fontSize: '15px' }}>{sale.description}</td>
              <td style={{ fontSize: '15px' }}>(4)</td>

              <td style={{ fontSize: '15px' }}></td>
              <td style={{ fontSize: '15px' }}>N{sale.value}</td>
            </tr>
          ))}
        </tbody>
        <br></br>
        <br></br>

        <h2 style={{ fontSize: '16px' }}>
          <b>Discontinuing operations</b>{' '}
        </h2>

        {currentEquit.map((sale) => (
          <tr
            key={sale.id}
            style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}
          >
            <b>
              {' '}
              <td style={{ border: 'none' }}>{sale.description}</td>
            </b>
            <td style={{ border: 'none' }}></td>

            <td style={{ border: 'none' }}></td>
            <td style={{ border: 'none' }}>N{sale.value}</td>
          </tr>
        ))}
        {totalEquit.map((sale) => (
          <tr
            key={sale.id}
            style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}
          >
            <b>
              {' '}
              <td style={{ border: 'none' }}>{sale.description}</td>
            </b>
            <td style={{ border: 'none' }}></td>

            <td style={{ border: 'none' }}></td>
            <td style={{ border: 'none' }}>N{sale.value}</td>
          </tr>
        ))}
        {totalComp.map((sale) => (
          <tr
            key={sale.id}
            style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}
          >
            <b>
              {' '}
              <td style={{ border: 'none' }}>{sale.description}</td>
            </b>
            <td style={{ border: 'none' }}></td>

            <td style={{ border: 'none' }}></td>
            <td style={{ border: 'none' }}>N{sale.value}</td>
          </tr>
        ))}
      </table>
    </TablePanel>
  );
};
