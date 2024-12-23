// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   TextField,
// } from "@mui/material";

// const WorkingMonth = ({ open, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     affiliate: "",
//     domain: "",
//     account: "",
//     month: "",
//   });

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

//   const handleDialogContentClick = (e) => {
//     // Prevent click events inside the modal content from propagating to the Dialog
//     e.stopPropagation();
//   };

//   return (
//     <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
//       <DialogTitle id="form-dialog-title">Choose Working Month</DialogTitle>
//       <DialogContent onClick={handleDialogContentClick}>
//         <label>Select Working Moth</label>

//         <Select
//           name="affiliate"
//           value={formData.affiliate}
//           onChange={handleChange}
//           fullWidth
//           autoFocus
//           placeholder="Address"
//           margin="dense"
//         >
//           <MenuItem value="affiliate1">December</MenuItem>
//           <MenuItem value="affiliate2"> January</MenuItem>
//         </Select>
//       </DialogContent>
//       <DialogActions>
//         <Button variant="outlined" color="secondary" onClick={onClose}>
//           Cancel
//         </Button>
//         <Button color="primary" onClick={handleSubmit}>Save Changes</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default WorkingMonth;
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

const WorkingMonth = ({ open, onClose, onSubmit, confirmMode }) => {
  const [formData, setFormData] = useState({
    affiliate: "",
    domain: "",
    account: "",
    month: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleDialogContentClick = (e) => {
    // Prevent click events inside the modal content from propagating to the Dialog
    e.stopPropagation();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {confirmMode ? "Confirm Working Month" : "Choose Working Month"}
      </DialogTitle>
      <DialogContent onClick={handleDialogContentClick}>
        {confirmMode ? (
          <label>Are you sure you want to choose this Working Month?</label>
        ) : (
          <>
            <label>Select Working Month</label>
            <Select
              name="affiliate"
              value={formData.affiliate}
              onChange={handleChange}
              fullWidth
              margin="dense"
            >
              <MenuItem value="affiliate1">December</MenuItem>
              <MenuItem value="affiliate2">January</MenuItem>
            </Select>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkingMonth;
