// import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";
// import { React, useContext, useState } from "react";
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

// export default function EditUser({ updateTableData }) {
//   const { currentSession } = useContext(SessionContext); // Get the active session
//   const [values, setValues] = useState({
//     passwordExpiresOn: null,
//     logOnTime: null,
//     affiliates: [],
//     activeDays: [],
//   });
//   const [open, setOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const apiUrl = process.env.REACT_APP_API_URL;

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
//         Edit User
//       </Button>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title"> Edit User</DialogTitle>
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
//                   value={values.username}
//                   placeholder="Enter your name"
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
//                   value={values.email}
//                   placeholder="Enter your email"
//                   type="email"
//                   fullWidth
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   helperText={touched.email && errors.email}
//                   error={touched.email && Boolean(errors.email)}
//                 />
//                 <label
//                   htmlFor="role"
//                   style={{ display: "block", marginTop: "1rem" }}
//                 >
//                   Select Role:
//                 </label>
//                 <select
//                   id="role"
//                   name="role"
//                   style={{
//                     width: "100%",
//                     padding: "0.5rem",
//                     marginTop: "0.5rem",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   <option value="Account Officer">Account Officer</option>
//                   <option value="Administrator">Administrator</option>
//                   <option value="Supervisor">Supervisor</option>
//                 </select>

//                 <label>Password Expiration</label>
//                 <Box
//                   style={{
//                     marginTop: "1rem",
//                     display: "flex",
//                     gap: "1rem",
//                     width: "100%",
//                   }}
//                 >
//                   {/* Expires On */}
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

//                   {/* Log On Time */}
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
//                 </Box>
//                 <label
//                   htmlFor="role"
//                   style={{ display: "block", marginTop: "1rem" }}
//                 >
//                   Domicile Affiate
//                 </label>
//                 <select
//                   id="role"
//                   name="role"
//                   style={{
//                     width: "100%",
//                     padding: "0.5rem",
//                     marginTop: "0.5rem",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   <option value="Account Officer">Parkway Affliate</option>
//                   <option value="Administrator">Administrator</option>
//                   <option value="Supervisor">Supervisor</option>
//                 </select>
//                 <Box style={{ marginTop: "1rem" }}>
//                   <label
//                     htmlFor="affiliates"
//                     style={{ display: "block", marginBottom: "0.5rem" }}
//                   >
//                     Domicile Affiliate
//                   </label>

//                   <FormGroup>
//                     {/* Parkway FFLIARE Checkbox */}
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
//                     {/* Administrator Checkbox */}
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
//                     {/* Supervisor Checkbox */}
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
//                 </Box>

//                 <Box style={{ marginTop: "1rem" }}>
//                   <label
//                     htmlFor="activeDays"
//                     style={{ display: "block", marginBottom: "0.5rem" }}
//                   >
//                     Active Days
//                   </label>

//                   <FormGroup row>
//                     {/* Monday Checkbox */}
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             values.activeDays &&
//                             values.activeDays.indexOf("Monday") !== -1
//                           } // Check if Monday is selected using indexOf
//                           onChange={(e) => handleDayChange(e, "Monday")}
//                         />
//                       }
//                       label="Monday"
//                     />
//                     {/* Tuesday Checkbox */}
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             values.activeDays &&
//                             values.activeDays.indexOf("Tuesday") !== -1
//                           } // Check if Tuesday is selected using indexOf
//                           onChange={(e) => handleDayChange(e, "Tuesday")}
//                         />
//                       }
//                       label="Tuesday"
//                     />
//                     {/* Wednesday Checkbox */}
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             values.activeDays &&
//                             values.activeDays.indexOf("Wednesday") !== -1
//                           } // Check if Wednesday is selected using indexOf
//                           onChange={(e) => handleDayChange(e, "Wednesday")}
//                         />
//                       }
//                       label="Wednesday"
//                     />
//                     {/* Thursday Checkbox */}
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             values.activeDays &&
//                             values.activeDays.indexOf("Thursday") !== -1
//                           } // Check if Thursday is selected using indexOf
//                           onChange={(e) => handleDayChange(e, "Thursday")}
//                         />
//                       }
//                       label="Thursday"
//                     />
//                     {/* Friday Checkbox */}
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             values.activeDays &&
//                             values.activeDays.indexOf("Friday") !== -1
//                           } // Check if Friday is selected using indexOf
//                           onChange={(e) => handleDayChange(e, "Friday")}
//                         />
//                       }
//                       label="Friday"
//                     />
//                     {/* Saturday Checkbox */}
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             values.activeDays &&
//                             values.activeDays.indexOf("Saturday") !== -1
//                           } // Check if Saturday is selected using indexOf
//                           onChange={(e) => handleDayChange(e, "Saturday")}
//                         />
//                       }
//                       label="Saturday"
//                     />
//                     {/* Sunday Checkbox */}
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={
//                             values.activeDays &&
//                             values.activeDays.indexOf("Sunday") !== -1
//                           } // Check if Sunday is selected using indexOf
//                           onChange={(e) => handleDayChange(e, "Sunday")}
//                         />
//                       }
//                       label="Sunday"
//                     />
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
import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

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

const EditUser = ({ user, closeModal, updateTableData }) => {
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

  const handleAffiliateChange = (e, affiliate) => {
    const { checked } = e.target;

    // Safely check if 'affiliates' is defined and an array before using 'indexOf'
    setValues((prev) => ({
      ...prev,
      affiliates: Array.isArray(prev.affiliates)
        ? checked
          ? [...prev.affiliates, affiliate] // Add affiliate if checked
          : prev.affiliates.filter((a) => a !== affiliate) // Remove affiliate if unchecked
        : [], // If 'affiliates' is undefined or not an array, reset it to an empty array
    }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleDateChange = (date) => {
    setValues((prev) => ({ ...prev, passwordExpiresOn: date }));
  };

  const handleTimeChange = (time) => {
    setValues((prev) => ({ ...prev, logOnTime: time }));
  };

  const handleDayChange = (e, day) => {
    const { checked } = e.target;

    setValues((prev) => ({
      ...prev,
      activeDays: checked
        ? [...prev.activeDays, day] // Add day if checked
        : prev.activeDays.filter((d) => d !== day), // Remove day if unchecked
    }));
  };

  return (
    <Box>
      <Dialog open={open} onClose={() => closeModal()}>
        <DialogTitle id="form-dialog-title"> Edit User</DialogTitle>
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
                <label>Full Name</label>
                <TextField
                  autoFocus
                  margin="dense"
                  name="username"
                  value={values.username}
                  placeholder="Enter your name"
                  type="text"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.username && errors.username}
                  error={touched.username && Boolean(errors.username)}
                />
                <label>Email</label>
                <TextField
                  autoFocus
                  margin="dense"
                  name="email"
                  value={values.email}
                  placeholder="Enter your email"
                  type="email"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                />
                <label
                  htmlFor="role"
                  style={{ display: "block", marginTop: "1rem" }}
                >
                  Select Role:
                </label>
                <select
                  id="role"
                  name="role"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <option value="Account Officer">Account Officer</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Supervisor">Supervisor</option>
                </select>

                <label>Password Expiration</label>
                <Box
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                  }}
                >
                  {/* Expires On */}
                  <Box style={{ flex: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Expires On"
                        value={values.passwordExpiresOn}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            margin="normal"
                            helperText={
                              !values.passwordExpiresOn &&
                              "Please select an expiration date"
                            }
                            error={!values.passwordExpiresOn}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>

                  {/* Log On Time */}
                  <Box style={{ flex: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        label="Log On Time"
                        value={values.logOnTime}
                        onChange={handleTimeChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            margin="normal"
                            helperText={
                              !values.logOnTime && "Please select a log-on time"
                            }
                            error={!values.logOnTime}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <label
                  htmlFor="role"
                  style={{ display: "block", marginTop: "1rem" }}
                >
                  Domicile Affiate
                </label>
                <select
                  id="role"
                  name="role"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <option value="Account Officer">Parkway Affliate</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Supervisor">Supervisor</option>
                </select>
                <Box style={{ marginTop: "1rem" }}>
                  <label
                    htmlFor="affiliates"
                    style={{ display: "block", marginBottom: "0.5rem" }}
                  >
                    Domicile Affiliate
                  </label>

                  <FormGroup>
                    {/* Parkway FFLIARE Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            Array.isArray(values.affiliates) &&
                            values.affiliates.indexOf("Parkway FFLIARE") !== -1
                          }
                          onChange={(e) =>
                            handleAffiliateChange(e, "Parkway FFLIARE")
                          }
                        />
                      }
                      label="Parkway FFLIARE"
                    />
                    {/* Administrator Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            Array.isArray(values.affiliates) &&
                            values.affiliates.indexOf("Administrator") !== -1
                          }
                          onChange={(e) =>
                            handleAffiliateChange(e, "Administrator")
                          }
                        />
                      }
                      label="Administrator"
                    />
                    {/* Supervisor Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            Array.isArray(values.affiliates) &&
                            values.affiliates.indexOf("Supervisor") !== -1
                          }
                          onChange={(e) =>
                            handleAffiliateChange(e, "Supervisor")
                          }
                        />
                      }
                      label="Supervisor"
                    />
                  </FormGroup>
                </Box>

                <Box style={{ marginTop: "1rem" }}>
                  <label
                    htmlFor="activeDays"
                    style={{ display: "block", marginBottom: "0.5rem" }}
                  >
                    Active Days
                  </label>

                  <FormGroup row>
                    {/* Monday Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            values.activeDays &&
                            values.activeDays.indexOf("Monday") !== -1
                          } // Check if Monday is selected using indexOf
                          onChange={(e) => handleDayChange(e, "Monday")}
                        />
                      }
                      label="Monday"
                    />
                    {/* Tuesday Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            values.activeDays &&
                            values.activeDays.indexOf("Tuesday") !== -1
                          } // Check if Tuesday is selected using indexOf
                          onChange={(e) => handleDayChange(e, "Tuesday")}
                        />
                      }
                      label="Tuesday"
                    />
                    {/* Wednesday Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            values.activeDays &&
                            values.activeDays.indexOf("Wednesday") !== -1
                          } // Check if Wednesday is selected using indexOf
                          onChange={(e) => handleDayChange(e, "Wednesday")}
                        />
                      }
                      label="Wednesday"
                    />
                    {/* Thursday Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            values.activeDays &&
                            values.activeDays.indexOf("Thursday") !== -1
                          } // Check if Thursday is selected using indexOf
                          onChange={(e) => handleDayChange(e, "Thursday")}
                        />
                      }
                      label="Thursday"
                    />
                    {/* Friday Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            values.activeDays &&
                            values.activeDays.indexOf("Friday") !== -1
                          } // Check if Friday is selected using indexOf
                          onChange={(e) => handleDayChange(e, "Friday")}
                        />
                      }
                      label="Friday"
                    />
                    {/* Saturday Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            values.activeDays &&
                            values.activeDays.indexOf("Saturday") !== -1
                          } // Check if Saturday is selected using indexOf
                          onChange={(e) => handleDayChange(e, "Saturday")}
                        />
                      }
                      label="Saturday"
                    />
                    {/* Sunday Checkbox */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            values.activeDays &&
                            values.activeDays.indexOf("Sunday") !== -1
                          } // Check if Sunday is selected using indexOf
                          onChange={(e) => handleDayChange(e, "Sunday")}
                        />
                      }
                      label="Sunday"
                    />
                  </FormGroup>
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
                    Save Changes
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
};

export default EditUser;
