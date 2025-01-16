import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ResetMonth = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Reset Working Month</DialogTitle>
      <DialogContent>
        <p>Account period will reset to the previous working month!</p>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={onSubmit}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResetMonth;
