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
import axios from "axios";
import "react-edit-text/dist/index.css";
import "./Style.css";
import Property from "./Property";
import { WorkbookHyperlink } from "@syncfusion/ej2-react-spreadsheet";
import Prior from "../ppe/Prior";
import Current from "../ppe/Current";
import LocalStorageEdit from "../cashflow/LocalStorageEdit";
import Get from "./Get";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Ten4 = () => {
  const [subcategory, setSubcategory] = useState({});

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
          "https://kubique-726ad4c65f53.herokuapp.com/api/mapped-data",
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

  const [editedText30, setEditedText30] = useState(
    "Initial Value for Field 30"
  );
  // Add more state variables for other fields if needed

  // Handle saving for a single text area
  const handleSave = (field) => {
    saveTextToDatabase(field, eval(field)); // Evaluate the state variable based on the field name
  };

  // Handle saving for all text areas
  const handleSaveAll = () => {
    const fieldsToSave = {
      content30: editedText30,
      // Add more fields as needed
    };
    saveTextToDatabase(fieldsToSave);
  };

  const saveTextToDatabase = (field, content) => {
    const token = localStorage.getItem("jwtToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = {
      [field]: content,
    };

    axios
      .post(
        "https://kubique-726ad4c65f53.herokuapp.com/api/save-all-text",
        data,
        {
          headers,
        }
      )
      .then((response) => {
        // Update the edited text in local storage
        localStorage.setItem(field, response.data[field]);
      })
      .catch((error) => {
        console.error("Error saving text:", error);
      });
  };

  return (
    <div className="bottom-scroll-container" style={{ marginRight: "50px" }}>
      <SimpleCard>
        <React.Fragment>
          <div>
            <b>
              <EditText defaultValue="Notes to the financial statement" />
            </b>
            <b>
              <EditText defaultValue="10. Property, plant and equipment" />
            </b>

            <EditText defaultValue="The movement on these accounts during the current and preceding year was as follows:" />
          </div>
        </React.Fragment>
      </SimpleCard>

      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}>Land </th>

            <th style={{ fontSize: "15px", width: "1500px" }}>Building</th>

            <th style={{ fontSize: "15px" }}>Plant and machinery</th>

            <th style={{ fontSize: "15px" }}>Furniture and Fittings</th>
            <th style={{ fontSize: "15px" }}>Motor Vehicles</th>
            <th style={{ fontSize: "15px" }}>Computer Equipment</th>
            <th style={{ fontSize: "15px" }}>CWIP</th>
            <th style={{ fontSize: "15px" }}>Total</th>
          </tr>
        </thead>

        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}>Cost</th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
          </tr>
        </thead>

        <tr>
          <td>Disposal</td>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <tr>
          <b>
            {" "}
            <td>At 31 December 2021</td>
          </b>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <br></br>

        <tr>
          <b>
            {" "}
            <td>At 1 January 2022 </td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
      </table>
      <button onClick={handleSaveAll}>Save All Text</button>
    </div>
  );
};

export default Ten4;
