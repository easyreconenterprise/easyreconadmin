import React, { useState, useEffect } from "react";
import axios from "axios";

function Charge2() {
  const [total46, setTotal46] = useState(0);
  const [total22, setTotal22] = useState(0);

  const [editedText19, setEditedText19] = useState(""); // Initialize with default value
  const [editedText20, setEditedText20] = useState(""); // Initialize with default value
  const [editedText21, setEditedText21] = useState(""); // Initialize with default value
  const [editedText22, setEditedText22] = useState(""); // Initialize with default value
  const [editedText23, setEditedText23] = useState(""); // Initialize with default value
  const [editedText24, setEditedText24] = useState(""); // Initialize with default value
  const [editedText25, setEditedText25] = useState(""); // Initialize with default value
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-cash-text?field=content19`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText19(response.data.content19 || "");
        console.log("editedText19 value from API:", response.data.content19);
      })
      .catch((error) => {
        console.error("Error fetching editedText19:", error);
      });

    axios
      .get(`${apiUrl}/api/get-cash-text?field=content20`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText20(response.data.content20 || "");
        console.log("editedText20 value from API:", response.data.content20);
      })
      .catch((error) => {
        console.error("Error fetching editedText20:", error);
      });

    axios
      .get(`${apiUrl}/api/get-cash-text?field=content21`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText21(response.data.content21 || "");
        console.log("editedText84 value from API:", response.data.content21);
      })
      .catch((error) => {
        console.error("Error fetching editedText21:", error);
      });

    axios
      .get(`${apiUrl}/api/get-cash-text?field=content22`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText22(response.data.content22 || "");
        console.log("editedText22 value from API:", response.data.content22);
      })
      .catch((error) => {
        console.error("Error fetching editedText22:", error);
      });
    axios
      .get(`${apiUrl}/api/get-cash-text?field=content23`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText23(response.data.content23 || "");
        console.log("editedText23 value from API:", response.data.content23);
      })
      .catch((error) => {
        console.error("Error fetching editedText23:", error);
      });
    axios
      .get(`${apiUrl}/api/get-cash-text?field=content24`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText24(response.data.content24 || "");
        console.log("editedText24 value from API:", response.data.content24);
      })
      .catch((error) => {
        console.error("Error fetching editedText24:", error);
      });
    axios
      .get(`${apiUrl}/api/get-cash-text?field=content25`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText24(response.data.content25 || "");
        console.log("editedText25 value from API:", response.data.content25);
      })
      .catch((error) => {
        console.error("Error fetching editedText25:", error);
      });

    // Fetch other values as needed...
  }, []);

  useEffect(() => {
    // Calculate total46 after fetching the values

    // Calculate total32 after fetching the values
    const value19 = parseFloat(editedText19) || 0;
    const value20 = parseFloat(editedText20) || 0;
    const value21 = parseFloat(editedText21) || 0;
    const value22 = parseFloat(editedText22) || 0;
    const value23 = parseFloat(editedText23) || 0;
    const value24 = parseFloat(editedText24) || 0;
    const value25 = parseFloat(editedText25) || 0;
    // ... Add calculations for other values

    const newTotal22 =
      value19 + value20 + value21 + value22 + value23 + value24 + value25; // Calculate the total32 value based on your formula
    setTotal22(newTotal22);
    console.log("Total22 calculated:", newTotal22);

    // Other calculations...
  }, [
    editedText19,
    editedText20,
    editedText21,
    editedText22,
    editedText23,
    editedText24,
    editedText25,
    // ... Add other dependencies as needed
  ]);

  console.log("Total22 state:", total22);

  return (
    <div>
      <p> {total22}</p>
    </div>
  );
}

export default Charge2;
