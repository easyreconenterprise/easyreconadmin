/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import MappedTable from './MappedTable';
import Category from './Category';
import './Style.css';
import DropDown from './DropDown';
import UnMappedTable from './UnmappedTable';
// import FinancialSummary from './FinancialSummary'

const Subcategory = {
  Asset: {
    'Non-current': {
      'Property plant and equipment': [],
      'Deferred tax assets': [],
      ' Investment': [],
      'Other receivables': [],
      'Intangible assets and good will': [],
      'Biological assets': [],
      'Investment property': [],
    },
    Current: {
      Inventories: [],
      'Trade and other receivables': [],
      'prepayment and advances': [],
      'Cash and cash equivalent': [],
    },
  },
  'Equity and Liability': {
    'Non-current-Liability': {
      'Deferred Income': [],
      Provision: [],
      'Deferred tax liability': [],
      'Trade and other payables': [],
      'Loans and borrowings': [],
    },

    'Current-liability': {
      'Bank Overdraft': [],
      'Current tax liabilities': [],
      'Deferred Incomes': [],
      'Loans and borrowing': [],
      'Trade and other payable': [],
    },
    Equity: {
      'Capital and reserves': [],
      'Share capital': [],
      'Retained earnings': [],
      ' Reserves': [],
      'Share Premium': [],
    },
  },
  Income: {
    'Continuing operations': {
      Revenue: [],
      'Cost of sales': [],
      'Other income': [],
      'Administrative, selling and expenses': [],
      'Impairment loss on trade receivables': [],
      'Finance income': [],
      'Finance cost': [],
      'Minimum tax expense': [],
      Taxation: [],
    },

    'Discontinuing operations': {
      'Loss from discontinued operations': [],
    },
  },
};

const Trialbal = ({ data, setData }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [Statement, setStatement] = useState(false);
  const [subcategory, setSubcategory] = useState(Subcategory);

  // console.log('unmapped', subcategory);
  const headers = data?.length > 0 ? Object.keys(data[0]) : [];

  const handleDrop = () => {
    const updatedData = data.filter((item) => item !== draggedItem);

    setData(updatedData);
    // Clear the dragged item from the state
    setDraggedItem(null);
  };

  const handleDragStart = (event, row) => {
    setDraggedItem(row);
    event.dataTransfer.setData('application/json', JSON.stringify(row));
  };
  useEffect(() => {
    // Convert the object to a JSON string
    const jsonData = JSON.stringify(subcategory);

    // Set the JSON string in local storage
    localStorage.setItem('data', jsonData);
  });

  return (
    <div className="containers bottom-scroll-container">
      <div className="lefts">
        <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '10px' }}>
          Unmapped Account Data
        </h2>
        {data?.length > 0 ? (
          <>
            <UnMappedTable data={data} headers={headers} handleDragStart={handleDragStart} />
          </>
        ) : (
          <div>Table is Empty</div>
        )}
      </div>
      <div className="rights" style={{ width: 'auto' }}>
        <h2
          style={{ fontSize: '20px', fontWeight: '700', marginBottom: '40px', marginTop: '10px' }}
        >
          Mapped Data{' '}
        </h2>
        <DropDown subcategory={subcategory} setSubcategory={setSubcategory} onDrop={handleDrop} />

        {
          <section>
            <MappedTable subcategory={subcategory} />
          </section>
        }

        {Statement && (
          <>
            <Category subcategory={subcategory} />
            {/* <FinancialSummary subcategory={subcategory} /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Trialbal;
