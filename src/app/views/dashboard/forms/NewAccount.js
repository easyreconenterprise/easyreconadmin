import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import {
  Stack,
  Grid,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ToastContainer, toast } from "react-toastify";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleTable from "app/views/material-kit/tables/SimpleTable";
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

const initialState = {
  affiliateId: "",
  domainId: "",
  internalAccount: "",
  externalAccount: "",
  accountTitle: "",
  shortTitle: "",
  currency: "",
  internalRecord: "",
  externalRecord: "",
  balanceAsPerLedger: "",
  balanceAsPerStmt: "",
  balanceAsPerLedgerDate: "",
  balanceAsPerStatementDate: "",
  accountCode: "",
  accountClass: "",
};

const NewAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [classData, setClassData] = useState([]);
  const { switchSession } = useContext(SessionContext);
  const [showPassword, setShowPassword] = useState(false);
  const [affiliates, setAffiliates] = useState([]);
  const [domains, setDomains] = useState([]);

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

  const apiUrl = process.env.REACT_APP_API_URL.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
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

  useEffect(() => {
    const fetchDomains = async () => {
      if (formData.affiliateId) {
        try {
          const token = localStorage.getItem("jwtToken");
          const response = await axios.get(
            `${apiUrl}/api/domains/${formData.affiliateId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Ensure this line includes the correct token
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("jwtToken");

  //   try {
  //     const response = await axios.post(`${apiUrl}/api/account`, formData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const createdAccount = response.data; // Assuming the response contains the created account details

  //     toast.success("Account successfully created");

  //     // Switch to the newly created account as the current session
  //     const newSession = {
  //       affiliate: formData.affiliateId,
  //       domain: formData.domainId,
  //       account: createdAccount._id,
  //       month: formData.balanceAsPerLedgerDate, // Use the ledger date for the month
  //     };
  //     await switchSession(newSession); // Update the session in context

  //     navigate("/dashboard/upload-excel-led"); // Navigate after successful session switch
  //   } catch (err) {
  //     console.error("Error creating account:", err);
  //     toast.error("Unable to create account");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");

    try {
      // Create the account
      const response = await axios.post(`${apiUrl}/api/account`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Account successfully created");

      // Navigate based on balances
      if (formData.balanceAsPerLedger && formData.balanceAsPerLedger !== "0") {
        navigate("/dashboard/upload-excel-led"); // Upload ledger file
      } else if (
        formData.balanceAsPerStmt &&
        formData.balanceAsPerStmt !== "0"
      ) {
        navigate("/dashboard/upload-excel-led"); // Upload statement file
      } else {
        toast.info("No balances detected. Please review account details.");
      }
    } catch (err) {
      console.error("Error creating account:", err);
      if (err.response && err.response.data && err.response.data.error) {
        toast.error(err.response.data.error); // Display backend error message
      } else {
        toast.error("Unable to create account");
      }
    }
  };

  const handleChanges = (name) => (event) => {
    setStates((prevState) => ({ ...prevState, [name]: event.target.checked }));
  };
  const isSuspenseAccount = states.checkedC; // Update according to your checkbox names

  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard>
          <ValidatorForm onSubmit={handleSubmit}>
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
                <label>Internal Account</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="internalAccount"
                  label="Internal Account"
                  variant="outlined"
                  value={formData.internalAccount}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <label>External Account</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="externalAccount"
                  label="External Account"
                  variant="outlined"
                  value={formData.externalAccount}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    backgroundColor: isSuspenseAccount ? "yellow" : "white",
                  }}
                  disabled={isSuspenseAccount}
                  // sx={{ mb: 3 }}
                />
                <label>Account Title</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="accountTitle"
                  label="Account Title"
                  variant="outlined"
                  value={formData.accountTitle}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <label>Short Title</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="shortTitle"
                  label="Short Title"
                  variant="outlined"
                  value={formData.shortTitle}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <label>Currency</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="currency"
                  label="Currency"
                  variant="outlined"
                  value={formData.currency}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <label>Internal Record</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="internalRecord"
                  label="Internal Record"
                  variant="outlined"
                  value={formData.internalRecord}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <label>External Record</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="externalRecord"
                  label="External Record"
                  variant="outlined"
                  value={formData.externalRecord}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <label>Balance As Per Ledger</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="balanceAsPerLedger"
                  label="Balance As Per Ledger"
                  variant="outlined"
                  value={formData.balanceAsPerLedger}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <label>Balance As Per Ledger Date</label>
                <TextField
                  fullWidth
                  size="small"
                  type="date"
                  name="balanceAsPerLedgerDate"
                  label="Balance As Per Ledger Date"
                  variant="outlined"
                  value={formData.balanceAsPerLedgerDate}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <label>Balance As Per Stmt</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="balanceAsPerStmt"
                  label="Balance As Per Stmt"
                  variant="outlined"
                  value={formData.balanceAsPerStmt}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    backgroundColor: isSuspenseAccount ? "yellow" : "white",
                  }}
                  disabled={isSuspenseAccount}
                />
                <label>Balance As Per Statement Date</label>
                <TextField
                  fullWidth
                  size="small"
                  type="date"
                  name="balanceAsPerStatementDate"
                  label="Balance As Per Statement Date"
                  variant="outlined"
                  value={formData.balanceAsPerStatementDate}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    backgroundColor: isSuspenseAccount ? "yellow" : "white",
                  }}
                  disabled={isSuspenseAccount}
                />
                <label>Account Code</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="accountCode"
                  label="Account Code"
                  variant="outlined"
                  value={formData.accountCode}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <label>Account Class</label>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  name="accountClass"
                  label="Account Class"
                  variant="outlined"
                  value={formData.accountClass}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedA}
                      onChange={handleChanges("checkedA")}
                      value="checkedA"
                    />
                  }
                  label="Zero balance with outstanding items"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedB}
                      onChange={handleChanges("checkedB")}
                      value="checkedB"
                    />
                  }
                  label="Normal Account"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedC}
                      onChange={handleChanges("checkedC")}
                      value="checkedC"
                    />
                  }
                  label="Suspense Account"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedD}
                      onChange={handleChanges("checkedD")}
                      value="checkedD"
                    />
                  }
                  label="Allow Change Working Month"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedE}
                      onChange={handleChanges("checkedE")}
                      value="checkedE"
                    />
                  }
                  label="Allow Download Service"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedF}
                      onChange={handleChanges("checkedF")}
                      value="checkedF"
                    />
                  }
                  label="Allow Matching Service"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedG}
                      onChange={handleChanges("checkedG")}
                      value="checkedG"
                    />
                  }
                  label="Run End of Year"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedH}
                      onChange={handleChanges("checkedH")}
                      value="checkedH"
                    />
                  }
                  label="Allow Dirty Matching"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedI}
                      onChange={handleChanges("checkedI")}
                      value="checkedI"
                    />
                  }
                  label="Matching Level"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedJ}
                      onChange={handleChanges("checkedJ")}
                      value="checkedJ"
                    />
                  }
                  label="Internal Download by Period"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedK}
                      onChange={handleChanges("checkedK")}
                      value="checkedK"
                    />
                  }
                  label="External Download by Period"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedL}
                      onChange={handleChanges("checkedL")}
                      value="checkedL"
                    />
                  }
                  label="Enable Dashboard"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedM}
                      onChange={handleChanges("checkedM")}
                      value="checkedM"
                    />
                  }
                  label="Ledger Edit Closing Balance"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedN}
                      onChange={handleChanges("checkedN")}
                      value="checkedN"
                    />
                  }
                  label="Statement Edit Closing Balance"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedO}
                      onChange={handleChanges("checkedO")}
                      value="checkedO"
                    />
                  }
                  label="Ledg. Download using sequence"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedP}
                      onChange={handleChanges("checkedP")}
                      value="checkedP"
                    />
                  }
                  label="Stmt. Download using sequence"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedQ}
                      onChange={handleChanges("checkedQ")}
                      value="checkedQ"
                    />
                  }
                  label="Enable Cash Analysis"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedR}
                      onChange={handleChanges("checkedR")}
                      value="checkedR"
                    />
                  }
                  label="Auto Adjust Balance(Ledger)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={states.checkedS}
                      onChange={handleChanges("checkedS")}
                      value="checkedS"
                    />
                  }
                  label="Auto Adjust Balance(Stmt)"
                />
                {/* Add more FormControlLabels if needed */}
              </Grid>
            </Grid>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{ marginRight: "30px", marginTop: "50px" }}
            >
              Next
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
        <SimpleTable />
      </Stack>
      <ToastContainer />
    </Container>
  );
};

export default NewAccount;
