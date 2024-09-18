import React, { useEffect, useState } from "react";
import Revenue3 from "./Revenue3";
import Other2 from "./Other2";

const Total = ({
  editedText1,
  editedText2,
  editedText3,
  editedText4,
  editedText5,
  editedText6,
  editedText7,
  editedText8,
  editedText9,
  editedText10,
  editedText11,
  editedText19,
  editedText20,
  subcategory,
}) => {
  // Define a state to store the calculated total
  const [total1, setTotal1] = useState(0);

  useEffect(() => {
    // Convert all text values to numbers
    const values = {
      value1: parseFloat(editedText1) || 0,
      value2: parseFloat(editedText2) || 0,
      value3: parseFloat(editedText3) || 0,
      value4: parseFloat(editedText4) || 0,
      value5: parseFloat(editedText5) || 0,
      value6: parseFloat(editedText6) || 0,
      value7: parseFloat(editedText7) || 0,
      value8: parseFloat(editedText8) || 0,
      value9: parseFloat(editedText9) || 0,
      value10: parseFloat(editedText10) || 0,
      value11: parseFloat(editedText11) || 0,
      value19: parseFloat(editedText19) || 0,
      value20: parseFloat(editedText20) || 0,
    };

    // Fetch data from the database and convert to numbers
    // Note: I'm assuming Revenue3 and Other2 are async functions
    Promise.all([Revenue3({ subcategory }), Other2({ subcategory })])
      .then(([revenueData, other2Data]) => {
        const revenueValue = parseFloat(revenueData) || 0;
        const other2Value = parseFloat(other2Data) || 0;

        // Calculate newTotal1
        const newTotal1 =
          Object.values(values).reduce(
            (acc, currentValue) => acc + currentValue,
            0
          ) +
          revenueValue +
          other2Value;

        // Set newTotal1 in the state
        setTotal1(newTotal1);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [
    editedText1,
    editedText2,
    editedText3,
    editedText4,
    editedText5,
    editedText6,
    editedText7,
    editedText8,
    editedText9,
    editedText10,
    editedText11,
    editedText19,
    editedText20,
    subcategory,
  ]);

  return (
    <div>
      <p> {total1}</p>
      {/* You can use the total1 value in this component as needed */}
    </div>
  );
};

export default Total;
