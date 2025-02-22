// import React, { useState, useContext } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Select,
//   MenuItem,
//   InputLabel,
//   TableBody,
//   TableRow,
//   TableCell,
//   Table,
//   TableHead,
//   TableContainer,
//   FormControl,
//   TextField,
// } from "@mui/material";
// import axios from "axios";
// import { SessionContext } from "../SwitchContext";

// const KeyIn = ({ open, onClose }) => {
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const [transactions, setTransactions] = useState(
//     Array(5).fill({
//       PostDate: "",
//       ValDate: "",
//       Details: "",
//       Debit: "",
//       Credit: "",
//       USID: "",
//     })
//   );
//   const { sessions, currentSession, setCurrentSession, switchSession } =
//     useContext(SessionContext);

//   const handleChange = (index, field, value) => {
//     setTransactions((prevTransactions) => {
//       const newTransactions = [...prevTransactions];
//       newTransactions[index] = { ...newTransactions[index], [field]: value };
//       return newTransactions;
//     });
//   };

//   // const handleSubmit = async () => {
//   //   try {
//   //     console.log("Submitting transactions...");

//   //     const sessionId = currentSession?._id || currentSession?.id;

//   //     if (!sessionId) {
//   //       console.log("No valid session found:", currentSession); // Debugging
//   //       alert("No valid session found. Please select a session.");
//   //       return;
//   //     }

//   //     if (!sessionId) {
//   //       alert("No valid session found. Please select a session.");
//   //       return;
//   //     }

//   //     const formattedTransactions = transactions.map((tx) => ({
//   //       PostDate: tx.PostDate,
//   //       ValDate: tx.ValDate,
//   //       Details: tx.Details,
//   //       Debit: parseFloat(tx.Debit) || 0,
//   //       Credit: parseFloat(tx.Credit) || 0,
//   //       USID: tx.USID,
//   //     }));

//   //     const token = localStorage.getItem("jwtToken");

//   //     axios
//   //       .post(url, data)
//   //       .then((response) => console.log("✅ Response:", response))
//   //       .catch((error) => console.error("❌ Error:", error));

//   //     const response = await axios.post(
//   //       `${apiUrl}/api/manual-entry-led`,
//   //       { sessionId, transactions: formattedTransactions }, // Replaced `switchId` with `sessionId`
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //           "Content-Type": "application/json",
//   //         },
//   //       }
//   //     );
//   //     console.log("Sending Authorization Header:", {
//   //       Authorization: `Bearer ${token}`,
//   //     });

//   //     console.log("📌 Sending request to:", url);

//   //     console.log("API Response:", response.data);
//   //     alert("Transactions successfully saved.");
//   //     onClose();
//   //   } catch (error) {
//   //     console.error("Error saving transactions:", error);
//   //     alert("Failed to save transactions. Please try again.");
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting transactions...");

//       const sessionId = currentSession?._id || currentSession?.id;
//       if (!sessionId) {
//         console.log("No valid session found:", currentSession);
//         alert("No valid session found. Please select a session.");
//         return;
//       }

//       const formattedTransactions = transactions.map((tx) => ({
//         PostDate: tx.PostDate,
//         ValDate: tx.ValDate,
//         Details: tx.Details,
//         Debit: parseFloat(tx.Debit) || 0,
//         Credit: parseFloat(tx.Credit) || 0,
//         USID: tx.USID,
//       }));

//       const token = localStorage.getItem("jwtToken");
//       const apiUrl = "http://localhost:7000/api/upload"; // Ensure this is correct

//       console.log("🔗 API URL:", apiUrl);
//       console.log("🔑 Authorization Header:", {
//         Authorization: `Bearer ${token}`,
//       });

//       const response = await axios.post(
//         apiUrl,
//         { sessionId, transactions: formattedTransactions },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("✅ API Response:", response.data);
//       alert("Transactions successfully saved.");
//       onClose();
//     } catch (error) {
//       console.error("❌ Error saving transactions:", error);
//       alert("Failed to save transactions. Please try again.");
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
//       <DialogTitle>Key In Transactions</DialogTitle>
//       <DialogContent
//         onClick={(e) => {
//           e.stopPropagation();
//         }}
//       >
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Post Date</TableCell>
//                 <TableCell>Valid Date</TableCell>
//                 <TableCell>Narration</TableCell>
//                 <TableCell>Debit</TableCell>
//                 <TableCell>Credit</TableCell>
//                 <TableCell>USID</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {transactions.map((tx, index) => (
//                 <TableRow key={index}>
//                   <TableCell>
//                     <TextField
//                       type="date"
//                       value={tx.PostDate}
//                       onChange={(e) =>
//                         handleChange(index, "PostDate", e.target.value)
//                       }
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       type="date"
//                       value={tx.ValDate}
//                       onChange={(e) =>
//                         handleChange(index, "ValDate", e.target.value)
//                       }
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       value={tx.Details}
//                       onChange={(e) =>
//                         handleChange(index, "Details", e.target.value)
//                       }
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       type="number"
//                       value={tx.Debit}
//                       onChange={(e) =>
//                         handleChange(index, "Debit", e.target.value)
//                       }
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       type="number"
//                       value={tx.Credit}
//                       onChange={(e) =>
//                         handleChange(index, "Credit", e.target.value)
//                       }
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       type="number"
//                       value={tx.USID}
//                       onChange={(e) =>
//                         handleChange(index, "USID", e.target.value)
//                       }
//                       fullWidth
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </DialogContent>
//       <DialogActions>
//         <Button variant="outlined" color="secondary" onClick={onClose}>
//           Cancel
//         </Button>
//         <Button color="primary" onClick={handleSubmit}>
//           Save Changes
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default KeyIn;
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

const KeyIn = ({ open, onClose }) => {
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
        `${apiUrl}/api/manual-entry-led`,
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

export default KeyIn;
