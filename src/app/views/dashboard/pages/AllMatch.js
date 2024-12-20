import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DialogContent, MenuItem, Select, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  Grid,
  styled,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useContext, useEffect, useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

import * as XLSX from "xlsx";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

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
const AllMatch = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ date: new Date() });
  const [showPassword, setShowPassword] = useState(false);
  const [classData, setClassData] = useState([]); // To store the list of classes
  const [affiliates, setAffiliates] = useState([]);
  const [domains, setDomains] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const { currentSession } = useContext(SessionContext);
  const [exactMatches, setExactMatches] = useState([]);
  const [matchedStatements, setMatchedStatements] = useState([]);
  const [states, setStates] = useState({
    checkedA: false,
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: true,
    checkedM: false,
    checkedN: false,
    checkedO: false,
    checkedP: false,
    checkedQ: false,
    checkedR: false,
    checkedS: false,
    checkedT: false,
    checkedU: false,
    checkedV: false,
    checkedW: false,
  });

  const [formData, setFormData] = useState({
    affiliateId: "",
    domainId: "",
    accountId: "",
    month: "",
  });
  const apiUrl = process.env.REACT_APP_API_URL.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleChanges = (name) => (event) => {
    setStates((prevState) => ({ ...prevState, [name]: event.target.checked }));
  };
  const handleDateChange = (date) => setState({ ...state, date });
  const itemList = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  // Fetch all affiliates
  useEffect(() => {
    const fetchAffiliates = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/affiliates`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
        setAffiliates(response.data);
      } catch (err) {
        console.error("Error fetching affiliates:", err);
        toast.error("Error fetching affiliates");
      }
    };
    fetchAffiliates();
  }, [apiUrl]);

  // Fetch domains for the selected affiliate
  useEffect(() => {
    const fetchDomains = async () => {
      if (formData.affiliateId) {
        try {
          const token = localStorage.getItem("jwtToken");
          const response = await axios.get(
            `${apiUrl}/api/domains/${formData.affiliateId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setDomains(response.data);
        } catch (err) {
          console.error("Error fetching domains:", err);
          toast.error("Error fetching domains");
        }
      }
    };
    fetchDomains();
  }, [formData.affiliateId, apiUrl]);

  // Fetch accounts for the selected domain
  useEffect(() => {
    const fetchAccounts = async () => {
      if (formData.domainId) {
        try {
          const token = localStorage.getItem("jwtToken");
          const response = await axios.get(
            `${apiUrl}/api/accounts/${formData.domainId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setAccounts(response.data);
        } catch (err) {
          console.error("Error fetching accounts:", err);
          toast.error("Error fetching accounts");
        }
      }
    };
    fetchAccounts();
  }, [formData.domainId, apiUrl]);

  const handleDownload = async () => {
    if (!currentSession) {
      toast.error("No session available.");
      return;
    }

    const switchId = currentSession._id;
    const token = localStorage.getItem("jwtToken");

    try {
      const response = await axios.get(
        `${apiUrl}/api/matches/last-uploaded/${switchId}`,
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
      <h2
        style={{
          fontSize: "20px",
          marginTop: "30px",
          marginLeft: "30px",
          fontWeight: "800",
          textTransform: "uppercase",
        }}
      >
        All Matched Item Reports - Excel
      </h2>
      <Container>
        <Stack spacing={3}>
          <SimpleCard>
            <ValidatorForm>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    select
                    label="Affiliate"
                    variant="outlined"
                    name="affiliateId"
                    value={formData.affiliateId}
                    onChange={handleChange}
                    required
                    fullWidth
                    SelectProps={{ native: true }}
                  >
                    <option value="" disabled>
                      Select an Affiliate
                    </option>
                    {affiliates.map((affiliate) => (
                      <option key={affiliate._id} value={affiliate._id}>
                        {affiliate.affiliateName}{" "}
                        {/* Adjust according to the affiliate object structure */}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    select
                    label="Affiliate"
                    variant="outlined"
                    name="domainId"
                    value={formData.domainId}
                    onChange={handleChange}
                    required
                    SelectProps={{ native: true }}
                  >
                    <option value="" disabled>
                      Select a Domain
                    </option>
                    {domains.map((domain) => (
                      <option key={domain._id} value={domain._id}>
                        {domain.domainName}{" "}
                        {/* Adjust according to the affiliate object structure */}
                      </option>
                    ))}
                  </TextField>

                  {/* Account Selection */}
                  <TextField
                    select
                    label="Account"
                    name="accountId"
                    style={{ border: "0.5px solid black" }}
                    value={formData.accountId}
                    onChange={handleChange}
                    fullWidth
                    required
                    disabled={!formData.domainId} // Disable if no domain is selected
                  >
                    {accounts.map((account) => (
                      <MenuItem key={account._id} value={account._id}>
                        {account.accountTitle}{" "}
                        {/* Assuming account has a 'name' property */}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={states.checkedA}
                        onChange={handleChanges("checkedA")}
                        value="checkedA"
                      />
                    }
                    label="Select All"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={states.checkedB}
                        onChange={handleChanges("checkedB")}
                        value="checkedB"
                      />
                    }
                    label="Exclude User Defined Field"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={states.checkedC}
                        onChange={handleChanges("checkedC")}
                        value="checkedC"
                      />
                    }
                    label="Auto Match"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={states.checkedR}
                        onChange={handleChanges("checkedR")}
                        value="checkedR"
                      />
                    }
                    label="Main Match"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={states.checkedS}
                        onChange={handleChanges("checkedS")}
                        value="checkedS"
                      />
                    }
                    label="Generate all matched item"
                  />
                  {/* Add more FormControlLabels if needed */}
                </Grid>
              </Grid>

              <Button
                color="primary"
                variant="contained"
                onClick={handleDownload}
                style={{ marginRight: "30px", marginTop: "50px" }}
              >
                Download in Excel
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate("/dashboard")} // Cancel button functionality
                style={{ marginTop: "50px" }}
              >
                Cancel
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default AllMatch;
