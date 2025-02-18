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

const KeyIn = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    affiliate: "",
    domain: "",
    account: "",
    month: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleDialogContentClick = (e) => {
    // Prevent click events inside the modal content from propagating to the Dialog
    e.stopPropagation();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle id="form-dialog-title">Key In</DialogTitle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <DialogTitle id="form-dialog-title">
          Last Transaction Date:{" "}
        </DialogTitle>
        <DialogTitle id="form-dialog-title">Opening Balance: </DialogTitle>
      </div>
      <DialogContent onClick={handleDialogContentClick}>
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
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      name={`postDate${index}`}
                      onChange={handleChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name={`validDate${index}`}
                      onChange={handleChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name={`narration${index}`}
                      onChange={handleChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name={`debit${index}`}
                      onChange={handleChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name={`credit${index}`}
                      onChange={handleChange}
                      fullWidth
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Closing Balance</TableCell>
                <TableCell>Total Debit</TableCell>
                <TableCell>Total Credit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(1)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      name={`postDate${index}`}
                      onChange={handleChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name={`validDate${index}`}
                      onChange={handleChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name={`narration${index}`}
                      onChange={handleChange}
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
