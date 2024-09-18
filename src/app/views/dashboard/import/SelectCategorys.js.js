import React, { useState } from 'react';

const subcategory = {
  Asset: {
    'Non-current': [
      'Property plant and equipment',
      ' Deferred tax assets',
      'Investment',
      'Other receivables',
      'Intangible assets and good will',
      '   Biological assets',
      'Investment property',
    ],
    Current: [
      'Inventories',
      'Trade and other receivables',
      'prepayment and advances',
      'Cash and cash equivalent',
    ],
  },
  EquityandLiability: {
    'Non-current-Liability': [
      'Deferred Income',
      'Provision',
      'Deferred tax liability',
      '  Trade and other payables',
      ' Loans and borrowings',
    ],
    'Current-liability': [
      'Bank Overdraft',
      'Current tax liabilities',
      ' Deferred Incomes',
      'Loans and borrowing',
      ' Trade and other payable',
    ],
    Equity: [
      ' Capital and reserves',
      ' Share capital',
      '  Retained earnings',
      'Reserves',
      'Share Premium',
    ],
  },
  Income: {
    Shirt: ['Sub-Sub-Category I', 'Sub-Sub-Category J'],
    Pant: ['Sub-Sub-Category K', 'Sub-Sub-Category L'],
    'T-shirt': ['Sub-Sub-Category M', 'Sub-Sub-Category N'],
  },
};

const SelectCategorys = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState('');

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    setSelectedSubcategory('');
    setSelectedSubSubcategory(''); // Reset the sub-subcategory when the category changes
  };

  const handleSubcategoryChange = (event) => {
    const { value } = event.target;
    setSelectedSubcategory(value);
    setSelectedSubSubcategory(''); // Reset the sub-subcategory when the subcategory changes
  };

  const handleSubSubcategoryChange = (event) => {
    const { value } = event.target;
    setSelectedSubSubcategory(value);
  };

  const displaySelected = () => {
    alert(
      `Category is=${selectedCategory}\nSubcategory=${selectedSubcategory}\nSub-Subcategory=${selectedSubSubcategory}`
    );
  };

  const resetSelection = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
    setSelectedSubSubcategory('');
  };

  return (
    <div>
      <label>Main Caption</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="" disabled selected>
          Choose category
        </option>
        <option>Asset</option>
        <option>EquityandLiability</option>
        <option>Income</option>
      </select>

      <select id="categorySelect" value={selectedSubcategory} onChange={handleSubcategoryChange}>
        <option value="" disabled selected>
          Select captions
        </option>
        {selectedCategory &&
          subcategory[selectedCategory] &&
          Object.keys(subcategory[selectedCategory]).map((subcat, index) => (
            <option key={index}>{subcat}</option>
          ))}
      </select>

      <select
        id="subSubCategorySelect"
        value={selectedSubSubcategory}
        onChange={handleSubSubcategoryChange}
      >
        <option value="" disabled selected>
          Select sub-captions
        </option>
        {selectedCategory &&
          selectedSubcategory &&
          subcategory[selectedCategory][selectedSubcategory] &&
          subcategory[selectedCategory][selectedSubcategory].map((subsubcat, index) => (
            <option key={index}>{subsubcat}</option>
          ))}
      </select>

      <button onClick={displaySelected}>Show selected</button>
    </div>
  );
};

export default SelectCategorys;
