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
import React, { useState, useEffect } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import Revenue from "./Revenue";
import Other from "./Other";
import Net from "./Net";
import "react-edit-text/dist/index.css";
import axios from "axios";
import Analysis from "./Analysis";
import Anal from "./Anal";
import TotalAnal from "./TotalAnal";
import { useTotal } from "../pages/TotalContext";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const NotefourtoEight = () => {
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

  const [total, setTotal] = useState(0);
  const { total1, setTotal1 } = useTotal();
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);
  const [total6, setTotal6] = useState(0);
  const [total7, setTotal7] = useState(0);
  const [total8, setTotal8] = useState(0);
  const [total9, setTotal9] = useState(0);
  const [total10, setTotal10] = useState(0);
  const { total15, setTotal15 } = useTotal();

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

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-four-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-four-text`, data, {
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

    const newTotal15 = value2 + value4;
    setTotal15(newTotal15);
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
    <div>
      <SimpleCard>
        <React.Fragment>
          <div>
            <b>
              <EditText defaultValue="Notes to the financial statement" />
            </b>

            <b>
              <EditText defaultValue="4. Revenue" />
            </b>
            <EditText defaultValue="Revenue which arose from price of goods comprise: " />
          </div>
        </React.Fragment>
      </SimpleCard>
      <Revenue subcategory={subcategory} />

      <b>
        {" "}
        <EditText defaultValue="5. Other income" />
      </b>
      <EditTextarea defaultValue="Other income represents claims received from the Company's insurance brokers and deferred income from government grants and sale of property " />
      <table className="table">
        <Other subcategory={subcategory} />
      </table>
      <b>
        {" "}
        <EditText defaultValue="6. Net finance cost" />
      </b>

      <EditText defaultValue="Net finance cost is analyzed as follows" />

      <Net subcategory={subcategory} />
      <EditText defaultValue="Net finance cost is analyzed as follows" />

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
          <td>Interest expense attributable to discontinued operations</td>
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
              name="textArea22"
              value={editedText2}
              onChange={handleText2Change}
            />
          </td>
        </tr>
        <tr>
          <td>Realized exchange loss</td>
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
            <EditText
              name="textArea4"
              value={editedText4}
              onChange={handleText4Change}
            />
          </td>
        </tr>

        <tr>
          <td>Net Finance cost recognized in statement of cashflow </td>
          <td></td>
          <td> {total1}</td>
          <td> {total15}</td>
        </tr>
      </table>

      <b>
        {" "}
        <EditText defaultValue="7. Profit before taxation" />
      </b>
      <EditText defaultValue="(a) Profit before taxation is stated after charging" />
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
          <td>Depreciation of property, plant and equipment( Note 10a))</td>
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
          <td>Auditors Remuneration</td>
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
          <td>Employee costs (Note 8a))</td>
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
          <td>Directors Remuneration(Note 8d))</td>
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
          <td>Rental expenses (Note 20 )</td>
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
      </table>

      <b>
        {" "}
        <EditText defaultValue="(b). Analysis of Expenses by Nature" />
      </b>

      <Analysis subcategory={subcategory} />
      <p>Summarized as follows:</p>
      <Anal subcategory={subcategory} />
      <TotalAnal subcategory={subcategory} />
      <EditText defaultValue="(8) Personal income" />
      <EditText defaultValue="(a) Personal expenses comprise:" />
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
          <td>Salary wages and allowances</td>
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
          <td>Total </td>
          <td></td>
          <td> 3403403903</td>
          <td> 909889899</td>
        </tr>
      </table>
    </div>
  );
};

export default NotefourtoEight;
