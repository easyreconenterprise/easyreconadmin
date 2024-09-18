import React from "react";
import Noncurrent from "./Noncurrent";
import Current from "./Current";
import Nonculi from "./Nonculi";
import Culi from "./Culi";
import Equi from "./Equi";

const Totalequi = ({ subcategory }) => {
  // Calculate the total Non-current asset
  const totalNonCuli = Nonculi({ subcategory });

  // Calculate the total Current asset
  const totalCuli = Culi({ subcategory });
  const totalEqui = Equi({ subcategory });

  // Calculate the total Asset by adding Non-current and Current
  const totalAsset = totalNonCuli + totalCuli + totalEqui;
  const formattedTotalAsset = Math.round(totalAsset).toLocaleString();

  return (
    <div>
      <p>{formattedTotalAsset}</p>
    </div>
  );
};

export default Totalequi;
