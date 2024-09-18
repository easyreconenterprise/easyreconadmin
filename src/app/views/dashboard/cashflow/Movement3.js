import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditText } from "react-edit-text";

const Movement3 = ({ subcategory }) => {
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

  const [total5, setTotal5] = useState(0);
  const [total6, setTotal6] = useState(0);
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
    content14: "0.000",
    content15: "0.000",
    content16: "0.000",
    content17: "0.000",
  };

  const [editedText14, setEditedText14] = useState(initialData.content14);
  const [editedText15, setEditedText15] = useState(initialData.content15);
  const [editedText16, setEditedText16] = useState(initialData.content16);
  const [editedText17, setEditedText17] = useState(initialData.content17);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content14", setEditedText14);
    fetchDataFromDatabase("content15", setEditedText15);
    fetchDataFromDatabase("content16", setEditedText16);

    fetchDataFromDatabase("content17", setEditedText17);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText14Change = (e) => {
    const newText = e.target.value;
    setEditedText14(newText);
    saveTextToDatabase("content14", newText);
  };
  const handleText15Change = (e) => {
    const newText = e.target.value;
    setEditedText15(newText);
    saveTextToDatabase("content15", newText);
  };
  const handleText16Change = (e) => {
    const newText = e.target.value;
    setEditedText16(newText);
    saveTextToDatabase("content16", newText);
  };
  const handleText17Change = (e) => {
    const newText = e.target.value;
    setEditedText17(newText);
    saveTextToDatabase("content17", newText);
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
    const value14 = parseFloat(editedText14) || 0;
    const value15 = parseFloat(editedText15) || 0;
    const value16 = parseFloat(editedText16) || 0;
    const value17 = parseFloat(editedText17) || 0;

    const newTotal5 = value14 + value16; // Calculate the total32 value based on your formula
    setTotal5(newTotal5);
    console.log("Total5 calculated:", newTotal5);
    const newTotal6 = value15 + value17; // Calculate the total32 value based on your formula
    setTotal6(newTotal6);
    console.log("Total1 calculated:", newTotal6);

    // Other calculations...
  }, [
    editedText14,
    editedText15,
    editedText16,
    editedText17,

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
            <td>Movement in Prepayment and advances</td>
            <td>
              <EditText
                name="textArea14"
                value={editedText14}
                onChange={handleText14Change}
              />
            </td>
            <td>
              <EditText
                name="textArea15"
                value={editedText15}
                onChange={handleText15Change}
              />
            </td>
          </tr>
          <tr>
            <td>Transfer to Nature Savvy</td>
            <td>
              <EditText
                name="textArea16"
                value={editedText16}
                onChange={handleText16Change}
              />
            </td>
            <td>
              <EditText
                name="textArea17"
                value={editedText17}
                onChange={handleText17Change}
              />
            </td>
          </tr>

          <tr>
            <td
              style={{ textAlign: "left", padding: "8px", fontWeight: "bold" }}
            >
              Movement in prepayment and advances as disclosed in the statement
              of cashflows
            </td>
            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            >
              <p> {total5}</p>
            </td>
            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            >
              <p> {total6}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Movement3;
