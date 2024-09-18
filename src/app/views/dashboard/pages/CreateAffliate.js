// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import { MenuItem, Select, Stack } from "@mui/material";
// import { Box } from "@mui/system";
// import { Breadcrumb, SimpleCard } from "app/components";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import {
//   Button,
//   Checkbox,
//   Grid,
//   Icon,
//   DialogTitle,
//   styled,
//   IconButton,
//   InputAdornment,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
// import { Span } from "app/components/Typography";
// import { useEffect, useState } from "react";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
// import { Navigate, useNavigate } from "react-router-dom";
// import SimpleTable from "app/views/material-kit/tables/SimpleTable";
// const Container = styled("div")(({ theme }) => ({
//   margin: "30px",
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
//   "& .breadcrumb": {
//     marginBottom: "30px",
//     [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
//   },
// }));

// const TextField = styled(TextValidator)(() => ({
//   width: "100%",
//   marginBottom: "16px",
// }));
// const initialState = {
//   affiliateName: "",
//   affiliateDescription: "",

//   date: "",
// };

// const CreateAffliate = () => {
//   const navigate = useNavigate();
//   const [state, setState] = useState({ date: new Date() });
//   const [showPassword, setShowPassword] = useState(false);
//   const [classData, setClassData] = useState([]); // To store the list of classes
//   const [formData, setFormData] = useState(initialState);
//   const { affiliateName, affiliateDescription, date } = formData;
//   // const [affiliateName, setAffiliateName] = useState("");
//   // const [affiliateDescription, setAffiliateDescription] = useState("");
//   // const [affiliateDate, setAffiliateDate] = useState("");

//   const apiUrl = process.env.REACT_APP_API_URL.trim();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {};
//     try {
//       await axios.post(`${apiUrl}/api/affiliate`, {
//         ...formData,
//       });

//       // navigate("/dashboard/admin");
//       toast.success("User successfully created");
//     } catch (err) {
//       console.error("Error registering student:", err);
//       toast.error("Unable to create user");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDateChange = (date) => setState({ ...state, date });

//   return (
//     <div>
//       <Container>
//         <Stack spacing={3}>
//           <SimpleCard>
//             <DialogTitle id="form-dialog-title">
//               {" "}
//               Create New Affliate
//             </DialogTitle>

//             <ValidatorForm onSubmit={handleSubmit}>
//               <Grid container spacing={6}>
//                 <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//                   <label>Afflate Name</label>
//                   <TextField
//                     fullWidth
//                     autoFocus
//                     margin="dense"
//                     size="small"
//                     type="text"
//                     // name="username"
//                     placeholder="Affliate Name"
//                     label="Affliate Name"
//                     variant="outlined"
//                     id="affiliateName"
//                     value={affiliateName}
//                     onChange={(e) => setAffiliateName(e.target.value)}
//                     required
//                     // onChange={handleChange}
//                     // helperText={touched.fullname && errors.username}
//                     // error={Boolean(errors.fullname && touched.username)}
//                     sx={{ mb: 3 }}
//                   />
//                   <label>Affliate Description</label>
//                   <TextField
//                     fullWidth
//                     autoFocus
//                     margin="dense"
//                     size="small"
//                     type="text"
//                     // name="username"
//                     placeholder="Affliate Description"
//                     label="Affliate Description"
//                     variant="outlined"
//                     id="affiliateDescription"
//                     value={affiliateDescription}
//                     onChange={(e) => setAffiliateDescription(e.target.value)}
//                     required
//                     // onChange={handleChange}
//                     // helperText={touched.fullname && errors.username}
//                     // error={Boolean(errors.fullname && touched.username)}
//                     sx={{ mb: 3 }}
//                   />
//                   <label>Affliate Date</label>

//                   <TextField
//                     fullWidth
//                     autoFocus
//                     margin="dense"
//                     size="small"
//                     type="text"
//                     // name="username"
//                     placeholder="Affliate Date"
//                     label="Affliate Date"
//                     variant="outlined"
//                     id="affiliateDate"
//                     value={affiliateDate}
//                     onChange={(e) => setAffiliateDate(e.target.value)}
//                     required
//                     // onChange={handleChange}
//                     // helperText={touched.fullname && errors.username}
//                     // error={Boolean(errors.fullname && touched.username)}
//                     sx={{ mb: 3 }}
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 color="primary"
//                 variant="contained"
//                 type="submit"
//                 style={{
//                   marginRight: "30px",
//                   marginTop: "50px",
//                 }}
//               >
//                 <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
//               </Button>
//               <Button
//                 color="primary"
//                 variant="contained"
//                 type="submit"
//                 style={{ marginTop: "50px" }}
//               >
//                 <Span sx={{ pl: 1, textTransform: "capitalize" }}>Cancel</Span>
//               </Button>
//             </ValidatorForm>
//           </SimpleCard>
//           <SimpleTable />
//         </Stack>
//         <ToastContainer />
//       </Container>
//     </div>
//   );
// };

// export default CreateAffliate;

import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, Grid, DialogTitle, styled } from "@mui/material";
import { Span } from "app/components/Typography";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
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
  affiliateName: "",
  affiliateDescription: "",
  affiliateDate: new Date(),
};

const CreateAffiliate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { affiliateName, affiliateDescription, affiliateDate } = formData;

  const apiUrl = process.env.REACT_APP_API_URL.trim(); // Ensure API URL is correctly set in .env

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken"); // Adjust this based on where you store your token

    try {
      // Add the Authorization header with the token
      const response = await axios.post(`${apiUrl}/api/affiliate`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // You can now use response if needed
      toast.success("Affiliate successfully created");
    } catch (err) {
      console.error("Error creating affiliate:", err);
      toast.error("Error creating affiliate");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle date change
  const handleDateChange = (date) => {
    setFormData({ ...formData, affiliateDate: date });
  };

  return (
    <div>
      <Container>
        <Stack spacing={3}>
          <SimpleCard>
            <DialogTitle>Create New Affiliate</DialogTitle>

            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    label="Affiliate Name"
                    variant="outlined"
                    name="affiliateName"
                    value={affiliateName}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    label="Affiliate Description"
                    variant="outlined"
                    name="affiliateDescription"
                    value={affiliateDescription}
                    onChange={handleChange}
                    required
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Affiliate Date"
                      value={affiliateDate}
                      onChange={handleDateChange}
                      renderInput={(props) => (
                        <TextField {...props} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>

              <Button
                color="primary"
                variant="contained"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
              </Button>

              <Button
                color="secondary"
                variant="contained"
                style={{ marginLeft: "20px", marginTop: "20px" }}
                onClick={() => navigate("/dashboard/admin")}
              >
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Cancel</Span>
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default CreateAffiliate;
