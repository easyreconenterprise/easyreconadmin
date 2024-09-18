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

const Ten2 = () => {
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

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts
    const savedText30 = localStorage.getItem("content30") || "5454";

    setEditedText30(savedText30);
  }, []);

  // Automatically save edited text to the database when it changes
  useEffect(() => {
    saveTextToDatabase("content30", editedText30);
  }, [editedText30]);

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
        "https://kubique-624550d33ef4.herokuapp.com/api/save-cash-text",
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
          <b>
            {" "}
            <td>At 1 January 2021</td>
          </b>
          <td>
            {" "}
            <LocalStorageEdit
              defaultValue="5676879888"
              storageKey="one"
              style={{ width: "100%" }}
            />
          </td>
          <td style={{ width: "1300px" }}>
            {" "}
            <p>
              {" "}
              <LocalStorageEdit defaultValue="5676787888" storageKey="two" />
            </p>
          </td>
          <td>
            {" "}
            <LocalStorageEdit defaultValue="567098797888" storageKey="three" />
          </td>
          <td>
            {" "}
            <LocalStorageEdit defaultValue="56787678688" storageKey="four" />
          </td>
          <td>
            {" "}
            <LocalStorageEdit defaultValue="5679656888" storageKey="five" />
          </td>
          <td>
            {" "}
            <LocalStorageEdit defaultValue="567875667988" storageKey="six" />
          </td>
          <td>
            {" "}
            <LocalStorageEdit defaultValue="56767978788" storageKey="seven" />
          </td>
          <td>
            {" "}
            <Get />
          </td>
        </tr>
        <tr>
          <td>Transfer to Nature savvy</td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <td>Additions</td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <td>Disposal</td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
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

        <tr>
          <td>Addition</td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <td>Reclassification</td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td>At 31 December 2022</td>
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

        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}>Accumulated Depreciation</th>
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
          <b>
            {" "}
            <td>At 1 January 2021</td>
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
        <tr>
          <td>Charge for the year</td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <tr>
          <td>Transfer to nature savvy</td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <b>
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
        <tr>
          <b>
            {" "}
            <td>At 1 January 2022</td>
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
        <tr>
          <td>Charge for the year </td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <tr>
          <b>
            {" "}
            <td>At 31 December 2022 </td>
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

        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}>Carrying Amount</th>
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
          <b>
            {" "}
            <td>At 1 December 2021</td>
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
          <td style={{ fontWeight: "800" }}>
            {" "}
            <Current subcategory={subcategory} />
          </td>
        </tr>

        <tr>
          <b>
            {" "}
            <td>At 31 December 2022</td>
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
          <td style={{ fontWeight: "800" }}>
            {" "}
            <Prior subcategory={subcategory} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Ten2;
