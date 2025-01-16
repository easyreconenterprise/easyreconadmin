import React, { useState } from "react";
import { styled } from "@mui/material/styles";
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

const AgSum = () => {
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
        <Box
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ flex: 1 }}>
            <label
              htmlFor="affiliates"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "800",
              }}
            >
              Select Affiliate
            </label>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.includes("Parkway FFLIARE")}
                    onChange={(e) =>
                      handleAffiliateChange(e, "Parkway FFLIARE")
                    }
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

          <Box style={{ flex: 1 }}>
            <label
              htmlFor="domains"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "800",
              }}
            >
              Select Domain
            </label>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.includes("Parkway FFLIARE")}
                    onChange={(e) =>
                      handleAffiliateChange(e, "Parkway FFLIARE")
                    }
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
        </Box>
        <br></br>
        <br></br>
        <Box
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ flex: 1 }}>
            <label
              htmlFor="accounts"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "800",
              }}
            >
              Select Account
            </label>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.includes("Parkway FFLIARE")}
                    onChange={(e) =>
                      handleAffiliateChange(e, "Parkway FFLIARE")
                    }
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

          <Box style={{ flex: 1 }}>
            {/* You can add another section here for another "side by side" content */}

            {/* You can add any content here */}
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={handleDelete}
          style={{ marginTop: "1rem" }}
        >
          Proceed
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

export default AgSum;
