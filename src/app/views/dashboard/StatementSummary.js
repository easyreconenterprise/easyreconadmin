// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Box,
//   Grid,
// } from "@mui/material";
// import axios from "axios";
// import { SessionContext } from "app/components/MatxLayout/SwitchContext";

// const StatementSummary = () => {
//   const { currentSession } = useContext(SessionContext);
//   const [accountData, setAccountData] = useState(null);
//   const [statementData, setStatementData] = useState(null);

//   // Fetch the account details once the session is available
//   // useEffect(() => {
//   //   if (currentSession) {
//   //     const accountId = currentSession.account;

//   //     // Fetch account details
//   //     axios
//   //       .get(`http://localhost:7000/api/account/${accountId}`)
//   //       .then((response) => {
//   //         setAccountData(response.data); // Store the account details
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching account data:", error);
//   //       });

//   //     // Fetch statement data using the switch ID
//   //     axios
//   //       .get(`http://localhost:7000/api/statements/${currentSession._id}`)
//   //       .then((response) => {
//   //         setStatementData(response.data); // Store the statement data
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching statement data:", error);
//   //       });
//   //   }
//   // }, [currentSession]);
//   // useEffect(() => {
//   //   if (currentSession) {
//   //     const accountId = currentSession.account;
//   //     const token = localStorage.getItem("jwtToken"); // Assuming the token is stored in localStorage
//   //     console.log("Fetching statement with ID:", currentSession._id);

//   //     // Fetch account details
//   //     axios
//   //       .get(`http://localhost:7000/api/account/${accountId}`, {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`, // Include token in Authorization header
//   //         },
//   //       })
//   //       .then((response) => {
//   //         setAccountData(response.data); // Store the account details
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching account data:", error);
//   //       });

//   //     // Fetch statement data using the session ID
//   //     axios
//   //       .get(`http://localhost:7000/api/statements/${currentSession._id}`, {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`, // Include token in Authorization header
//   //         },
//   //       })

//   //       .then((response) => {
//   //         setStatementData(response.data); // Store the statement data
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching statement data:", error);
//   //       });
//   //   }
//   // }, [currentSession]);
//   useEffect(() => {
//     if (currentSession) {
//       const accountId = currentSession.account;
//       const token = localStorage.getItem("jwtToken");

//       // Fetch account details
//       axios
//         .get(`http://localhost:7000/api/account/${accountId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setAccountData(response.data);
//         })
//         .catch((error) => {
//           console.error(
//             "Error fetching account data:",
//             error.response.data || error.message
//           );
//         });

//       // Fetch statement data using the session ID
//       axios
//         .get(`http://localhost:7000/api/statements/${currentSession._id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setStatementData(response.data);
//         })
//         .catch((error) => {
//           console.error(
//             "Error fetching statement data:",
//             error.response.data || error.message
//           );
//         });
//     }
//   }, [currentSession]);

//   // Function to format date into Month and Year
//   const formatDate = (date) => {
//     const options = { month: "long", year: "numeric" };
//     return new Date(date).toLocaleDateString("en-US", options);
//   };

//   if (!accountData || !statementData) {
//     return <Typography>Loading data...</Typography>;
//   }

//   // Extract relevant data
//   const {
//     internalAccount,
//     shortTitle,
//     balanceAsPerLedger,
//     balanceAsPerLedgerDate,
//   } = accountData;

//   const { outstandingDebit, outstandingCredit } = statementData;

//   // Extract month and year from balanceAsPerLedgerDate
//   const formattedDate = formatDate(balanceAsPerLedgerDate);

//   return (
//     <Container maxWidth="md" style={{ marginTop: "30px" }}>
//       <Paper elevation={3} style={{ padding: "20px" }}>
//         {/* Summary Heading */}
//         <Typography variant="h4" align="center" gutterBottom>
//           Statement Summary
//         </Typography>

//         {/* Account Info Section */}
//         <Box mb={3}>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <Typography variant="h6">
//                 Account No: <strong>{internalAccount}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6">
//                 Report Month: <strong>{formattedDate.split(" ")[0]}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6">
//                 Year: <strong>{formattedDate.split(" ")[1]}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6">
//                 Short Title: <strong>{shortTitle}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6">
//                 Reconciliation Summary As At:{" "}
//                 <strong>
//                   {new Date(balanceAsPerLedgerDate).toDateString()}
//                 </strong>
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Reconciliation Table */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>
//                   <strong>Balance As Per</strong>
//                 </TableCell>
//                 <TableCell align="center">
//                   <strong>Outstanding Debit</strong>
//                 </TableCell>
//                 <TableCell align="center">
//                   <strong>Outstanding Credit</strong>
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell>{balanceAsPerLedger}</TableCell>
//                 <TableCell align="center">{outstandingDebit}</TableCell>
//                 <TableCell align="center">{outstandingCredit}</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* Proceed Button */}
//         <Box mt={4} textAlign="center">
//           <Button variant="contained" color="primary">
//             <Link
//               to="/dashboard/next-step"
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               PROCEED
//             </Link>
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default StatementSummary;
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { SessionContext } from "app/components/MatxLayout/SwitchContext"; // Ensure this context is set up properly

// const StatementSummary = () => {
//   const { currentSession } = useContext(SessionContext); // Assuming this context holds session data
//   const [accountData, setAccountData] = useState(null);
//   const [statementData, setStatementData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (currentSession) {
//       const accountId = currentSession.account;
//       const switchId = currentSession._id;
//       const token = localStorage.getItem("jwtToken"); // Assuming the token is stored in localStorage

//       if (!token) {
//         setError("Authentication token missing. Please log in again.");
//         return;
//       }

//       // Fetch account details
//       axios
//         .get(`http://localhost:7000/api/account/${accountId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setAccountData(response.data);
//         })
//         .catch((error) => {
//           if (error.response && error.response.status === 401) {
//             setError("Unauthorized. Please log in again.");
//           } else {
//             setError("Error fetching account data. Please try again later.");
//           }
//         });

//       // Fetch statement data using the switch ID
//       axios
//         .get(`http://localhost:7000/api/statements/${switchId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setStatementData(response.data);
//           setLoading(false); // Stop loading once data is fetched
//         })
//         .catch((error) => {
//           if (error.response && error.response.status === 401) {
//             setError("Unauthorized. Please log in again.");
//           } else {
//             setError("Error fetching statement data. Please try again later.");
//           }
//           setLoading(false);
//         });
//     }
//   }, [currentSession]);

//   // Function to format date into Month and Year
//   const formatDate = (date) => {
//     const options = { month: "long", year: "numeric" };
//     return new Date(date).toLocaleDateString("en-US", options);
//   };

//   // Handle loading state
//   if (loading) {
//     return <Typography>Loading data...</Typography>;
//   }

//   // Handle error state
//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   // Extract relevant data
//   if (!accountData || !statementData) {
//     return <Typography>No data available.</Typography>;
//   }

//   const {
//     internalAccount,
//     shortTitle,
//     balanceAsPerLedger,
//     balanceAsPerLedgerDate,
//   } = accountData;

//   const { outstandingDebit, outstandingCredit } = statementData;

//   // Extract month and year from balanceAsPerLedgerDate
//   const formattedDate = formatDate(balanceAsPerLedgerDate);

//   return (
//     <Container maxWidth="md" style={{ marginTop: "30px" }}>
//       <Paper elevation={3} style={{ padding: "20px" }}>
//         {/* Summary Heading */}
//         <Typography variant="h4" align="center" gutterBottom>
//           Statement Summary
//         </Typography>

//         {/* Account Info Section */}
//         <Box mb={3}>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <Typography variant="h6">
//                 Account No: <strong>{internalAccount}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6">
//                 Report Month: <strong>{formattedDate.split(" ")[0]}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6">
//                 Year: <strong>{formattedDate.split(" ")[1]}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6">
//                 Short Title: <strong>{shortTitle}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6">
//                 Reconciliation Summary As At:{" "}
//                 <strong>
//                   {new Date(balanceAsPerLedgerDate).toDateString()}
//                 </strong>
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Reconciliation Table */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>
//                   <strong>Balance As Per Ledger</strong>
//                 </TableCell>
//                 <TableCell align="center">
//                   <strong></strong>
//                 </TableCell>
//                 <TableCell align="center">
//                   <strong>{balanceAsPerLedger}</strong>
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell></TableCell>
//                 <TableCell align="center"></TableCell>
//                 <TableCell align="center"></TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>
//                   <strong>Outstanding credit in Ledger</strong>
//                 </TableCell>
//                 <TableCell align="center">
//                   <strong>Outstanding Credit in Statement</strong>
//                 </TableCell>

//               </TableRow>
//               <TableRow>
//               <TableCell>
//                 <strong>Outstanding debit in Ledger</strong>
//               </TableCell>
//               <TableCell align="center">
//                 <strong>Outstanding debit in Statement</strong>
//               </TableCell>

//             </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell>{balanceAsPerLedger}</TableCell>
//                 <TableCell align="center">{outstandingDebit}</TableCell>
//                 <TableCell align="center">{outstandingCredit}</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <strong>Balance As Per Statement</strong>
//               </TableCell>
//               <TableCell align="center">
//                 <strong></strong>
//               </TableCell>
//               <TableCell align="center">
//                 <strong>{balanceAsPerStaeennt}</strong>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell align="center"></TableCell>
//               <TableCell align="center"></TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//         <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>
//               <strong>Difference</strong>
//             </TableCell>

//           </TableRow>
//           <TableRow>

//         </TableRow>
//         </TableHead>
//         <TableBody>

//         </TableBody>
//       </Table>
//         </TableContainer>

//         {/* Proceed Button */}
//         <Box mt={4} textAlign="center">
//           <Button variant="contained" color="primary">
//             <Link
//               to="/dashboard/next-step"
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               PROCEED
//             </Link>
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };
const StatementSummary = () => {
  const { currentSession } = useContext(SessionContext); // Assuming this context holds session data
  const [accountData, setAccountData] = useState(null);
  const [statementData, setStatementData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [balanceAsPerStmt, setBalanceAsPerStmt] = useState("0.0");

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (currentSession) {
      const accountId = currentSession.account;
      const switchId = currentSession._id;
      const token = localStorage.getItem("jwtToken"); // Assuming the token is stored in localStorage

      if (!token) {
        setError("Authentication token missing. Please log in again.");
        return;
      }

      // Fetch account details
      axios
        .get(`http://localhost:7000/api/account/${accountId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setAccountData(response.data);
        })
        .catch((error) => {
          setError("Error fetching account data. Please try again later.");
        });

      // Fetch statement data using the switch ID
      axios
        .get(`http://localhost:7000/api/statements/${switchId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setStatementData(response.data);
          setLoading(false); // Stop loading once data is fetched
        })
        .catch((error) => {
          setError("Error fetching statement data. Please try again later.");
          setLoading(false);
        });
    }
  }, [currentSession]);
  useEffect(() => {
    if (currentSession?.account) {
      const fetchAccountData = async () => {
        try {
          const token = localStorage.getItem("jwtToken");
          const response = await axios.get(
            `${apiUrl}/api/account/${currentSession.account}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const accountData = response.data;
          console.log("Fetched Account Data:", accountData);

          // Set the balance from the fetched account data
          setBalanceAsPerStmt(accountData.balanceAsPerStmt || "0.0");
        } catch (error) {
          console.error("Error fetching account data:", error);
        }
      };

      fetchAccountData();
    }
  }, [currentSession]);
  // Function to format date into Month and Year
  const formatDate = (date) => {
    const options = { month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Handle loading state
  if (loading) {
    return <Typography>Loading data...</Typography>;
  }

  // Handle error state
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  // Extract relevant data
  if (!accountData || !statementData) {
    return <Typography>No data available.</Typography>;
  }

  const {
    internalAccount,
    shortTitle,
    balanceAsPerLedger,
    balanceAsPerLedgerDate,
  } = accountData;

  const {
    outstandingDebit,
    outstandingCredit,
    balanceAsPerStatement, // Assuming this is part of the statement data
    difference, // Assuming this can be calculated or is part of the data
  } = statementData;

  // Extract month and year from balanceAsPerLedgerDate
  const formattedDate = formatDate(balanceAsPerLedgerDate);

  return (
    <Container maxWidth="md" style={{ marginTop: "30px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        {/* Summary Heading */}
        <Typography variant="h4" align="center" gutterBottom>
          Statement Summary
        </Typography>

        {/* Account Info Section */}
        <Box mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">
                Account No: <strong>{internalAccount}</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                Report Month: <strong>{formattedDate.split(" ")[0]}</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                Year: <strong>{formattedDate.split(" ")[1]}</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                Short Title: <strong>{shortTitle}</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Reconciliation Summary As At:{" "}
                <strong>
                  {new Date(balanceAsPerLedgerDate).toDateString()}
                </strong>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Reconciliation Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Ledger Summary</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Statement Summary</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Difference</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Balance As Per Ledger</TableCell>
                <TableCell align="center">Balance As Per Statement</TableCell>
                <TableCell align="center"> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{balanceAsPerLedger}</TableCell>
                <TableCell align="center"> {balanceAsPerStmt}</TableCell>
                <TableCell align="center">{difference}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Detailed Outstanding Credits and Debits */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Outstanding Debit (Ledger)</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Outstanding Credit (Ledger)</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Outstanding Credit (Statement)</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{outstandingDebit}</TableCell>
                <TableCell align="center">{outstandingCredit}</TableCell>
                <TableCell align="center">{balanceAsPerStatement}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Proceed Button */}
        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary">
            <Link
              to="/dashboard/next-step"
              style={{ color: "white", textDecoration: "none" }}
            >
              PROCEED
            </Link>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StatementSummary;
