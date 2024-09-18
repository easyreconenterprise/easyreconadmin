import React, { useState, useEffect } from 'react';

const LocalStorageEdit = ({ defaultValue, storageKey, onUpdate }) => {
  const [value, setValue] = useState(localStorage.getItem(storageKey) || defaultValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem(storageKey, value);
    onUpdate && onUpdate(value); // Call the onUpdate callback if provided
  }, [value, storageKey, onUpdate]);

  return <input type="text" value={value} onChange={handleInputChange} />;
};

export default LocalStorageEdit;
