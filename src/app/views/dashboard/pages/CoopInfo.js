import {
  Box,
  Card,
  Grid,
  Icon,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Breadcrumb } from "app/components";
import { Small, H3 } from "app/components/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import useAuth from "app/hooks/useAuth";
import { EditText } from "react-edit-text";
import axios from "axios";
import { useEffect, useState } from "react";
import "./print.css";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const CoopInfo = () => {
  const { logout, user } = useAuth();

  const initialData = {
    content1: "1st July 2023",
    content2: "120323",
    content3: "Designation",
    content4: "Mr Adeniran Oluche",
    content5: " Designation",
    content6: "Mrs Angelina ",
    content7: "Designation",
    content8: "Dr Muustapha Mohammed",
    content9: "Designation",
    content10: "Alli Balogun",
    content11: "Designation",
    content12: "Tunde Lemon",
    content13: "Plot 19 (No 28), Akinyemi Crescent Motiri, Lagos state Nigeria",
    content14: "Plot 19 (No 28), Akinyemi Crescent Motiri, Lagos state Nigeria",
    content15: "TIN00045643-3003",
    content16: "Plot 19 (No 28), Akinyemi Crescent Motiri, Lagos state Nigeria",
    content17: "Plot 19 (No 28), Akinyemi Crescent Motiri, Lagos state Nigeria",
    content18: "Tunde ",
    content19: "Tunde Lemon",
    content20: "Tunde Lemon",
    content21: "Tunde Lemon",
    content22: "Tunde Lemon",
    content23: "Tunde Lemon",
    content24: "Tunde Lemon",
    content25: "Tunde Lemon",
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

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
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
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-corp-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-corp-text`, data, {
        headers,
      })
      .then((response) => {
        // Data saved successfully
      })
      .catch((error) => {
        console.error(`Error saving ${field}:`, error);
      });
  };

  return (
    <div style={{ border: "none", color: "#220f5f" }}>
      <Box className="breadcrumb no-print">
        <Breadcrumb routeSegments={[{ name: "Corporate Information" }]} />
      </Box>
      <div style={{ marginLeft: "20px" }}>
        <h5>
          <a style={{ fontSize: "15px", color: "#220f5f" }} href="">
            <b>{user.company_name}</b>
          </a>
        </h5>
        <h5>
          <a style={{ fontSize: "15px", color: "#220f5f" }} href="">
            <b>Annual Report </b>
          </a>
        </h5>
        <h5>
          <a style={{ fontSize: "15px", color: "#220f5f" }} href="">
            <b>Year end 13 December, 2023</b>
          </a>
        </h5>
        <br></br>
      </div>
      <h5 style={{ marginLeft: "20px" }}>
        <b>Board of Directors, Officers and other Corporate Information </b>
      </h5>
      <table style={{ border: "none", marginLeft: "20px" }}>
        <tr style={{ border: "none" }}>
          <b>
            <td style={{ border: "none" }}>Date of Incoporation</td>
          </b>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea1"
              value={editedText1}
              onChange={handleText1Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}>RC Number</td>
          </b>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea2"
              value={editedText2}
              onChange={handleText2Change}
            />
          </td>
        </tr>
        <br></br>

        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}> Board of Directors</td>
          </b>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea3"
              value={editedText3}
              onChange={handleText3Change}
            />
          </td>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea4"
              value={editedText4}
              onChange={handleText4Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}> </td>
          </b>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea5"
              value={editedText5}
              onChange={handleText5Change}
            />
          </td>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea6"
              value={editedText6}
              onChange={handleText6Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}> </td>
          </b>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea7"
              value={editedText7}
              onChange={handleText7Change}
            />
          </td>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea8"
              value={editedText8}
              onChange={handleText8Change}
            />
          </td>
        </tr>

        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}> </td>
          </b>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea9"
              value={editedText9}
              onChange={handleText9Change}
            />
          </td>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea10"
              value={editedText10}
              onChange={handleText10Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}> </td>
          </b>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea11"
              value={editedText11}
              onChange={handleText11Change}
            />
          </td>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea12"
              value={editedText12}
              onChange={handleText12Change}
            />
          </td>
        </tr>
        <br></br>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}>Registered Office</td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea13"
              value={editedText13}
              onChange={handleText13Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}>Plant Location</td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea14"
              value={editedText14}
              onChange={handleText14Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}>TIN Number</td>
          </b>
          <td style={{ border: "none" }}>
            {" "}
            <EditText
              name="textArea15"
              value={editedText15}
              onChange={handleText15Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}>Independence Auditor</td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea16"
              value={editedText16}
              onChange={handleText16Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}>Companies secretary/solicitor</td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea17"
              value={editedText17}
              onChange={handleText17Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}>Principal Bankers</td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea18"
              value={editedText18}
              onChange={handleText18Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}></td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea19"
              value={editedText19}
              onChange={handleText19Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}></td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea20"
              value={editedText20}
              onChange={handleText20Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}></td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea21"
              value={editedText21}
              onChange={handleText21Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}></td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea22"
              value={editedText22}
              onChange={handleText22Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}></td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea23"
              value={editedText23}
              onChange={handleText23Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}></td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea24"
              value={editedText24}
              onChange={handleText24Change}
            />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td style={{ border: "none" }}></td>
          </b>
          <td style={{ border: "none" }}>
            <EditText
              name="textArea25"
              value={editedText25}
              onChange={handleText25Change}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CoopInfo;
