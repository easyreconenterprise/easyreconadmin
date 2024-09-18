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
import Loans from "./Loans";
import Begin from "./Begin";
import End from "./End";
import axios from "axios";
import TradePay from "./TradePay";
import Movement4 from "../cashflow/Movement4";
import DefInc from "./DefInc";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Fifteen = () => {
  const [subcategory, setSubcategory] = useState({});
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

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-loans-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-loans-text`, data, {
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

    // Use Promise.all to wait for the promises to resolve
  }, [
    editedText1,
    editedText2,
    editedText3,
    editedText4,
    editedText5,
    editedText6,
    editedText7,
    editedText8,
  ]);

  return (
    <div>
      <SimpleCard>
        <React.Fragment>
          <div>
            <b>
              <EditText defaultValue="(c) Capital Management" />
            </b>
            <EditTextarea defaultValue="The Boards policy is to maintain a strong capital base so as to maintain shareholders' and creditors' confidence and to sustain future development of the business. Management monitors the return on capital, which the Company defines as results from operating activities divided by total shareholders’ equity." />

            <EditText defaultValue="The Company's net debt to adjusted capital ratio at the end of the reporting period was as follows: " />

            <table className="table">
              <thead>
                <tr style={{ textDecoration: "underline 2px" }}>
                  <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

                  <th style={{ fontSize: "15px" }}></th>
                  <th style={{ fontSize: "15px" }}>2022</th>
                  <th style={{ fontSize: "15px" }}>2021</th>
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
                <td>Total Liabilities</td>
                <td></td>
                <td>
                  <Begin subcategory={subcategory} />
                </td>
                <td>
                  {" "}
                  <EditText defaultValue="00492212" />
                </td>
              </tr>
              <tr>
                <td>Less: cash and cash equivalent</td>
                <td></td>
                <td>
                  {" "}
                  <EditText defaultValue="00492212" />
                </td>
                <td>
                  {" "}
                  <EditText defaultValue="00492212" />
                </td>
              </tr>
              <tr>
                <td>Net debt</td>
                <td></td>
                <td>4433434</td>
                <td>6453422</td>
              </tr>
              <tr>
                <td>Total Equity</td>
                <td></td>
                <td>4433434</td>
                <td>6453422</td>
              </tr>
              <tr>
                <td>Debt to adjust capital ratio</td>
                <td></td>
                <td>4433434</td>
                <td>6453422</td>
              </tr>
            </table>
            <b>
              <EditText defaultValue="16. Trade and other payables" />
            </b>
            <EditText defaultValue="Trade and other payables comprises" />
          </div>
        </React.Fragment>
      </SimpleCard>
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

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

        <TradePay subcategory={subcategory} />
      </table>
      <EditText defaultValue="(b)The Company’s exposure to currency and liquidity risk related to trade and other payables is disclosed in Note 18." />
      <EditText defaultValue="(c)Reconciliation of changes in trade and other payables included in the statement of cashflows:" />
      <Movement4 subcategory={subcategory} />

      <b>
        {" "}
        <EditText defaultValue="17. Deferred Income" />
      </b>
      <DefInc subcategory={subcategory} />
      <b>
        {" "}
        <EditText defaultValue="18. Loans and borrowings" />
      </b>
      <EditTextarea defaultValue="This note provides information about the contractual terms of the Company’s interest-bearing loans and borrowings, which are measured at amortized cost. For more information about the Company’s exposure to interest rate, foreign currency and liquidity risks, see Note 18." />

      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}>
              Loans and borrowings
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
        <thead></thead>
      </table>
      <Loans subcategory={subcategory} />
      <EditText defaultValue="(b) Movement in loans and borrowings" />
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

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
          <td>Balance, beginning of year</td>
          <td></td>
          <td>
            <Begin subcategory={subcategory} />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea1"
              value={editedText1}
              onChange={handleText1Change}
            />
          </td>
        </tr>
        <tr>
          <td>Additional loans obtained</td>
          <td></td>
          <td>
            {" "}
            <EditText
              name="textArea2"
              value={editedText2}
              onChange={handleText2Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea3"
              value={editedText3}
              onChange={handleText3Change}
            />
          </td>
        </tr>
        <tr>
          <td>Principal repayment</td>
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
            <EditText
              name="textArea5"
              value={editedText5}
              onChange={handleText5Change}
            />
          </td>
        </tr>
        <tr>
          <td>Interest expense on loans and borrowings</td>
          <td></td>
          <td>
            {" "}
            <EditText
              name="textArea6"
              value={editedText6}
              onChange={handleText6Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea7"
              value={editedText7}
              onChange={handleText7Change}
            />
          </td>
        </tr>
        <tr>
          <td>Interest paid on loans and borrowings</td>
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
        </tr>
        <tr>
          <td>Balance, end of the year</td>
          <td></td>
          <td>
            {" "}
            <End subcategory={subcategory} />
          </td>
          <td>
            {" "}
            <Begin subcategory={subcategory} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Fifteen;
