// import React, { useState, useEffect, useContext } from "react";

// import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";

// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import * as Yup from "yup";
// import { Formik } from "formik";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import { SessionContext } from "app/components/MatxLayout/SwitchContext"; // Adjust path as needed
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// const initialState = {
//   username: "",
//   email: "",
//   password: "",
//   phone: "",
//   address: "",
// };

// const validationSchema = Yup.object().shape({
//   username: Yup.string().required("Username is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters long")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//     .matches(/[0-9]/, "Password must contain at least one number")
//     .matches(
//       /[@$!%*?&#]/,
//       "Password must contain at least one special character"
//     )
//     .required("Password is required"),
//   phone: Yup.string().matches(
//     /^\d{11}$/,
//     "Phone number must be exactly 11 digits"
//   ),
//   address: Yup.string().required("Address is required"),
// });

// export default function CreateUser({ updateTableData }) {
//   const { currentSession } = useContext(SessionContext); // Get the active session
//   const [values, setValues] = useState({
//     passwordExpiresOn: null,
//     logOnTime: null,
//     affiliates: [],
//     activeDays: [],
//   });

//   const [formData, setFormData] = useState({
//     email: "",
//     fullname: "",
//     role: "",
//     affiliateId: "",
//     // passwordExpiresOn: null,
//     accountId: "",
//     daysOfWeek: [],
//   });

//   const [open, setOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const [affiliates, setAffiliates] = useState([]);
//   const [domains, setDomains] = useState([]);
//   const [accounts, setAccounts] = useState([]);
//   useEffect(() => {
//     const fetchAffiliates = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/api/affiliates`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//           },
//         });
//         setAffiliates(response.data);
//       } catch (err) {
//         console.error("Error fetching affiliates:", err);
//         toast.error("Error fetching affiliates");
//       }
//     };
//     fetchAffiliates();
//   }, [apiUrl]);
//   useEffect(() => {
//     const fetchDomains = async () => {
//       if (formData.affiliateId) {
//         try {
//           const token = localStorage.getItem("jwtToken");
//           const response = await axios.get(
//             `${apiUrl}/api/domains/${formData.affiliateId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`, // Ensure this line includes the correct token
//               },
//             }
//           );
//           setDomains(response.data);
//         } catch (err) {
//           console.error("Error fetching domains:", err);
//           toast.error("Error fetching domains");
//         }
//       }
//     };
//     fetchDomains();
//   }, [formData.affiliateId, apiUrl]);
//   useEffect(() => {
//     const fetchAccounts = async () => {
//       if (formData.domainId) {
//         try {
//           const token = localStorage.getItem("jwtToken");
//           const response = await axios.get(
//             `${apiUrl}/api/accounts/${formData.domainId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );
//           setAccounts(response.data);
//         } catch (err) {
//           console.error("Error fetching accounts:", err);
//           toast.error("Error fetching accounts");
//         }
//       }
//     };
//     fetchAccounts();
//   }, [formData.domainId, apiUrl]);
//   function handleClickOpen() {
//     setOpen(true);
//   }

//   function handleClose() {
//     setOpen(false);
//   }

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleAffiliateChange = (e, affiliate) => {
//     const { checked } = e.target;

//     // Safely check if 'affiliates' is defined and an array before using 'indexOf'
//     setValues((prev) => ({
//       ...prev,
//       affiliates: Array.isArray(prev.affiliates)
//         ? checked
//           ? [...prev.affiliates, affiliate] // Add affiliate if checked
//           : prev.affiliates.filter((a) => a !== affiliate) // Remove affiliate if unchecked
//         : [], // If 'affiliates' is undefined or not an array, reset it to an empty array
//     }));
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   const handleDateChange = (date) => {
//     setValues((prev) => ({ ...prev, passwordExpiresOn: date }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDaysOfWeekChange = (e, day) => {
//     const { checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       daysOfWeek: checked
//         ? [...prev.daysOfWeek, day]
//         : prev.daysOfWeek.filter((d) => d !== day),
//     }));
//   };
//   const handleTimeChange = (time) => {
//     setValues((prev) => ({ ...prev, logOnTime: time }));
//   };

//   const handleDayChange = (e, day) => {
//     const { checked } = e.target;

//     setValues((prev) => ({
//       ...prev,
//       activeDays: checked
//         ? [...prev.activeDays, day] // Add day if checked
//         : prev.activeDays.filter((d) => d !== day), // Remove day if unchecked
//     }));
//   };

//   return (
//     <Box>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Add New User
//       </Button>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title"> Add new User</DialogTitle>
//         <DialogContent>
//           <Formik
//             initialValues={initialState}
//             validationSchema={validationSchema}
//             onSubmit={async (values, { setSubmitting }) => {
//               if (!currentSession) {
//                 toast.error("No active session found");
//                 setSubmitting(false);
//                 return;
//               }

//               try {
//                 const response = await axios.post(`${apiUrl}/api/register`, {
//                   ...values,
//                   role: "admin",
//                   sessionId: currentSession._id,
//                 });
//                 const newAdmin = response.data;
//                 updateTableData(newAdmin);
//                 toast.success("User successfully created");
//                 handleClose();
//               } catch (err) {
//                 console.error("Error registering admin:", err);
//                 toast.error("Unable to create user");
//               } finally {
//                 setSubmitting(false);
//               }
//             }}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               isSubmitting,
//             }) => (
//               <form onSubmit={handleSubmit}>
//                 <label>Full Name</label>
//                 <TextField
//                   autoFocus
//                   margin="dense"
//                   name="username"
//                   value={formData.fullname}
//                   placeholder="Full Name"
//                   type="text"
//                   fullWidth
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   helperText={touched.username && errors.username}
//                   error={touched.username && Boolean(errors.username)}
//                 />
//                 <label>Email</label>
//                 <TextField
//                   autoFocus
//                   margin="dense"
//                   name="email"
//                   value={formData.email}
//                   placeholder="Enter your email"
//                   type="email"
//                   fullWidth
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   helperText={touched.email && errors.email}
//                   error={touched.email && Boolean(errors.email)}
//                 />
//                 <TextField
//                   label="Role"
//                   name="role"
//                   select
//                   value={formData.role}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                   SelectProps={{ native: true }}
//                 >
//                   <option value="">Select a role</option>
//                   <option value="Administrator">Administrator</option>
//                   <option value="Account Officer">Account Officer</option>
//                   <option value="Supervisor">Supervisor</option>
//                 </TextField>

//                 {/*} <label>Password Expiration</label>
//                 <Box
//                   style={{
//                     marginTop: "1rem",
//                     display: "flex",
//                     gap: "1rem",
//                     width: "100%",
//                   }}
//                 >

//                   <Box style={{ flex: 1 }}>
//                     <LocalizationProvider dateAdapter={AdapterDateFns}>
//                       <DatePicker
//                         label="Expires On"
//                         value={values.passwordExpiresOn}
//                         onChange={handleDateChange}
//                         renderInput={(params) => (
//                           <TextField
//                             {...params}
//                             fullWidth
//                             margin="normal"
//                             helperText={
//                               !values.passwordExpiresOn &&
//                               "Please select an expiration date"
//                             }
//                             error={!values.passwordExpiresOn}
//                           />
//                         )}
//                       />
//                     </LocalizationProvider>
//                   </Box>

//                   <Box style={{ flex: 1 }}>
//                     <LocalizationProvider dateAdapter={AdapterDateFns}>
//                       <TimePicker
//                         label="Log On Time"
//                         value={values.logOnTime}
//                         onChange={handleTimeChange}
//                         renderInput={(params) => (
//                           <TextField
//                             {...params}
//                             fullWidth
//                             margin="normal"
//                             helperText={
//                               !values.logOnTime && "Please select a log-on time"
//                             }
//                             error={!values.logOnTime}
//                           />
//                         )}
//                       />
//                     </LocalizationProvider>
//                   </Box>
//                 </Box>*/}
//                 <label
//                   htmlFor="role"
//                   style={{ display: "block", marginTop: "1rem" }}
//                 >
//                   Select Affliate
//                 </label>

//                 <TextField
//                   select
//                   variant="outlined"
//                   name="affiliateId"
//                   value={formData.affiliateId}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "0.5rem",
//                     marginTop: "0.5rem",
//                     marginBottom: "1rem",
//                   }}
//                   SelectProps={{ native: true }}
//                 >
//                   <option
//                     value=""
//                     disabled
//                     style={{
//                       width: "100%",
//                       padding: "0.5rem",
//                       marginTop: "0.5rem",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     Select an Affiliate
//                   </option>
//                   {affiliates.map((affiliate) => (
//                     <option key={affiliate._id} value={affiliate._id}>
//                       {affiliate.affiliateName}{" "}
//                       {/* Adjust according to the affiliate object structure */}
//                     </option>
//                   ))}
//                 </TextField>
//                 <label
//                   htmlFor="role"
//                   style={{ display: "block", marginTop: "1rem" }}
//                 >
//                   Select Domain
//                 </label>

//                 <TextField
//                   select
//                   variant="outlined"
//                   name="domainId"
//                   value={formData.domainId}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "0.5rem",
//                     marginTop: "0.5rem",
//                     marginBottom: "1rem",
//                   }}
//                   SelectProps={{ native: true }}
//                 >
//                   <option
//                     value=""
//                     disabled
//                     style={{
//                       width: "100%",
//                       padding: "0.5rem",
//                       marginTop: "0.5rem",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     Select a Domain
//                   </option>
//                   {domains.map((domain) => (
//                     <option key={domain._id} value={domain._id}>
//                       {domain.domainName}{" "}
//                       {/* Adjust according to the affiliate object structure */}
//                     </option>
//                   ))}
//                 </TextField>
//                 <label
//                   htmlFor="role"
//                   style={{ display: "block", marginTop: "1rem" }}
//                 >
//                   Select Account
//                 </label>

//                 <TextField
//                   select
//                   variant="outlined"
//                   name="accountId"
//                   value={formData.accountId}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "0.5rem",
//                     marginTop: "0.5rem",
//                     marginBottom: "1rem",
//                   }}
//                   SelectProps={{ native: true }}
//                 >
//                   <option
//                     value=""
//                     disabled
//                     style={{
//                       width: "100%",
//                       padding: "0.5rem",
//                       marginTop: "0.5rem",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     Select an Account
//                   </option>
//                   {accounts.map((account) => (
//                     <option key={account._id} value={account._id}>
//                       {account.accountTitle}{" "}
//                       {/* Adjust according to the affiliate object structure */}
//                     </option>
//                   ))}
//                 </TextField>
//                 {/*}  <Box style={{ marginTop: "1rem" }}>
//                   <label
//                     htmlFor="affiliates"
//                     style={{ display: "block", marginBottom: "0.5rem" }}
//                   >
//                     Domicile Affiliate
//                   </label>

//                   <FormGroup>

//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             Array.isArray(values.affiliates) &&
//                             values.affiliates.indexOf("Parkway FFLIARE") !== -1
//                           }
//                           onChange={(e) =>
//                             handleAffiliateChange(e, "Parkway FFLIARE")
//                           }
//                         />
//                       }
//                       label="Parkway FFLIARE"
//                     />

//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             Array.isArray(values.affiliates) &&
//                             values.affiliates.indexOf("Administrator") !== -1
//                           }
//                           onChange={(e) =>
//                             handleAffiliateChange(e, "Administrator")
//                           }
//                         />
//                       }
//                       label="Administrator"
//                     />

//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             Array.isArray(values.affiliates) &&
//                             values.affiliates.indexOf("Supervisor") !== -1
//                           }
//                           onChange={(e) =>
//                             handleAffiliateChange(e, "Supervisor")
//                           }
//                         />
//                       }
//                       label="Supervisor"
//                     />
//                   </FormGroup>
//                 </Box>*/}

//                 <Box style={{ marginTop: "1rem" }}>
//                   <label
//                     htmlFor="activeDays"
//                     style={{ display: "block", marginBottom: "0.5rem" }}
//                   >
//                     Active Days
//                   </label>

//                   <FormGroup>
//                     {[
//                       "Monday",
//                       "Tuesday",
//                       "Wednesday",
//                       "Thursday",
//                       "Friday",
//                     ].map((day) => (
//                       <FormControlLabel
//                         key={day}
//                         control={
//                           <Checkbox
//                             checked={formData.daysOfWeek.includes(day)}
//                             onChange={(e) => handleDaysOfWeekChange(e, day)}
//                           />
//                         }
//                         label={day}
//                       />
//                     ))}
//                   </FormGroup>
//                 </Box>

//                 <DialogActions>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     onClick={handleClose}
//                   >
//                     Cancel
//                   </Button>
//                   <Button type="submit" color="primary" disabled={isSubmitting}>
//                     Add User
//                   </Button>
//                 </DialogActions>
//               </form>
//             )}
//           </Formik>
//         </DialogContent>
//       </Dialog>
//       <ToastContainer />
//     </Box>
//   );
// }
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  MenuItem,
  Button,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const CreateUser = ({ updateTableData }) => {
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    role: "",
    affiliateId: "",
    domainId: "",
    accountId: "",
    daysOfWeek: [],
  });
  const { currentSession } = useContext(SessionContext); // Get the active session
  const [affiliates, setAffiliates] = useState([]);
  const [domains, setDomains] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [open, setOpen] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  // Fetch affiliates
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

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox (days of the week)
  const handleDaysOfWeekChange = (e, day) => {
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      daysOfWeek: checked
        ? [...prev.daysOfWeek, day]
        : prev.daysOfWeek.filter((d) => d !== day),
    }));
  };
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure required fields are filled
    const { email, fullname, role, affiliateId, domainId, accountId } =
      formData;
    if (
      !email ||
      !fullname ||
      !role ||
      !affiliateId ||
      !domainId ||
      !accountId
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      // POST API call
      const response = await axios.post(`${apiUrl}/api/add-user`, formData);
      toast.success("User successfully created!");
      updateTableData(response.data); // Update the table with new user
      handleClose(); // Close modal
    } catch (err) {
      console.error("Error creating user:", err);
      toast.error("Failed to create user. Please try again.");
    }
  };

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New User
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <TextField
              label="Full Name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            {/* Email */}
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="email"
              required
            />
            {/* Role */}
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              fullWidth
              margin="normal"
              select
              required
            >
              <MenuItem value="">Select a role</MenuItem>
              <MenuItem value="Administrator">Administrator</MenuItem>
              <MenuItem value="Account Officer">Account Officer</MenuItem>
              <MenuItem value="Supervisor">Supervisor</MenuItem>
            </TextField>
            {/* Affiliate */}
            <TextField
              label="Affiliate"
              name="affiliateId"
              value={formData.affiliateId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              select
              required
            >
              <MenuItem value="">Select an affiliate</MenuItem>
              {affiliates.map((affiliate) => (
                <MenuItem key={affiliate._id} value={affiliate._id}>
                  {affiliate.affiliateName}
                </MenuItem>
              ))}
            </TextField>
            {/* Domain */}
            <TextField
              label="Domain"
              name="domainId"
              value={formData.domainId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              select
              required
            >
              <MenuItem value="">Select a domain</MenuItem>
              {domains.map((domain) => (
                <MenuItem key={domain._id} value={domain._id}>
                  {domain.domainName}
                </MenuItem>
              ))}
            </TextField>
            {/* Account */}
            <TextField
              label="Account"
              name="accountId"
              value={formData.accountId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              select
              required
            >
              <MenuItem value="">Select an account</MenuItem>
              {accounts.map((account) => (
                <MenuItem key={account._id} value={account._id}>
                  {account.accountTitle}
                </MenuItem>
              ))}
            </TextField>
            {/* Days of the Week */}
            <Box>
              <label>Active Days of the Week:</label>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <FormControlLabel
                  key={day}
                  control={
                    <Checkbox
                      checked={formData.daysOfWeek.includes(day)}
                      onChange={(e) => handleDaysOfWeekChange(e, day)}
                    />
                  }
                  label={day}
                />
              ))}
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Add User
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateUser;
