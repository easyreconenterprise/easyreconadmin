import React, { useState, useEffect } from "react";
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
  balanceAsPerLedgerDate: "",
  balanceAsPerStatementDate: "",
  accountCode: "",
  accountClass: "",
};

const NewAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [classData, setClassData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [affiliates, setAffiliates] = useState([]);
  const [domains, setDomains] = useState([]);

  const [states, setStates] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");

    try {
      await axios.post(`${apiUrl}/api/account`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Account successfully created");
    } catch (err) {
      console.error("Error creating account:", err);
      toast.error("Unable to create account");
    }
  };

  const handleChanges = (name) => (event) => {
    setStates((prevState) => ({ ...prevState, [name]: event.target.checked }));
  };

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
                  sx={{ mb: 3 }}
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
                  sx={{ mb: 3 }}
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
                  label="Zero balance with outstanding item"
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
