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
//     TextField,
// } from '@mui/material'

// const SwitchAccount = ({ open, onClose, onSubmit }) => {
//     const [formData, setFormData] = useState({
//         affiliate: '',
//         domain: '',
//         account: '',
//         month: '',
//     })
//     const [affiliates, setAffiliates] = useState([]);
//     const [domains, setDomains] = useState([]);
//     const [accounts, setAccounts] = useState([]);
//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }))
//     }

//     useEffect(() => {
//         const fetchAffiliates = async () => {
//           try {
//             const response = await axios.get(`${apiUrl}/api/affiliates`, {
//               headers: {
//                 Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//               },
//             });
//             setAffiliates(response.data);
//           } catch (err) {
//             console.error("Error fetching affiliates:", err);
//             toast.error("Error fetching affiliates");
//           }
//         };
//         fetchAffiliates();
//       }, [apiUrl]);

//       useEffect(() => {
//         const fetchDomains = async () => {
//           if (formData.affiliateId) {
//             try {
//               const token = localStorage.getItem("jwtToken");
//               const response = await axios.get(
//                 `${apiUrl}/api/domains/${formData.affiliateId}`,
//                 {
//                   headers: {
//                     Authorization: `Bearer ${token}`, // Ensure this line includes the correct token
//                   },
//                 }
//               );
//               setDomains(response.data);
//             } catch (err) {
//               console.error("Error fetching domains:", err);
//               toast.error("Error fetching domains");
//             }
//           }
//         };
//         fetchDomains();
//       }, [formData.affiliateId, apiUrl]);

//     const handleSubmit = () => {
//         onSubmit(formData)
//     }

//     const handleDialogContentClick = (e) => {
//         // Prevent click events inside the modal content from propagating to the Dialog
//         e.stopPropagation()
//     }

//     return (
//         <Dialog
//             open={open}
//             onClose={onClose}
//             aria-labelledby="form-dialog-title"
//         >
//             <DialogTitle id="form-dialog-title">Switch Account</DialogTitle>
//             <DialogContent onClick={handleDialogContentClick}>
//                 <label>Select Affliate</label>

//                 <TextField
//                 select
//                 label="Affiliate"
//                 variant="outlined"
//                 name="affiliateId"
//                 value={formData.affiliateId}
//                 onChange={handleChange}
//                 required
//                 SelectProps={{ native: true }}
//               >
//                 <option value="" disabled>
//                   Select an Affiliate
//                 </option>
//                 {affiliates.map((affiliate) => (
//                   <option key={affiliate._id} value={affiliate._id}>
//                     {affiliate.affiliateName}{" "}
//                     {/* Adjust according to the affiliate object structure */}
//                   </option>
//                 ))}
//               </TextField>
//                 <label>CHoose Domain</label>

//                 <TextField
//                 select
//                 label="Domain"
//                 variant="outlined"
//                 name="domainId"
//                 value={formData.domainId}
//                 onChange={handleChange}
//                 required
//                 SelectProps={{ native: true }}
//               >
//                 <option value="" disabled>
//                   Select a Domain
//                 </option>
//                 {domains.map((domain) => (
//                   <option key={domain._id} value={domain._id}>
//                     {domain.domainName}{" "}
//                     {/* Adjust according to the affiliate object structure */}
//                   </option>
//                 ))}
//               </TextField>
//                 <label>Select Account</label>

//                 <TextField
//                 select
//                 label="Account"
//                 variant="outlined"
//                 name="accountId"
//                 value={formData.accountId}
//                 onChange={handleChange}
//                 required
//                 SelectProps={{ native: true }}
//               >
//                 <option value="" disabled>
//                   Select an Account
//                 </option>
//                 {accounts.map((account) => (
//                   <option key={account._id} value={account._id}>
//                     {account.accountTitle}{" "}
//                     {/* Adjust according to the affiliate object structure */}
//                   </option>
//                 ))}
//               </TextField>
//                 <label>Choose Working Month</label>

//                 <Select
//                     name="affiliate"
//                     value={formData.affiliate}
//                     onChange={handleChange}
//                     fullWidth
//                     autoFocus
//                     placeholder="Address"
//                     margin="dense"
//                 >
//                     <MenuItem value="affiliate1">Affiliate 1</MenuItem>
//                     <MenuItem value="affiliate2">Affiliate 2</MenuItem>
//                 </Select>
//             </DialogContent>
//             <DialogActions>
//                 <Button variant="outlined" color="secondary" onClick={onClose}>
//                     Cancel
//                 </Button>
//                 <Button color="primary">Save Changes</Button>
//             </DialogActions>
//         </Dialog>
//     )
// }

// export default SwitchAccount

import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  styled,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";
import axios from "axios";
import { Breadcrumb, SimpleCard } from "app/components";
import { toast } from "react-toastify"; // Assuming you use react-toastify for notifications
import { SessionContext } from "../SwitchContext";
import { Span } from "app/components/Typography";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const SwitchAccount = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    affiliateId: "",
    domainId: "",
    accountId: "",
    month: "",
  });
  const [affiliates, setAffiliates] = useState([]);
  const [domains, setDomains] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [workingMonths, setWorkingMonths] = useState([]);
  const { switchSession } = useContext(SessionContext); // Access the switchSession function

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  // Handle form submission to switch the session

  const formatMonthYear = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const handleSubmit = async () => {
    console.log("Form data before submission:", formData);
    if (
      !formData.affiliateId ||
      !formData.domainId ||
      !formData.accountId ||
      !formData.month
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      await switchSession(formData); // Call the switch session function with the form data
      console.log("Session switched successfully");
      onClose(); // Close the dialog
    } catch (error) {
      console.error("Error switching session:", error);
    }
  };

  // Fetch all affiliates
  useEffect(() => {
    const fetchAffiliates = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/affiliates`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
        setAffiliates(response.data);
      } catch (err) {
        console.error("Error fetching affiliates:", err);
        toast.error("Error fetching affiliates");
      }
    };
    fetchAffiliates();
  }, [apiUrl]);

  // Fetch domains for the selected affiliate
  useEffect(() => {
    const fetchDomains = async () => {
      if (formData.affiliateId) {
        try {
          const token = localStorage.getItem("jwtToken");
          const response = await axios.get(
            `${apiUrl}/api/domains/${formData.affiliateId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setDomains(response.data);
        } catch (err) {
          console.error("Error fetching domains:", err);
          toast.error("Error fetching domains");
        }
      }
    };
    fetchDomains();
  }, [formData.affiliateId, apiUrl]);

  // Fetch accounts for the selected domain
  // useEffect(() => {
  //   const fetchAccounts = async () => {
  //     if (formData.domainId) {
  //       try {
  //         const token = localStorage.getItem("jwtToken");
  //         const response = await axios.get(
  //           `${apiUrl}/api/accounts/${formData.domainId}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         setAccounts(response.data);
  //       } catch (err) {
  //         console.error("Error fetching accounts:", err);
  //         toast.error("Error fetching accounts");
  //       }
  //     }
  //   };
  //   fetchAccounts();
  // }, [formData.domainId, apiUrl]);
  // useEffect(() => {
  //   const fetchAccounts = async () => {
  //     if (formData.domainId && formData.selectedMonth) {
  //       try {
  //         const token = localStorage.getItem("jwtToken");
  //         const response = await axios.get(
  //           `${apiUrl}/api/accounts/${formData.domainId}?month=${formData.selectedMonth}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         setAccounts(response.data);
  //       } catch (err) {
  //         console.error("Error fetching accounts:", err);
  //         toast.error("Error fetching accounts");
  //       }
  //     }
  //   };
  //   fetchAccounts();
  // }, [formData.domainId, formData.selectedMonth, apiUrl]);
  useEffect(() => {
    const fetchAccounts = async () => {
      if (formData.domainId) {
        try {
          const response = await axios.get(
            `${apiUrl}/api/accounts/${formData.domainId}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              },
            }
          );
          setAccounts(response.data);
        } catch (err) {
          console.error("Error fetching accounts:", err);
          toast.error("Error fetching accounts");
        }
      }
    };
    fetchAccounts();
  }, [formData.domainId, apiUrl]);
  // useEffect(() => {
  //   if (formData.accountId) {
  //     const selectedAccount = accounts.find(
  //       (account) => account._id === formData.accountId
  //     );
  //     if (selectedAccount && selectedAccount.balanceAsPerLedgerDate) {
  //       const balanceDate = selectedAccount.balanceAsPerLedgerDate;

  //       // Safely accessing $date and $numberLong
  //       let timestamp = null;
  //       if (balanceDate.$date && balanceDate.$date.$numberLong) {
  //         timestamp = parseInt(balanceDate.$date.$numberLong, 10); // Extract timestamp from $numberLong
  //       } else if (
  //         typeof balanceDate === "string" ||
  //         typeof balanceDate === "number"
  //       ) {
  //         timestamp = new Date(balanceDate).getTime(); // In case it's a regular date string or timestamp
  //       }

  //       if (timestamp) {
  //         const month = formatMonthYear(timestamp);
  //         setFormData((prevFormData) => ({
  //           ...prevFormData,
  //           month, // Set the extracted month in the formData
  //         }));
  //       }
  //     }
  //   }
  // }, [formData.accountId, accounts]);

  // Fetch working months for the selected account
  useEffect(() => {
    const fetchWorkingMonths = async () => {
      if (formData.accountId) {
        try {
          const response = await axios.get(
            `${apiUrl}/api/accounts/${formData.accountId}/months`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              },
            }
          );
          setWorkingMonths(response.data); // Set the working months
        } catch (err) {
          console.error("Error fetching working months:", err);
          toast.error("Error fetching working months");
        }
      }
    };
    fetchWorkingMonths();
  }, [formData.accountId, apiUrl]);

  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard>
          <Dialog open={open} onClose={onClose}>
            <DialogTitle>Switch Account</DialogTitle>

            <label>Select Affliate</label>
            <DialogContent>
              {/* Affiliate Selection */}
              <TextField
                select
                label="Affiliate"
                name="affiliateId"
                value={formData.affiliateId}
                style={{ border: "0.5px solid black" }}
                onChange={handleChange}
                fullWidth
                required
              >
                {affiliates.map((affiliate) => (
                  <MenuItem key={affiliate._id} value={affiliate._id}>
                    {affiliate.affiliateName}{" "}
                    {/* Assuming affiliate has a 'name' property */}
                  </MenuItem>
                ))}
              </TextField>
              <label>Select Domain</label>
              {/* Domain Selection */}
              <TextField
                select
                label="Domain"
                name="domainId"
                value={formData.domainId}
                onChange={handleChange}
                style={{ border: "0.5px solid black" }}
                fullWidth
                required
                disabled={!formData.affiliateId} // Disable if no affiliate is selected
              >
                {domains.map((domain) => (
                  <MenuItem key={domain._id} value={domain._id}>
                    {domain.domainName}{" "}
                    {/* Assuming domain has a 'name' property */}
                  </MenuItem>
                ))}
              </TextField>
              <label>Select Account</label>
              {/* Account Selection */}
              <TextField
                select
                label="Account"
                name="accountId"
                style={{ border: "0.5px solid black" }}
                value={formData.accountId}
                onChange={handleChange}
                fullWidth
                required
                disabled={!formData.domainId} // Disable if no domain is selected
              >
                {/*} {accounts.map((account) => (
                  <MenuItem key={account._id} value={account._id}>
                    {account.accountTitle}{" "}
                 
                  </MenuItem>
                ))}*/}

                {accounts
                  .filter((account) => !account.parentAccountId) // Filter for parent accounts
                  .map((account) => (
                    <MenuItem key={account._id} value={account._id}>
                      {account.accountTitle}
                    </MenuItem>
                  ))}
              </TextField>

              {/*<label>Internal Working Month</label>
              <TextField
                label="Working Month"
                name="month"
                style={{ border: "0.5px solid black" }}
                value={formData.month}
                onChange={handleChange}
                fullWidth
                required
                disabled
              />*/}

              <label>Working Month</label>
              <TextField
                select
                label="Working Month"
                name="month"
                value={formData.month}
                onChange={handleChange}
                fullWidth
                required
                disabled={!workingMonths.length}
              >
                {workingMonths.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                color="primary"
                variant="contained"
                onClick={handleSubmit}
                style={{
                  marginTop: "50px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Select
              </Button>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={onClose}
                style={{
                  marginTop: "50px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Cancel
              </Button>
            </DialogContent>
          </Dialog>
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default SwitchAccount;
