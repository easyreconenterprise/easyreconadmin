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
import End from "../notes/End";
import Begin from "../notes/Begin";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Loans2 = () => {
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
    content34: "0.000",
    content35: "0.000",
    content36: "0.000",
    content37: "0.000",
  };

  const [editedText34, setEditedText34] = useState(initialData.content34);
  const [editedText35, setEditedText35] = useState(initialData.content35);
  const [editedText36, setEditedText36] = useState(initialData.content36);
  const [editedText37, setEditedText37] = useState(initialData.content37);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content34", setEditedText34);
    fetchDataFromDatabase("content35", setEditedText35);
    fetchDataFromDatabase("content36", setEditedText36);

    fetchDataFromDatabase("content37", setEditedText37);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

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

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-cash-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-cash-text`, data, {
        headers,
      })
      .then((response) => {
        // Data saved successfully
      })
      .catch((error) => {
        console.error(`Error saving ${field}:`, error);
      });
  };

  const handleEditedText34Change = (newEditedText34) => {
    setEditedText34(newEditedText34);
  };

  return (
    <div>
      <div>
        <b>
          <p>9. Loans and borrowing</p>
        </b>

        <table>
          <tbody>
            <tr>
              <td>Opening balance</td>
              <td>
                <Begin subcategory={subcategory} />
              </td>
            </tr>
            <tr>
              <td>Additional loans obtained</td>
              <td>
                <EditText
                  name="textArea34"
                  value={editedText34}
                  onChange={handleText34Change}
                />
              </td>
            </tr>
            <tr>
              <td>Principal repayments</td>
              <td>
                <EditText
                  name="textArea35"
                  value={editedText35}
                  onChange={handleText35Change}
                />
              </td>
            </tr>
            <tr>
              <td>Interest paid on loans and borrowings</td>
              <td>
                <EditText
                  name="textArea36"
                  value={editedText36}
                  onChange={handleText36Change}
                />
              </td>
            </tr>
            <tr>
              <td>Interest paid on overdraft</td>
              <td>
                <EditText
                  name="textArea37"
                  value={editedText37}
                  onChange={handleText37Change}
                />
              </td>
            </tr>
            <tr>
              <td>Closing balance</td>
              <td>
                <End subcategory={subcategory} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loans2;
