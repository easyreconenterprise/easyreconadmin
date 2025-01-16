import React, { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import CreateAssign from "./CreateAssign";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AccountTitle = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelect = (user) => {
    setSelectedUser(user);
  };

  // Sample data for table
  const accounts = [
    {
      accountCode: "AC123",
      bankName: "First Bank",
      foreignNo: "12345",
      lastLedger: "2024-01-01",
      lastStatement: "2024-01-10",
      lastRecord: "2024-01-15",
      ads: "Active",
      acw: "Completed",
    },
    {
      accountCode: "AC456",
      bankName: "Zenith Bank",
      foreignNo: "67890",
      lastLedger: "2024-01-05",
      lastStatement: "2024-01-12",
      lastRecord: "2024-01-20",
      ads: "Inactive",
      acw: "Pending",
    },
    {
      accountCode: "AC456",
      bankName: "Zenith Bank",
      foreignNo: "67890",
      lastLedger: "2024-01-05",
      lastStatement: "2024-01-12",
      lastRecord: "2024-01-20",
      ads: "Inactive",
      acw: "Pending",
    },
    {
      accountCode: "AC456",
      bankName: "Zenith Bank",
      foreignNo: "67890",
      lastLedger: "2024-01-05",
      lastStatement: "2024-01-12",
      lastRecord: "2024-01-20",
      ads: "Inactive",
      acw: "Pending",
    },
    {
      accountCode: "AC456",
      bankName: "Zenith Bank",
      foreignNo: "67890",
      lastLedger: "2024-01-05",
      lastStatement: "2024-01-12",
      lastRecord: "2024-01-20",
      ads: "Inactive",
      acw: "Pending",
    },
    {
      accountCode: "AC456",
      bankName: "Zenith Bank",
      foreignNo: "67890",
      lastLedger: "2024-01-05",
      lastStatement: "2024-01-12",
      lastRecord: "2024-01-20",
      ads: "Inactive",
      acw: "Pending",
    },
    {
      accountCode: "AC456",
      bankName: "Zenith Bank",
      foreignNo: "67890",
      lastLedger: "2024-01-05",
      lastStatement: "2024-01-12",
      lastRecord: "2024-01-20",
      ads: "Inactive",
      acw: "Pending",
    },
    {
      accountCode: "AC456",
      bankName: "Zenith Bank",
      foreignNo: "67890",
      lastLedger: "2024-01-05",
      lastStatement: "2024-01-12",
      lastRecord: "2024-01-20",
      ads: "Inactive",
      acw: "Pending",
    },
  ];

  return (
    <>
      <Container>
        <h3>Account Title</h3>

        <table className="table">
          <thead>
            <tr style={{ textDecoration: "underline 2px" }}>
              <th style={{ fontSize: "15px" }}>Account Code</th>
              <th style={{ fontSize: "15px" }}>Bank Name</th>
              <th style={{ fontSize: "15px" }}>Foreign No</th>
              <th style={{ fontSize: "15px" }}>Last Ledger</th>
              <th style={{ fontSize: "15px" }}>Last Statement</th>
              <th style={{ fontSize: "15px" }}>Last Record</th>
              <th style={{ fontSize: "15px" }}>ADS</th>
              <th style={{ fontSize: "15px" }}>ACW</th>
              <th style={{ fontSize: "15px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <td>{account.accountCode}</td>
                <td>{account.bankName}</td>
                <td>{account.foreignNo}</td>
                <td>{account.lastLedger}</td>
                <td>{account.lastStatement}</td>
                <td>{account.lastRecord}</td>
                <td>{account.ads}</td>
                <td>{account.acw}</td>
                <td>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => handleSelect(account)}
                  >
                    Select
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedUser && (
          <CreateAssign
            user={selectedUser}
            closeModal={() => setSelectedUser(null)}
          />
        )}

        <ToastContainer />
      </Container>
    </>
  );
};

export default AccountTitle;
