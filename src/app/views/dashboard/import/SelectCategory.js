import React, { useState } from 'react';

const subcategory = {
  Asset: ['Non-current', 'Current'],
  EquityandLiability: ['Non-current-Liability', 'Current-liability'],
  Income: ['Shirt', 'Pant', 'T-shirt'],
};

const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    setSelectedSubcategory(''); // Reset the subcategory when the category changes
  };

  const handleSubcategoryChange = (event) => {
    const { value } = event.target;
    setSelectedSubcategory(value);
  };

  const displaySelected = () => {
    alert(`Category is=${selectedCategory}\nSubcategory=${selectedSubcategory}`);
  };

  const resetSelection = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
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
          subcategory[selectedCategory].map((subcat, index) => (
            <option key={index}>{subcat}</option>
          ))}
      </select>

      <button onClick={displaySelected}>Show selected</button>
    </div>
  );
};

export default SelectCategory;
