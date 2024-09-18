import React from "react";
import Profit from "../import/Profit";
import Impair2 from "../cashflow/Impair2";

const Parent = ({ subcategory }) => {
  // Call the Profit component to get the profit value
  const profitValueComponent = (
    <Profit priorYear={false} subcategory={subcategory} />
  );
  console.log("Profit Value Component:", profitValueComponent);

  // Extract the numeric value from the component
  const profitValue = getNumericValue(profitValueComponent);
  console.log("Profit Value:", profitValue);

  // Check if the extracted value is a valid number
  if (!isNaN(profitValue)) {
    // Call the Impair2 component to get the impairment value
    const impairmentValueComponent = <Impair2 subcategory={subcategory} />;
    console.log("Impairment Value Component:", impairmentValueComponent);

    // Extract the numeric value from the component
    const impairmentValue = getNumericValue(impairmentValueComponent);
    console.log("Impairment Value:", impairmentValue);

    // Check if the extracted value is a valid number
    if (!isNaN(impairmentValue)) {
      // Calculate the total by adding profitValue and impairmentValue
      const total = profitValue + impairmentValue;
      console.log("Total:", total);

      return (
        <div>
          <p>{Math.abs(total).toLocaleString()}</p>
        </div>
      );
    }
  }

  return null; // Handle the case when profit or impairment values are not valid

  // Helper function to extract the numeric value from a component
  function getNumericValue(component) {
    if (component && component.props.children) {
      const numericValue = parseFloat(
        component.props.children.replace(/[^0-9.-]+/g, "")
      );
      return isNaN(numericValue) ? 0 : numericValue;
    }
    return 0;
  }
};

export default Parent;
