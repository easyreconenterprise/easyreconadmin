import React, { useState, useEffect } from "react";
import { TablePanel } from "./TablePanel";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import axios from "axios";
import Revenue2 from "../notes/Revenue2";
import Revenue3 from "../pages/Revenue3";
import Revenue4 from "../pages/Revenue4";
import Operate from "./Operate";
import Minitax from "./Minitax";
import Intax from "./Intax";
import Cont from "./Cont";
import Profit from "../notes/Profit";
import Noncurrent from "./Noncurrent";
import Noncurrent2 from "./Noncurrent2";
import Current from "./Current";
import Current2 from "./Current2";
import Totalass from "./Totalass";
import Totalass2 from "./Totalass2";
import Nonculi from "./Nonculi";
import Nonculi2 from "./Nonculi2";
import Culi from "./Culi";
import Culi2 from "./Culi2";
import Equi from "./Equi";
import Equi2 from "./Equi2";
import Totalequi from "./Totalequi";
import Totalequi2 from "./Totalequi2";

const FinSummary = ({ incomeSum }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [subcategory, setSubcategory] = useState({});

  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the authentication token from wherever you've stored it (e.g., local storage)
        const token = localStorage.getItem("jwtToken");

        // Include the token in the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Make an API call to fetch categorized data
        const response = await axios.get(
          `${apiUrl}/api/mapped-data`,
          { headers } // Include the headers in the request
        );

        // Assuming the fetched data structure matches your requirements
        const mappedData = response.data[0];

        // Set the subcategory state with the fetched data
        setSubcategory(mappedData.subcategory);

        // Calculate summations and set state for incomeSum
      } catch (error) {
        console.error("Error fetching mapped data:", error);
      }
    };

    fetchData();
  }, []);

  const initialData = {
    content1: "0.000",
    content2: "0.000",
    content3: "0.000",
    content4: "0.000",
    content5: "0.000",
    content6: "0.000",
    content7: "0.000",
    content8: "0.000",
    content9: "0.000",
    content10: "0.000",
    content11: "0.000",
    content12: "0.000",
    content13: "0.000",
    content14: "0.000",
    content15: "0.000",
    content16: "0.000",
    content17: "0.000",
    content18: "0.000",
    content19: "0.000",
    content20: "0.000",
    content21: "0.000",
    content22: "0.000",
    content23: "0.000",
    content24: "0.000",
    content25: "0.000",
    content26: "0.000",
    content27: "0.000",
    content28: "0.000",
    content29: "0.000",
    content30: "0.000",
    content31: "0.000",
    content32: "0.000",
    content33: "0.000",
    content34: "0.000",
    content35: "0.000",
    content36: "0.000",
    content37: "0.000",
    content38: "0.000",
  };

  const [editedText1, setEditedText1] = useState(initialData.content1);
  const [editedText2, setEditedText2] = useState(initialData.content2);
  const [editedText3, setEditedText3] = useState(initialData.content3);
  const [editedText4, setEditedText4] = useState(initialData.content4);
  const [editedText5, setEditedText5] = useState(initialData.content5);
  const [editedText6, setEditedText6] = useState(initialData.content6);
  const [editedText7, setEditedText7] = useState(initialData.content7);
  const [editedText8, setEditedText8] = useState(initialData.content8);
  const [editedText9, setEditedText9] = useState(initialData.content9);
  const [editedText10, setEditedText10] = useState(initialData.content10);
  const [editedText11, setEditedText11] = useState(initialData.content11);
  const [editedText12, setEditedText12] = useState(initialData.content12);
  const [editedText13, setEditedText13] = useState(initialData.content13);
  const [editedText14, setEditedText14] = useState(initialData.content14);
  const [editedText15, setEditedText15] = useState(initialData.content15);
  const [editedText16, setEditedText16] = useState(initialData.content16);
  const [editedText17, setEditedText17] = useState(initialData.content17);
  const [editedText18, setEditedText18] = useState(initialData.content18);
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

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    fetchDataFromDatabase("content1", setEditedText1);
    fetchDataFromDatabase("content2", setEditedText2);
    fetchDataFromDatabase("content3", setEditedText3);
    fetchDataFromDatabase("content4", setEditedText4);
    fetchDataFromDatabase("content5", setEditedText5);
    fetchDataFromDatabase("content6", setEditedText6);
    fetchDataFromDatabase("content7", setEditedText7);
    fetchDataFromDatabase("content8", setEditedText8);
    fetchDataFromDatabase("content9", setEditedText9);
    fetchDataFromDatabase("content10", setEditedText10);
    fetchDataFromDatabase("content11", setEditedText11);
    fetchDataFromDatabase("content12", setEditedText12);
    fetchDataFromDatabase("content13", setEditedText13);
    fetchDataFromDatabase("content14", setEditedText14);
    fetchDataFromDatabase("content15", setEditedText15);
    fetchDataFromDatabase("content16", setEditedText16);
    fetchDataFromDatabase("content17", setEditedText17);
    fetchDataFromDatabase("content18", setEditedText18);
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

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText1Change = (e) => {
    const newText = e.target.value;
    setEditedText1(newText);
    saveTextToDatabase("content1", newText);
  };
  const handleText2Change = (e) => {
    const newText = e.target.value;
    setEditedText2(newText);
    saveTextToDatabase("content2", newText);
  };
  const handleText3Change = (e) => {
    const newText = e.target.value;
    setEditedText3(newText);
    saveTextToDatabase("content3", newText);
  };
  const handleText4Change = (e) => {
    const newText = e.target.value;
    setEditedText4(newText);
    saveTextToDatabase("content4", newText);
  };
  const handleText5Change = (e) => {
    const newText = e.target.value;
    setEditedText5(newText);
    saveTextToDatabase("content5", newText);
  };
  const handleText6Change = (e) => {
    const newText = e.target.value;
    setEditedText6(newText);
    saveTextToDatabase("content6", newText);
  };
  const handleText7Change = (e) => {
    const newText = e.target.value;
    setEditedText7(newText);
    saveTextToDatabase("content7", newText);
  };
  const handleText8Change = (e) => {
    const newText = e.target.value;
    setEditedText8(newText);
    saveTextToDatabase("content8", newText);
  };
  const handleText9Change = (e) => {
    const newText = e.target.value;
    setEditedText9(newText);
    saveTextToDatabase("content9", newText);
  };
  const handleText10Change = (e) => {
    const newText = e.target.value;
    setEditedText10(newText);
    saveTextToDatabase("content10", newText);
  };
  const handleText11Change = (e) => {
    const newText = e.target.value;
    setEditedText11(newText);
    saveTextToDatabase("content11", newText);
  };
  const handleText12Change = (e) => {
    const newText = e.target.value;
    setEditedText12(newText);
    saveTextToDatabase("content12", newText);
  };
  const handleText13Change = (e) => {
    const newText = e.target.value;
    setEditedText13(newText);
    saveTextToDatabase("content13", newText);
  };
  const handleText14Change = (e) => {
    const newText = e.target.value;
    setEditedText14(newText);
    saveTextToDatabase("content14", newText);
  };
  const handleText15Change = (e) => {
    const newText = e.target.value;
    setEditedText15(newText);
    saveTextToDatabase("content15", newText);
  };
  const handleText16Change = (e) => {
    const newText = e.target.value;
    setEditedText16(newText);
    saveTextToDatabase("content16", newText);
  };
  const handleText17Change = (e) => {
    const newText = e.target.value;
    setEditedText17(newText);
    saveTextToDatabase("content17", newText);
  };
  const handleText18Change = (e) => {
    const newText = e.target.value;
    setEditedText18(newText);
    saveTextToDatabase("content18", newText);
  };
  const handleText19Change = (e) => {
    const newText = e.target.value;
    setEditedText19(newText);
    saveTextToDatabase("content19", newText);
  };

  const handleText20Change = (e) => {
    const newText = e.target.value;
    setEditedText20(newText);
    saveTextToDatabase("content20", newText);
  };
  const handleText21Change = (e) => {
    const newText = e.target.value;
    setEditedText21(newText);
    saveTextToDatabase("content21", newText);
  };
  const handleText22Change = (e) => {
    const newText = e.target.value;
    setEditedText22(newText);
    saveTextToDatabase("content22", newText);
  };
  const handleText23Change = (e) => {
    const newText = e.target.value;
    setEditedText23(newText);
    saveTextToDatabase("content23", newText);
  };
  const handleText24Change = (e) => {
    const newText = e.target.value;
    setEditedText24(newText);
    saveTextToDatabase("content24", newText);
  };
  const handleText25Change = (e) => {
    const newText = e.target.value;
    setEditedText25(newText);
    saveTextToDatabase("content25", newText);
  };
  const handleText26Change = (e) => {
    const newText = e.target.value;
    setEditedText26(newText);
    saveTextToDatabase("content26", newText);
  };
  const handleText27Change = (e) => {
    const newText = e.target.value;
    setEditedText27(newText);
    saveTextToDatabase("content27", newText);
  };
  const handleText28Change = (e) => {
    const newText = e.target.value;
    setEditedText28(newText);
    saveTextToDatabase("content28", newText);
  };
  const handleText29Change = (e) => {
    const newText = e.target.value;
    setEditedText29(newText);
    saveTextToDatabase("content29", newText);
  };
  const handleText30Change = (e) => {
    const newText = e.target.value;
    setEditedText30(newText);
    saveTextToDatabase("content30", newText);
  };
  const handleText31Change = (e) => {
    const newText = e.target.value;
    setEditedText31(newText);
    saveTextToDatabase("content31", newText);
  };
  const handleText32Change = (e) => {
    const newText = e.target.value;
    setEditedText32(newText);
    saveTextToDatabase("content32", newText);
  };
  const handleText33Change = (e) => {
    const newText = e.target.value;
    setEditedText33(newText);
    saveTextToDatabase("content33", newText);
  };
  const handleText34Change = (e) => {
    const newText = e.target.value;
    setEditedText34(newText);
    saveTextToDatabase("content34", newText);
  };
  const handleText35Change = (e) => {
    const newText = e.target.value;
    setEditedText35(newText);
    saveTextToDatabase("content35", newText);
  };
  const handleText36Change = (e) => {
    const newText = e.target.value;
    setEditedText36(newText);
    saveTextToDatabase("content36", newText);
  };
  const handleText37Change = (e) => {
    const newText = e.target.value;
    setEditedText37(newText);
    saveTextToDatabase("content37", newText);
  };
  const handleText38Change = (e) => {
    const newText = e.target.value;
    setEditedText38(newText);
    saveTextToDatabase("content38", newText);
  };

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-sum-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-sum-text`, data, {
        headers,
      })
      .then((response) => {
        // Data saved successfully
      })
      .catch((error) => {
        console.error(`Error saving ${field}:`, error);
      });
  };

  useEffect(() => {
    const value1 = parseFloat(editedText1) || 0;
    const value2 = parseFloat(editedText2) || 0;
    const value3 = parseFloat(editedText3) || 0;
    const value4 = parseFloat(editedText4) || 0;
    const value5 = parseFloat(editedText5) || 0;
    const value6 = parseFloat(editedText6) || 0;
    const value7 = parseFloat(editedText7) || 0;
    const value8 = parseFloat(editedText8) || 0;
    const value9 = parseFloat(editedText9) || 0;
    const value10 = parseFloat(editedText10) || 0;
    const value11 = parseFloat(editedText11) || 0;
    const value19 = parseFloat(editedText19) || 0;
    const value20 = parseFloat(editedText20) || 0;

    const newTotal1 = value1 + value3;
    setTotal1(newTotal1);
  }, [
    editedText1,
    editedText2,
    editedText3,
    editedText4,
    editedText5,
    editedText6,
    editedText7,
    editedText8,
    editedText9,
    editedText10,
    editedText11,
    editedText19,
    editedText20,
    subcategory,
  ]);

  return (
    <div className="bottom-scroll-container" style={{ marginRight: "50px" }}>
      <TablePanel title="Financial summary">
        <div title="Statement of financial position">
          <h6>Statement of profit or loss and other comprehesive income</h6>
          <table className="table">
            <thead>
              <tr style={{ textDecoration: "underline 2px" }}>
                <th style={{ fontSize: "15px", fontWeight: "500" }}>
                  As at 31 December
                </th>

                <th style={{ fontSize: "15px" }}>2022</th>
                <th style={{ fontSize: "15px" }}>2021</th>
                <th style={{ fontSize: "15px" }}>2020</th>
                <th style={{ fontSize: "15px" }}>2019</th>
                <th style={{ fontSize: "15px" }}>2018</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th style={{ fontSize: "15px" }}></th>

                <th style={{ fontSize: "15px" }}>N0.00</th>
                <th style={{ fontSize: "15px" }}>N0.00</th>
                <th style={{ fontSize: "15px" }}>N0.00</th>
                <th style={{ fontSize: "15px" }}>N0.00</th>
                <th style={{ fontSize: "15px" }}>N0.00</th>
              </tr>
            </thead>
            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}> Revenue</p>

              <th>
                {" "}
                <Revenue4 subcategory={subcategory} />
              </th>
              <th>
                {" "}
                <Revenue3 subcategory={subcategory} />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea1"
                  value={editedText1}
                  onChange={handleText1Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea2"
                  value={editedText2}
                  onChange={handleText2Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea3"
                  value={editedText3}
                  onChange={handleText3Change}
                />
              </th>
            </tr>
            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Operating income(loss)
              </p>

              <th>
                {" "}
                <Operate incomeSum={incomeSum} priorYear={false} />
              </th>
              <th>
                {" "}
                <Operate incomeSum={incomeSum} priorYear={true} />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea4"
                  value={editedText4}
                  onChange={handleText4Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea5"
                  value={editedText5}
                  onChange={handleText5Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea6"
                  value={editedText6}
                  onChange={handleText6Change}
                />
              </th>
            </tr>

            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Profit/(loss) before minimum taxation
              </p>

              <th>
                {" "}
                <Minitax incomeSum={incomeSum} priorYear={false} />
              </th>
              <th>
                {" "}
                <Minitax incomeSum={incomeSum} priorYear={true} />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea7"
                  value={editedText7}
                  onChange={handleText7Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea8"
                  value={editedText8}
                  onChange={handleText8Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea9"
                  value={editedText9}
                  onChange={handleText9Change}
                />
              </th>
            </tr>

            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Profit/(loss) before income taxation
              </p>

              <th>
                {" "}
                <Intax incomeSum={incomeSum} priorYear={false} />
              </th>
              <th>
                {" "}
                <Intax incomeSum={incomeSum} priorYear={true} />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea10"
                  value={editedText10}
                  onChange={handleText10Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea11"
                  value={editedText11}
                  onChange={handleText11Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea12"
                  value={editedText12}
                  onChange={handleText12Change}
                />
              </th>
            </tr>
            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Profit/(loss) after taxation
              </p>

              <th>
                {" "}
                <Cont incomeSum={incomeSum} priorYear={false} />
              </th>
              <th>
                {" "}
                <Cont incomeSum={incomeSum} priorYear={true} />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea10"
                  value={editedText10}
                  onChange={handleText10Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea11"
                  value={editedText11}
                  onChange={handleText11Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea12"
                  value={editedText12}
                  onChange={handleText12Change}
                />
              </th>
            </tr>

            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Loss from discontinued operation, net of tax
              </p>

              <th>
                {" "}
                <EditText
                  name="textArea37"
                  value={editedText37}
                  onChange={handleText37Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea38"
                  value={editedText38}
                  onChange={handleText38Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea13"
                  value={editedText13}
                  onChange={handleText13Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea14"
                  value={editedText14}
                  onChange={handleText14Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea15"
                  value={editedText15}
                  onChange={handleText15Change}
                />
              </th>
            </tr>

            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Comprehensive income, (loss) for the year
              </p>

              <th>
                {" "}
                <Profit incomeSum={incomeSum} priorYear={false} />
              </th>
              <th>
                {" "}
                <Profit incomeSum={incomeSum} priorYear={true} />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea16"
                  value={editedText16}
                  onChange={handleText16Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea17"
                  value={editedText17}
                  onChange={handleText17Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea18"
                  value={editedText18}
                  onChange={handleText18Change}
                />
              </th>
            </tr>
          </table>
          <h6> Statemenf financial position</h6>
          <table className="table">
            <thead>
              <tr style={{ textDecoration: "underline 2px" }}>
                <th style={{ fontSize: "15px", fontWeight: "500" }}>
                  As at 31 December
                </th>

                <th style={{ fontSize: "15px" }}>2022</th>
                <th style={{ fontSize: "15px" }}>2021</th>
                <th style={{ fontSize: "15px" }}>2020</th>
                <th style={{ fontSize: "15px" }}>2019</th>
                <th style={{ fontSize: "15px" }}>2018</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th style={{ fontSize: "15px" }}></th>

                <th style={{ fontSize: "15px" }}>N0.00</th>
                <th style={{ fontSize: "15px" }}>N0.00</th>
                <th style={{ fontSize: "15px" }}>N0.00</th>
                <th style={{ fontSize: "15px" }}>N0.00</th>
                <th style={{ fontSize: "15px" }}>N0.00</th>
              </tr>
            </thead>
            <br></br>
            <h6> Assets</h6>
            <br></br>
            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Non-current assets
              </p>
              <th>
                {" "}
                <Noncurrent2 subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <Noncurrent subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea19"
                  value={editedText19}
                  onChange={handleText19Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea20"
                  value={editedText20}
                  onChange={handleText20Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea21"
                  value={editedText21}
                  onChange={handleText21Change}
                />
              </th>
            </tr>
            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Current assets
              </p>

              <th>
                <Current2 subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <Current subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea22"
                  value={editedText22}
                  onChange={handleText22Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea23"
                  value={editedText23}
                  onChange={handleText23Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea24"
                  value={editedText24}
                  onChange={handleText24Change}
                />
              </th>
            </tr>

            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Total assets
              </p>

              <th>
                {" "}
                <Totalass2 subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <Totalass subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea25"
                  value={editedText25}
                  onChange={handleText25Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea26"
                  value={editedText26}
                  onChange={handleText26Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea27"
                  value={editedText27}
                  onChange={handleText27Change}
                />
              </th>
            </tr>
            <br></br>
            <h6> Funds employed</h6>
            <br></br>
            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Capital and reserves
              </p>

              <th>
                {" "}
                <Equi subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <Equi2 subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea28"
                  value={editedText28}
                  onChange={handleText28Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea29"
                  value={editedText29}
                  onChange={handleText29Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea30"
                  value={editedText30}
                  onChange={handleText30Change}
                />
              </th>
            </tr>

            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Non-current liabilities
              </p>

              <th>
                {" "}
                <Nonculi subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <Nonculi2 subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea31"
                  value={editedText31}
                  onChange={handleText31Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea32"
                  value={editedText32}
                  onChange={handleText32Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea33"
                  value={editedText33}
                  onChange={handleText33Change}
                />
              </th>
            </tr>

            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                {" "}
                Current liabilities
              </p>

              <th>
                {" "}
                <Culi subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <Culi2 subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea34"
                  value={editedText34}
                  onChange={handleText34Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea35"
                  value={editedText35}
                  onChange={handleText35Change}
                />
              </th>
              <th>
                {" "}
                <EditText
                  name="textArea36"
                  value={editedText36}
                  onChange={handleText36Change}
                />
              </th>
            </tr>

            <tr>
              <p style={{ fontSize: "15px", paddingLeft: "10px" }}> Total</p>

              <th>
                {" "}
                <Totalequi subcategory={subcategory} />{" "}
              </th>
              <th>
                {" "}
                <Totalequi2 subcategory={subcategory} />{" "}
              </th>
              <th>000</th>
              <th>000</th>
              <th>000</th>
            </tr>
          </table>
        </div>
      </TablePanel>
    </div>
  );
};
export default FinSummary;
