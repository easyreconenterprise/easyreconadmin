import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MenuItem, Select, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  Grid,
  Icon,
  DialogTitle,
  styled,
  IconButton,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState, useContext } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as XLSX from "xlsx";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SimpleTable from "app/views/material-kit/tables/SimpleTable";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
const initialState = {
  studentName: "",
  classname: "",
  address: "",
  parentsName: "",
  phone: "",

  email: "",
  username: "",
  date: "",
  password: "",
};

const FrmReport = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ date: new Date() });
  const [showPassword, setShowPassword] = useState(false);
  const [classData, setClassData] = useState([]); // To store the list of classes
  const { currentSession } = useContext(SessionContext);
  const [formData, setFormData] = useState(initialState);
  const {
    studentName,
    classname,
    address,
    parentsName,
    phone,
    AdmNo,
    birthday,
    username,
    date,

    email,
    password,
  } = formData;
  const [states, setStates] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChanges = (name) => (event) => {
    setStates({ ...state, [name]: event.target.checked });
  };
  const apiUrl = process.env.REACT_APP_API_URL.trim();

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);
  useEffect(() => {
    // Assuming you have the JWT token stored in localStorage
    const token = localStorage.getItem("jwtToken");
    // Fetch classes from your API
    fetch(`${apiUrl}/api/class`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Include your authentication token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setClassData(data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      studentName,
      classname,
      address,
      parentsName,
      username,
      phone,
      AdmNo,
      email,
      password,
    };
    try {
      await axios.post(`${apiUrl}/api/register`, {
        ...formData,
        role: "student",
      });

      // navigate("/dashboard/admin");
      toast.success("User successfully created");
    } catch (err) {
      console.error("Error registering student:", err);
      toast.error("Unable to create user");
    }
  };

  const handleDownload = async () => {
    if (!currentSession) {
      toast.error("No session available.");
      return;
    }

    const switchId = currentSession._id;
    const token = localStorage.getItem("jwtToken");

    try {
      const response = await axios.get(
        `${apiUrl}/api/unmatched/last-uploaded/${switchId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("API Response:", response.data); // Log the response to see what is being returned

      const matchedData = response.data; // Assuming this contains matched items

      // Ensure the response contains 'data' and 'success' before proceeding
      if (matchedData && response.data.success) {
        generateExcelFile(matchedData); // Create and download the Excel file
      } else {
        toast.error("Failed to fetch matched items.");
      }
    } catch (error) {
      console.error("Error fetching matched items:", error);
      toast.error("Error fetching matched items.");
    }
  };

  const generateExcelFile = (response) => {
    // Correctly access exactMatches and matchedStatements from the nested data object
    const exactMatches = Array.isArray(response.data?.exactMatches)
      ? response.data.exactMatches
      : [];
    const matchedStatements = Array.isArray(response.data?.matchedStatements)
      ? response.data.matchedStatements
      : [];

    // Debugging: Log the exactMatches and matchedStatements to check data
    console.log("Exact Matches: ", exactMatches);
    console.log("Matched Statements: ", matchedStatements);

    // If no matches found, notify the user and exit
    if (exactMatches.length === 0 && matchedStatements.length === 0) {
      toast.error("No matches found to generate the Excel file.");
      return;
    }

    // Prepare the sheet data
    const sheetData = [];

    // The maximum number of rows we need to account for in the Excel sheet
    const maxLength = Math.max(exactMatches.length, matchedStatements.length);

    for (let i = 0; i < maxLength; i++) {
      const exactMatch = exactMatches[i] || {}; // Get exact match or empty object
      const matchedStatement = matchedStatements[i] || {}; // Get matched statement or empty object

      // Add the row to sheetData
      sheetData.push({
        // Columns for Exact Matches (A to F)
        Type: "Exact Match", // Column A
        MatchDetail: exactMatch.detail || "", // Column B
        PostDate: exactMatch.PostDate || "", // Column C
        ValDate: exactMatch.ValDate || "", // Column D
        LedgerInfo: exactMatch.Details || "", // Column E
        Debit: exactMatch.Debit || "0", // Column F
        Credit: exactMatch.Credit || "0", // Column G

        // Columns for Matched Statements (H to L)
        StatementType: "Statement Match", // Column H
        StatementMatchDetail: matchedStatement.detail || "", // Column I
        StatementPostDate: matchedStatement.PostDate || "", // Column J
        StatementValDate: matchedStatement.ValDate || "", // Column K
        StatementLedgerInfo: matchedStatement.Details || "", // Column L
        StatementDebit: matchedStatement.Debit || "0", // Column M
        StatementCredit: matchedStatement.Credit || "0", // Column N
      });
    }

    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet(sheetData);

    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Matched Items");

    // Generate and download an Excel file
    XLSX.writeFile(wb, "matched_items.xlsx");
  };
  return (
    <div>
      <Container>
        <Stack spacing={3}>
          <SimpleCard>
            <DialogTitle id="form-dialog-title">
              {" "}
              Outstanding Item Report
            </DialogTitle>

            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Sort by Amount"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Sort by Date"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Single WorkSheet"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Exact Matching"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Include Reinstated Items"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Exclude User Defined Field"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Include Holidays and Weekends"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Calculate Age Using PostDate"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Exclude Concatenated Details Field"
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={states.checkedA}
                  onChange={handleChanges("checkedA")}
                  value="checkedA"
                />
              }
              label="Show Source Document Status"
            />
            <br></br>
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: "30px" }}
            >
              <Link
                to="/dashboard/frmNewAccount"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Next</Span>
              </Link>
            </Button>
            <Button color="primary" variant="contained" type="submit">
              <Span sx={{ pl: 1, textTransform: "capitalize" }}>Cancel</Span>
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleDownload}
            >
              <Span sx={{ pl: 1, textTransform: "capitalize" }}>
                Generate in Excel
              </Span>
            </Button>
          </SimpleCard>
          <Button
            color="primary"
            variant="contained"
            style={{ marginRight: "30px" }}
          >
            <Link
              to="/dashboard/frmNewAccount"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Span sx={{ pl: 1, textTransform: "capitalize" }}>
                Gen. Source. Doc. Oust.
              </Span>
            </Link>
          </Button>
          <Button color="primary" variant="contained" type="submit">
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>
              Gen. Source. Doc. Compl.
            </Span>
          </Button>
        </Stack>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default FrmReport;
