import React, { useEffect, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import CurrentTax3 from "./CurrentTax3";
import axios from "axios";

const CurrentTax2 = ({ subcategory }) => {
  console.log(
    subcategory?.["Equity and Liability"]?.["Current-liability"]?.[
      "Current tax liabilities"
    ]
  );

  const apiUrl = process.env.REACT_APP_API_URL;

  const properties =
    subcategory?.["Equity and Liability"]?.["Current-liability"]?.[
      "Current tax liabilities"
    ];

  let totalKmlValue = 0;
  let totalKmlValues = 0;
  if (properties) {
    properties.forEach((property) => {
      const lastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 1]];
      const secondLastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 2]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ""));
      const kmlValues = parseFloat(secondLastColumnValue.replace(/[\s,]/g, ""));

      if (!isNaN(kmlValue)) {
        totalKmlValue += kmlValue;
      }

      if (!isNaN(kmlValues)) {
        totalKmlValues += kmlValues;
      }
    });
  }

  const formattedTotalKmlValue = totalKmlValue.toFixed(2);
  const formattedTotalKmlValues = totalKmlValues.toFixed(2);

  const changeInInventories = (totalKmlValues - totalKmlValue).toFixed(2);

  const initialData = {
    content32: "0.000",
    content33: "0.000",
  };

  const [editedText32, setEditedText32] = useState(initialData.content32);
  const [editedText33, setEditedText33] = useState(initialData.content33);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content32", setEditedText32);
    fetchDataFromDatabase("content33", setEditedText33);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText32Change = (e) => {
    const newText = e.target.value;
    setEditedText32(newText);
    saveTextToDatabase("content32", newText);
  };
  const handleText33Change = (e) => {
    const newText = e.target.value;
    setEditedText33(newText);
    saveTextToDatabase("content33", newText);
  };

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-cash-text?field=${field}`, {
        headers,
      })
      .then((response) => {
        setField(response.data[field] || "");
      })
      .catch((error) => {
        console.error(`Error fetching ${field}:`, error);
      });
  };

  // Define the function to save edited text to the API
  const saveTextToDatabase = (field, content) => {
    const token = localStorage.getItem("jwtToken"); // You may not need this if you have a different authentication method.
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = {
      [field]: content,
    };

    axios
      .post(`${apiUrl}/api/save-cash-text`, data, {
        headers,
      })
      .then((response) => {
        // Data saved successfully
      })
      .catch((error) => {
        console.error(`Error saving ${field}:`, error);
      });
  };

  return (
    <div>
      <div>
        <b>
          {" "}
          <p>8. Current Tax Liabilites</p>
        </b>

        <table>
          <tbody>
            <tr>
              <td>Opening balance</td>
              <td>{formattedTotalKmlValues}</td>
            </tr>
            <tr>
              <td>Mininum Tax</td>

              <td>
                <EditText
                  name="textArea32"
                  value={editedText32}
                  onChange={handleText32Change}
                />
              </td>
            </tr>
            <tr>
              <td>Income Tax expense for the year</td>

              <td>
                <EditText
                  name="textArea33"
                  value={editedText33}
                  onChange={handleText33Change}
                />
              </td>
            </tr>
            <tr>
              <td>Income Tax paid during the year</td>
              <td>
                <CurrentTax3 subcategory={subcategory} />
              </td>
            </tr>
            <tr>
              <td>Closing balance</td>
              <td> {formattedTotalKmlValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentTax2;
