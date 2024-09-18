import axios from "axios";
import React, { useEffect, useState } from "react";

const Move3 = () => {
  const [total4, setTotal4] = useState(0);
  console.log("is total4 working", total4);
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
    content6: "0.000",
    content7: "0.000",
    content8: "0.000",
    content9: "0.000",
    content10: "0.000",
    content11: "0.000",
    content12: "0.000",
    content13: "0.000",
  };

  const [editedText6, setEditedText6] = useState(initialData.content6);
  const [editedText7, setEditedText7] = useState(initialData.content7);
  const [editedText8, setEditedText8] = useState(initialData.content8);
  const [editedText9, setEditedText9] = useState(initialData.content9);
  const [editedText10, setEditedText10] = useState(initialData.content10);
  const [editedText11, setEditedText11] = useState(initialData.content11);
  const [editedText12, setEditedText12] = useState(initialData.content12);
  const [editedText13, setEditedText13] = useState(initialData.content13);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content6", setEditedText6);
    fetchDataFromDatabase("content7", setEditedText7);
    fetchDataFromDatabase("content8", setEditedText8);

    fetchDataFromDatabase("content9", setEditedText9);
    fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content11", setEditedText11);
    fetchDataFromDatabase("content12", setEditedText12);
    fetchDataFromDatabase("content13", setEditedText13);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText6Change = (e) => {
    const newText = e.target.value;
    setEditedText6(newText);
    saveTextToDatabase("content6", newText);
  };
  const handleText7Change = (e) => {
    const newText = e.target.value;
    setEditedText7(newText);
    saveTextToDatabase("content7", newText);
  };
  const handleText8Change = (e) => {
    const newText = e.target.value;
    setEditedText8(newText);
    saveTextToDatabase("content8", newText);
  };
  const handleText9Change = (e) => {
    const newText = e.target.value;
    setEditedText9(newText);
    saveTextToDatabase("content9", newText);
  };
  const handleText10Change = (e) => {
    const newText = e.target.value;
    setEditedText10(newText);
    saveTextToDatabase("content10", newText);
  };
  const handleText11Change = (e) => {
    const newText = e.target.value;
    setEditedText11(newText);
    saveTextToDatabase("content11", newText);
  };
  const handleText12Change = (e) => {
    const newText = e.target.value;
    setEditedText12(newText);
    saveTextToDatabase("content12", newText);
  };
  const handleText13Change = (e) => {
    const newText = e.target.value;
    setEditedText13(newText);
    saveTextToDatabase("content13", newText);
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
      .post("http://locallhost:5000/api/save-move-text", data, {
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
    // Calculate total32 after fetching the values
    const value6 = parseFloat(editedText6) || 0;
    const value7 = parseFloat(editedText7) || 0;
    const value8 = parseFloat(editedText8) || 0;
    const value9 = parseFloat(editedText9) || 0;
    const value10 = parseFloat(editedText10) || 0;
    const value11 = parseFloat(editedText11) || 0;
    const value12 = parseFloat(editedText12) || 0;
    const value13 = parseFloat(editedText13) || 0;

    const newTotal4 = Math.round(value7 + value9 + value11 + value13); // Calculate the total32 value based on your formula
    setTotal4(newTotal4);
    console.log("Total1 calculated:", newTotal4);
    // Other calculations...
  }, [
    editedText6,
    editedText7,
    editedText8,
    editedText9,
    editedText10,
    editedText11,
    editedText12,
    editedText13,

    // ... Add other dependencies as needed
  ]);

  return (
    <div>
      <p>{total4}</p>
    </div>
  );
};

export default Move3;
