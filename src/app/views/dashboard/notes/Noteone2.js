import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Noteone2 = () => {
  // Create state variables for each text area with initial values
  const initialData = {
    content1: "1. Reporting entity",
    content2:
      "<h2>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria...</h2><p>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria on 4 September, 2007 as a limited liability company under the Companies and Allied Matters Act, Cap C20, Laws of the  Federation of Nigeria 2004.</p><h2>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria...</h2><p>The Company is domiciled in Nigeria and its registered office is 26B, Abimbola Street, Isolo Industrial Estate, Isolo, Lagos, Nigeria. The Company is principally engaged in the business of distribution of crop protection chemicals.</p><h2>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria...</h2><h2>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria...</h2><p>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria</p><h2>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria</h2><h2>The parent and ultimate controlling entity of the Company is Inshara Global FZC, a company incorporated on 12 October 2009 and domiciled in Ras Al Khaimah, UAE.</h2>",
    // ... other initial content
  };

  const [editedText1, setEditedText1] = useState(initialData.content1);
  const [editedText2, setEditedText2] = useState(initialData.content2);
  // ... other state variables

  const [activeTab, setActiveTab] = useState("content1");

  useEffect(() => {
    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content1", setEditedText1);
    fetchDataFromDatabase("content2", setEditedText2);
    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes
  const handleTextChange = (fieldName, newText) => {
    switch (fieldName) {
      case "content1":
        setEditedText1(newText);
        break;
      case "content2":
        setEditedText2(newText);
        break;
      // Handle other text areas
      // ...
      default:
        break;
    }
    saveTextToDatabase(fieldName, newText);
  };
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-save-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-text`, data, {
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
    <>
      <div>
        <ul>
          <li onClick={() => setActiveTab("content1")}>Tab 1</li>
          <li onClick={() => setActiveTab("content2")}>
            Lionseal Industries Limited (the 'Company') was incorporated in
            Nigeria on 4 September, 2007 as a limited liability company under
            the Companies and Allied Matters Act, Cap C20, Laws of the
            Federation of Nigeria 2004.
          </li>
          {/* Add more tabs for other text areas */}
        </ul>
        {activeTab === "content1" && (
          <ReactQuill
            name="textArea1"
            value={editedText1}
            onChange={(newText) => handleTextChange("content1", newText)}
            className="custom-quill-editor ql-container"
          />
        )}
        {activeTab === "content2" && (
          <ReactQuill
            name="textArea2"
            value={editedText2}
            onChange={(newText) => handleTextChange("content2", newText)}
            className="custom-quill-editor ql-container"
          />
        )}
        {/* Render other text areas with React Quill */}
        {/* ... */}
      </div>
    </>
  );
};

export default Noteone2;
