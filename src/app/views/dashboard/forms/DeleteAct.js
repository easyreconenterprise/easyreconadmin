import React, { useState, useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  Box,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const DeleteAct = () => {
  const [values, setValues] = useState([]);
  const [reason, setReason] = useState("");

  const { currentSession } = useContext(SessionContext); // Context providing affiliateId and domainId
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [reason, setReason] = useState("");
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  useEffect(() => {
    const fetchAccounts = async () => {
      // Log the currentSession for debugging
      console.log("Current Session:", currentSession);

      // Check if affiliate and domain exist in currentSession
      if (!currentSession?.affiliate || !currentSession?.domain) {
        setError("Affiliate and Domain are required.");
        console.log("Missing IDs:", {
          affiliate: currentSession?.affiliate,
          domain: currentSession?.domain,
        });
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching accounts with IDs:", {
          affiliate: currentSession.affiliate,
          domain: currentSession.domain,
        });

        const response = await axios.get(`${apiUrl}/api/accounts`, {
          params: {
            affiliateId: currentSession.affiliate, // Updated field name
            domainId: currentSession.domain, // Updated field name
          },
        });

        console.log("Accounts fetched:", response.data);
        setAccounts(response.data);
      } catch (err) {
        console.error("Error fetching accounts:", err);
        setError(
          err.response?.data?.message || "Failed to fetch accounts. Try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [currentSession]);

  const handleDelete = async () => {
    if (!reason) {
      toast.error("Please select a reason for deletion");
      return;
    }

    if (selectedAccounts.length === 0) {
      toast.error("Please select at least one account to delete");
      return;
    }

    try {
      for (const accountId of selectedAccounts) {
        await axios.delete(`${apiUrl}/api/account/${accountId}`);
      }
      toast.success("Accounts deleted successfully!");
      setAccounts((prev) =>
        prev.filter((account) => !selectedAccounts.includes(account._id))
      );
      setSelectedAccounts([]);
      setReason("");
    } catch (err) {
      toast.error("Error deleting accounts. Try again.");
    }
  };

  const handleCheckboxChange = (accountId) => {
    setSelectedAccounts((prev) =>
      prev.includes(accountId)
        ? prev.filter((id) => id !== accountId)
        : [...prev, accountId]
    );
  };

  return (
    <>
      <Container>
        <label
          htmlFor="reason"
          style={{ display: "block", marginTop: "1rem", fontWeight: "800" }}
        >
          Select Reason:
        </label>
        <select
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginTop: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <option value="">Select a reason</option>
          <option value="Wrongly Created">Wrongly Created</option>
          <option value="Mistake">Mistake</option>
          <option value="No Longer Needed">No Longer Needed</option>
        </select>

        <Box style={{ marginTop: "1rem" }}>
          <label
            htmlFor="accounts"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "800",
            }}
          >
            Select Accounts to Delete:
          </label>
          <FormGroup>
            {accounts.map((account) => (
              <FormControlLabel
                key={account._id}
                control={
                  <Checkbox
                    checked={selectedAccounts.includes(account._id)}
                    onChange={() => handleCheckboxChange(account._id)}
                  />
                }
                label={account.accountTitle}
              />
            ))}
          </FormGroup>
        </Box>

        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          style={{ marginTop: "1rem" }}
        >
          Delete Selected Accounts
        </Button>

        <ToastContainer />
      </Container>
    </>
  );
};

export default DeleteAct;
