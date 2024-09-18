import React, { useState, useEffect } from "react";
import axios from "axios";

const Interest = () => {
  const [total46, setTotal46] = useState(0);
  const [total22, setTotal22] = useState(0);

  const [editedText36, setEditedText36] = useState(""); // Initialize with default value
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/get-cash-text?field=content36`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText36(response.data.content36 || "");
        console.log("editedText34 value from API:", response.data.content36);
      })
      .catch((error) => {
        console.error("Error fetching editedText36:", error);
      });

    // Fetch other values as needed...
  }, []);

  return (
    <div>
      <p> {editedText36}</p>
    </div>
  );
};

export default Interest;
