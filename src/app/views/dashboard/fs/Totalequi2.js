import React from "react";
import Nonculi2 from "./Nonculi2";
import Culi2 from "./Culi2";
import Equi2 from "./Equi2";

const Totalequi2 = ({ subcategory }) => {
  // Calculate the total Non-current asset
  const totalNonCuli = Nonculi2({ subcategory });

  // Calculate the total Current asset
  const totalCuli = Culi2({ subcategory });
  const totalEqui = Equi2({ subcategory });

  // Calculate the total Asset by adding Non-current and Current
  const totalAsset = totalNonCuli + totalCuli + totalEqui;
  const formattedTotalAsset = Math.round(totalAsset).toLocaleString();
  return (
    <div>
      <p>{formattedTotalAsset}</p>
    </div>
  );
};

export default Totalequi2;
