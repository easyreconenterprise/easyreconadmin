import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Style.css";

const Certification = () => {
  const initialData = {
    content10:
      "<h2>Statement of cooporate responsibility for the financial statement</h2><p>For the year ended 31 December 2022</p>",
    content2:
      "<p>Further to the provisions of section 405 of the Companies and Allied Matters Act, 2020 (CAMA), we the Managing Director and Chief Finance Officer of Lionseal Industries Limited (“the Company”) respectively hereby certify as follows:</p><p>a. We have reviewed the audited financial statements of the Company for the year ended 31 December, 2022.</p>",
    content3:
      "<p>b. The audited financial statements represent the true and correct financial position of our Company as at the said date of 31 December, 2022.</p><p>C. That the audited financial statements does not contain any untrue statement of material fact or omit to state a material fact, which would make the statements misleading.</p><p>d. That the audited financial statements fairly presents, in all material respects, the financial condition and results of operation of the company as of and for the year ended 31 December, 2022.</p>",

    content4:
      "<p>e. That we are responsible for establishing and maintaining internal controls and have designed such internal controls to ensure that material information relating to the Company is made known to the officer by other officers of the companies, during the period ended 31 December 2022.</p><p>f. That we have disclosed the following information to the Companys Auditors:</p>",

    content8:
      "<p>i. There are no significant deficiency in the designs or peration of internal control which could adversely affect the company ability to record, process, summarize and report financial data</p><p>ii. There is no fraud that involves management or other employees who have a significant role in the companys internal control</p>",

    content6: "<h2>Managing Director Name</h2>",
    content7: "<h2>Managing Director</h2>",
  };

  // Define a custom maximum length for the ReactQuill component
  const customMaxLength = 1000000; // Adjust this value as needed
  const [editedText10, setEditedText10] = useState(initialData.content10);
  const [editedText2, setEditedText2] = useState(initialData.content2);

  const [editedText3, setEditedText3] = useState(initialData.content3);
  const [editedText4, setEditedText4] = useState(initialData.content4);
  const [editedText8, setEditedText8] = useState(initialData.content8);
  const [editedText6, setEditedText6] = useState(initialData.content6);
  const [editedText7, setEditedText7] = useState(initialData.content7);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content2", setEditedText2);
    fetchDataFromDatabase("content3", setEditedText3);
    fetchDataFromDatabase("content4", setEditedText4);
    fetchDataFromDatabase("content8", setEditedText8);
    fetchDataFromDatabase("content6", setEditedText6);
    fetchDataFromDatabase("content7", setEditedText7);
  }, []);

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-cert-text?field=${field}`, {
        headers,
      })
      .then((response) => {
        setField(response.data[field] || "");
      })
      .catch((error) => {
        console.error(`Error fetching ${field}:`, error);
      });
  };

  const handleTextChange = (newText, field) => {
    // Use field as the key to set the appropriate state

    switch (field) {
      case "content10":
        setEditedText10(newText);
        break;
      case "content2":
        setEditedText2(newText);
        break;
      case "content3":
        setEditedText3(newText);
        break;
      case "content4":
        setEditedText4(newText);
        break;

      case "content8":
        setEditedText8(newText);
        break;
      case "content6":
        setEditedText6(newText);
        break;
      case "content7":
        setEditedText7(newText);
        break;
      default:
        break;
    }

    // Save the updated text to the database
    saveTextToDatabase(field, newText);
  };

  const saveTextToDatabase = (field, content) => {
    // Define the data object first
    const data = {
      [field]: content,
    };

    const token = localStorage.getItem("jwtToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(`${apiUrl}/api/save-cert-text`, data, {
        headers,
      })
      .then((response) => {
        // Data saved successfully
      })
      .catch((error) => {
        console.error(`Error saving ${field}:`, error);
      });
  };

  const toolbarOptions = [
    [{ header: "1" }, { header: "2" }], // Header options (h1 and h2)
    ["bold", "italic", "underline", "color"], // Formatting options (bold, italic, underline, text color)
  ];

  return (
    <>
      <div>
        <ReactQuill
          name="textArea10"
          value={editedText10}
          onChange={(newText) => handleTextChange(newText, "content10")}
          className="custom-quill-editor  ql-container"
          style={{ fontSize: "40px", marginTop: "50px" }}
        />
        <ReactQuill
          name="textArea2"
          value={editedText2}
          onChange={(newText) => handleTextChange(newText, "content2")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea3"
          value={editedText3}
          onChange={(newText) => handleTextChange(newText, "content3")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea4"
          value={editedText4}
          onChange={(newText) => handleTextChange(newText, "content4")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea8"
          value={editedText8}
          onChange={(newText) => handleTextChange(newText, "content8")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea6"
          value={editedText6}
          onChange={(newText) => handleTextChange(newText, "content6")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea7"
          value={editedText7}
          onChange={(newText) => handleTextChange(newText, "content7")}
          className="custom-quill-editor  ql-container"
        />
      </div>
    </>
  );
};

export default Certification;
