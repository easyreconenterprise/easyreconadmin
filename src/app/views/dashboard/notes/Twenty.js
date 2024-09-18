import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Style.css";
import { EditText, EditTextarea } from "react-edit-text";
// Import the Total component
import Total from "../pages/Total"; // Adjust the path as needed

import "react-edit-text/dist/index.css";
import { useTotal } from "../pages/TotalContext";

const Twenty = () => {
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);
  const [total6, setTotal6] = useState(0);
  const [total7, setTotal7] = useState(0);
  const [total8, setTotal8] = useState(0);
  const [total9, setTotal9] = useState(0);

  const { total10, setTotal10 } = useTotal();
  const { total11, setTotal11 } = useTotal();
  const initialData = {
    // content10:
    //   "<h2>Notes to the financial statement</h2><h2>1. Reporting entity</h2><p>Lionseal Industries Limited (the 'Company') was incorporated in Nigeria on 4 September, 2007 as a limited liability company under the Companies and Allied Matters Act, Cap C20, Laws of the  Federation of Nigeria 2004.</p><p>The Company is domiciled in Nigeria and its registered office is 26B, Abimbola Street, Isolo Industrial Estate, Isolo, Lagos, Nigeria. The Company is principally engaged in the business of distribution of crop protection chemicals.</p><p>The parent and ultimate controlling entity of the Company is Inshara Global FZC, a company incorporated on 12 October 2009 and domicilied in Ras Al Khaimah, UAE.</p>",

    content16: "<h2>Notes to the financial statement</h2>",
    content17:
      "<p>The Company does not carry any financial asset or financial liabilities at fair values through profit or loss. The discounted cash flow valuation technique has been used to determine the fair value of non-current loans and borrowings. The valuation model considers the present value of expected cash flows discounted using market related interest rates.</p>",
    content18:
      "<p>The future cash flows are based on contractual amounts and considers the probability of occurrence of the cash flow. There are no significant unobservable inputs. The fair values were determined on the same basis in prior year and there have been no transfers between levels during the year.</p>",

    content2:
      "<h2>20. Leases</h2><p>The Company leases a number of  warehouses and accommodation facilities under operating leases. The lease typically run for a period of 2 to 3 years, with an option to renew the lease after that date.</p>",
    content41:
      "<p>Lease rentals are paid upfront and included in prepayments, which are amortized to profit or loss over the duration of the lease. During the year, an amount of ₦ XXX was recognized as an expense in profit or loss in respect of operating leases (2021: ₦70.05 million). The Company had no lease commitment as at year end.</p>",

    content3:
      "<h2>21. Contingencies</h2><h2>a. Pending litigation and claims</h2><p>There are certain lawsuits and claims pending against the Company which is being handled by external legal counsel. At year-end, there is no contingent liability in respect of these litigation cases (2021: Nil). In the opinion of the Directors, the Company's liabilities are not likely to be material but the amount cannot be determined with sufficient reliability. Accordingly, no provision has been made in these financial statements.</p><h2>b. Financial commitment</h2><p>The Directors are of the opinion that all known liabilities and commitments, which are relevant in assessing the state of affairs of the Company, have been taken into consideration in the preparation of these financial statements.</p>",

    content4:
      "<h2>22. Related parties</h2><p>Related parties include the ultimate parent company Inshara Global FZC and Inshara Global FZC group entities. Directors, their close family members and any key employee who are able to exert a significant influence on the operating policies of the Company are considered as related parties. Key management personnel are also regarded as related parties. Key management personnel are those persons having authority and responsibility for planning, directing and controlling the activities of the entity, directly or indirectly, including any Director (whether executive or otherwise) of that entity.</p>",

    content8:
      "<h2>a. Parent and ultimate controlling entity</h2><p>The Company is a subsidiary of Inshara Global FZC, a company incorporated on 12 October 2009 and domiciled in Ras Al Khaimah, UAE. Inshara Global FZC is the parent and ultimate controlling entity. There were significant transactions between the Company and Inshara Global FZC during the year. As at year end, Inshara Global FZC owned 90% of the issued share capital of the Company. During the year 2021, transactions with Inshara Global FZC amounted to ₦5.04 billion and the outstanding balance due to Inshara Global FZC amounts to ₦ XXX (2021: ₦1.475 billion).</p>",

    content9:
      "<h2>(b). Transactions with key management personnel</h2><h2>Advances to director</h2><p>The Company gives advances to the Chairman of the Company, Chief Rajashekar Hande. These advances are used for the procurement of assets and other business related purposes on behalf of the Company. As at year end, the advance outstanding from the Chairman amounts to ₦ XXX (2021: ₦2.3 million).</p>",

    content10:
      "<h2>(c)  Other related party transactions</h2><p>i. African Agro Products Limited (AAPL) is a related company to Lionseal Industries Limited (LIL) through common ownership. The Company advances funds to meet the business requirements. The net transactions during the year amounted to ₦1.45 billion and the outstanding balance due to LIL as at Dec 2022 is ₦ XXX (2020: ₦751.5)</p><p>ii. Nature Savvy personal care limited is a related company to Lionseal Industries Limited (LIL) through common ownership.</p>",

    content11:
      "<h2>23. Events after the reporting period</h2><p>There were no events after the reporting date which could have had a material effect on the state of affairs of the Company as at 31 December 2022 that have not been adequately provided for or disclosed in these financial statements.</p>",
    content12: "<p>0.000</p>",
    content13: "<p>0.000</p>",
    content14: "<p>0.000</p>",
    content15: "<p>0.000</p>",

    content19: "<p>0.000</p>",
    content20: "<p>0.000</p>",
    content21: "<p>0.000</p>",
    content22: "<p>0.000</p>",
    content23: "<p>0.000</p>",
    content24: "<p>0.000</p>",
    content25: "<p>0.000</p>",
    content26: "<p>0.000</p>",
    content27: "<p>0.000</p>",
    content28: "<p>0.000</p>",
    content29: "<p>0.000</p>",
    content30: "<p>0.000</p>",
    content31: "<p>0.000</p>",
    content32: "<p>0.000</p>",
    content33: "<p>0.000</p>",
    content34: "<p>0.000</p>",
    content35: "<p>0.000</p>",
    content36: "<p>0.000</p>",
    content37: "<p>0.000</p>",
    content38: "<p>0.000</p>",
    content39: "<p>0.000</p>",
    content40: "<p>0.000</p>",
    content50: "<p>0.000</p>",
    content51: "<p>0.000</p>",
    content52: "<p>0.000</p>",
    content53: "<p>0.000</p>",
    content54: "<p>0.000</p>",
    content55: "<p>0.000</p>",
    content56: "<p>0.000</p>",
    content57: "<p>0.000</p>",
    content58: "<p>0.000</p>",
    content59: "<p>0.000</p>",
    content60: "<p>0.000</p>",
    content61: "<p>0.000</p>",
    content62: "<p>0.000</p>",
    content63: "<p>0.000</p>",
    content64:
      "<h2>25. Intangible asset and good will</h2><h2>i. Recognition and Measurement</h2><p>Goodwill arising on the acquisition  of subsidiaries is measured at cost less accumulated impairment loss</p><p>Research and development Expenditure on research activities is recognised in profit or loss as incurred. Development expenditure is capitalized only if the expenditure can be measured reliably,the product or process is technically and commercialy feasible</p>",
  };
  const apiUrl = process.env.REACT_APP_API_URL;

  const [editedText2, setEditedText2] = useState(initialData.content2);

  const [editedText3, setEditedText3] = useState(initialData.content3);
  const [editedText4, setEditedText4] = useState(initialData.content4);
  const [editedText8, setEditedText8] = useState(initialData.content8);

  const [editedText16, setEditedText16] = useState(initialData.content16);
  const [editedText17, setEditedText17] = useState(initialData.content17);
  const [editedText18, setEditedText18] = useState(initialData.content18);
  const [editedText41, setEditedText41] = useState(initialData.content41);
  const [editedText9, setEditedText9] = useState(initialData.content9);
  const [editedText10, setEditedText10] = useState(initialData.content10);
  const [editedText11, setEditedText11] = useState(initialData.content11);
  const [editedText12, setEditedText12] = useState(initialData.content12);
  const [editedText13, setEditedText13] = useState(initialData.content13);
  const [editedText14, setEditedText14] = useState(initialData.content14);
  const [editedText15, setEditedText15] = useState(initialData.content15);
  const [editedText19, setEditedText19] = useState(initialData.content19);
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
  const [editedText50, setEditedText50] = useState(initialData.content50);
  const [editedText51, setEditedText51] = useState(initialData.content51);
  const [editedText52, setEditedText52] = useState(initialData.content52);
  const [editedText53, setEditedText53] = useState(initialData.content53);
  const [editedText54, setEditedText54] = useState(initialData.content54);
  const [editedText55, setEditedText55] = useState(initialData.content55);
  const [editedText56, setEditedText56] = useState(initialData.content56);
  const [editedText57, setEditedText57] = useState(initialData.content57);
  const [editedText58, setEditedText58] = useState(initialData.content58);
  const [editedText59, setEditedText59] = useState(initialData.content59);
  const [editedText60, setEditedText60] = useState(initialData.content60);
  const [editedText61, setEditedText61] = useState(initialData.content61);
  const [editedText62, setEditedText62] = useState(initialData.content62);
  const [editedText63, setEditedText63] = useState(initialData.content63);
  const [editedText64, setEditedText64] = useState(initialData.content64);

  useEffect(() => {
    // fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content2", setEditedText2);
    fetchDataFromDatabase("content3", setEditedText3);
    fetchDataFromDatabase("content4", setEditedText4);
    fetchDataFromDatabase("content8", setEditedText8);

    fetchDataFromDatabase("content16", setEditedText16);
    fetchDataFromDatabase("content17", setEditedText17);
    fetchDataFromDatabase("content18", setEditedText18);
    fetchDataFromDatabase("content41", setEditedText41);

    fetchDataFromDatabase("content9", setEditedText9);
    fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content11", setEditedText11);
    fetchDataFromDatabase("content12", setEditedText12);
    fetchDataFromDatabase("content13", setEditedText13);
    fetchDataFromDatabase("content14", setEditedText14);
    fetchDataFromDatabase("content15", setEditedText15);

    fetchDataFromDatabase("content19", setEditedText19);
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
    fetchDataFromDatabase("content50", setEditedText50);
    fetchDataFromDatabase("content51", setEditedText51);
    fetchDataFromDatabase("content52", setEditedText52);
    fetchDataFromDatabase("content53", setEditedText53);
    fetchDataFromDatabase("content54", setEditedText54);
    fetchDataFromDatabase("content55", setEditedText55);
    fetchDataFromDatabase("content56", setEditedText56);
    fetchDataFromDatabase("content57", setEditedText57);
    fetchDataFromDatabase("content58", setEditedText58);
    fetchDataFromDatabase("content59", setEditedText59);
    fetchDataFromDatabase("content60", setEditedText60);
    fetchDataFromDatabase("content61", setEditedText61);
    fetchDataFromDatabase("content62", setEditedText62);
    fetchDataFromDatabase("content63", setEditedText63);
    fetchDataFromDatabase("content64", setEditedText64);
  }, []);

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-twenty-text?field=${field}`, {
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
    contentValues[field] = newText;
    console.log(`Updated ${field} with:`, newText);

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
      case "content41":
        setEditedText41(newText);
        break;
      case "content9":
        setEditedText9(newText);
        break;
      case "content10":
        setEditedText10(newText);
        break;
      case "content11":
        setEditedText11(newText);
        break;
      case "content12":
        setEditedText12(newText);
        console.log("New Text for content2:", newText);
        break;
      case "content13":
        setEditedText13(newText);
        console.log("New Text for content2:", newText);
        break;
      case "content14":
        setEditedText14(newText);
        break;
      case "content15":
        setEditedText15(newText);
        break;
      case "content19":
        setEditedText19(newText);
        break;
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
      case "content50":
        setEditedText50(newText);
        break;
      case "content51":
        setEditedText51(newText);
        break;
      case "content52":
        setEditedText52(newText);
        break;
      case "content53":
        setEditedText53(newText);
        break;
      case "content54":
        setEditedText54(newText);
        break;
      case "content55":
        setEditedText55(newText);
        break;
      case "content56":
        setEditedText56(newText);
        break;
      case "content57":
        setEditedText57(newText);
        break;
      case "content58":
        setEditedText58(newText);
        break;
      case "content59":
        setEditedText59(newText);
        break;
      case "content60":
        setEditedText60(newText);
        break;
      case "content61":
        setEditedText61(newText);
        break;
      case "content62":
        setEditedText62(newText);
        break;
      case "content63":
        setEditedText63(newText);
        break;
      case "content64":
        setEditedText64(newText);
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
      .post(`${apiUrl}/api/save-twenty-text`, data, {
        headers,
      })
      .then((response) => {
        // Data saved successfully
      })
      .catch((error) => {
        console.error(`Error saving ${field}:`, error);
      });
  };
  const contentValues = {
    content12: editedText12,
    content13: editedText13,
    content14: editedText14,
    content15: editedText15,
    content19: editedText19,
    content20: editedText20,
    content23: editedText23,
    content25: editedText25,
    content27: editedText27,
    content29: editedText29,
    content31: editedText31,
    content33: editedText33,
    content35: editedText35,
    content24: editedText24,
    content26: editedText26,
    content28: editedText28,
    content30: editedText30,
    content32: editedText32,
    content34: editedText34,
    content36: editedText36,
    content37: editedText37,
    content39: editedText39,
    content38: editedText38,
    content40: editedText40,
    content50: editedText50,
    content51: editedText51,
    content52: editedText52,
    content53: editedText53,
    content54: editedText54,
    content55: editedText55,
    content56: editedText56,
    content57: editedText57,
    content58: editedText58,
    content59: editedText59,
    content60: editedText60,
    content61: editedText61,
    content62: editedText62,
    content63: editedText63,
  };
  const parseNumericValue = (text) => {
    // Use regex to extract numeric values (including decimals)
    const numericValue = parseFloat(text.replace(/(<([^>]+)>)/gi, "").trim());
    return isNaN(numericValue) ? 0 : numericValue;
  };
  useEffect(() => {
    // const value12 = parseFloat(editedText12) || 0;
    // const value13 = parseFloat(editedText13) || 0;
    // const value14 = parseFloat(editedText14) || 0;
    // const value15 = parseFloat(editedText15) || 0;

    // const value19 = parseFloat(editedText19) || 0;
    // const value20 = parseFloat(editedText20) || 0;
    console.log("useEffect triggered");
    const value12 = parseNumericValue(contentValues.content12);
    const value13 = parseNumericValue(contentValues.content13);
    const value14 = parseNumericValue(contentValues.content14);
    const value15 = parseNumericValue(contentValues.content15);
    const value19 = parseNumericValue(contentValues.content19);
    const value20 = parseNumericValue(contentValues.content20);
    const value23 = parseNumericValue(contentValues.content23);
    const value25 = parseNumericValue(contentValues.content25);
    const value27 = parseNumericValue(contentValues.content27);
    const value29 = parseNumericValue(contentValues.content29);
    const value31 = parseNumericValue(contentValues.content31);
    const value33 = parseNumericValue(contentValues.content33);
    const value35 = parseNumericValue(contentValues.content35);
    const value24 = parseNumericValue(contentValues.content24);
    const value26 = parseNumericValue(contentValues.content26);
    const value28 = parseNumericValue(contentValues.content28);
    const value30 = parseNumericValue(contentValues.content30);
    const value32 = parseNumericValue(contentValues.content32);
    const value34 = parseNumericValue(contentValues.content34);
    const value36 = parseNumericValue(contentValues.content36);
    const value37 = parseNumericValue(contentValues.content37);
    const value39 = parseNumericValue(contentValues.content39);
    const value38 = parseNumericValue(contentValues.content38);
    const value40 = parseNumericValue(contentValues.content40);
    const value50 = parseNumericValue(contentValues.content50);
    const value51 = parseNumericValue(contentValues.content51);
    const value52 = parseNumericValue(contentValues.content52);
    const value53 = parseNumericValue(contentValues.content53);
    const value54 = parseNumericValue(contentValues.content54);
    const value55 = parseNumericValue(contentValues.content55);
    const value56 = parseNumericValue(contentValues.content56);
    const value57 = parseNumericValue(contentValues.content57);
    const value58 = parseNumericValue(contentValues.content58);
    const value59 = parseNumericValue(contentValues.content59);
    const value60 = parseNumericValue(contentValues.content60);
    const value61 = parseNumericValue(contentValues.content61);
    const value62 = parseNumericValue(contentValues.content62);
    const value63 = parseNumericValue(contentValues.content63);

    const newTotal = value12 + value14 + value19;
    const newTotal1 = value13 + value15 + value20;
    const newTotal2 =
      value23 + value25 + value27 + value29 + value31 + value33 + value35;
    const newTotal3 =
      value24 + value26 + value28 + value30 + value32 + value34 + value36;
    const newTotal4 = value39 + value37;
    const newTotal5 = value38 + value40;
    const newTotal6 = value50 + value52 + value54 + value56 + value58;
    const newTotal7 = value51 + value53 + value55 + value57 + value59;
    const newTotal8 = value60 + value62;
    const newTotal9 = value61 + value63;
    const newTotal10 = newTotal6 + newTotal8;
    const newTotal11 = newTotal7 + newTotal9;

    setTotal(newTotal);
    setTotal1(newTotal1);
    setTotal2(newTotal2);
    setTotal3(newTotal3);
    setTotal4(newTotal4);
    setTotal5(newTotal5);
    setTotal6(newTotal6);
    setTotal7(newTotal7);
    setTotal8(newTotal8);
    setTotal9(newTotal9);
    setTotal10(newTotal10);
    setTotal11(newTotal11);
  }, [
    contentValues.content12,
    contentValues.content13,
    contentValues.content14,
    contentValues.content15,
    contentValues.content19,
    contentValues.content20,
    contentValues.content23,
    contentValues.content25,
    contentValues.content27,
    contentValues.content29,
    contentValues.content31,
    contentValues.content33,
    contentValues.content35,
    contentValues.content24,
    contentValues.content26,
    contentValues.content28,
    contentValues.content30,
    contentValues.content32,
    contentValues.content34,
    contentValues.content36,
    contentValues.content37,
    contentValues.content39,
    contentValues.content38,
    contentValues.content40,
    contentValues.content50,
    contentValues.content51,
    contentValues.content52,
    contentValues.content53,
    contentValues.content54,
    contentValues.content55,
    contentValues.content56,
    contentValues.content57,
    contentValues.content58,
    contentValues.content59,
    contentValues.content60,
    contentValues.content61,
    contentValues.content62,
    contentValues.content63,
  ]);
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
          name="textArea41"
          value={editedText41}
          onChange={(newText) => handleTextChange(newText, "content41")}
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
          name="textArea9"
          value={editedText9}
          onChange={(newText) => handleTextChange(newText, "content9")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea10"
          value={editedText10}
          onChange={(newText) => handleTextChange(newText, "content10")}
          className="custom-quill-editor  ql-container"
        />
        <ReactQuill
          name="textArea11"
          value={editedText11}
          onChange={(newText) => handleTextChange(newText, "content11")}
          className="custom-quill-editor  ql-container"
        />
        <table className="table">
          <thead>
            <tr style={{ textDecoration: "underline 2px" }}>
              <th style={{ fontSize: "15px", fontWeight: "500" }}>
                b. Cash flow from (or used) in discontinued operations{" "}
              </th>

              <th style={{ fontSize: "15px" }}></th>
              <th style={{ fontSize: "15px" }}>2022</th>
              <th style={{ fontSize: "15px" }}>2023</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th style={{ fontSize: "15px" }}></th>

              <th></th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
            </tr>
          </thead>

          <tr>
            {" "}
            <td>Net cash generated from operating activities</td>
            <td></td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea12"
                  value={editedText12}
                  onChange={(newText) => handleTextChange(newText, "content12")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea13"
                  value={editedText13}
                  onChange={(newText) => handleTextChange(newText, "content13")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Net cash generated from operating activities</td>
            <td></td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea14"
                  value={editedText14}
                  onChange={(newText) => handleTextChange(newText, "content14")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea15"
                  value={editedText15}
                  onChange={(newText) => handleTextChange(newText, "content15")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Net cash generated from operating activities</td>
            <td></td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea19"
                  value={editedText19}
                  onChange={(newText) => handleTextChange(newText, "content19")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea20"
                  value={editedText20}
                  onChange={(newText) => handleTextChange(newText, "content20")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>

          <tr>
            <b>
              {" "}
              <td>Net cash flow for the year</td>
            </b>
            <td></td>

            <td>{total}</td>
            <td> {total1}</td>
          </tr>
        </table>
        <table className="table">
          <thead>
            <tr style={{ textDecoration: "underline 2px" }}>
              <th style={{ fontSize: "15px", fontWeight: "500" }}>
                c. Effect of disposal of the financial position of the company{" "}
              </th>

              <th style={{ fontSize: "15px" }}></th>
              <th style={{ fontSize: "15px" }}>2022</th>
              <th style={{ fontSize: "15px" }}>2023</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th style={{ fontSize: "15px" }}></th>

              <th></th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
            </tr>
          </thead>

          <tr>
            {" "}
            <td>Property, plant and equipment</td>
            <td></td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea23"
                  value={editedText23}
                  onChange={(newText) => handleTextChange(newText, "content23")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea24"
                  value={editedText24}
                  onChange={(newText) => handleTextChange(newText, "content24")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Inventories</td>
            <td></td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea25"
                  value={editedText25}
                  onChange={(newText) => handleTextChange(newText, "content25")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea26"
                  value={editedText26}
                  onChange={(newText) => handleTextChange(newText, "content26")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Prepayment and advances</td>
            <td></td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea27"
                  value={editedText27}
                  onChange={(newText) => handleTextChange(newText, "content27")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea28"
                  value={editedText28}
                  onChange={(newText) => handleTextChange(newText, "content28")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Trade and other receivables</td>
            <td></td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea29"
                  value={editedText29}
                  onChange={(newText) => handleTextChange(newText, "content29")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea30"
                  value={editedText30}
                  onChange={(newText) => handleTextChange(newText, "content30")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Cash and cash equivalent</td>
            <td></td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea31"
                  value={editedText31}
                  onChange={(newText) => handleTextChange(newText, "content31")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea32"
                  value={editedText32}
                  onChange={(newText) => handleTextChange(newText, "content32")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Loans and borrowings</td>
            <td></td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea33"
                  value={editedText33}
                  onChange={(newText) => handleTextChange(newText, "content33")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <ReactQuill
                  name="textArea34"
                  value={editedText34}
                  onChange={(newText) => handleTextChange(newText, "content34")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Trade and other payables</td>
            <td></td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea35"
                  value={editedText35}
                  onChange={(newText) => handleTextChange(newText, "content35")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea36"
                  value={editedText36}
                  onChange={(newText) => handleTextChange(newText, "content36")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>

          <tr>
            <b>
              {" "}
              <td>Net assets and liability</td>
            </b>
            <td></td>

            <td>{total2}</td>
            <td>{total3}</td>
          </tr>
        </table>

        <table className="table">
          <tr>
            {" "}
            <td>consideration received satisfied in cash</td>
            <td></td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea37"
                  value={editedText37}
                  onChange={(newText) => handleTextChange(newText, "content37")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea38"
                  value={editedText38}
                  onChange={(newText) => handleTextChange(newText, "content38")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <td>Cash and cash equivalent disposed of</td>
            <td></td>
            <td>
              {" "}
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea39"
                  value={editedText39}
                  onChange={(newText) => handleTextChange(newText, "content39")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
            <td>
              <div id="editable-content-12">
                <ReactQuill
                  name="textArea40"
                  value={editedText40}
                  onChange={(newText) => handleTextChange(newText, "content40")}
                  className="custom-quill-editor  ql-container"
                />
              </div>
            </td>
          </tr>

          <tr>
            <b>
              {" "}
              <td>Net cash outflows</td>
            </b>
            <td></td>

            <td>{total4}</td>
            <td>{total5}</td>
          </tr>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th style={{ fontSize: "15px" }}>
                Non current and current assets
              </th>

              <th></th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
            </tr>
          </thead>

          <tr>
            {" "}
            <td>Property, plant and equipment (Note 10(a))</td>
            <td></td>
            <td>
              {" "}
              <ReactQuill
                name="textArea50"
                value={editedText50}
                onChange={(newText) => handleTextChange(newText, "content50")}
                className="custom-quill-editor  ql-container"
              />
            </td>
            <td>
              {" "}
              <ReactQuill
                name="textArea51"
                value={editedText51}
                onChange={(newText) => handleTextChange(newText, "content51")}
                className="custom-quill-editor  ql-container"
              />
            </td>
          </tr>
          <tr>
            {" "}
            <td>Inventories</td>
            <td></td>
            <td>
              {" "}
              <ReactQuill
                name="textArea52"
                value={editedText52}
                onChange={(newText) => handleTextChange(newText, "content52")}
                className="custom-quill-editor  ql-container"
              />
            </td>
            <td>
              {" "}
              <ReactQuill
                name="textArea53"
                value={editedText53}
                onChange={(newText) => handleTextChange(newText, "content53")}
                className="custom-quill-editor  ql-container"
              />
            </td>
          </tr>
          <tr>
            {" "}
            <td>Prepayment and advances</td>
            <td></td>
            <td>
              {" "}
              <ReactQuill
                name="textArea54"
                value={editedText54}
                onChange={(newText) => handleTextChange(newText, "content54")}
                className="custom-quill-editor  ql-container"
              />
            </td>
            <td>
              {" "}
              <ReactQuill
                name="textArea55"
                value={editedText55}
                onChange={(newText) => handleTextChange(newText, "content55")}
                className="custom-quill-editor  ql-container"
              />
            </td>
          </tr>
          <tr>
            {" "}
            <td>Trade and other receivables</td>
            <td></td>
            <td>
              {" "}
              <ReactQuill
                name="textArea56"
                value={editedText56}
                onChange={(newText) => handleTextChange(newText, "content56")}
                className="custom-quill-editor  ql-container"
              />
            </td>
            <td>
              {" "}
              <ReactQuill
                name="textArea57"
                value={editedText57}
                onChange={(newText) => handleTextChange(newText, "content57")}
                className="custom-quill-editor  ql-container"
              />
            </td>
          </tr>
          <tr>
            {" "}
            <td>Cash and cash equivalent</td>
            <td></td>
            <td>
              {" "}
              <ReactQuill
                name="textArea58"
                value={editedText58}
                onChange={(newText) => handleTextChange(newText, "content58")}
                className="custom-quill-editor  ql-container"
              />
            </td>
            <td>
              {" "}
              <ReactQuill
                name="textArea59"
                value={editedText59}
                onChange={(newText) => handleTextChange(newText, "content59")}
                className="custom-quill-editor  ql-container"
              />
            </td>
          </tr>

          <tr>
            <b>
              {" "}
              <td>Total assets</td>
            </b>
            <td></td>

            <td>{total6}</td>
            <td>{total7}</td>
          </tr>
        </table>
        <table className="table">
          <b>
            {" "}
            <tr>Liabilites</tr>
          </b>
          <br></br>
          <b>
            {" "}
            <tr>Current Liabilites</tr>
          </b>
          <tr>
            {" "}
            <td>Loans and borrowings</td>
            <td></td>
            <td>
              {" "}
              <ReactQuill
                name="textArea60"
                value={editedText60}
                onChange={(newText) => handleTextChange(newText, "content60")}
                className="custom-quill-editor  ql-container"
              />
            </td>
            <td>
              {" "}
              <ReactQuill
                name="textArea61"
                value={editedText61}
                onChange={(newText) => handleTextChange(newText, "content61")}
                className="custom-quill-editor  ql-container"
              />
            </td>
          </tr>
          <tr>
            {" "}
            <td>Trade and other payables</td>
            <td></td>
            <td>
              {" "}
              <ReactQuill
                name="textArea62"
                value={editedText62}
                onChange={(newText) => handleTextChange(newText, "content62")}
                className="custom-quill-editor  ql-container"
              />
            </td>
            <td>
              {" "}
              <ReactQuill
                name="textArea63"
                value={editedText63}
                onChange={(newText) => handleTextChange(newText, "content63")}
                className="custom-quill-editor  ql-container"
              />
            </td>
          </tr>

          <tr>
            <b>
              {" "}
              <td>Total liability</td>
            </b>
            <td></td>

            <td>{total8}</td>
            <td>{total9}</td>
          </tr>

          <tr>
            <b>
              {" "}
              <td>Net Asset</td>
            </b>
            <td></td>

            <td>
              {" "}
              <td>{total10}</td>
            </td>
            <td>{total11}</td>
          </tr>
        </table>
        <ReactQuill
          name="textArea64"
          value={editedText64}
          onChange={(newText) => handleTextChange(newText, "content64")}
          className="custom-quill-editor  ql-container"
        />
      </div>
    </>
  );
};

export default Twenty;
