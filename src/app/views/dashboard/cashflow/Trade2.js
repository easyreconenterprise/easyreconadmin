import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const Trade2 = ({ subcategory }) => {
  console.log(subcategory?.Asset?.["Current"]["Trade and other receivables"]);

  const properties =
    subcategory?.Asset?.["Current"]["Trade and other receivables"];

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

  // Initialize state variables for edited text
  const initialData = {
    content30: "0.000",
  };

  const [editedText30, setEditedText30] = useState(initialData.content30);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content30", setEditedText30);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText30Change = (e) => {
    const newText = e.target.value;
    setEditedText30(newText);
    saveTextToDatabase("content30", newText);
  };
  const apiUrl = process.env.REACT_APP_API_URL;

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
          <p>3. Trade and other receivables</p>
        </b>

        <table>
          <tbody>
            <tr>
              <td>Opening balance</td>
              <td>{formattedTotalKmlValues}</td>
            </tr>
            <tr>
              <td>Impairment loss for the year</td>
              <td>
                <EditText
                  name="textArea30"
                  value={editedText30}
                  onChange={handleText30Change}
                />
              </td>
            </tr>
            <tr>
              <td>Closing balance</td>
              <td> {formattedTotalKmlValue}</td>
            </tr>
            <tr>
              <td>Changes in Trade</td>
              <td>{changeInInventories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trade2;
