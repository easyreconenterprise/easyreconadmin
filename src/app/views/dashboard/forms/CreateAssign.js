import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { SessionContext } from "app/components/MatxLayout/SwitchContext"; // Adjust path as needed
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const initialState = {
  username: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  phone: Yup.string().matches(
    /^\d{11}$/,
    "Phone number must be exactly 11 digits"
  ),
  address: Yup.string().required("Address is required"),
});

export default function CreateAssign({ updateTableData }) {
  const { currentSession } = useContext(SessionContext); // Get the active session
  const [values, setValues] = useState({
    passwordExpiresOn: null,
    logOnTime: null,
    affiliates: [],
    activeDays: [],
  });
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Sample accounts data
  const accounts = [
    { accountCode: "A001", domain: "Domain 1", accountName: "Account 1" },
    { accountCode: "A002", domain: "Domain 2", accountName: "Account 2" },
    { accountCode: "A003", domain: "Domain 3", accountName: "Account 3" },
  ];

  const affiliates = ["Affiliate 1", "Affiliate 2", "Affiliate 3"];
  const domains = ["Domain 1", "Domain 2", "Domain 3"];
  const [canAccess, setCanAccess] = useState([]);
  const [canAccessAndMatch, setCanAccessAndMatch] = useState([]);

  // State to manage selected affiliates
  const [selectedAffiliates, setSelectedAffiliates] = useState([]);
  const [selectedDomains, setSelectedDomains] = useState([]);

  // Handle affiliate selection
  const handleAffiliateChange = (event, affiliate) => {
    if (event.target.checked) {
      // Add affiliate to the selected list
      setSelectedAffiliates((prev) => [...prev, affiliate]);
    } else {
      // Remove affiliate from the selected list
      setSelectedAffiliates((prev) =>
        prev.filter((item) => item !== affiliate)
      );
    }
  };
  const handleDomainChange = (event, domain) => {
    if (event.target.checked) {
      setSelectedDomains((prev) => [...prev, domain]);
    } else {
      setSelectedDomains((prev) => prev.filter((item) => item !== domain));
    }
  };

  const handleCanAccessChange = (accountCode) => {
    setCanAccess((prev) =>
      prev.includes(accountCode)
        ? prev.filter((code) => code !== accountCode)
        : [...prev, accountCode]
    );
  };

  // Handle account access and match selection
  const handleCanAccessAndMatchChange = (accountCode) => {
    setCanAccessAndMatch((prev) =>
      prev.includes(accountCode)
        ? prev.filter((code) => code !== accountCode)
        : [...prev, accountCode]
    );
  };
  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {" "}
          User Account Assignment
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              if (!currentSession) {
                toast.error("No active session found");
                setSubmitting(false);
                return;
              }

              try {
                const response = await axios.post(`${apiUrl}/api/register`, {
                  ...values,
                  role: "admin",
                  sessionId: currentSession._id,
                });
                const newAdmin = response.data;
                updateTableData(newAdmin);
                toast.success("User successfully created");
                handleClose();
              } catch (err) {
                console.error("Error registering admin:", err);
                toast.error("Unable to create user");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box style={{ marginTop: "1rem" }}>
                  <label
                    htmlFor="affiliates"
                    style={{ display: "block", marginBottom: "0.5rem" }}
                  >
                    Select Affiliates
                  </label>

                  <FormGroup row>
                    {affiliates.map((affiliate) => (
                      <FormControlLabel
                        key={affiliate}
                        control={
                          <Checkbox
                            checked={selectedAffiliates.includes(affiliate)} // Check if the affiliate is selected
                            onChange={(e) =>
                              handleAffiliateChange(e, affiliate)
                            }
                          />
                        }
                        label={affiliate}
                      />
                    ))}
                  </FormGroup>
                </Box>
                <Box style={{ marginTop: "1rem" }}>
                  <label
                    htmlFor="domains"
                    style={{ display: "block", marginBottom: "0.5rem" }}
                  >
                    Select Domains
                  </label>
                  <FormGroup row>
                    {domains.map((domain) => (
                      <FormControlLabel
                        key={domain}
                        control={
                          <Checkbox
                            checked={selectedDomains.includes(domain)}
                            onChange={(e) => handleDomainChange(e, domain)}
                          />
                        }
                        label={domain}
                      />
                    ))}
                  </FormGroup>
                </Box>

                <Box style={{ marginTop: "2rem" }}>
                  <Box style={{ marginBottom: "1rem" }}>
                    <strong>Account List</strong>
                  </Box>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Account Code</TableCell>
                          <TableCell>Domain</TableCell>
                          <TableCell>Account</TableCell>
                          <TableCell>Can Access</TableCell>
                          <TableCell>Can Access and Match</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {accounts.map((account) => (
                          <TableRow key={account.accountCode}>
                            <TableCell>{account.accountCode}</TableCell>
                            <TableCell>{account.domain}</TableCell>
                            <TableCell>{account.accountName}</TableCell>
                            <TableCell>
                              <Checkbox
                                checked={canAccess.includes(
                                  account.accountCode
                                )}
                                onChange={() =>
                                  handleCanAccessChange(account.accountCode)
                                }
                              />
                            </TableCell>
                            <TableCell>
                              <Checkbox
                                checked={canAccessAndMatch.includes(
                                  account.accountCode
                                )}
                                onChange={() =>
                                  handleCanAccessAndMatchChange(
                                    account.accountCode
                                  )
                                }
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                <DialogActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" color="primary" disabled={isSubmitting}>
                    Assign
                  </Button>
                </DialogActions>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </Box>
  );
}
