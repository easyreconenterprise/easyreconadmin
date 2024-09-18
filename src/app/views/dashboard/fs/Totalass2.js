// import React from "react";
// import Noncurrent from "./Noncurrent";
// import Current from "./Current";
// import Noncurrent2 from "./Noncurrent2";
// import Current2 from "./Current2";

// const Totalass2 = ({ subcategory }) => {
//   // Calculate the total Non-current asset
//   const totalNonCurrent = Noncurrent2({ subcategory });

//   // Calculate the total Current asset
//   const totalCurrent = Current2({ subcategory });

//   // Calculate the total Asset by adding Non-current and Current
//   const totalAsset = totalNonCurrent + totalCurrent;

//   return (
//     <div>
//       <p>{totalAsset.toLocaleString()}</p>
//     </div>
//   );
// };

// export default Totalass2;
import React from "react";
import Noncurrent2 from "./Noncurrent2";
import Current2 from "./Current2";

const Totalass2 = ({ subcategory }) => {
  // Calculate the total Non-current asset
  const totalNonCurrent = parseFloat(Noncurrent2({ subcategory }));

  // Calculate the total Current asset
  const totalCurrent = parseFloat(Current2({ subcategory }));

  // Calculate the total Asset by adding Non-current and Current
  const totalAsset = totalNonCurrent + totalCurrent;

  return (
    <div>
      <p>{totalAsset.toLocaleString()}</p>
    </div>
  );
};

export default Totalass2;
