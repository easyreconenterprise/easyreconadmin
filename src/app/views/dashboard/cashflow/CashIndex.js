import React, { useEffect, useState } from 'react';
import ChangeInv from './ChangeInv';
import Prepay from './Prepay';
import Trade from './Trade';
import Payable from './Payable';
import Deferred from './Deferred';
import Investment from './Investment';

const CashIndex = () => {
  const [subcategory, setsubcategory] = useState({});
  useEffect(() => {
    const storedData = localStorage.getItem('data');
    // Parse the JSON string back to an object (if applicable)
    setsubcategory(JSON.parse(storedData));

    //
  }, []);
  return (
    <div>
      <h6>Changes in:</h6>
      <ChangeInv subcategory={subcategory} />
      <Prepay subcategory={subcategory} />
      <Trade subcategory={subcategory} />
      <Payable subcategory={subcategory} />
      <Deferred subcategory={subcategory} />
      <h6>Cash flow from investing activities</h6>

      <Investment subcategory={subcategory} />
    </div>
  );
};

export default CashIndex;
