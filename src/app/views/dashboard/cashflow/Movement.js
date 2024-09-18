import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditText } from "react-edit-text";

const Movement = ({ subcategory }) => {
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

  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);
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
    content1: "0.000",
    content2: "0.000",
    content3: "0.000",
    content4: "0.000",
  };

  const [editedText1, setEditedText1] = useState(initialData.content1);
  const [editedText2, setEditedText2] = useState(initialData.content2);
  const [editedText3, setEditedText3] = useState(initialData.content3);
  const [editedText4, setEditedText4] = useState(initialData.content4);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content1", setEditedText1);
    fetchDataFromDatabase("content2", setEditedText2);
    fetchDataFromDatabase("content3", setEditedText3);

    fetchDataFromDatabase("content4", setEditedText4);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText1Change = (e) => {
    const newText = e.target.value;
    setEditedText1(newText);
    saveTextToDatabase("content1", newText);
  };
  const handleText2Change = (e) => {
    const newText = e.target.value;
    setEditedText2(newText);
    saveTextToDatabase("content2", newText);
  };
  const handleText3Change = (e) => {
    const newText = e.target.value;
    setEditedText3(newText);
    saveTextToDatabase("content3", newText);
  };
  const handleText4Change = (e) => {
    const newText = e.target.value;
    setEditedText4(newText);
    saveTextToDatabase("content4", newText);
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
    const value1 = parseFloat(editedText1) || 0;
    const value2 = parseFloat(editedText2) || 0;
    const value3 = parseFloat(editedText3) || 0;
    const value4 = parseFloat(editedText4) || 0;

    const newTotal1 = value1 + value3; // Calculate the total32 value based on your formula
    setTotal1(newTotal1);
    console.log("Total1 calculated:", newTotal1);
    const newTotal2 = value2 + value4; // Calculate the total32 value based on your formula
    setTotal2(newTotal2);
    console.log("Total1 calculated:", newTotal2);

    // Other calculations...
  }, [
    editedText1,
    editedText2,
    editedText3,
    editedText4,

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
            <td>Movement in inventories</td>
            <td>
              <EditText
                name="textArea3"
                value={editedText3}
                onChange={handleText3Change}
              />
            </td>
            <td>
              <EditText
                name="textArea4"
                value={editedText4}
                onChange={handleText4Change}
              />
            </td>
          </tr>
          <tr>
            <td>Transfer to Nature Savvy</td>
            <td>
              <EditText
                name="textArea1"
                value={editedText1}
                onChange={handleText1Change}
              />
            </td>
            <td>
              <EditText
                name="textArea2"
                value={editedText2}
                onChange={handleText2Change}
              />
            </td>
          </tr>
          <tr>
            <td
              style={{ textAlign: "left", padding: "8px", fontWeight: "bold" }}
            >
              Movement in inventories as disclosed in the statement of cashflows
            </td>
            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            >
              <p> {total1}</p>
            </td>
            <td
              style={{ textAlign: "right", padding: "8px", fontWeight: "bold" }}
            >
              <p> {total2}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Movement;
