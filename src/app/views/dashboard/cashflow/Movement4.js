import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditText } from "react-edit-text";

const Movement4 = ({ subcategory }) => {
  console.log(subcategory?.Income?.["Other income"]);

  const properties = subcategory?.Income?.["Other income"];

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

  const [total7, setTotal7] = useState(0);
  const [total8, setTotal8] = useState(0);
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

        // Calculate summations and set state for incomeSum
      } catch (error) {
        console.error("Error fetching mapped data:", error);
      }
    };

    fetchData();
  }, []);

  const initialData = {
    content18: "0.000",
    content19: "0.000",
    content20: "0.000",
    content21: "0.000",
    content22: "0.000",
    content23: "0.000",
  };

  const [editedText18, setEditedText18] = useState(initialData.content18);
  const [editedText19, setEditedText19] = useState(initialData.content19);
  const [editedText20, setEditedText20] = useState(initialData.content20);
  const [editedText21, setEditedText21] = useState(initialData.content21);
  const [editedText22, setEditedText22] = useState(initialData.content22);
  const [editedText23, setEditedText23] = useState(initialData.content23);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content18", setEditedText18);
    fetchDataFromDatabase("content19", setEditedText19);
    fetchDataFromDatabase("content20", setEditedText20);

    fetchDataFromDatabase("content21", setEditedText21);
    fetchDataFromDatabase("content22", setEditedText22);
    fetchDataFromDatabase("content23", setEditedText23);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText18Change = (e) => {
    const newText = e.target.value;
    setEditedText18(newText);
    saveTextToDatabase("content18", newText);
  };
  const handleText19Change = (e) => {
    const newText = e.target.value;
    setEditedText19(newText);
    saveTextToDatabase("content19", newText);
  };
  const handleText20Change = (e) => {
    const newText = e.target.value;
    setEditedText20(newText);
    saveTextToDatabase("content20", newText);
  };
  const handleText21Change = (e) => {
    const newText = e.target.value;
    setEditedText21(newText);
    saveTextToDatabase("content21", newText);
  };
  const handleText22Change = (e) => {
    const newText = e.target.value;
    setEditedText22(newText);
    saveTextToDatabase("content22", newText);
  };
  const handleText23Change = (e) => {
    const newText = e.target.value;
    setEditedText23(newText);
    saveTextToDatabase("content23", newText);
  };

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-move-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-move-text`, data, {
        headers,
      })
      .then((response) => {
        // Data saved successfully
      })
      .catch((error) => {
        console.error(`Error saving ${field}:`, error);
      });
  };

  //   const handleEditedText34Change = (newEditedText34) => {
  //     setEditedText34(newEditedText34);
  //   };

  useEffect(() => {
    // Calculate total46 after fetching the values

    // Calculate total32 after fetching the values
    const value18 = parseFloat(editedText18) || 0;
    const value19 = parseFloat(editedText19) || 0;
    const value20 = parseFloat(editedText20) || 0;
    const value21 = parseFloat(editedText21) || 0;
    const value22 = parseFloat(editedText22) || 0;
    const value23 = parseFloat(editedText23) || 0;

    const newTotal7 = value18 + value20 + value22; // Calculate the total32 value based on your formula
    setTotal7(newTotal7);
    console.log("Total7 calculated:", newTotal7);
    const newTotal8 = value19 + value21 + value23; // Calculate the total32 value based on your formula
    setTotal8(newTotal8);
    console.log("Total8 calculated:", newTotal8);

    // Other calculations...
  }, [
    editedText18,
    editedText19,
    editedText20,
    editedText21,
    editedText22,
    editedText23,

    // ... Add other dependencies as needed
  ]);

  return (
    <div style={{ margin: "20px" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Description
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Prior Year
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Current Year
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Movement in Trade and other payables</td>
            <td>
              <EditText
                name="textArea18"
                value={editedText18}
                onChange={handleText18Change}
              />
            </td>
            <td>
              <EditText
                name="textArea19"
                value={editedText19}
                onChange={handleText19Change}
              />
            </td>
          </tr>
          <tr>
            <td>Transfer to Nature Savvy</td>
            <td>
              <EditText
                name="textArea20"
                value={editedText20}
                onChange={handleText20Change}
              />
            </td>
            <td>
              <EditText
                name="textArea21"
                value={editedText21}
                onChange={handleText21Change}
              />
            </td>
          </tr>
          <tr>
            <td>Value added Tax(VAT)</td>
            <td>
              <EditText
                name="textArea22"
                value={editedText22}
                onChange={handleText22Change}
              />
            </td>
            <td>
              <EditText
                name="textArea23"
                value={editedText23}
                onChange={handleText23Change}
              />
            </td>
          </tr>

          <tr>
            <td
              style={{ textAlign: "left", padding: "8px", fontWeight: "bold" }}
            >
              Movement in trade and other payables as disclosed in the statement
              of cashflows
            </td>
            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            >
              <p> {total7}</p>
            </td>
            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            >
              <p> {total8}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Movement4;
