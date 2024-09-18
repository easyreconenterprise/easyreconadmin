import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Style.css";
import { EditText, EditTextarea } from "react-edit-text";

const NoteOneToThree = () => {
  const initialData = {
    // content10:
    //   "<h2>Notes to the financial statement</h2><h2>1. Reporting entity</h2><p>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria on 4 September, 2007 as a limited liability company under the Companies and Allied Matters Act, Cap C20, Laws of the  Federation of Nigeria 2004.</p><p>The Company is domiciled in Nigeria and its registered office is 26B, Abimbola Street, Isolo Industrial Estate, Isolo, Lagos, Nigeria. The Company is principally engaged in the business of distribution of crop protection chemicals.</p><p>The parent and ultimate controlling entity of the Company is Inshara Global FZC, a company incorporated on 12 October 2009 and domicilied in Ras Al Khaimah, UAE.</p>",

    content41:
      "<h2>b. Financial instrument</h2><h2>i. Recognition and initial measurement</h2><p>The Company initially recognizes trade and other receivables on the date that they are originated. All other financial assets and financial liabilities are initially recognized on the trade date at which the Company becomes a party to the contractual provisions of the instrument.</p><p>A financial asset (unless it is a trade receivable without a significant financing component) or financial liability is initially measured at fair value plus, for an item not at fair value through profit or loss (FVTPL), transaction costs that are directly attributable to its acquisition or issue. A trade receivable without a significant financing component is initially measured at the transaction price.</p><h2>ii. Classification and subsequent measurement</h2>",

    content42:
      "<h2>FInancial assest</h2><p>On initial recognition, a financial asset is classified as measured at: amortized cost; fair value through other comprehensive income (FVOCI) – debt investment; FVOCI – equity investment; or FVTPL. Financial assets are not reclassified subsequent to their initial recognition unless the Company changes its business model for managing financial assets, in which case all affected financial assets are reclassified on the first day of the first reporting period following the change in the business model.</p><p>A financial asset is measured at amortized cost if it meets both of the following conditions and is not designated as at fair value through profit or loss (FVTPL):</p><p>– it is held within a business model whose objective is to hold assets to collect contractual cash flows; and</p>",

    content43:
      "<p>– its contractual terms give rise on specified dates to cash flows that are solely payments of principal and interest on the principal amount outstanding.</p><p>A debt investment is measured at FVOCI if it meets both of the following conditions and is not designated as at FVTPL:</p><p>All financial assets not classified as measured at amortized cost or FVOCI as described above are measured at FVTPL.</p><p>Financial asset</p>",

    conten44:
      "<p>The Company makes an assessment of the objective of the business model in which a financial asset is held at a portfolio level because this best reflects the way the business is managed and information is provided to management. The information considered includes: -- the stated policies and objectives for the portfolio and the operation of those policies in practice. These include whether management’s strategy focuses on earning contractual interest income, maintaining a particular interest rate profile, matching the duration of the financial assets to the duration of any related liabilities or expected cash outflows or realising cash flows through the sale of the assets; -- how the performance of the portfolio is evaluated and reported to the Company’s management;  -- the risks that affect the performance of the business model (and the financial assets held within that business model) and how those risks are managed;",

    content45:
      "<p>'-- the frequency, volume and timing of sales of financial assets in prior periods, the reasons for such sales and expectations about future sales activity. Transfers of financial assets to third parties in transactions that do not qualify for derecognition are not considered sales for this purpose, consistent with the Company’s continuing recognition of the assets.</p>",
    content46:
      "<h2>Financial assets – Assessment whether contractual cash flows are solely payments of principal and interest</h2><p>For the purposes of this assessment, ‘principal’ is defined as the fair value of the financial asset on initial recognition. ‘Interest’ is defined as consideration for the time value of money and for the credit risk associated with the principal amount outstanding during a particular period of time and for other basic lending risks and costs (e.g. liquidity risk and administrative costs), as well as a profit margin.</p><p>In assessing whether the contractual cash flows are solely payments of principal and interest, the Company considers the contractual terms of the instrument. This includes assessing whether the financial asset contains a contractual term that could change the timing or amount of contractual cash flows such that it would not meet this condition. In making this assessment, the Company considers:</p>",

    content47:
      "<p>--contingent events that would change the amount or timing of cash flows;--terms that may adjust the contractual coupon rate, including variable-rate features;--prepayment and extension features; and --terms that limit the Company’s claim to cash flows from specified assets (e.g. non-recourse features).</p>",
    content48:
      "<p>A prepayment feature is consistent with the solely payments of principal and interest criterion if the prepayment amount substantially represents unpaid amounts of principal and interest on the principal amount outstanding, which may include reasonable additional compensation for early termination of the contract. Additionally, for a financial asset acquired at a discount or premium to its contractual par amount, a feature that permits or requires prepayment at an amount that substantially represents the contractual par amount plus accrued (but unpaid) contractual interest (which may also include reasonable additional compensation for early termination) is treated as consistent with this criterion if the fair value of the prepayment feature is insignificant at initial recognition.</p>",
    content49:
      "<p>Financial liabilities are classified as measured at amortized cost or FVTPL. A financial liability is classified as at FVTPL if it is classified as held-for-trading, it is a derivative or it is designated as such on initial recognition. Financial liabilities at FVTPL are measured at fair value and net gains and losses, including any interest expense, are recognized in profit or loss. Other financial liabilities are subsequently measured at amortized cost using the effective interest method. Interest expense and foreign exchange gains and losses are recognized in profit or loss. Any gain or loss on derecognition is also recognized in profit or loss.</p>",
    content50:
      "<p>The Company derecognizes a financial asset when the contractual rights to the cash flows from the financial asset expire, or it transfers the rights to receive the contractual cash flows in a transaction in which substantially all of the risks and rewards of ownership of the financial asset are transferred or in which the Company neither transfers nor retains substantially all of the risks and rewards of ownership and it does not retain control of the financial asset.</p>",

    content51:
      "<p>The Company derecognizes a financial liability when its contractual obligations are discharged or cancelled, or expire. The Company also derecognizes a financial liability when its terms are modified and the cash flows of the modified liability are substantially different, in which case a new financial liability based on the modified terms is recognized at fair value.</p><p>On derecognition of a financial liability, the difference between the carrying amount extinguished and the consideration paid (including any non-cash assets transferred or liabilities assumed) is recognized in profit or loss.</p>",
  };

  // Define a custom maximum length for the ReactQuill component
  const customMaxLength = 1000000; // Adjust this value as needed
  // const [editedText10, setEditedText10] = useState(initialData.content10);
  const [editedText41, setEditedText41] = useState(initialData.content41);

  const [editedText42, setEditedText42] = useState(initialData.content42);
  const [editedText43, setEditedText43] = useState(initialData.content43);
  const [editedText44, setEditedText44] = useState(initialData.content44);
  const [editedText45, setEditedText45] = useState(initialData.content45);
  const [editedText46, setEditedText46] = useState(initialData.content46);
  const [editedText47, setEditedText47] = useState(initialData.content47);
  const [editedText48, setEditedText48] = useState(initialData.content48);
  const [editedText49, setEditedText49] = useState(initialData.content49);
  const [editedText50, setEditedText50] = useState(initialData.content50);
  const [editedText51, setEditedText51] = useState(initialData.content51);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content41", setEditedText41);
    fetchDataFromDatabase("content42", setEditedText42);
    fetchDataFromDatabase("content43", setEditedText43);
    fetchDataFromDatabase("content44", setEditedText44);
    fetchDataFromDatabase("content45", setEditedText45);
    fetchDataFromDatabase("content46", setEditedText46);
    fetchDataFromDatabase("content47", setEditedText47);
    fetchDataFromDatabase("content48", setEditedText48);
    fetchDataFromDatabase("content49", setEditedText49);
    fetchDataFromDatabase("content50", setEditedText50);
    fetchDataFromDatabase("content51", setEditedText51);
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
      case "content41":
        setEditedText41(newText);
        break;
      case "content42":
        setEditedText42(newText);
        break;
      case "content43":
        setEditedText43(newText);
        break;

      case "content44":
        setEditedText44(newText);
        break;
      case "content45":
        setEditedText45(newText);
        break;
      case "content46":
        setEditedText46(newText);
        break;
      case "content47":
        setEditedText47(newText);
        break;
      case "content48":
        setEditedText48(newText);
        break;
      case "content49":
        setEditedText49(newText);
        break;
      case "content50":
        setEditedText50(newText);
        break;
      case "content51":
        setEditedText51(newText);
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
          name="textArea41"
          value={editedText41}
          onChange={(newText) => handleTextChange(newText, "content41")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea42"
          value={editedText42}
          onChange={(newText) => handleTextChange(newText, "content42")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea43"
          value={editedText43}
          onChange={(newText) => handleTextChange(newText, "content43")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea44"
          value={editedText44}
          onChange={(newText) => handleTextChange(newText, "content44")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea45"
          value={editedText45}
          onChange={(newText) => handleTextChange(newText, "content45")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea46"
          value={editedText46}
          onChange={(newText) => handleTextChange(newText, "content46")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea47"
          value={editedText47}
          onChange={(newText) => handleTextChange(newText, "content47")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea48"
          value={editedText48}
          onChange={(newText) => handleTextChange(newText, "content48")}
          className="custom-quill-editor  ql-container"
        />

        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <EditText
                  defaultValue="
              Financial assets at FVTPL
    "
                />
              </td>
              <td>
                {" "}
                <EditTextarea
                  defaultValue="
              These assets are subsequently measured at fair value. Net gains and losses, including any interest or dividend income, are recognised in profit or loss.
    "
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <EditText
                  defaultValue="
              Financial assets at amortised cost
    "
                />
              </td>
              <td>
                {" "}
                <EditTextarea
                  defaultValue="
              These assets are subsequently measured at amortised cost using the effective interest method. The amortised cost is reduced by impairment losses. Interest income, foreign exchange gains and losses and impairment are recognised in profit or loss. Any gain or loss on derecognition is recognised in profit or loss.
    "
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <EditText
                  defaultValue="
              Financial assets at amortised cost
    "
                />
              </td>
              <td>
                {" "}
                <EditTextarea
                  defaultValue="
              These assets are subsequently measured at fair value. Interest income calculated using the effective interest method, foreign exchange gains and losses and impairment are recognised in profit or loss. Other net gains and losses are recognised in OCI. On derecognition, gains and losses accumulated in OCI are reclassified to profit or loss.
    "
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <EditText
                  defaultValue="
              Equity investments at FVOCI
    "
                />
              </td>
              <td>
                {" "}
                <EditTextarea
                  defaultValue="
              These assets are subsequently measured at fair value. Dividends are recognised as income in profit or loss unless the dividend clearly represents a recovery of part of the cost of the investment. Other net gains and losses are recognised in OCI and are never reclassified to profit or loss.
    "
                />
              </td>
            </tr>
          </tbody>
        </table>

        <ReactQuill
          name="textArea49"
          value={editedText49}
          onChange={(newText) => handleTextChange(newText, "content49")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea50"
          value={editedText50}
          onChange={(newText) => handleTextChange(newText, "content50")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea51"
          value={editedText51}
          onChange={(newText) => handleTextChange(newText, "content51")}
          className="custom-quill-editor  ql-container"
        />
      </div>
    </>
  );
};

export default NoteOneToThree;
