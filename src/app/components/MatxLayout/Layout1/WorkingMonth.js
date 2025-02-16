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

const WorkingMonth = ({ open, onClose, onSubmit, confirmMode, accountId }) => {
  const [formData, setFormData] = useState({
    month: "",
    accountId: accountId || "", // Make sure the accountId is passed from parent
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting form data:", formData);
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
      <DialogContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {confirmMode ? (
          <label>Are you sure you want to choose this Working Month?</label>
        ) : (
          <>
            <label>Select Working Month</label>
            <Select
              name="month"
              value={formData.month}
              onChange={handleChange}
              fullWidth
            >
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          {confirmMode ? "Confirm" : "Save Changes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkingMonth;
