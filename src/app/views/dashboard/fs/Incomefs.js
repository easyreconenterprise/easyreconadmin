import React, { useState, useEffect } from "react";
import { TablePanel } from "./TablePanel";
import axios from "axios";

const Incomefs = () => {
  const [categorySum, setCategorySum] = useState([]);
  const [subcategory, setSubcategory] = useState({});
  const [nonCurrentLiability, setNonCurrentLiability] = useState(0);
  const [currentLiability, setCurrentLiability] = useState(0);

  const calculateSummations = () => {
    let summations = [];
    let categorySums = {};
    let subCategorySums = {};
    let nonCurrentLiabilityTotal = 0;
    let currentLiabilityTotal = 0;

    // ... (your existing calculations)

    // Calculate nonCurrentLiability and currentLiability
    for (let category in subcategory) {
      if (category === "Income") {
        continue;
      }

      for (let subCategoryKey in subcategory[category]) {
        for (let subSubcategoryKey in subcategory[category][subCategoryKey]) {
          // Separate calculation for "Non-current-Liability" and "Current-liability"
          if (subCategoryKey === "Non-current-Liability") {
            nonCurrentLiabilityTotal += subCategorySums[subCategoryKey];
          } else if (subCategoryKey === "Current-liability") {
            currentLiabilityTotal += subCategorySums[subCategoryKey];
          }
        }
      }
    }

    // Update the state with the calculated values
    setNonCurrentLiability(nonCurrentLiabilityTotal);
    setCurrentLiability(currentLiabilityTotal);

    return { summations, categorySums, subCategorySums };
  };
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
        setSubcategory(mappedData.subcategory);

        // Calculate summations and set state for categorySum
        const { summations, categorySums, subCategorySums } =
          calculateSummations();

        // Rest of your code here...
      } catch (error) {
        console.error("Error fetching mapped data:", error);
      }
    };

    fetchData();
  }, []);

  const subcategoryNumber = {
    "Property plant and equipment": "10(a)",
    "Deferred tax assets": "9(d)",
    "Other receivables": 12,
    "Intangible assets and goodwill": 4,
    "Biological assets": 9,
    "Investment property": 16,
    "Trade and other receivables": 12,
    Inventories: 11,
    "Prepayment and advances": 13,
    "Cash and cash equivalents": 14,
    "Share capital": "15(a)",
    "Deferred Incomes": 17,
    // Add more mappings as needed
  };

  return (
    <TablePanel title="Statement of financial position">
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Notes</th>
            <th>2022</th>
            <th>2021</th>
          </tr>
        </thead>
        <tbody>
          {subcategory && Object.keys(subcategory).length === 0 ? (
            <tr>
              <td colSpan="4" style={{ color: "black" }}>
                No data record
              </td>
            </tr>
          ) : (
            <>
              {subcategory &&
                Object.keys(subcategory).map((category, index) => {
                  if (category === "Income") {
                    return null;
                  }

                  let totalCategory = 0;
                  let totalCategorys = 0;

                  return (
                    <React.Fragment key={index}>
                      {/* Display category row */}
                      <tr>
                        <td
                          className="statement-key"
                          style={{
                            fontSize: 16,
                            marginBottom: 10,
                            fontWeight: 800,
                          }}
                        >
                          {category}
                        </td>
                        {/* ... (other columns for the category row) */}
                      </tr>
                      {/* Iterate through subcategories */}
                      {Object.keys(subcategory[category]).map(
                        (subCategoryKey) => {
                          let totalSubCategory = 0;
                          let totalSubCategorys = 0;

                          // Map through subsubcategory data
                          let subSubcategoryElements = Object.keys(
                            subcategory[category][subCategoryKey]
                          ).map((subSubcategoryKey) => {
                            let sum = 0;
                            let minus = 0;
                            const subcategoryKey =
                              subcategoryNumber[subSubcategoryKey];
                            subcategory[category][subCategoryKey][
                              subSubcategoryKey
                            ].forEach((item) => {
                              // Perform calculations here
                              const lastColumnValue =
                                item[
                                  Object.keys(item)[
                                    Object.keys(item).length - 1
                                  ]
                                ];
                              const secondColumnValue =
                                item[
                                  Object.keys(item)[
                                    Object.keys(item).length - 2
                                  ]
                                ];
                              sum += parseFloat(
                                lastColumnValue.replace(/,/g, "")
                              );
                              minus += parseFloat(
                                secondColumnValue.replace(/,/g, "")
                              );
                            });

                            totalSubCategory += sum;
                            totalCategory += sum;
                            totalSubCategorys += minus;
                            totalCategorys += minus;
                            if (sum === 0) {
                              return null;
                            }
                            if (minus === 0) {
                              return null;
                            }

                            // Display subsubcategory row with all values as positive
                            return (
                              <tr key={subSubcategoryKey}>
                                <td
                                  className="statement-key"
                                  style={{
                                    fontSize: 16,
                                    width: "100%",
                                  }}
                                >
                                  {subSubcategoryKey}
                                </td>
                                <td>{subcategoryKey}</td>
                                <td>
                                  {Math.round(Math.abs(minus)).toLocaleString()}
                                </td>
                                <td className="statement-value">
                                  {Math.round(Math.abs(sum)).toLocaleString()}
                                </td>
                              </tr>
                            );
                          });
                          if (totalSubCategory === 0) {
                            return null;
                          }
                          if (totalSubCategorys === 0) {
                            return null;
                          }
                          // Display subcategory and total rows
                          return (
                            <React.Fragment key={subCategoryKey}>
                              <tr>
                                <td
                                  className="statement-key"
                                  style={{
                                    fontSize: 16,
                                    marginBottom: 10,
                                    fontWeight: 800,
                                  }}
                                >
                                  {subCategoryKey}
                                </td>
                                <td></td>
                                <td></td>
                                {/* ... (other columns for subcategory row) */}
                              </tr>
                              {subSubcategoryElements}
                              <tr>
                                <td
                                  className="statement-key"
                                  style={{
                                    fontSize: 16,
                                    marginBottom: 10,
                                    fontWeight: 800,
                                  }}
                                >
                                  Total {subCategoryKey}:
                                </td>
                                <td></td>
                                <td>
                                  {" "}
                                  {Math.round(
                                    Math.abs(totalSubCategorys)
                                  ).toLocaleString()}
                                </td>
                                <td
                                  className="statement-value"
                                  style={{
                                    fontSize: 16,
                                    marginBottom: 10,
                                    fontWeight: 800,
                                  }}
                                >
                                  {Math.round(
                                    Math.abs(totalSubCategory)
                                  ).toLocaleString()}
                                </td>
                                {/* ... (other columns for total row) */}
                              </tr>
                            </React.Fragment>
                          );
                        }
                      )}
                      <tr>
                        <td
                          className="statement-key"
                          style={{
                            fontSize: 16,
                            marginBottom: 10,
                            fontWeight: 800,
                          }}
                        >
                          Total {category}:
                        </td>
                        <td></td>
                        <td>
                          {Math.round(
                            Math.abs(totalCategorys)
                          ).toLocaleString()}
                        </td>
                        <td
                          className="statement-value"
                          style={{
                            fontSize: 16,
                            marginBottom: 10,
                            fontWeight: 800,
                          }}
                        >
                          {Math.round(Math.abs(totalCategory)).toLocaleString()}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
            </>
          )}
          {/* Add the Total Liability row here */}
          <tr>
            <td
              className="statement-key"
              style={{
                fontSize: 16,
                marginBottom: 10,
                fontWeight: 800,
              }}
            >
              Total Liability:
            </td>
            <td></td>
            <td>
              {Math.round(Math.abs(nonCurrentLiability)).toLocaleString()}{" "}
              {Math.round(Math.abs(currentLiability)).toLocaleString()}{" "}
            </td>
            <td className="statement-value">
              {Math.round(
                Math.abs(nonCurrentLiability + currentLiability)
              ).toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </TablePanel>
  );
};

export default Incomefs;
