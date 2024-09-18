import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Style.css";

const Noteone = () => {
  const initialData = {
    // content10:
    //   "<h2>Notes to the financial statement</h2><h2>1. Reporting entity</h2><p>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria on 4 September, 2007 as a limited liability company under the Companies and Allied Matters Act, Cap C20, Laws of the  Federation of Nigeria 2004.</p><p>The Company is domiciled in Nigeria and its registered office is 26B, Abimbola Street, Isolo Industrial Estate, Isolo, Lagos, Nigeria. The Company is principally engaged in the business of distribution of crop protection chemicals.</p><p>The parent and ultimate controlling entity of the Company is Inshara Global FZC, a company incorporated on 12 October 2009 and domicilied in Ras Al Khaimah, UAE.</p>",

    content16: "<h2>Notes to the financial statement</h2>",
    content17: "<h2>1. Reporting entities</h2>",
    content18:
      "<p>Lionseal industrial limited was incorporated in Nigeria on 14 September 2022, under the company act laws of the federal republic, the company is domicile in Nigeria and its head office is 21, Victoria Island lagos, Nigeria. The compnany is principally engaged in the distribution of crop protection for global warming, the parent of the company is located in London</p>",

    content2:
      "<h2>2. Basis of preparation</h2><h2>(a) Statement of compliance</h2><p>These financial statements have been prepared in accordance with International Financial Reporting Standards (IFRSs) as issued by the International Accounting Standards Board (IASB) and in the manner required by Companies and Allied Matters Act (CAMA), 2020 and the Financial Reporting Council of Nigeria Act, 2011.</p><p>The financial statements were authorized for issue by the Board of Directors on 5 July 2021</p><h2>Functional and presentation currency</h2><p>These financial statements are presented in Naira, which is the Companys functional currency. All financial information presented in Naira have been rounded to the nearest thousand unless stated otherwise.</p>",

    content3:
      "<h2>Use of estimate and judgement</h2><p>The preparation of the financial statements in conformity with IFRS requires management to make judgments, estimates and assumptions that affect the application of accounting policies and the reported amounts of assets, liabilities, income and expenses. Actual results may differ from these estimates. Estimates and underlying assumptions are reviewed on an ongoing basis. Revisions to accounting estimates are recognised prospectively.</p><p>Information about assumptions and estimation uncertainties that have most significant effects on amounts recognised in the financial statements is included in the following notes;</p><p>Note 2(d) and 18: Determination of fair values</p>",

    content4:
      "<p>Note 3(g), 9(d), 12 and 18: Impairment of financial assets: Expected credit loss and forward looking information</p><p>Note 3(l) and 9d Recognition of deferred tax assets: availability of sufficient future taxable profit against which unutilised tax losses and unutilised capital allowance can be used.</p><h2>d. Measurement of fair values</h2><p>Fair value is the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date.</p>",

    content8:
      "<p>Some of the Companys accounting policies and disclosures require the determination of fair values, for both financial and non-financial assets and liabilities.</p><p>When applicable, further information about the assumptions made in determining fair value is disclosed in the notes specific to that asset or liability.</p><p>When measuring the fair value of an asset or a liability, the Company uses observable data as far as possible. Fair values are categorised into different levels in a fair value hierarchy based on the inputs used in the valuation techniques as follows:</p><p>Level 1: quoted prices (unadjusted) in active markets for identical assets or liabilities.</p>",

    content6:
      "<p>Level 2: inputs other than quoted prices included in Level 1 that are observable for the asset or liability, either directly (i.e. as prices) or indirectly (i.e. as derived from prices).</p><p>Level 3: inputs for the asset or liability that are not based on observable market data (unobservable inputs).</p><p>In some cases, if the input used to measure the fair value of an asset or a liability might be categorised in different levels of the fair value hierarchy, then the fair value measurement is categorised in its entirety in the same level of the fair value hierarchy as the lowest level input that is significant to the entire measurement.</p><p>The Company recognises transfers between levels of the fair value hierarchy at the end of the reporting period during which the change has occurred.</p>",
    content7:
      "<h2>e. Basis of measurement</h2><p>The financial statements have been prepared on the historical cost basis except as disclosed in note 3.</p><h2>3. Significant accounting policy</h2><p>The accounting policies set out below have been applied consistently to all periods presented in these financial statements, unless otherwise indicated.</p><p>Set out below is an index of the significant accounting policies and changes in accounting policies, the details of which are available on pages that follow:</p>",

    content11:
      "<p>a.	Foreign currency transactions</p><p>b. Financial instrument</p><p>Share capital</p><p>Property,plant and equippment</p><p>Leases</p>",
    content13:
      "<p>f. Inventories</p><p>g. Impairment</p><p>h. Employees benefits</p><p>i. Contingent Liability</p><p>j. Revenue</p>",
    content14:
      "<p>k. Finance income and finance cost</p><p>i. Income and deferred taxes</p><p>m. Statement of cash flows</p><p>n. Government grants</p><p>o. New standards and interpretation</p>",
    content15:
      "<p>p. Standard issue but not yet completerd</p><p>q. Intangible asset and good will</p><p>Biological assets</p><p>(a) Foreign currency transaction</p>",

    content12:
      "<p>Transactions denominated in foreign currencies are translated and recorded in Naira at the actual exchange rates as of the date of the transaction. Monetary assets and liabilities denominated in foreign currencies at the reporting date are translated to the functional currency at the rates of exchange prevailing at that date. Non-monetary assets and liabilities denominated in foreign currencies that are measured at fair value are translated to the functional currency at the exchange rate at the date that the fair value was determined.</p><p>Foreign currency differences arising on translation are recognised in profit or loss. Non-monetary items that are measured in terms of historical cost in a foreign currency are translated using the exchange rate at the date of the transaction.</p>",
  };

  // Define a custom maximum length for the ReactQuill component
  const customMaxLength = 1000000; // Adjust this value as needed
  // const [editedText10, setEditedText10] = useState(initialData.content10);
  const [editedText2, setEditedText2] = useState(initialData.content2);

  const [editedText3, setEditedText3] = useState(initialData.content3);
  const [editedText4, setEditedText4] = useState(initialData.content4);
  const [editedText8, setEditedText8] = useState(initialData.content8);
  const [editedText6, setEditedText6] = useState(initialData.content6);
  const [editedText7, setEditedText7] = useState(initialData.content7);
  const [editedText11, setEditedText11] = useState(initialData.content11);
  const [editedText12, setEditedText12] = useState(initialData.content12);
  const [editedText13, setEditedText13] = useState(initialData.content13);
  const [editedText14, setEditedText14] = useState(initialData.content14);
  const [editedText15, setEditedText15] = useState(initialData.content15);
  const [editedText16, setEditedText16] = useState(initialData.content16);
  const [editedText17, setEditedText17] = useState(initialData.content17);
  const [editedText18, setEditedText18] = useState(initialData.content18);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content2", setEditedText2);
    fetchDataFromDatabase("content3", setEditedText3);
    fetchDataFromDatabase("content4", setEditedText4);
    fetchDataFromDatabase("content8", setEditedText8);
    fetchDataFromDatabase("content6", setEditedText6);
    fetchDataFromDatabase("content7", setEditedText7);
    fetchDataFromDatabase("content11", setEditedText11);
    fetchDataFromDatabase("content12", setEditedText12);
    fetchDataFromDatabase("content13", setEditedText13);
    fetchDataFromDatabase("content14", setEditedText14);
    fetchDataFromDatabase("content15", setEditedText15);
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
      .get(`${apiUrl}/api/get-note-text?field=${field}`, {
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
      case "content6":
        setEditedText6(newText);
        break;
      case "content7":
        setEditedText7(newText);
        break;
      case "content11":
        setEditedText11(newText);
        break;
      case "content12":
        setEditedText12(newText);
        break;
      case "content13":
        setEditedText13(newText);
        break;
      case "content14":
        setEditedText14(newText);
        break;
      case "content15":
        setEditedText15(newText);
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
      .post(`${apiUrl}/api/save-note-text`, data, {
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
        <ReactQuill
          name="textArea11"
          value={editedText11}
          onChange={(newText) => handleTextChange(newText, "content11")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea13"
          value={editedText13}
          onChange={(newText) => handleTextChange(newText, "content13")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea14"
          value={editedText14}
          onChange={(newText) => handleTextChange(newText, "content14")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea15"
          value={editedText15}
          onChange={(newText) => handleTextChange(newText, "content15")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea12"
          value={editedText12}
          onChange={(newText) => handleTextChange(newText, "content12")}
          className="custom-quill-editor  ql-container"
        />
      </div>
    </>
  );
};

export default Noteone;
