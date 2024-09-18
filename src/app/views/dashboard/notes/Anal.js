import React from "react";
import Cost from "./Cost";
import Admin from "./Admin";

const Anal = ({ subcategory }) => {
  return (
    <div style={{ margin: "20px" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}
      >
        <tbody>
          <Cost subcategory={subcategory} />

          <Admin subcategory={subcategory} />
        </tbody>
      </table>
    </div>
  );
};

export default Anal;
