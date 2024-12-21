// import React, { useState, useEffect } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Select,
//   MenuItem,
//   FormControl,
//   Tab,
//   Tabs,
//   Typography,
//   Box,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   TextField,
// } from "@mui/material";
// import axios from "axios";

// const RestoreData = ({ open, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     affiliate: "",
//     domain: "",
//     account: "",
//     month: "",
//     startDate: "",
//     endDate: "",
//     mode: "", // ledger or statement
//   });

//   const [transactionDates, setTransactionDates] = useState([]);
//   const [activeTab, setActiveTab] = useState(0);

//   useEffect(() => {
//     // Fetch transaction dates from API when modal opens
//     if (open) {
//       axios
//         .get("/api/transaction-dates") // Replace with your API endpoint
//         .then((response) => {
//           setTransactionDates(response.data.dates);
//         })
//         .catch((error) => {
//           console.error("Error fetching transaction dates:", error);
//         });
//     }
//   }, [open]);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     onSubmit(formData);
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       aria-labelledby="restore-data-dialog-title"
//       maxWidth="md"
//       fullWidth
//     >
//       <DialogTitle id="restore-data-dialog-title">
//         Select Transaction Date
//       </DialogTitle>
//       <DialogContent
//         onClick={(e) => {
//           e.stopPropagation(); // Prevent propagation to the modal's onClose
//         }}
//       >
//         <FormControl fullWidth margin="dense">
//           <label>Select Transaction Date</label>
//           <Select
//             name="month"
//             value={formData.month}
//             onChange={handleChange}
//             fullWidth
//           >
//             {transactionDates.map((date, index) => (
//               <MenuItem key={index} value={date}>
//                 {date}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         {/* Tabs for Auto Match and Data Capture */}
//         <Tabs value={activeTab} onChange={handleTabChange} centered>
//           <Tab label="Auto Match" />
//           <Tab label="Data Capture" />
//         </Tabs>

//         <Box mt={2}>
//           {activeTab === 0 && (
//             <Typography variant="body1">
//               Auto Match: Automatically restore data for the selected date.
//             </Typography>
//           )}

//           {activeTab === 1 && (
//             <Box>
//               <Typography variant="body1">Data Capture</Typography>
//               <RadioGroup
//                 name="mode"
//                 value={formData.mode}
//                 onChange={handleChange}
//               >
//                 <FormControlLabel
//                   value="ledger"
//                   control={<Radio />}
//                   label="Ledger Data Upload (Between Selected Dates)"
//                 />
//                 <FormControlLabel
//                   value="statement"
//                   control={<Radio />}
//                   label="Statement Data Upload (Between Selected Dates)"
//                 />
//               </RadioGroup>

//               {/* Date Pickers for Data Capture
//               <Box display="flex" gap={2} mt={2}>
//                 <TextField
//                   type="date"
//                   label="Start Date"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   fullWidth
//                 />
//                 <TextField
//                   type="date"
//                   label="End Date"
//                   name="endDate"
//                   value={formData.endDate}
//                   onChange={handleChange}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   fullWidth
//                 />
//               </Box>*/}
//             </Box>
//           )}
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button variant="outlined" color="secondary" onClick={onClose}>
//           Cancel
//         </Button>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Restore Data
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default RestoreData;

import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  TextField,
  Radio,
} from "@mui/material";
import axios from "axios";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

const RestoreData = ({ open, onClose, onSubmit }) => {
  const { currentSession } = useContext(SessionContext);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    mode: "",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    console.log("Current session:", currentSession);
  }, [currentSession]);

  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async () => {
  //   if (!formData.mode || !formData.startDate || !formData.endDate) {
  //     alert("Please fill out all fields and select a mode.");
  //     return;
  //   }
  //   if (new Date(formData.startDate) > new Date(formData.endDate)) {
  //     alert("Start date cannot be after end date.");
  //     return;
  //   }

  //   const payload = {
  //     switchId: currentSession?._id,
  //     uploadedAt: formData.startDate,
  //   };

  //   const endpoint =
  //     formData.mode === "ledger"
  //       ? `${apiUrl}/api/remove-uploaded-file`
  //       : `${apiUrl}/api/remove-uploaded-file-stmt`;

  //   try {
  //     setLoading(true);
  //     const { data } = await axios.post(endpoint, payload);
  //     alert(data.message || "Data restored successfully.");
  //     onSubmit(data);
  //     onClose();
  //   } catch (error) {
  //     console.error("Error restoring data:", error);
  //     alert(
  //       error.response?.data?.error || "An error occurred while restoring data."
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async () => {
    if (!formData.mode || !formData.startDate) {
      alert("Please fill out all fields and select a mode.");
      return;
    }
    if (
      formData.endDate &&
      new Date(formData.startDate) > new Date(formData.endDate)
    ) {
      alert("Start date cannot be after end date.");
      return;
    }

    const payload = {
      switchId: currentSession?._id,
      startDate: formData.startDate,
      endDate: formData.endDate || null, // Send null if endDate is not provided
    };

    const endpoint =
      formData.mode === "ledger"
        ? `${apiUrl}/api/remove-uploaded-file`
        : `${apiUrl}/api/remove-uploaded-file-stmt`;

    try {
      setLoading(true);
      const { data } = await axios.post(endpoint, payload);
      alert(data.message || "Data restored successfully.");
      onSubmit(data);
      onClose();
    } catch (error) {
      console.error("Error restoring data:", error);
      alert(
        error.response?.data?.error || "An error occurred while restoring data."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Auto Match" />
          <Tab label="Data Capture" />
        </Tabs>
        <Box mt={2}>
          {activeTab === 1 && (
            <>
              <RadioGroup
                name="mode"
                value={formData.mode}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="ledger"
                  control={<Radio />}
                  label="Ledger Data Upload (Start Date)"
                />
                <FormControlLabel
                  value="statement"
                  control={<Radio />}
                  label="Statement Data Upload (Start Date)"
                />
              </RadioGroup>
              <Box display="flex" gap={2} mt={2}>
                <TextField
                  type="date"
                  label="Start Date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
                <TextField
                  type="date"
                  label="End Date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Box>
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit} disabled={loading}>
          {loading ? "Processing..." : "Restore Data"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RestoreData;
