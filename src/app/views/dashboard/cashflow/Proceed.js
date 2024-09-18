import React, { useState, useEffect } from "react";
import axios from "axios";

function Proceed() {
  const [total46, setTotal46] = useState(0);
  const [total22, setTotal22] = useState(0);

  const [editedText34, setEditedText34] = useState(""); // Initialize with default value
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-cash-text?field=content34`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText34(response.data.content19 || "");
        console.log("editedText34 value from API:", response.data.content34);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);

  return (
    <div>
      <p> {editedText34}</p>
    </div>
  );
}

export default Proceed;
