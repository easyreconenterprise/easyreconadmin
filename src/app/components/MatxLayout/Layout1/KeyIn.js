// // SwitchAccountModal.js

// import React, { useState } from 'react'
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     Button,
//     Select,
//     MenuItem,
//     InputLabel,
//     FormControl,
// } from '@mui/material'

// const SwitchAccount = ({ open, onClose, onSubmit }) => {
//     const [formData, setFormData] = useState({
//         affiliate: '',
//         domain: '',
//         account: '',
//         month: '',
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }))
//     }

//     const handleSubmit = () => {
//         onSubmit(formData)
//     }

//     return (
//         <Dialog open={open} onClose={onClose}>
//             <DialogTitle>Switch Account</DialogTitle>
//             <DialogContent>
//                 <FormControl fullWidth sx={{ marginBottom: 2 }}>
//                     <InputLabel>Affiliate</InputLabel>
//                     <Select
//                         name="affiliate"
//                         value={formData.affiliate}
//                         onChange={handleChange}
//                     >
//                         <MenuItem value="affiliate1">Affiliate 1</MenuItem>
//                         <MenuItem value="affiliate2">Affiliate 2</MenuItem>
//                     </Select>
//                 </FormControl>
//                 {/* Add similar form elements for other fields */}
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={onClose}>Cancel</Button>
//                 <Button onClick={handleSubmit} variant="contained">
//                     Save
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     )
// }

// export default SwitchAccount

import React, { useState } from "react";
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
// const KeyIn = ({ open, onClose, onSubmit }) => {
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
//     <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
//       <DialogTitle id="form-dialog-title">Key In</DialogTitle>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "0 10px",
//         }}
//       >
//         <DialogTitle id="form-dialog-title">
//           Last Transaction Date:{" "}
//         </DialogTitle>
//         <DialogTitle id="form-dialog-title">Opening Balance: </DialogTitle>
//       </div>
//       <DialogContent onClick={handleDialogContentClick}>
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Post Date</TableCell>
//                 <TableCell>Valid Date</TableCell>
//                 <TableCell>Narration</TableCell>
//                 <TableCell>Debit</TableCell>
//                 <TableCell>Credit</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {[...Array(5)].map((_, index) => (
//                 <TableRow key={index}>
//                   <TableCell>
//                     <TextField
//                       name={`postDate${index}`}
//                       onChange={handleChange}
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       name={`validDate${index}`}
//                       onChange={handleChange}
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       name={`narration${index}`}
//                       onChange={handleChange}
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       name={`debit${index}`}
//                       onChange={handleChange}
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       name={`credit${index}`}
//                       onChange={handleChange}
//                       fullWidth
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Closing Balance</TableCell>
//                 <TableCell>Total Debit</TableCell>
//                 <TableCell>Total Credit</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {[...Array(1)].map((_, index) => (
//                 <TableRow key={index}>
//                   <TableCell>
//                     <TextField
//                       name={`postDate${index}`}
//                       onChange={handleChange}
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       name={`validDate${index}`}
//                       onChange={handleChange}
//                       fullWidth
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       name={`narration${index}`}
//                       onChange={handleChange}
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

const KeyIn = ({ open, onClose, switchId }) => {
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  const [transactions, setTransactions] = useState(
    Array(5).fill({
      PostDate: "",
      ValDate: "",
      Details: "",
      Debit: "",
      Credit: "",
    })
  );

  const handleChange = (index, field, value) => {
    setTransactions((prevTransactions) => {
      const newTransactions = [...prevTransactions];
      newTransactions[index] = { ...newTransactions[index], [field]: value };
      return newTransactions;
    });
  };

  const handleSubmit = async () => {
    try {
      const formattedTransactions = transactions.map((tx) => ({
        PostDate: tx.PostDate,
        ValDate: tx.ValDate,
        Details: tx.Details,
        Debit: parseFloat(tx.Debit) || 0,
        Credit: parseFloat(tx.Credit) || 0,
      }));

      await axios.post(
        `${apiUrl}/api/manual-entry`,
        { switchId, transactions: formattedTransactions },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      console.log(localStorage.getItem("jwtToken"));

      alert("Transactions successfully saved.");
      onClose();
    } catch (error) {
      console.error("Error saving transactions:", error);
      alert("Failed to save transactions. Please try again.");
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
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Post Date</TableCell>
                <TableCell>Valid Date</TableCell>
                <TableCell>Narration</TableCell>
                <TableCell>Debit</TableCell>
                <TableCell>Credit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((tx, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      type="date"
                      value={tx.PostDate}
                      onChange={(e) =>
                        handleChange(index, "PostDate", e.target.value)
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      value={tx.ValDate}
                      onChange={(e) =>
                        handleChange(index, "ValDate", e.target.value)
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={tx.Details}
                      onChange={(e) =>
                        handleChange(index, "Details", e.target.value)
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={tx.Debit}
                      onChange={(e) =>
                        handleChange(index, "Debit", e.target.value)
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={tx.Credit}
                      onChange={(e) =>
                        handleChange(index, "Credit", e.target.value)
                      }
                      fullWidth
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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

export default KeyIn;
