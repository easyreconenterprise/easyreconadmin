import React, { useState, useEffect } from "react";
import { calculateSummations } from "../fs/LossandProfit"; // Adjust the path as needed
import axios from "axios";

const Profit = ({ priorYear }) => {
  const [incomeSum, setIncomeSum] = useState([]);
  const [incomeSubcategory, setIncomeSubcategory] = useState({});
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the authentication token from wherever you've stored it (e.g., local storage)
        const token = localStorage.getItem("jwtToken");

        // Include the token in the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Make an API call to fetch categorized data
        const response = await axios.get(
          `${apiUrl}/api/mapped-data`,
          { headers } // Include the headers in the request
        );

        // Assuming the fetched data structure matches your requirements
        const mappedData = response.data[0];

        // Set the subcategory state with the fetched data
        setIncomeSubcategory(mappedData.subcategory);

        // Calculate summations and set state for incomeSum
        const summations = calculateSummations(mappedData.subcategory);
        setIncomeSum(summations);
      } catch (error) {
        console.error("Error fetching mapped data:", error);
      }
    };

    fetchData();
  }, []);

  // Find the "Profit for the year" object
  const profitForTheYear = incomeSum.find(
    (subCategory) => subCategory.Subcategory === "Profit for the year"
  );

  if (!profitForTheYear) {
    return null; // Handle the case when the object is not found
  }
  const selectedProfit = priorYear
    ? Math.round(profitForTheYear.PriorYear)
    : Math.round(profitForTheYear.Sum);

  return selectedProfit; // Return the raw numeric value
};

export default Profit;
