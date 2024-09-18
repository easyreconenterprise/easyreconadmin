import React from "react";
import Noncurrent from "./Noncurrent";
import Current from "./Current";

const Totalass = ({ subcategory }) => {
  // Calculate the total Non-current asset

  const totalNonCurrent = parseFloat(Noncurrent({ subcategory }));

  const totalCurrent = parseFloat(Current({ subcategory }));
  // Calculate the total Asset by adding Non-current and Current
  const totalAsset = totalNonCurrent + totalCurrent;

  return (
    <div>
      <p>{totalAsset.toLocaleString()}</p>
    </div>
  );
};

export default Totalass;
