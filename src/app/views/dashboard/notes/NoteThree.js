import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Style.css";

const NoteThree = () => {
  const initialData = {
    // content10:
    //   "<h2>Notes to the financial statement</h2><h2>1. Reporting entity</h2><p>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria on 4 September, 2007 as a limited liability company under the Companies and Allied Matters Act, Cap C20, Laws of the  Federation of Nigeria 2004.</p><p>The Company is domiciled in Nigeria and its registered office is 26B, Abimbola Street, Isolo Industrial Estate, Isolo, Lagos, Nigeria. The Company is principally engaged in the business of distribution of crop protection chemicals.</p><p>The parent and ultimate controlling entity of the Company is Inshara Global FZC, a company incorporated on 12 October 2009 and domicilied in Ras Al Khaimah, UAE.</p>",

    content20:
      "<h2>f. inventories</h2><p>Inventories are measured at the lower of cost and net realisable value. The cost of inventories includes expenditure incurred in acquiring the inventories, production or conversion costs and other costs incurred in bringing them to their existing location and condition. The basis of costing is as follows:</p><p>Raw material packaging - Purchase cost on a weighted average basis including transportation and applicable clearing charges.</p><p>Finished product - Weighted average cost of direct materials, labour costs and a proportion of production overheads based on normal operating capacity.</p><p>Inventory - purchase and freight cost as well as other costs incurred to date.</p><p>Net realisable value is the estimated selling price in the ordinary course of business, less the estimated costs to completion and selling expenses. Inventory values are adjusted for obsolete, slow-moving or defective items.</p>",

    content21:
      "<h2g. Impairment</h2><h2>Non derivative financial asset</h2><p>The Company recognizes loss allowances for expected credit losses (ECL) on financial assets measured at amortized cost. Loss allowances for trade and other receivables are always measured at an amount equal to lifetime ECLs. The ECLs for trade and other receivables are estimated using a provision matrix based on the Company's historical credit loss experience adjusted for factors that are specific to the debtors, general economic conditions and an assessment of both current as well as the forecast direction of conditions at the reporting date.</p>",

    content22:
      "<p>When determining whether the credit risk of a financial asset has increased significantly since initial recognition and when estimating ECLs, the Company considers reasonable and supportable information that is relevant and available without undue cost or effort. This includes both quantitative and qualitative information and analysis, based on the Company’s historical experience and informed credit assessment and including forward-looking information.</p><p>The Company assumes that the credit risk on a financial asset has increased significantly if it is more than 30 days past due The Company considers a financial asset to be in default when:  –the borrower is unlikely to pay its credit obligations to the Company in full, without recourse by the Company to actions such as realizing security (if any is held); o –the financial asset is more than 120 days past due.</p>",

    content23:
      "<p>Lifetime ECLs are the ECLs that result from all possible default events over the expected life of a financial instrument.  12-month ECLs are the portion of ECLs that result from default events that are possible within the 12 months after the reporting date (or a shorter period if the expected life of the instrument is less than 12 months).  The maximum period considered when estimating ECLs is the maximum contractual period over which the Company is exposed to credit risk.</p>",
    conten24:
      "<p>In assessing collective impairment, the Company uses historical trends of the probability of default, timing of recoveries and the amount of loss incurred, adjusted for management’s judgment as to whether current economic and credit conditions are such that the actual losses are likely to be greater or less than suggested by historical trends.</p><p>ECLs are a probability-weighted estimate of credit losses. Credit losses are measured as the present value of all cash shortfalls (i.e. the difference between the cash flows due to the entity in accordance with the contract and the cash flows that the Company expects to receive).ECLs are discounted at the effective interest rate of the financial asset.</p>",

    content26:
      "<p>At each reporting date, the Company assesses whether financial assets carried at amortized cost and debt securities at FVOCI are credit-impaired. A financial asset is ‘credit-impaired’ when one or more events that have a detrimental impact on the estimated future cash flows of the financial asset have occurred.</p>",
    content27:
      "<p>Evidence that a financial asset is credit-impaired includes the following observable data:   – significant financial difficulty of the borrower or issuer;   – a breach of contract such as a default or being more than 120 days past due;  – the restructuring of a loan or advance by the Company on terms that the Company would not consider otherwise;   – it is probable that the borrower will enter bankruptcy or other financial reorganisation; or  – the disappearance of an active market for a security because of financial difficulties.</p>",
    content28:
      "<p>Financial assets</p><p>The Company classified its financial assets into the following category: – loans and receivables</p><p>Financial liabilities – Classification, subsequent measurement and gains and losses</p>",
    content29:
      "<p>Financial liabilities are classified as measured at amortized cost or FVTPL. A financial liability is classified as at FVTPL if it is classified as held-for-trading, it is a derivative or it is designated as such on initial recognition. Financial liabilities at FVTPL are measured at fair value and net gains and losses, including any interest expense, are recognized in profit or loss. Other financial liabilities are subsequently measured at amortized cost using the effective interest method. Interest expense and foreign exchange gains and losses are recognized in profit or loss. Any gain or loss on derecognition is also recognized in profit or loss.</p><h2>iii. Derocognition</h2><p>Financial assets</p>",

    content30:
      "<p>The Company derecognizes a financial asset when the contractual rights to the cash flows from the financial asset expire, or it transfers the rights to receive the contractual cash flows in a transaction in which substantially all of the risks and rewards of ownership of the financial asset are transferred or in which the Company neither transfers nor retains substantially all of the risks and rewards of ownership and it does not retain control of the financial asset.</p><h2>Financial liability</h2><p>The Company derecognizes a financial liability when its contractual obligations are discharged or cancelled, or expire. The Company also derecognizes a financial liability when its terms are modified and the cash flows of the modified liability are substantially different, in which case a new financial liability based on the modified terms is recognized at fair value.</p>",

    content31:
      "<p>On derecognition of a financial liability, the difference between the carrying amount extinguished and the consideration paid (including any non-cash assets transferred or liabilities assumed) is recognized in profit or loss.</p><h2>iii. Offsetting</h2><p>Financial assets and financial liabilities are offset and the net amount presented in the statement of financial position when, and only when, the Company currently has a legally enforceable right to set off the amounts and it intends either to settle them on a net basis or to realize the asset and settle the liability simultaneously.</p><h2>Share capital</h2>",

    content32:
      "<p>If significant part of an item of property, plant and equipment have different useful lives, then they are accounted for as separate items (major components) of property, plant and equipment.</p><h2>Subsequent cost</h2><p>The cost of replacing a part of an item of property, plant and equipment is recognised in the carrying amount of the item if it is probable that the future economic benefits embodied within the part will flow to the Company and its cost can be measured reliably. The carrying amount of the replaced part is derecognised. The costs of the day-to-day servicing of property, plant and equipment are recognised in profit or loss as incurred.</p><h2>Derognition</h2><h2>The carrying amount of an item of property, plant and equipment is derecognised on disposal or when no future economic benefits are expected from its use or disposal.</h2>",

    content33:
      "<p>Gains and losses on derecognition or disposal of an item of property, plant and equipment are determined by comparing the proceeds from disposal with the carrying amount of property, plant and equipment, and are recognised net in profit or loss in the statement of profit or loss and other comprehensive income.</p><h2>Depreciation</h2><p>Depreciation is calculated over the depreciable amount, which is the cost of an asset, or other amount substituted for cost, less its residual value.</p>",

    content34:
      "<p>Depreciation is recognised in profit or loss on a straight-line basis over the estimated useful lives of each part of an item of property, plant and equipment which reflects the expected pattern of consumption of the future economic benefits embodied in the asset.</p>",

    content35:
      "<p>The Company derecognizes a financial asset when the contractual rights to the cash flows from the financial asset expire, or it transfers the rights to receive the contractual cash flows in a transaction in which substantially all of the risks and rewards of ownership of the financial asset are transferred or in which the Company neither transfers nor retains substantially all of the risks and rewards of ownership and it does not retain control of the financial asset.</p><h2>Financial liability</h2><p>The Company derecognizes a financial liability when its contractual obligations are discharged or cancelled, or expire. The Company also derecognizes a financial liability when its terms are modified and the cash flows of the modified liability are substantially different, in which case a new financial liability based on the modified terms is recognized at fair value.</p>",

    content36:
      "<p>The Company derecognizes a financial asset when the contractual rights to the cash flows from the financial asset expire, or it transfers the rights to receive the contractual cash flows in a transaction in which substantially all of the risks and rewards of ownership of the financial asset are transferred or in which the Company neither transfers nor retains substantially all of the risks and rewards of ownership and it does not retain control of the financial asset.</p><h2>Financial liability</h2><p>The Company derecognizes a financial liability when its contractual obligations are discharged or cancelled, or expire. The Company also derecognizes a financial liability when its terms are modified and the cash flows of the modified liability are substantially different, in which case a new financial liability based on the modified terms is recognized at fair value.</p>",

    content37:
      "<p>The Company derecognizes a financial asset when the contractual rights to the cash flows from the financial asset expire, or it transfers the rights to receive the contractual cash flows in a transaction in which substantially all of the risks and rewards of ownership of the financial asset are transferred or in which the Company neither transfers nor retains substantially all of the risks and rewards of ownership and it does not retain control of the financial asset.</p><h2>Financial liability</h2><p>The Company derecognizes a financial liability when its contractual obligations are discharged or cancelled, or expire. The Company also derecognizes a financial liability when its terms are modified and the cash flows of the modified liability are substantially different, in which case a new financial liability based on the modified terms is recognized at fair value.</p>",

    content38:
      "<p>The Company derecognizes a financial asset when the contractual rights to the cash flows from the financial asset expire, or it transfers the rights to receive the contractual cash flows in a transaction in which substantially all of the risks and rewards of ownership of the financial asset are transferred or in which the Company neither transfers nor retains substantially all of the risks and rewards of ownership and it does not retain control of the financial asset.</p><h2>Financial liability</h2><p>The Company derecognizes a financial liability when its contractual obligations are discharged or cancelled, or expire. The Company also derecognizes a financial liability when its terms are modified and the cash flows of the modified liability are substantially different, in which case a new financial liability based on the modified terms is recognized at fair value.</p>",

    content39:
      "<p>The Company derecognizes a financial asset when the contractual rights to the cash flows from the financial asset expire, or it transfers the rights to receive the contractual cash flows in a transaction in which substantially all of the risks and rewards of ownership of the financial asset are transferred or in which the Company neither transfers nor retains substantially all of the risks and rewards of ownership and it does not retain control of the financial asset.</p><h2>Financial liability</h2><p>The Company derecognizes a financial liability when its contractual obligations are discharged or cancelled, or expire. The Company also derecognizes a financial liability when its terms are modified and the cash flows of the modified liability are substantially different, in which case a new financial liability based on the modified terms is recognized at fair value.</p>",

    content40:
      "<p>The Company derecognizes a financial asset when the contractual rights to the cash flows from the financial asset expire, or it transfers the rights to receive the contractual cash flows in a transaction in which substantially all of the risks and rewards of ownership of the financial asset are transferred or in which the Company neither transfers nor retains substantially all of the risks and rewards of ownership and it does not retain control of the financial asset.</p><h2>Financial liability</h2><p>The Company derecognizes a financial liability when its contractual obligations are discharged or cancelled, or expire. The Company also derecognizes a financial liability when its terms are modified and the cash flows of the modified liability are substantially different, in which case a new financial liability based on the modified terms is recognized at fair value.</p>",
  };

  // Define a custom maximum length for the ReactQuill component
  const customMaxLength = 1000000; // Adjust this value as needed
  // const [editedText10, setEditedText10] = useState(initialData.content10);
  const [editedText20, setEditedText20] = useState(initialData.content20);

  const [editedText21, setEditedText21] = useState(initialData.content21);
  const [editedText22, setEditedText22] = useState(initialData.content22);
  const [editedText23, setEditedText23] = useState(initialData.content23);
  const [editedText24, setEditedText24] = useState(initialData.content24);
  const [editedText25, setEditedText25] = useState(initialData.content25);
  const [editedText26, setEditedText26] = useState(initialData.content26);
  const [editedText27, setEditedText27] = useState(initialData.content27);
  const [editedText28, setEditedText28] = useState(initialData.content28);
  const [editedText29, setEditedText29] = useState(initialData.content29);
  const [editedText30, setEditedText30] = useState(initialData.content30);
  const [editedText31, setEditedText31] = useState(initialData.content31);
  const [editedText32, setEditedText32] = useState(initialData.content32);
  const [editedText33, setEditedText33] = useState(initialData.content33);
  const [editedText34, setEditedText34] = useState(initialData.content34);
  const [editedText35, setEditedText35] = useState(initialData.content35);
  const [editedText36, setEditedText36] = useState(initialData.content36);
  const [editedText37, setEditedText37] = useState(initialData.content37);
  const [editedText38, setEditedText38] = useState(initialData.content38);
  const [editedText39, setEditedText39] = useState(initialData.content39);
  const [editedText40, setEditedText40] = useState(initialData.content40);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content20", setEditedText20);
    fetchDataFromDatabase("content21", setEditedText21);
    fetchDataFromDatabase("content22", setEditedText22);
    fetchDataFromDatabase("content23", setEditedText23);
    fetchDataFromDatabase("content24", setEditedText24);
    fetchDataFromDatabase("content25", setEditedText25);
    fetchDataFromDatabase("content26", setEditedText26);
    fetchDataFromDatabase("content27", setEditedText27);
    fetchDataFromDatabase("content28", setEditedText28);
    fetchDataFromDatabase("content29", setEditedText29);
    fetchDataFromDatabase("content30", setEditedText30);
    fetchDataFromDatabase("content31", setEditedText31);
    fetchDataFromDatabase("content32", setEditedText32);
    fetchDataFromDatabase("content33", setEditedText33);
    fetchDataFromDatabase("content34", setEditedText34);
    fetchDataFromDatabase("content35", setEditedText35);
    fetchDataFromDatabase("content36", setEditedText36);
    fetchDataFromDatabase("content37", setEditedText37);
    fetchDataFromDatabase("content38", setEditedText38);
    fetchDataFromDatabase("content39", setEditedText39);
    fetchDataFromDatabase("content40", setEditedText40);
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
      case "content20":
        setEditedText20(newText);
        break;
      case "content21":
        setEditedText21(newText);
        break;
      case "content22":
        setEditedText22(newText);
        break;

      case "content23":
        setEditedText23(newText);
        break;
      case "content24":
        setEditedText24(newText);
        break;
      case "content25":
        setEditedText25(newText);
        break;
      case "content26":
        setEditedText26(newText);
        break;
      case "content27":
        setEditedText27(newText);
        break;
      case "content28":
        setEditedText28(newText);
        break;
      case "content29":
        setEditedText29(newText);
        break;
      case "content30":
        setEditedText30(newText);
        break;
      case "content31":
        setEditedText31(newText);
        break;
      case "content32":
        setEditedText32(newText);
        break;
      case "content33":
        setEditedText33(newText);
        break;
      case "content34":
        setEditedText34(newText);
        break;
      case "content35":
        setEditedText35(newText);
        break;
      case "content36":
        setEditedText36(newText);
        break;
      case "content37":
        setEditedText37(newText);
        break;
      case "content38":
        setEditedText38(newText);
        break;
      case "content39":
        setEditedText39(newText);
        break;
      case "content40":
        setEditedText40(newText);
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
          name="textArea20"
          value={editedText20}
          onChange={(newText) => handleTextChange(newText, "content20")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea21"
          value={editedText21}
          onChange={(newText) => handleTextChange(newText, "content21")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea22"
          value={editedText22}
          onChange={(newText) => handleTextChange(newText, "content22")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea23"
          value={editedText23}
          onChange={(newText) => handleTextChange(newText, "content23")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea24"
          value={editedText24}
          onChange={(newText) => handleTextChange(newText, "content24")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea25"
          value={editedText25}
          onChange={(newText) => handleTextChange(newText, "content25")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea26"
          value={editedText26}
          onChange={(newText) => handleTextChange(newText, "content26")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea27"
          value={editedText27}
          onChange={(newText) => handleTextChange(newText, "content27")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea28"
          value={editedText28}
          onChange={(newText) => handleTextChange(newText, "content28")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea29"
          value={editedText29}
          onChange={(newText) => handleTextChange(newText, "content29")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea30"
          value={editedText30}
          onChange={(newText) => handleTextChange(newText, "content30")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea31"
          value={editedText31}
          onChange={(newText) => handleTextChange(newText, "content31")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea32"
          value={editedText32}
          onChange={(newText) => handleTextChange(newText, "content32")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea33"
          value={editedText33}
          onChange={(newText) => handleTextChange(newText, "content33")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea34"
          value={editedText34}
          onChange={(newText) => handleTextChange(newText, "content34")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea35"
          value={editedText35}
          onChange={(newText) => handleTextChange(newText, "content35")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea36"
          value={editedText36}
          onChange={(newText) => handleTextChange(newText, "content36")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea37"
          value={editedText37}
          onChange={(newText) => handleTextChange(newText, "content37")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea30"
          value={editedText30}
          onChange={(newText) => handleTextChange(newText, "content30")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea38"
          value={editedText38}
          onChange={(newText) => handleTextChange(newText, "content38")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea39"
          value={editedText39}
          onChange={(newText) => handleTextChange(newText, "content39")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea40"
          value={editedText40}
          onChange={(newText) => handleTextChange(newText, "content40")}
          className="custom-quill-editor  ql-container"
        />
      </div>
    </>
  );
};

export default NoteThree;
