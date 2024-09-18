import {
  Box,
  Card,
  Grid,
  Icon,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import React, { useEffect, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { WorkbookHyperlink } from "@syncfusion/ej2-react-spreadsheet";
import Shared from "../notes/Shared";
import Profit from "../notes/Profit";
import LossandProfit from "./LossandProfit";
import axios from "axios";
import Total from "../pages/Total";
import { useTotal } from "../pages/TotalContext";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Equity = ({ incomeSum }) => {
  const [subcategory, setSubcategory] = useState({});
  const { total10, total11 } = useTotal();

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
    content7: "0.00 ",
    content8: "0.00 ",
    content9: "0.000",
    content10: "0.000",
    content11: "0.00",
    content12: "1,000,000 ",
    content13: "0.000",
    content14: "0.000",
    content15: "1,500,000 --",
    content16: "2,000,000 ",
    content17: "0.000",
    content18: "0.000",
    content19: "2,500,000 --",
    content20: "3,000,000 ",
    content21: "0.000",
    content22: "0.000",
    content23: "3,500,000 --",
    content24: "4,000,000 ",
    content25: "0.000",
    content26: "0.000",
    content27: "4,500,000 --",
    content28: "5,000,000 ",
    content29: "0.000",
    content30: "0.000",
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

  useEffect(() => {
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

    // ... Fetch data for other text areas
  }, []);

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

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-equity-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-equity-text`, data, {
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
    const value13 = parseFloat(editedText13) || 0;
    const value14 = parseFloat(editedText14) || 0;
    const value18 = parseFloat(editedText18) || 0;
    const value17 = parseFloat(editedText17) || 0;
    const value19 = parseFloat(editedText19) || 0;
    const value20 = parseFloat(editedText20) || 0;
    const value21 = parseFloat(editedText21) || 0;
    const value22 = parseFloat(editedText22) || 0;
    const value23 = parseFloat(editedText23) || 0;
    const value24 = parseFloat(editedText24) || 0;
    const value25 = parseFloat(editedText25) || 0;
    const value26 = parseFloat(editedText26) || 0;
    const value27 = parseFloat(editedText27) || 0;
    const value28 = parseFloat(editedText28) || 0;
    const value29 = parseFloat(editedText29) || 0;
    const value30 = parseFloat(editedText30) || 0;

    // const newTotal2 = value1 + value2 + value3 + value4 + value5;
    // setTotal2(newTotal2);
    // const newTotal3 = value1 + value2;
    // setTotal3(newTotal3);
    const newTotal1 = value1 + value2;
    setTotal1(newTotal1);

    // Calculate total2 as the sum of total10 and total11
    const newTotal2 = total10 + total11;
    setTotal2(newTotal2);

    // const newTotal3 =
    //   value3 + (profitForTheYear ? profitForTheYear.Sum : 0);
    // setTotal3(newTotal3);

    const newTotal4 = value4 + value5;
    setTotal4(newTotal4);
    const newTotal5 = value1 + total10 + value3;
    setTotal5(newTotal5);
    const newTotal6 = value2 + total11;
    setTotal6(newTotal6);
    const newTotal7 = total1 + total2 + total4;
    setTotal7(newTotal7);
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
    editedText13,
    editedText14,
    editedText18,
    editedText17,
    editedText20,
    editedText21,
    editedText22,
    editedText23,
    editedText24,
    editedText25,
    editedText26,
    editedText27,
    editedText28,
    editedText29,
    editedText30,
  ]);

  return (
    <div className="bottom-scroll-container">
      <SimpleCard>
        <React.Fragment>
          <div>
            <b>
              <EditText defaultValue="Statement of Changes in Equity" />
            </b>

            <EditText defaultValue="For the year ended 31 December 2022" />
          </div>
        </React.Fragment>
      </SimpleCard>

      <table className="table" style={{ width: "90%" }}>
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px", fontWeight: "500" }}>Note</th>

            <th style={{ fontSize: "15px" }}>Shared Capital</th>
            <th style={{ fontSize: "15px" }}>Retained Earnings</th>
            <th style={{ fontSize: "15px" }}>Total Equity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {" "}
            <b>
              {" "}
              <td>Balance as at 1 January 2021</td>
            </b>
            <td></td>
            <td>
              {" "}
              <EditText
                name="textArea1"
                value={editedText1}
                onChange={handleText1Change}
              />
            </td>
            <td>
              {" "}
              <EditText
                name="textArea2"
                value={editedText2}
                onChange={handleText2Change}
              />
            </td>
            <td>{total1}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
          </tr>
        </thead>

        <tr>
          {" "}
          <td>Net Asset transferred to nature savvy</td>
          <td>24</td>
          <td> {total10}</td>
          <td>{total11}</td>
          <td>{total2}</td>
        </tr>

        <b>
          {" "}
          <EditText defaultValue="Total comprehensive income for the year" />
        </b>

        <tr>
          {" "}
          <td>Profit for the year</td>
          <td></td>
          <td>
            {" "}
            <EditText
              name="textArea3"
              value={editedText3}
              onChange={handleText3Change}
            />
          </td>
          <td>
            {" "}
            <Profit incomeSum={incomeSum} priorYear={false} />
          </td>
          <td> {total3}</td>
        </tr>

        <tr>
          {" "}
          <td>Other comprehensive income for the year</td>
          <td></td>
          <td>
            {" "}
            <EditText
              name="textArea4"
              value={editedText4}
              onChange={handleText4Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea5"
              value={editedText5}
              onChange={handleText5Change}
            />
          </td>
          <td>{total4}</td>
        </tr>

        {/*}  <tr style={{}}>
          {" "}
          <b>
            {" "}
            <td>Total Comprehesive income for the year</td>
          </b>
          <td></td>
          <td>4565453</td>
          <td>56787656</td>
          <td>56787656</td>
          <td>{total6}</td>
  </tr>*/}

        <tr>
          {" "}
          <b>
            {" "}
            <td>Balance as 31 December 2021</td>
          </b>
          <td></td>
          <td>{total5}</td>
          <td>{total6}</td>
          <td>{total7}</td>
        </tr>
        <tr>
          {" "}
          <b>
            {" "}
            <td>Balance as 1 January 2022</td>
          </b>
          <td></td>
          <td>{total5}</td>
          <td>{total6}</td>
          <td>{total7}</td>
        </tr>

        <b>
          {" "}
          <EditText defaultValue="Total comprehensive income for the year" />
        </b>

        <tr>
          {" "}
          <td>Profit for the year</td>
          <td></td>
          <td>
            {" "}
            <EditText
              name="textArea7"
              value={editedText7}
              onChange={handleText7Change}
            />
          </td>
          <td>
            {" "}
            <Profit incomeSum={incomeSum} priorYear={true} />
          </td>
          <td> {total3}</td>
        </tr>

        <tr>
          {" "}
          <td>Other comprehensive income for the year</td>
          <td></td>
          <td>
            {" "}
            <EditText
              name="textArea8"
              value={editedText8}
              onChange={handleText8Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea9"
              value={editedText9}
              onChange={handleText9Change}
            />
          </td>
          <td>{total4}</td>
        </tr>
        <tbody>
          <tr>
            {" "}
            <b>
              {" "}
              <td>Balance as at 31 December 2022</td>
            </b>
            <td></td>
            <td>
              {" "}
              <EditText
                name="textArea1"
                value={editedText1}
                onChange={handleText1Change}
              />
            </td>
            <td>
              {" "}
              <EditText
                name="textArea2"
                value={editedText2}
                onChange={handleText2Change}
              />
            </td>
            <td>{total1}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Equity;
