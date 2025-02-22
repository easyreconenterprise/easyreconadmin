import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  InputLabel,
  TableBody,
  TableRow,
  TableCell,
  Table,
  TableHead,
  TableContainer,
  FormControl,
  TextField,
} from "@mui/material";
import axios from "axios";
import { SessionContext } from "../SwitchContext";

const KeyInStmt = ({ open, onClose }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { currentSession } = useContext(SessionContext);
  const [transactions, setTransactions] = useState(
    Array(5).fill({
      PostDate: "",
      ValDate: "",
      Details: "",
      Debit: "",
      Credit: "",
      USID: "",
    })
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (index, field, value) => {
    setTransactions((prevTransactions) => {
      const newTransactions = [...prevTransactions];
      newTransactions[index] = { ...newTransactions[index], [field]: value };
      return newTransactions;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Submitting transactions...");
      const switchId = currentSession?._id || currentSession?.id;
      const token = localStorage.getItem("jwtToken");

      const response = await axios.post(
        `${apiUrl}/api/manual-entry-stmt`,
        {
          transactions,
          switchId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      alert("Transactions successfully saved!");
      onClose();
    } catch (error) {
      console.error("Error submitting transactions:", error);
      alert("Failed to save transactions. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Key In Transactions</DialogTitle>
      <DialogContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form onSubmit={handleSubmit}>
          {transactions.map((transaction, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
            >
              <TextField
                label="Post Date"
                type="date"
                value={transaction.PostDate}
                onChange={(e) =>
                  handleChange(index, "PostDate", e.target.value)
                }
                fullWidth
              />
              <TextField
                label="Val Date"
                type="date"
                value={transaction.ValDate}
                onChange={(e) => handleChange(index, "ValDate", e.target.value)}
                fullWidth
              />
              <TextField
                label="Details"
                value={transaction.Details}
                onChange={(e) => handleChange(index, "Details", e.target.value)}
                fullWidth
              />
              <TextField
                label="Debit"
                type="number"
                value={transaction.Debit}
                onChange={(e) => handleChange(index, "Debit", e.target.value)}
                fullWidth
              />
              <TextField
                label="Credit"
                type="number"
                value={transaction.Credit}
                onChange={(e) => handleChange(index, "Credit", e.target.value)}
                fullWidth
              />
              <TextField
                label="USID"
                value={transaction.USID}
                onChange={(e) => handleChange(index, "USID", e.target.value)}
                fullWidth
              />
            </div>
          ))}
          <DialogActions>
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default KeyInStmt;
