import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Style.css";

const Nineteen = () => {
  const initialData = {
    // content10:
    //   "<h2>Notes to the financial statement</h2><h2>1. Reporting entity</h2><p>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria on 4 September, 2007 as a limited liability company under the Companies and Allied Matters Act, Cap C20, Laws of the  Federation of Nigeria 2004.</p><p>The Company is domiciled in Nigeria and its registered office is 26B, Abimbola Street, Isolo Industrial Estate, Isolo, Lagos, Nigeria. The Company is principally engaged in the business of distribution of crop protection chemicals.</p><p>The parent and ultimate controlling entity of the Company is Inshara Global FZC, a company incorporated on 12 October 2009 and domicilied in Ras Al Khaimah, UAE.</p>",

    content16: "<h2>Notes to the financial statement</h2>",
    content17:
      "<h2>Financial Instruments - Financial risk management and Fair Values</h2><h2>(a)	Financial risk management</h2>",
    content18:
      "<p>The Company has exposure to the following risks from its use of financial instruments:</p><p>--Credit Risk</p><p>--Liquidity Risk</p><p>--Market Risk</p><p>This note presents information about the Company’s exposure to each of the above risks, the Company’s objectives, policies and processes for measuring and managing risk, and the Company’s management of capital. Further quantitative disclosures are included throughout these financial statements.</p>",

    content2:
      "<h2>Risk Management Framework</h2><p>The Company's board of Directors has overall responsibility for the establishment and oversight of the Company's risk management framework. The board of Directors is responsible for developing and monitoring the Company's risk management policies which are established to identify and analyse the risks faced by the Company, to set appropriate risk limit and controls, and monitor risks and adherence to limits. Risk management  policies  and  systems  are  reviewed  regularly  to  reflect  changes  in  market conditions and the Company's activities.</p>",

    content3:
      "<h2>i. Credit Risk</h2><p>The carrying amount of financial assets represents the maximum credit exposure. The maximum exposure to credit risk at the reporting date was:</p><p>A. Trade and other receivables</p><p>The Company's exposure to credit risk in respect of trade receivables is influenced mainly by the individual characteristics of each customer. The Company has established a credit policy under which each new customer is analysed individually for credit worthiness before the Company's standard payment and delivery terms and conditions are offered. Credit limits are established for each customer, which represents the maximum open amount. These limits are reviewed periodically.</p>",

    content4:
      "<p>The Company establishes an allowance for impairment that represents its estimate of incurred losses in respect of its trade receivables. The main component of this allowance are a specific loss component that relates to individually significant exposures. The collective loss allowance is determined for customers with similar characteristics.The Company does not hold collateral as security for its trade receivables.</p>",

    content8:
      "<p>The maximum exposure to credit risk for trade and other receivables and related impairment losses at the reporting date was:</p>",
  };
  const apiUrl = process.env.REACT_APP_API_URL;

  // Define a custom maximum length for the ReactQuill component
  const customMaxLength = 1000000; // Adjust this value as needed
  // const [editedText10, setEditedText10] = useState(initialData.content10);
  const [editedText2, setEditedText2] = useState(initialData.content2);

  const [editedText3, setEditedText3] = useState(initialData.content3);
  const [editedText4, setEditedText4] = useState(initialData.content4);
  const [editedText8, setEditedText8] = useState(initialData.content8);

  const [editedText16, setEditedText16] = useState(initialData.content16);
  const [editedText17, setEditedText17] = useState(initialData.content17);
  const [editedText18, setEditedText18] = useState(initialData.content18);

  useEffect(() => {
    // fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content2", setEditedText2);
    fetchDataFromDatabase("content3", setEditedText3);
    fetchDataFromDatabase("content4", setEditedText4);
    fetchDataFromDatabase("content8", setEditedText8);

    fetchDataFromDatabase("content16", setEditedText16);
    fetchDataFromDatabase("content17", setEditedText17);
    fetchDataFromDatabase("content18", setEditedText18);
  }, []);

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-nine-text?field=${field}`, {
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
      // case "content10":
      //   setEditedText10(newText);
      //   break;
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

      case "content16":
        setEditedText16(newText);
        break;
      case "content17":
        setEditedText17(newText);
        break;
      case "content18":
        setEditedText18(newText);
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
      .post(`${apiUrl}/api/save-nine-text`, data, {
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
        {/*}  <ReactQuill
          name="textArea10"
          value={editedText10}
          onChange={(newText) => handleTextChange(newText, "content10")}
          className="custom-quill-editor  ql-container"
  />*/}
        <ReactQuill
          name="textArea16"
          value={editedText16}
          onChange={(newText) => handleTextChange(newText, "content16")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea17"
          value={editedText17}
          onChange={(newText) => handleTextChange(newText, "content17")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea18"
          value={editedText18}
          onChange={(newText) => handleTextChange(newText, "content18")}
          className="custom-quill-editor  ql-container"
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
      </div>
    </>
  );
};

export default Nineteen;
