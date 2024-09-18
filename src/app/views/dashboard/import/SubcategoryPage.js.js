import React from 'react';
import { Link } from 'react-router-dom';
import MappedTable from './MappedTable'; // Import the MappedTable component

const SubcategoryPage = ({ categorizedData }) => {
  // Define an object to store the subcategories and their totals
  const subcategoryTotals = {
    Asset: {},
    'Equity and Liability': {},
  };

  // Calculate the totals for each subcategory
  categorizedData.forEach((item) => {
    const { category, subcategory, subsubCategory, prioryear, KML } = item;

    if (category === 'Asset' || category === 'Equity and Liability') {
      if (!subcategoryTotals[category][subcategory]) {
        subcategoryTotals[category][subcategory] = {
          prioryearTotal: 0,
          KMLTotal: 0,
        };
      }

      subcategoryTotals[category][subcategory].prioryearTotal +=
        parseFloat(prioryear.replace(/,/g, '')) || 0;
      subcategoryTotals[category][subcategory].KMLTotal += parseFloat(KML.replace(/,/g, '')) || 0;
    }
  });

  return (
    <main>
      <section style={{ marginTop: '50px' }}>
        <b>
          <h2
            style={{
              fontSize: '20px',
              marginBottom: '10px',
              marginLeft: '30px',
              fontWeight: '800',
            }}
          >
            Subcategory Totals
          </h2>
        </b>
        {/* Display subcategories and their totals */}
        {Object.entries(subcategoryTotals).map(([category, subcategories]) => (
          <div key={category}>
            <h3>{category}</h3>
            <table>
              <thead>
                <tr>
                  <th>Subcategory</th>
                  <th>Prior Year Total</th>
                  <th>KML Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(subcategories).map(([subcategory, totals]) => (
                  <tr key={subcategory}>
                    <td>{subcategory}</td>
                    <td>{totals.prioryearTotal.toLocaleString()}</td>
                    <td>{totals.KMLTotal.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      <section>
        {/* Render MappedTable component */}
        <MappedTable subcategory={categorizedData} />
      </section>

      <section>
        {/* Add a link to navigate back to the Trial page */}
        <Link to="/dashboard/trial" style={{ color: 'black', fontSize: '20px' }}>
          Back to Trial Page
        </Link>
      </section>
    </main>
  );
};

export default SubcategoryPage;
