import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import { ToastContainer, toast } from "react-toastify";
import {
  Box,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const MassChange = () => {
  const [values, setValues] = useState([]);
  const [reason, setReason] = useState("");

  const handleAffiliateChange = (event, account) => {
    if (event.target.checked) {
      setValues((prev) => [...prev, account]);
    } else {
      setValues((prev) => prev.filter((item) => item !== account));
    }
  };

  const handleDelete = () => {
    if (!reason) {
      toast.error("Please select a reason for deletion");
      return;
    }

    if (values.length === 0) {
      toast.error("Please select at least one account to delete");
      return;
    }

    // Simulate delete request
    toast.success("Accounts deleted successfully!");
  };

  return (
    <>
      <Container>
        <Box style={{ fontWeight: "800" }}>Mass Change Working Month</Box>
        <br></br>

        <Box style={{ marginTop: "1rem" }}>
          <label
            htmlFor="accounts"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "800",
            }}
          >
            Select Account(s)
          </label>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.includes("Parkway FFLIARE")}
                  onChange={(e) => handleAffiliateChange(e, "Parkway FFLIARE")}
                />
              }
              label="Parkway FFLIARE"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.includes("Administrator")}
                  onChange={(e) => handleAffiliateChange(e, "Administrator")}
                />
              }
              label="Administrator"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.includes("Supervisor")}
                  onChange={(e) => handleAffiliateChange(e, "Supervisor")}
                />
              }
              label="Supervisor"
            />
          </FormGroup>
        </Box>
        <Button
          variant="contained"
          onClick={handleDelete}
          style={{ marginTop: "1rem" }}
        >
          Change
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          style={{ marginTop: "1rem" }}
        >
          Cancel
        </Button>

        <ToastContainer />
      </Container>
    </>
  );
};

export default MassChange;
