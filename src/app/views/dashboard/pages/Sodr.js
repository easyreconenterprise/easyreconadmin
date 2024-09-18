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
import { Small, H3 } from "app/components/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useReactToPrint } from "react-to-print";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import "./print.css";
import axios from "axios";
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const tableData = [
  {
    id: 1,
    description: "Revenue",
    price: "223039",
    value: "223039",
  },
  {
    id: 2,
    description: "asset",
    price: "223039",
    value: "223039",
  },
  {
    id: 3,
    description: "asset",
    price: "223039",
    value: "223039",
  },
  {
    id: 4,
    description: "asset",
    price: "223039",
    value: "223039",
  },
  {
    id: 5,
    description: "asset",
    price: "223039",
    value: "223039",
  },
  {
    id: 6,
    description: "asset",
    price: "223039",
    value: "223039",
  },
];
const totalData = [
  {
    id: 1,
    description: "asset",
    value: "223039",
  },
];
const totalnonData = [
  {
    id: 1,
    description: "asset",
    value: "223039",
  },
  {
    id: 2,
    description: "asset",
    value: "223039",
  },
  {
    id: 3,
    description: "asset",
    value: "223039",
  },
];

const Sodr = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [textbox1Value, setTextbox1Value] = useState(
    localStorage.getItem("textbox1Value") || ""
  );

  useEffect(() => {
    // Save values to local storage whenever they change
    localStorage.setItem("textbox1Value", textbox1Value);
  }, [textbox1Value]);

  const [subcategory, setSubcategory] = useState({});
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
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
    content35:
      "Statement of Directors’ responsibilities in relation to the financial statements \nFor the year ended 31 December 2022",
    content36:
      " The Directors accept responsibility for the preparation of the annual financial statements that give a true and fair view in accordance with International Financial Reporting Standards (IFRS) and in the manner required by the Companies and Allied Matters Act (CAMA), 2020 and Financial Reporting Council of Nigeria Act, 2011.\n'nThe Directors further accept responsibility for maintaining adequate accounting records as required by the Companies and Allied Matters Act (CAMA), 2020 and for such internal control as the directors determine is necessary to enable the preparation of financial statements that are free from material misstatement whether due to fraud or error.\n\nThe Directors have made an assessment of the Company’s ability to continue as a going concern and have no reason to believe the Company will not remain a going concern in the year ahead.",
    content37: " Signed on behalf of the Board of Directors by:",
    content38: "  Executive Chairman Name",
    content39: "Managing Director",
    content40:
      "  Directors and their interest\n\nThe Directors who served during the year and their interest in the ordinary shares of the Company as at year end were as follows:",
  };

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

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
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

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

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

  const handleText39Change = (e) => {
    const newText = e.target.value;
    setEditedText39(newText);
    saveTextToDatabase("content39", newText);
  };

  const handleText40Change = (e) => {
    const newText = e.target.value;
    setEditedText40(newText);
    saveTextToDatabase("content40", newText);
  };

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-dir-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-dir-text`, data, {
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
    const value30 = parseFloat(editedText30) || 0;
    const value31 = parseFloat(editedText31) || 0;
    const value32 = parseFloat(editedText32) || 0;
    const value33 = parseFloat(editedText33) || 0;
    const value34 = parseFloat(editedText34) || 0;
    const value35 = parseFloat(editedText35) || 0;
    const value36 = parseFloat(editedText36) || 0;
    const value37 = parseFloat(editedText37) || 0;
    const value38 = parseFloat(editedText38) || 0;
    const value39 = parseFloat(editedText39) || 0;
    const value40 = parseFloat(editedText40) || 0;
  }, [
    editedText31,
    editedText32,
    editedText33,
    editedText34,
    editedText35,
    editedText35,
    editedText36,
    editedText37,
    editedText38,
    editedText39,
    editedText40,
  ]);

  return (
    <>
      <div>
        <Box className="breadcrumb no-print">
          <Breadcrumb routeSegments={[{ name: "Directors Report" }]} />
        </Box>
        <h6 style={{ marginLeft: "30px" }}>
          <b>
            <EditText
              name="textArea35"
              value={editedText35}
              onChange={handleText35Change}
            />
          </b>
        </h6>

        <SimpleCard>
          <React.Fragment>
            <div>
              <EditTextarea
                name="textArea36"
                value={editedText36}
                onChange={handleText36Change}
                rows={12}
              />

              <EditText
                name="textArea37"
                value={editedText37}
                onChange={handleText37Change}
              />
            </div>

            <EditText
              name="textArea38"
              value={editedText38}
              onChange={handleText38Change}
            />

            <EditText
              name="textArea39"
              value={editedText39}
              onChange={handleText39Change}
            />
          </React.Fragment>
        </SimpleCard>
      </div>
    </>
  );
};

export default Sodr;
