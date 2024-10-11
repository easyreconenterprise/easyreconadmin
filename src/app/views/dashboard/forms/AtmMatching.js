// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import { MenuItem, Modal, Select, Stack } from "@mui/material";
// import { Box } from "@mui/system";
// import { Breadcrumb, SimpleCard } from "app/components";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import {
//   Button,
//   Checkbox,
//   Grid,
//   Icon,
//   DialogTitle,
//   styled,
//   IconButton,
//   InputAdornment,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
// import { Span } from "app/components/Typography";
// import { useContext, useEffect, useState } from "react";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import SimpleTable from "app/views/material-kit/tables/SimpleTable";
// import { useData } from "../DataContext";
// import { useMatchedItems } from "../MatchedItemsContext";
// import { SessionContext } from "app/components/MatxLayout/SwitchContext";
// import { useRule } from "../pages/RuleContext";
// const Container = styled("div")(({ theme }) => ({
//   margin: "30px",
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
//   "& .breadcrumb": {
//     marginBottom: "30px",
//     [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
//   },
// }));

// const TextField = styled(TextValidator)(() => ({
//   width: "100%",
//   marginBottom: "16px",
// }));
// const initialState = {
//   studentName: "",
//   classname: "",
//   address: "",
//   parentsName: "",
//   phone: "",

//   email: "",
//   username: "",
//   date: "",
//   password: "",
// };
// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const AtmMatching = () => {
//   const [state, setState] = useState({ date: new Date() });
//   const [states, setStates] = useState({
//     exactMatch: false,
//     probableMatch: false,
//     similarDetails: false,
//     manyToMany: false,
//     userDefined: false,
//   });
//   const { rules, setRules, isRuleSet } = useRule(); // Access rule state and validation

//   const { currentSession } = useContext(SessionContext);
//   console.log("Current Session:", currentSession);
//   // const [isRuleSet, setIsRuleSet] = useState(false); // Track if rule is set

//   const apiUrl = process.env.REACT_APP_API_URL;
//   const { matchedItems, setMatchedItems } = useMatchedItems() || {
//     matchedItems: { exact: [], probable: [] },
//     setMatchedItems: () => {},
//   };

//   const [open, setOpen] = useState(false);
//   const { ledgerData, statementData } = useData();

//   // const handleChange = (name) => (event) => {
//   //   setStates({ ...states, [name]: event.target.checked });

//   // };
//   const fetchLastRule = async () => {
//     try {
//       const response = await axios.get(`${apiUrl}/api/rules/last`);
//       if (response.data.success) {
//         const fetchedRules = response.data.data;
//         setRules(fetchedRules); // Set the fetched rule into state
//         setStates({
//           exactMatch: fetchedRules.exactMatch,
//           probableMatch: fetchedRules.probableMatch,
//           similarDetails: fetchedRules.similarDetails,
//           manyToMany: fetchedRules.manyToMany,
//           userDefined: fetchedRules.userDefined,
//         }); // Update checkboxes based on the fetched rule

//         console.error("This is the last rule:", response);
//       } else {
//         alert("No rule found in the database.");
//       }
//     } catch (error) {
//       console.error("Error fetching last rule:", error);
//       alert("Could not fetch the last rule.");
//     }
//   };
//   useEffect(() => {
//     fetchLastRule(); // Fetch the last rule when the component mounts
//     console.log("Rule fetched and set:", rules);
//   }, []);
//   // const handleChange = (name) => (event) => {
//   //   const updatedStates = { ...states, [name]: event.target.checked };
//   //   setStates(updatedStates);
//   // };

//   const handleChange = (name) => (event) => {
//     setRules((prevRules) => ({
//       ...prevRules,
//       [name]: event.target.checked,
//     }));
//   };

//   // const handleMatch = () => {
//   //   if (isRuleSet) {
//   //     // Execute matching logic here
//   //     const matched = [];
//   //     const probableMatched = [];

//   //     ledgerData.forEach((ledgerItem) => {
//   //       statementData.forEach((statementItem) => {
//   //         if (
//   //           states.exactMatch &&
//   //           rules.allowUSID &&
//   //           isMatched(ledgerItem, statementItem, "exact")
//   //         ) {
//   //           matched.push(ledgerItem);
//   //         }
//   //         if (
//   //           states.probableMatch &&
//   //           isMatched(ledgerItem, statementItem, "probable")
//   //         ) {
//   //           probableMatched.push(ledgerItem);
//   //         }
//   //       });
//   //     });

//   //     // Set matched items based on selected checkboxes
//   //     setMatchedItems({ exact: matched, probable: probableMatched });
//   //     setOpen(true);
//   //     console.log("Matching based on the selected rule...");
//   //   } else {
//   //     // Handle case where no rule is set
//   //     alert("Please select a matching rule before proceeding!");
//   //   }
//   // };
//   const handleMatch = () => {
//     // If rules are set, proceed with matching logic
//     console.log("Rules state before match:", rules);

//     if (!rules || Object.keys(rules).length === 0) {
//       console.log("No rules are set, returning zero matches.");
//       setMatchedItems({ exact: [], probable: [] });
//       setOpen(true); // Still open the modal but with empty results
//       alert("No matching rule is set, all match results will be zero.");
//       return;
//     }
//     const matched = [];
//     const probableMatched = [];

//     ledgerData.forEach((ledgerItem) => {
//       statementData.forEach((statementItem) => {
//         if (
//           states.exactMatch &&
//           rules.allowUSID &&
//           isMatched(ledgerItem, statementItem, "exact")
//         ) {
//           matched.push(ledgerItem);
//         }
//         if (
//           states.probableMatch &&
//           isMatched(ledgerItem, statementItem, "probable")
//         ) {
//           probableMatched.push(ledgerItem);
//         }
//       });
//     });

//     // Set matched items based on selected checkboxes
//     setMatchedItems({ exact: matched, probable: probableMatched });
//     setOpen(true);
//     console.log("Matching based on the selected rule...");
//   };

//   useEffect(() => {
//     console.log("Rule fetched and set:", rules);
//   }, [rules]); // This logs whenever the `rules` state is updated
//   const handleSave = async () => {
//     // Ensure there's at least one exact match to get the uploadSessionId
//     if (matchedItems.exact.length > 0) {
//       const uploadSessionId = matchedItems.exact[0].uploadSessionId; // Assuming all exact matches have the same uploadSessionId

//       // Save matched items to the backend
//       try {
//         const response = await axios.post(`${apiUrl}/api/matches`, {
//           accountId: currentSession.account,
//           switchId: currentSession._id,
//           exactMatches: matchedItems.exact, // Use matched items from state
//           probableMatches: matchedItems.probable, // Use matched items from state
//           uploadSessionId: uploadSessionId, // Extracted from matched items
//         });
//         console.log("Upload Session ID:", uploadSessionId);

//         if (response.data.success) {
//           console.log("Matched items saved successfully:", response.data.data);
//           // Optionally show a success message to the user here
//         }
//       } catch (error) {
//         console.error("Error saving matched items:", error);
//         // Optionally show an error message to the user here
//       }
//     } else {
//       console.error("No matched items to save.");
//     }
//   };

//   const isMatched = (ledgerItem, statementItem, matchType) => {
//     if (matchType === "exact" && rules.allowUSID) {
//       return (
//         ledgerItem.Debit === statementItem.Credit &&
//         ledgerItem.USID === statementItem.USID
//       );
//     }
//     if (matchType === "probable") {
//       // Check if USID matches
//       if (ledgerItem.USID === statementItem.USID) {
//         return true;
//       }
//       // If USID doesn't match, check if amounts match
//       return ledgerItem.Debit === statementItem.Credit;
//     }
//     return false;
//   };

//   useEffect(() => {
//     console.log("Ledger Data:", ledgerData);
//     console.log("Statement Data:", statementData);
//     console.log("Matched Items:", matchedItems);
//   }, [ledgerData, statementData, matchedItems]);

//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Container>
//         <Stack spacing={3}>
//           <SimpleCard>
//             <DialogTitle id="form-dialog-title">Automatic Matching</DialogTitle>

//             <div style={{ marginLeft: "50px", marginBottom: "60px" }}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     // checked={states.exactMatch}
//                     checked={rules.exactMatch}
//                     onChange={handleChange("exactMatch")}
//                   />
//                 }
//                 label="Exact Matching"
//               />
//               <br></br>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     // checked={states.probableMatch}
//                     checked={rules.probableMatch}
//                     onChange={handleChange("probableMatch")}
//                   />
//                 }
//                 label="Probable Matching"
//               />
//               <br></br>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={states.similarDetails}
//                     onChange={handleChange("similarDetails")}
//                   />
//                 }
//                 label="Similar Details Matching"
//               />
//               <br></br>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={states.manyToMany}
//                     onChange={handleChange("manyToMany")}
//                   />
//                 }
//                 label="Many to Many Matches"
//               />
//               <br></br>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={states.userDefined}
//                     onChange={handleChange("userDefined")}
//                   />
//                 }
//                 label="User Defined Field Matches"
//               />
//               <br />
//               <Button
//                 color="primary"
//                 variant="contained"
//                 onClick={handleMatch}
//                 style={{ marginRight: "30px", marginTop: "50px" }}
//               >
//                 Match
//               </Button>
//               <Button
//                 color="primary"
//                 variant="contained"
//                 onClick={handleClose}
//                 style={{ marginTop: "50px" }}
//               >
//                 Cancel
//               </Button>
//             </div>
//           </SimpleCard>
//         </Stack>

//         <Modal open={open} onClose={handleClose}>
//           <Box sx={modalStyle}>
//             <h2>Match Result</h2>

//             {matchedItems &&
//               matchedItems.exact &&
//               matchedItems.exact.length > 0 && (
//                 <div>
//                   <h3>Exact Match Items: {matchedItems.exact.length}</h3>
//                   {/* Render exact match items here */}
//                 </div>
//               )}

//             {matchedItems &&
//               matchedItems.probable &&
//               matchedItems.probable.length > 0 && (
//                 <div>
//                   <h3>Probable Match Items: {matchedItems.probable.length}</h3>
//                   {/* Render probable match items here */}
//                 </div>
//               )}

//             <Button onClick={handleClose}>Close</Button>

//             <Button onClick={handleSave} variant="contained" color="primary">
//               Save Matched Items
//             </Button>
//           </Box>
//         </Modal>

//         <ToastContainer />
//       </Container>
//     </div>
//   );
// };

// export default AtmMatching;
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MenuItem, Modal, Select, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  Grid,
  Icon,
  DialogTitle,
  styled,
  IconButton,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useContext, useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SimpleTable from "app/views/material-kit/tables/SimpleTable";
import { useData } from "../DataContext";
import { useMatchedItems } from "../MatchedItemsContext";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
const initialState = {
  studentName: "",
  classname: "",
  address: "",
  parentsName: "",
  phone: "",

  email: "",
  username: "",
  date: "",
  password: "",
};
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const AtmMatching = () => {
//   const navigate = useNavigate();
//   const [state, setState] = useState({ date: new Date() });
//   // const [states, setStates] = useState({
//   //   exactMatch: true,
//   // });
//   const [states, setStates] = useState({
//     exactMatch: false,
//     probableMatch: false,
//     similarDetails: false,
//     manyToMany: false,
//     userDefined: false,
//   });
//   // const [matchedItems, setMatchedItems] = useState([]);

//   const { matchedItems, setMatchedItems } = useMatchedItems();
//   const [open, setOpen] = useState(false);
//   const { ledgerData, statementData } = useData();

//   const handleChange = (name) => (event) => {
//     setStates({ ...states, [name]: event.target.checked });
//   };
//   // const [states, setStates] = useState({
//   //   checkedA: true,
//   //   checkedB: false,
//   //   checkedC: false,
//   //   checkedD: false,
//   //   checkedE: false,
//   //   checkedF: false,
//   // });

//   // const handleMatch = () => {
//   //   // Check if both arrays are defined and are arrays
//   //   if (!Array.isArray(ledgerData) || !Array.isArray(statementData)) {
//   //     console.error(
//   //       "ledgerData or statementData is not available or is not an array."
//   //     );
//   //     return;
//   //   }

//   //   // Perform exact matching
//   //   const matched = ledgerData.filter((ledgerItem) =>
//   //     statementData.some(
//   //       (statementItem) =>
//   //         // ledgerItem.PostDate === statementItem.PostDate &&
//   //         // ledgerItem.Details === statementItem.Details &&
//   //         ledgerItem.Debit === statementItem.Credit
//   //     )
//   //   );

//   //   setMatchedItems(matched);
//   //   setOpen(true); // Show modal with the results
//   // };

//   // const handleMatch = () => {
//   //   if (!Array.isArray(ledgerData) || !Array.isArray(statementData)) {
//   //     console.error(
//   //       "ledgerData or statementData is not available or is not an array."
//   //     );
//   //     return;
//   //   }

//   //   // Perform matching based on Debit === Credit and Credit === Debit
//   //   const matched = ledgerData.filter((ledgerItem) =>
//   //     statementData.some(
//   //       (statementItem) =>
//   //         ledgerItem.Debit === statementItem.Credit &&
//   //         ledgerItem.Credit === statementItem.Debit &&
//   //         ledgerItem.USID === statementItem.USID
//   //     )
//   //   );

//   //   setMatchedItems(matched);
//   //   setOpen(true); // Show modal with the results
//   // };
//   // const handleMatch = () => {
//   //   if (!Array.isArray(ledgerData) || !Array.isArray(statementData)) {
//   //     console.error(
//   //       "ledgerData or statementData is not available or is not an array."
//   //     );
//   //     return;
//   //   }

//   //   // Match based on USID and amounts (allow some flexibility in amounts if needed)
//   //   const matched = ledgerData.filter((ledgerItem) =>
//   //     statementData.some(
//   //       (statementItem) =>
//   //         ledgerItem.USID === statementItem.USID &&
//   //         // Match debit to credit or credit to debit
//   //         (ledgerItem.Debit === statementItem.Credit ||
//   //           ledgerItem.Credit === statementItem.Debit)
//   //     )
//   //   );

//   //   setMatchedItems(matched);
//   //   setOpen(true); // Show modal with the results
//   // };
//   // useEffect(() => {
//   //   console.log("Ledger Data:", ledgerData);
//   //   console.log("Statement Data:", statementData);
//   //   console.log("Matched Items:", matchedItems);
//   // }, [ledgerData, statementData, matchedItems]);

//   const handleMatch = () => {
//     const matched = [];
//     const probableMatched = [];

//     ledgerData.forEach((ledgerItem) => {
//       statementData.forEach((statementItem) => {
//         if (
//           states.exactMatch &&
//           isMatched(ledgerItem, statementItem, "exact")
//         ) {
//           matched.push(ledgerItem);
//         }
//         if (
//           states.probableMatch &&
//           isMatched(ledgerItem, statementItem, "probable")
//         ) {
//           probableMatched.push(ledgerItem);
//         }
//       });
//     });

//     setMatchedItems([...matched, ...probableMatched]); // Combine matched results
//     setOpen(true);
//   };

//   const isMatched = (ledgerItem, statementItem, matchType) => {
//     if (matchType === "exact") {
//       return (
//         ledgerItem.Debit === statementItem.Credit &&
//         ledgerItem.USID === statementItem.USID
//       );
//     }
//     if (matchType === "probable") {
//       return (
//         ledgerItem.USID === statementItem.USID ||
//         ledgerItem.Debit === statementItem.Credit
//       );
//     }
//     return false;
//   };

//   useEffect(() => {
//     console.log("Ledger Data:", ledgerData);
//     console.log("Statement Data:", statementData);
//     console.log("Matched Items:", matchedItems);
//   }, [ledgerData, statementData, matchedItems]);

//   const handleClose = () => setOpen(false);

//   const apiUrl = process.env.REACT_APP_API_URL.trim();

//   return (
//     <div>
//       <Container>
//         <Stack spacing={3}>
//           <SimpleCard>
//             <DialogTitle id="form-dialog-title">Automatic Matching</DialogTitle>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.exactMatch}
//                   onChange={handleChange("exactMatch")}
//                 />
//               }
//               label="Exact Matching"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.probableMatch}
//                   onChange={handleChange("probableMatch")}
//                 />
//               }
//               label="Probable Matching"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.similarDetails}
//                   onChange={handleChange("similarDetails")}
//                 />
//               }
//               label="Similar Details Matching"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.manyToMany}
//                   onChange={handleChange("manyToMany")}
//                 />
//               }
//               label="Many to Many Matches"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.userDefined}
//                   onChange={handleChange("userDefined")}
//                 />
//               }
//               label="User Defined Field Matches"
//             />
//             <br />
//             <Button
//               color="primary"
//               variant="contained"
//               onClick={handleMatch}
//               style={{ marginRight: "30px" }}
//             >
//               Match
//             </Button>
//             <Button color="primary" variant="contained" onClick={handleClose}>
//               Cancel
//             </Button>
//           </SimpleCard>
//         </Stack>
//         <Modal open={open} onClose={handleClose}>
//           <Box sx={modalStyle}>
//             <h2>Match Result</h2>

//             {matchedItems.length > 0 && (
//               <div>
//                 <h3>Exact Match Items: {matchedItems.length}</h3>
//                 {/*} <ul>
//             {totalItems.map((item, index) => (
//               <li key={index}>
//                 Date: {item.PostDate}, Details: {item.Details}, Amount: {item.Debit}
//               </li>
//             ))}
//           </ul>*/}
//               </div>
//             )}

//             {similarItems.length > 0 && (
//               <div>
//                 <h3>Similar Details Items: {similarItems.length}</h3>
//                 {/*} <ul>
//             {totalItems.map((item, index) => (
//               <li key={index}>
//                 Date: {item.PostDate}, Details: {item.Details}, Amount: {item.Debit}
//               </li>
//             ))}
//           </ul>*/}
//               </div>
//             )}

//             {probableItems.length > 0 && (
//               <div>
//                 <h3>Probable Match Items: {probableItems.length}</h3>
//                 {/*} <ul>
//             {totalItems.map((item, index) => (
//               <li key={index}>
//                 Date: {item.PostDate}, Details: {item.Details}, Amount: {item.Debit}
//               </li>
//             ))}
//           </ul>*/}
//               </div>
//             )}

//             {reversalItems.length > 0 && (
//               <div>
//                 <h3>Reversal: {reversalItems.length}</h3>
//                 {/*} <ul>
//             {totalItems.map((item, index) => (
//               <li key={index}>
//                 Date: {item.PostDate}, Details: {item.Details}, Amount: {item.Debit}
//               </li>
//             ))}
//           </ul>*/}
//               </div>
//             )}

//             {partialItems.length > 0 && (
//               <div>
//                 <h3>All Partially Matched Items: {partialItems.length}</h3>
//                 {/*} <ul>
//             {totalItems.map((item, index) => (
//               <li key={index}>
//                 Date: {item.PostDate}, Details: {item.Details}, Amount: {item.Debit}
//               </li>
//             ))}
//           </ul>*/}
//               </div>
//             )}

//             {userdefinedItems.length > 0 && (
//               <div>
//                 <h3>
//                   User Defined Field Matched Items: {userdefinedItems.length}
//                 </h3>
//                 {/*} <ul>
//             {totalItems.map((item, index) => (
//               <li key={index}>
//                 Date: {item.PostDate}, Details: {item.Details}, Amount: {item.Debit}
//               </li>
//             ))}
//           </ul>*/}
//               </div>
//             )}

//             {totalItems.length > 0 && (
//               <div>
//                 <h3>Total Items Matched: {totalItems.length}</h3>
//                 {/*} <ul>
//             {totalItems.map((item, index) => (
//               <li key={index}>
//                 Date: {item.PostDate}, Details: {item.Details}, Amount: {item.Debit}
//               </li>
//             ))}
//           </ul>*/}
//               </div>
//             )}

//             <Button onClick={handleClose}>Close</Button>
//           </Box>
//         </Modal>

//         <ToastContainer />
//       </Container>
//     </div>
//   );
// };

// const AtmMatching = () => {
//   const [state, setState] = useState({ date: new Date() });
//   const [states, setStates] = useState({
//     exactMatch: false,
//     probableMatch: false,
//     similarDetails: false,
//     manyToMany: false,
//     userDefined: false,
//   });
//   // const { matchedItems, setMatchedItems } = useMatchedItems();

//   // const { matchedItems, setMatchedItems } = useMatchedItems() || {
//   //   matchedItems: { exact: [], probable: [] },
//   //   setMatchedItems: () => {},
//   // };

//   const { matchedItems = { exact: [], probable: [] }, setMatchedItems } =
//     useMatchedItems() || {};

//   const [open, setOpen] = useState(false);
//   const { ledgerData, statementData } = useData();

//   const handleChange = (name) => (event) => {
//     setStates({ ...states, [name]: event.target.checked });
//   };

//   const handleMatch = () => {
//     const matched = [];
//     const probableMatched = [];

//     ledgerData.forEach((ledgerItem) => {
//       statementData.forEach((statementItem) => {
//         if (
//           states.exactMatch &&
//           isMatched(ledgerItem, statementItem, "exact")
//         ) {
//           matched.push(ledgerItem);
//         }
//         if (
//           states.probableMatch &&
//           isMatched(ledgerItem, statementItem, "probable")
//         ) {
//           probableMatched.push(ledgerItem);
//         }
//       });
//     });

//     // Set matched items based on selected checkboxes
//     setMatchedItems({ exact: matched, probable: probableMatched });
//     setOpen(true);
//   };

//   const isMatched = (ledgerItem, statementItem, matchType) => {
//     if (matchType === "exact") {
//       return (
//         ledgerItem.Debit === statementItem.Credit &&
//         ledgerItem.USID === statementItem.USID
//       );
//     }
//     if (matchType === "probable") {
//       return (
//         ledgerItem.USID === statementItem.USID ||
//         ledgerItem.Debit === statementItem.Credit
//       );
//     }
//     return false;
//   };

//   useEffect(() => {
//     console.log("Ledger Data:", ledgerData);
//     console.log("Statement Data:", statementData);
//     console.log("Matched Items:", matchedItems);
//   }, [ledgerData, statementData, matchedItems]);

//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Container>
//         <Stack spacing={3}>
//           <SimpleCard>
//             <DialogTitle id="form-dialog-title">Automatic Matching</DialogTitle>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.exactMatch}
//                   onChange={handleChange("exactMatch")}
//                 />
//               }
//               label="Exact Matching"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.probableMatch}
//                   onChange={handleChange("probableMatch")}
//                 />
//               }
//               label="Probable Matching"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.similarDetails}
//                   onChange={handleChange("similarDetails")}
//                 />
//               }
//               label="Similar Details Matching"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.manyToMany}
//                   onChange={handleChange("manyToMany")}
//                 />
//               }
//               label="Many to Many Matches"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={states.userDefined}
//                   onChange={handleChange("userDefined")}
//                 />
//               }
//               label="User Defined Field Matches"
//             />
//             <br />
//             <Button
//               color="primary"
//               variant="contained"
//               onClick={handleMatch}
//               style={{ marginRight: "30px" }}
//             >
//               Match
//             </Button>
//             <Button color="primary" variant="contained" onClick={handleClose}>
//               Cancel
//             </Button>
//           </SimpleCard>
//         </Stack>
//         <Modal open={open} onClose={handleClose}>
//           <Box sx={modalStyle}>
//             <h2>Match Result</h2>

//             {matchedItems.exact.length > 0 && (
//               <div>
//                 <h3>Exact Match Items: {matchedItems.exact.length}</h3>
//                 {/* Render exact match items here */}
//               </div>
//             )}

//             {matchedItems.probable.length > 0 && (
//               <div>
//                 <h3>Probable Match Items: {matchedItems.probable.length}</h3>
//                 {/* Render probable match items here */}
//               </div>
//             )}

//             {/* Add similarItems, reversalItems, partialItems, and userdefinedItems as needed */}

//             <Button onClick={handleClose}>Close</Button>
//           </Box>
//         </Modal>

//         <ToastContainer />
//       </Container>
//     </div>
//   );
// };

const AtmMatching = () => {
  const [state, setState] = useState({ date: new Date() });
  const [states, setStates] = useState({
    exactMatch: false,
    probableMatch: false,
    similarDetails: false,
    manyToMany: false,
    userDefined: false,
  });
  const { currentSession } = useContext(SessionContext);
  console.log("Current Session:", currentSession);

  const apiUrl = process.env.REACT_APP_API_URL;
  const { matchedItems, setMatchedItems } = useMatchedItems() || {
    matchedItems: { exact: [], probable: [] },
    setMatchedItems: () => {},
  };

  const [open, setOpen] = useState(false);
  const { ledgerData, statementData } = useData();

  const handleChange = (name) => (event) => {
    setStates({ ...states, [name]: event.target.checked });
  };

  // const handleMatch = async () => {
  //   const matched = [];
  //   const probableMatched = [];

  //   ledgerData.forEach((ledgerItem) => {
  //     statementData.forEach((statementItem) => {
  //       if (
  //         states.exactMatch &&
  //         isMatched(ledgerItem, statementItem, "exact")
  //       ) {
  //         matched.push(ledgerItem);
  //       }
  //       if (
  //         states.probableMatch &&
  //         isMatched(ledgerItem, statementItem, "probable")
  //       ) {
  //         probableMatched.push(ledgerItem);
  //       }
  //     });
  //   });

  //   // Set matched items based on selected checkboxes
  //   setMatchedItems({ exact: matched, probable: probableMatched });
  //   setOpen(true);

  //   // Save matched items to the backend
  // };
  const handleMatch = async () => {
    const matched = [];
    const matchedStatements = []; // Array to hold matched statement items
    const probableMatched = [];

    ledgerData.forEach((ledgerItem) => {
      statementData.forEach((statementItem) => {
        if (
          states.exactMatch &&
          isMatched(ledgerItem, statementItem, "exact")
        ) {
          matched.push(ledgerItem);
          matchedStatements.push(statementItem); // Push the matched statement item
        }
        if (
          states.probableMatch &&
          isMatched(ledgerItem, statementItem, "probable")
        ) {
          probableMatched.push(ledgerItem);
          matchedStatements.push(statementItem); // Push the matched statement item for probable matches
        }
      });
    });

    // Set matched items based on selected checkboxes
    setMatchedItems({
      exact: matched,
      probable: probableMatched,
      matchedStatements: matchedStatements, // Store matched statements too
    });
    setOpen(true);
  };

  // const handleSave = async () => {
  //   // Ensure there's at least one exact match to get the uploadSessionId
  //   if (matchedItems.exact.length > 0) {
  //     const uploadSessionId = matchedItems.exact[0].uploadSessionId; // Assuming all exact matches have the same uploadSessionId

  //     // Save matched items to the backend
  //     try {
  //       const response = await axios.post(`${apiUrl}/api/matches`, {
  //         accountId: currentSession.account,
  //         switchId: currentSession._id,
  //         exactMatches: matchedItems.exact, // Use matched items from state
  //         probableMatches: matchedItems.probable, // Use matched items from state
  //         uploadSessionId: uploadSessionId, // Extracted from matched items
  //       });
  //       console.log("Upload Session ID:", uploadSessionId);

  //       if (response.data.success) {
  //         console.log("Matched items saved successfully:", response.data.data);
  //         // Optionally show a success message to the user here
  //       }
  //     } catch (error) {
  //       console.error("Error saving matched items:", error);
  //       // Optionally show an error message to the user here
  //     }
  //   } else {
  //     console.error("No matched items to save.");
  //   }
  // };
  // const handleSave = async () => {
  //   if (matchedItems.exact.length > 0) {
  //     const uploadSessionId = matchedItems.exact[0].uploadSessionId;

  //     try {
  //       const response = await axios.post(`${apiUrl}/api/matches`, {
  //         accountId: currentSession.account,
  //         switchId: currentSession._id,
  //         exactMatches: matchedItems.exact,
  //         probableMatches: matchedItems.probable,
  //         matchedStatements: matchedItems.matchedStatements, // Include matched statements
  //         uploadSessionId: uploadSessionId,
  //       });
  //       console.log("Upload Session ID:", uploadSessionId);

  //       if (response.data.success) {
  //         console.log("Matched items saved successfully:", response.data.data);
  //       }
  //     } catch (error) {
  //       console.error("Error saving matched items:", error);
  //     }
  //   } else {
  //     console.error("No matched items to save.");
  //   }
  // };
  const handleSave = async () => {
    if (matchedItems.exact.length > 0) {
      const uploadSessionId = matchedItems.exact[0].uploadSessionId;

      // Function to send matched items in batches
      const batchSendMatches = async (items, batchSize = 50) => {
        const totalItems = items.length;

        for (let i = 0; i < totalItems; i += batchSize) {
          const batch = items.slice(i, i + batchSize);

          try {
            const isFirstBatch = i === 0;

            const response = await axios.post(`${apiUrl}/api/matches`, {
              accountId: currentSession.account,
              switchId: currentSession._id,
              exactMatches: batch, // Send only the current batch
              probableMatches: matchedItems.probable,
              matchedStatements: isFirstBatch
                ? matchedItems.matchedStatements
                : [], // Send matchedStatements only once
              uploadSessionId: uploadSessionId,
            });

            console.log(
              `Batch ${Math.ceil(i / batchSize) + 1} sent successfully`
            );

            if (response.data.success) {
              console.log(
                "Matched items saved successfully:",
                response.data.data
              );
            }
          } catch (error) {
            console.error("Error saving matched items in batch:", error);
          }
        }
      };

      // Call the batch send function
      await batchSendMatches(matchedItems.exact);
    } else {
      console.error("No matched items to save.");
    }
  };

  const isMatched = (ledgerItem, statementItem, matchType) => {
    if (matchType === "exact") {
      return (
        ledgerItem.Debit === statementItem.Credit &&
        ledgerItem.USID === statementItem.USID
      );
    }
    if (matchType === "probable") {
      // Check if USID matches
      if (ledgerItem.USID === statementItem.USID) {
        return true;
      }
      // If USID doesn't match, check if amounts match
      return ledgerItem.Debit === statementItem.Credit;
    }
    return false;
  };

  useEffect(() => {
    console.log("Ledger Data:", ledgerData);
    console.log("Statement Data:", statementData);
    console.log("Matched Items:", matchedItems);
  }, [ledgerData, statementData, matchedItems]);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Container>
        <Stack spacing={3}>
          <SimpleCard>
            <DialogTitle id="form-dialog-title">Automatic Matching</DialogTitle>

            <div style={{ marginLeft: "50px", marginBottom: "60px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={states.exactMatch}
                    onChange={handleChange("exactMatch")}
                  />
                }
                label="Exact Matching"
              />
              <br></br>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={states.probableMatch}
                    onChange={handleChange("probableMatch")}
                  />
                }
                label="Probable Matching"
              />
              <br></br>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={states.similarDetails}
                    onChange={handleChange("similarDetails")}
                  />
                }
                label="Similar Details Matching"
              />
              <br></br>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={states.manyToMany}
                    onChange={handleChange("manyToMany")}
                  />
                }
                label="Many to Many Matches"
              />
              <br></br>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={states.userDefined}
                    onChange={handleChange("userDefined")}
                  />
                }
                label="User Defined Field Matches"
              />
              <br />
              <Button
                color="primary"
                variant="contained"
                onClick={handleMatch}
                style={{ marginRight: "30px", marginTop: "50px" }}
              >
                Match
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={handleClose}
                style={{ marginTop: "50px" }}
              >
                Cancel
              </Button>
            </div>
          </SimpleCard>
        </Stack>

        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <h2>Match Result</h2>

            {matchedItems &&
              matchedItems.exact &&
              matchedItems.exact.length > 0 && (
                <div>
                  <h3>Exact Match Items: {matchedItems.exact.length}</h3>
                  {/* Render exact match items here */}
                </div>
              )}

            {matchedItems &&
              matchedItems.probable &&
              matchedItems.probable.length > 0 && (
                <div>
                  <h3>Probable Match Items: {matchedItems.probable.length}</h3>
                  {/* Render probable match items here */}
                </div>
              )}

            <Button onClick={handleClose}>Close</Button>

            <Button onClick={handleSave} variant="contained" color="primary">
              Save Matched Items
            </Button>
          </Box>
        </Modal>

        <ToastContainer />
      </Container>
    </div>
  );
};

export default AtmMatching;
