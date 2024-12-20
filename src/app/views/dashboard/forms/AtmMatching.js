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
//   const { currentSession } = useContext(SessionContext);
//   console.log("Current Session:", currentSession);

//   const apiUrl = process.env.REACT_APP_API_URL;
//   const { matchedItems, setMatchedItems } = useMatchedItems() || {
//     matchedItems: { exact: [], probable: [], similar: [] },
//     setMatchedItems: () => {},
//   };

//   const [open, setOpen] = useState(false);
//   const { ledgerData, statementData } = useData();

//   const handleChange = (name) => (event) => {
//     setStates({ ...states, [name]: event.target.checked });
//   };

//   // const handleMatch = async () => {
//   //   const matched = [];
//   //   const matchedStatements = [];
//   //   const probableMatched = [];
//   //   const similarDetails = [];
//   //   const unmatchedLedger = [];
//   //   const unmatchedStatement = [];

//   //   // First loop through ledgerData
//   //   ledgerData.forEach((ledgerItem) => {
//   //     let isItemMatched = false;

//   //     // Check for matches against statementData
//   //     statementData.forEach((statementItem) => {
//   //       const exactMatch =
//   //         states.exactMatch && isMatched(ledgerItem, statementItem, "exact");
//   //       const similarDetails =
//   //         states.similarDetails &&
//   //         isMatched(ledgerItem, statementItem, "similar");
//   //       const probableMatch =
//   //         states.probableMatch &&
//   //         isMatched(ledgerItem, statementItem, "probable");

//   //       if (exactMatch) {
//   //         matched.push(ledgerItem);
//   //         matchedStatements.push(statementItem);
//   //         isItemMatched = true;
//   //       } else if (similarDetails) {
//   //         matched.push(ledgerItem);
//   //         matchedStatements.push(statementItem);
//   //         isItemMatched = true;
//   //       } else if (probableMatch) {
//   //         probableMatched.push(ledgerItem);
//   //         matchedStatements.push(statementItem);
//   //         isItemMatched = true;
//   //       }
//   //     });

//   //     // If no match was found, add to unmatchedLedger
//   //     if (!isItemMatched) {
//   //       console.log("Unmatched Ledger Item:", ledgerItem);
//   //       unmatchedLedger.push({
//   //         type: "ledger",
//   //         details: ledgerItem,
//   //       });
//   //     } else {
//   //       console.log(
//   //         `Ledger Item ${JSON.stringify(ledgerItem)} matched with a statement.`
//   //       );
//   //     }
//   //   });

//   //   // Now loop through statementData to find unmatched statements
//   //   statementData.forEach((statementItem) => {
//   //     let isItemMatched = false;

//   //     // Check for matches against ledgerData
//   //     ledgerData.forEach((ledgerItem) => {
//   //       const exactMatch =
//   //         states.exactMatch && isMatched(ledgerItem, statementItem, "exact");
//   //       const similarDetails =
//   //         states.similarDetails &&
//   //         isMatched(ledgerItem, statementItem, "similar");
//   //       const probableMatch =
//   //         states.probableMatch &&
//   //         isMatched(ledgerItem, statementItem, "probable");

//   //       if (exactMatch || probableMatch || similarDetails) {
//   //         isItemMatched = true;
//   //       }
//   //     });

//   //     // If no match was found, add to unmatchedStatement
//   //     if (!isItemMatched) {
//   //       console.log("Unmatched Statement Item:", statementItem);
//   //       unmatchedStatement.push({
//   //         type: "statement",
//   //         details: statementItem,
//   //       });
//   //     }
//   //   });

//   //   const unmatchedItems = [...unmatchedLedger, ...unmatchedStatement];

//   //   // Set matched items state
//   //   setMatchedItems({
//   //     exact: matched,
//   //     similarDetails: matched,
//   //     probable: probableMatched,
//   //     matchedStatements: matchedStatements,
//   //     unmatchedItems,
//   //   });

//   //   // Log counts for debugging
//   //   console.log("Matched Ledger Items:", matched.length);
//   //   console.log("Unmatched Ledger Items:", unmatchedLedger.length);
//   //   console.log("Matched Statements:", matchedStatements.length);
//   //   console.log("Unmatched Statements:", unmatchedStatement.length);

//   //   setOpen(true);
//   // };
//   const handleMatch = async () => {
//     const matchedExact = [];
//     const matchedSimilarDetails = [];
//     const matchedProbable = [];
//     const matchedStatements = [];
//     const unmatchedLedger = [];
//     const unmatchedStatement = [];

//     // First loop through ledgerData
//     ledgerData.forEach((ledgerItem) => {
//       let isItemMatched = false;

//       // Check for matches against statementData
//       statementData.forEach((statementItem) => {
//         const exactMatch =
//           states.exactMatch && isMatched(ledgerItem, statementItem, "exact");
//         const similarMatch =
//           states.similarDetails &&
//           isMatched(ledgerItem, statementItem, "similar");
//         const probableMatch =
//           states.probableMatch &&
//           isMatched(ledgerItem, statementItem, "probable");

//         if (exactMatch) {
//           matchedExact.push(ledgerItem);
//           matchedStatements.push(statementItem);
//           isItemMatched = true;
//         } else if (similarMatch) {
//           matchedSimilarDetails.push(ledgerItem);
//           matchedStatements.push(statementItem);
//           isItemMatched = true;
//         } else if (probableMatch) {
//           matchedProbable.push(ledgerItem);
//           matchedStatements.push(statementItem);
//           isItemMatched = true;
//         }
//       });

//       // If no match was found, add to unmatchedLedger
//       if (!isItemMatched) {
//         unmatchedLedger.push({
//           type: "ledger",
//           details: ledgerItem,
//         });
//       }
//     });

//     // Now loop through statementData to find unmatched statements
//     statementData.forEach((statementItem) => {
//       let isItemMatched = false;

//       ledgerData.forEach((ledgerItem) => {
//         const exactMatch = isMatched(ledgerItem, statementItem, "exact");
//         const similarMatch = isMatched(ledgerItem, statementItem, "similar");
//         const probableMatch = isMatched(ledgerItem, statementItem, "probable");

//         if (exactMatch || similarMatch || probableMatch) {
//           isItemMatched = true;
//         }
//       });

//       if (!isItemMatched) {
//         unmatchedStatement.push({
//           type: "statement",
//           details: statementItem,
//         });
//       }
//     });

//     // Update the state with the categorized matches
//     setMatchedItems({
//       exact: matchedExact,
//       similarDetails: matchedSimilarDetails,
//       probable: matchedProbable,
//       matchedStatements,
//       unmatchedItems: [...unmatchedLedger, ...unmatchedStatement],
//     });
//   };

//   const handleSave = async () => {
//     if (matchedItems.exact.length > 0) {
//       const uploadSessionId = matchedItems.exact[0].uploadSessionId;

//       // Confirm the count before batching
//       console.log(
//         "Total exact matches before sending:",
//         matchedItems.exact.length
//       ); // Should log 1728

//       // Function to send matched items in batches
//       const batchSendMatches = async (items, batchSize = 50) => {
//         const totalItems = items.length;

//         for (let i = 0; i < totalItems; i += batchSize) {
//           // Slice a batch from exactMatches
//           const batch = items.slice(i, i + batchSize);

//           try {
//             const response = await axios.post(`${apiUrl}/api/matches`, {
//               accountId: currentSession.account,
//               switchId: currentSession._id,
//               exactMatches: batch, // Send sliced batch
//               probableMatches: matchedItems.probable,
//               matchedStatements: matchedItems.matchedStatements,
//               unmatchedItems: matchedItems.unmatchedItems, // Include unmatched items
//               uploadSessionId: uploadSessionId,
//             });

//             console.log(
//               `Batch ${Math.ceil(i / batchSize) + 1} sent successfully`
//             );

//             if (response.data.success) {
//               console.log(
//                 "Matched items saved successfully:",
//                 response.data.data
//               );
//             } else {
//               console.error(
//                 "Failed to save some matched items:",
//                 response.data
//               );
//             }
//           } catch (error) {
//             console.error("Error saving matched items in batch:", error);
//           }
//         }
//       };

//       // Call the batch send function
//       await batchSendMatches([...matchedItems.exact]); // Ensure we’re sending a copy to prevent mutation
//     } else {
//       console.error("No matched items to save.");
//     }
//   };

//   const isMatched = (ledgerItem, statementItem, matchType) => {
//     if (matchType === "exact") {
//       return (
//         ledgerItem.Debit === statementItem.Credit &&
//         ledgerItem.USID === statementItem.USID
//       );
//     }
//     if (matchType === "similar") {
//       // Exact match logic
//       if (
//         ledgerItem.USID === statementItem.USID &&
//         ledgerItem.Debit === statementItem.Credit &&
//         ledgerItem.PostDate === statementItem.PostDate &&
//         ledgerItem.Details === statementItem.Details &&
//         ledgerItem.ValDate === statementItem.ValDate
//       ) {
//         return true;
//       }
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
//                     checked={states.exactMatch}
//                     onChange={handleChange("exactMatch")}
//                   />
//                 }
//                 label="Exact Matching"
//               />
//               <br></br>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={states.probableMatch}
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
//               matchedItems.similat &&
//               matchedItems.similar.length > 0 && (
//                 <div>
//                   <h3>Similar Details Items: {matchedItems.similar.length}</h3>
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
import {
  MenuItem,
  Modal,
  Select,
  Stack,
  CircularProgress,
} from "@mui/material";
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

const AtmMatching = () => {
  const [state, setState] = useState({ date: new Date() });
  const [states, setStates] = useState({
    exactMatch: false,
    probableMatch: false,
    similarDetails: false,
    manyToOne: false,
    userDefined: false,
  });
  const { currentSession } = useContext(SessionContext);
  console.log("Current Session:", currentSession);
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const { matchedItems, setMatchedItems } = useMatchedItems() || {
    matchedItems: { exact: [], similar: [], probable: [] },
    setMatchedItems: () => {},
  };

  const [open, setOpen] = useState(false);
  const { ledgerData, statementData } = useData();

  const handleChange = (name) => (event) => {
    setStates({ ...states, [name]: event.target.checked });
  };

  // const handleMatch = async () => {
  //   const matched = [];
  //   const matchedStatements = []; // Array to hold matched statement items
  //   const probableMatched = [];
  //   const similarDetailsMatched = [];

  //   ledgerData.forEach((ledgerItem) => {
  //     statementData.forEach((statementItem) => {
  //       if (
  //         states.exactMatch &&
  //         isMatched(ledgerItem, statementItem, "exact")
  //       ) {
  //         matched.push(ledgerItem);
  //         matchedStatements.push(statementItem); // Push the matched statement item
  //       }
  //       if (
  //         states.probableMatch &&
  //         isMatched(ledgerItem, statementItem, "probable")
  //       ) {
  //         probableMatched.push(ledgerItem);
  //         matchedStatements.push(statementItem); // Push the matched statement item for probable matches
  //       }
  //       if (
  //         states.similarDetails &&
  //         isMatched(ledgerItem, statementItem, "similar")
  //       )
  //         console.log("Similar Match Found:", ledgerItem);
  //       {
  //         similarDetailsMatched.push(ledgerItem);
  //         matchedStatements.push(statementItem); // Push the matched statement item for similar details matches
  //       }
  //     });
  //   });

  //   // Set matched items based on selected checkboxes
  //   setMatchedItems({
  //     exact: matched,
  //     probable: probableMatched,
  //     similar: similarDetailsMatched,
  //     matchedStatements: matchedStatements, // Store matched statements too
  //   });
  //   setOpen(true);
  // };

  const handleMatch = async () => {
    const matched = [];
    const matchedStatements = []; // Array to hold matched statement items
    const probableMatched = [];
    const manyToOneMatched = [];
    const similarDetailsMatched = [];

    const manyToOneMatch = (ledger, statement) => {
      statement.forEach((statementItem) => {
        // Parse Credit of the statement item as a number
        const statementCredit = parseFloat(statementItem.Credit);

        // Find all ledger items with the same USID
        const relevantLedgerItems = ledger.filter(
          (ledgerItem) => ledgerItem.USID === statementItem.USID
        );

        // Calculate the total Debit for these ledger items, converting Debit to a number
        const totalDebit = relevantLedgerItems.reduce((sum, ledgerItem) => {
          return sum + parseFloat(ledgerItem.Debit || 0);
        }, 0);

        // Fix decimal precision issues by rounding to two decimal places
        const roundedTotalDebit = parseFloat(totalDebit.toFixed(2));
        const roundedStatementCredit = parseFloat(statementCredit.toFixed(2));
        console.log(`roundedTotalDebit: ${roundedTotalDebit}`);
        console.log(`roundedStatementCredit: ${roundedStatementCredit}`);

        // Check if the rounded total Debit equals the rounded Credit of the statement item
        // this prevents exact matches from being included in many-to-one matches
        if (
          roundedTotalDebit === roundedStatementCredit &&
          relevantLedgerItems.length > 1
        ) {
          // matches.push({
          //   statement: statementItem,
          //   matchingLedger: relevantLedgerItems,
          // });
          manyToOneMatched.push(...relevantLedgerItems);
        }
      });
    };

    if (states.manyToOne) {
      manyToOneMatch(ledgerData, statementData);
    }
    ledgerData.forEach((ledgerItem) => {
      statementData.forEach((statementItem) => {
        if (
          states.exactMatch &&
          isMatched(ledgerItem, statementItem, "exact")
        ) {
          matched.push(ledgerItem);
          matchedStatements.push(statementItem);
        }
        if (
          states.probableMatch &&
          isMatched(ledgerItem, statementItem, "probable")
        ) {
          probableMatched.push(ledgerItem);
          matchedStatements.push(statementItem);
        }
        if (
          states.similarDetails &&
          isMatched(ledgerItem, statementItem, "similar")
        ) {
          similarDetailsMatched.push(ledgerItem);
          matchedStatements.push(statementItem);
        }
      });
    });

    setMatchedItems({
      exact: matched,
      probable: probableMatched,
      manyToOne: manyToOneMatched,
      similar: similarDetailsMatched,
      matchedStatements,
    });
    setOpen(true);
  };

  useEffect(() => {
    console.log("Updated Matched Items:", matchedItems);
  }, [matchedItems]); // This will log when matchedItems is updated

  const handleSave = async () => {
    if (matchedItems.exact.length > 0) {
      const uploadSessionId = matchedItems.exact[0].uploadSessionId;

      // Function to send matched items in batches
      const batchSendMatches = async (items, batchSize = 50) => {
        const totalItems = items.length;
        setLoading(true);

        for (let i = 0; i < totalItems; i += batchSize) {
          const batch = items.slice(i, i + batchSize);

          try {
            const isFirstBatch = i === 0;

            const response = await axios.post(`${apiUrl}/api/matches`, {
              accountId: currentSession.account,
              switchId: currentSession._id,
              exactMatches: batch, // Send only the current batch
              probableMatches: matchedItems.probable,
              similarDetailsMatches: matchedItems.similar,
              matchedStatements: isFirstBatch
                ? matchedItems.matchedStatements
                : [], // Send matchedStatements only once
              uploadSessionId: uploadSessionId,
            });

            console.log(
              `Batch ${Math.ceil(i / batchSize) + 1} sent successfully`
            );
            setLoading(false);
            if (response.data.success) {
              alert("Matched items saved successfully.");
            } else {
              alert("Failed to save matched items.");
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
    if (matchType === "similar") {
      // Similar details match logic
      return (
        ledgerItem.USID === statementItem.USID &&
        ledgerItem.Debit === statementItem.Credit &&
        ledgerItem.PostDate === statementItem.PostDate &&
        ledgerItem.Details === statementItem.Details
      );
    }
    if (matchType === "probable") {
      // Probable match logic
      return (
        ledgerItem.USID === statementItem.USID ||
        ledgerItem.Debit === statementItem.Credit
      );
    }
    if (matchType === "manyToOne") {
      // Filter ledger items that share the same USID as the statement item
      const relevantLedgerItems = ledgerData.filter(
        (item) => item.USID === statementItem.USID
      );

      // Calculate the total debit for the matching ledger items
      const totalDebit = relevantLedgerItems.reduce(
        (sum, item) => sum + item.Debit,
        0
      );
      // Check if the total debit equals the credit of the statement item
      return totalDebit === statementItem.Credit;
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
      {loading && <CircularProgress />}
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
                    checked={states.manyToOne}
                    onChange={handleChange("manyToOne")}
                  />
                }
                label="Many to One Matches"
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
              matchedItems.exact &&
              matchedItems.exact.length === 0 && (
                <div>
                  <h3>Exact Match Items: (0)</h3>
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
            {matchedItems &&
              matchedItems.probable &&
              matchedItems.probable.length === 0 && (
                <div>
                  <h3>Probable Match Items: (0)</h3>
                </div>
              )}
            {matchedItems &&
              matchedItems.similar &&
              matchedItems.similar.length > 0 && (
                <div>
                  <h3>
                    Similar Details Match Items: {matchedItems.similar.length}
                  </h3>
                  {/* Render similar match items here */}
                </div>
              )}
            {matchedItems &&
              matchedItems.similar &&
              matchedItems.similar.length === 0 && (
                <div>
                  <h3>Similar Details Match Items: (0)</h3>
                </div>
              )}
            {/*} {matchedItems &&
              matchedItems.manyToOne &&
              matchedItems.manyToOne.length > 0 && (
                <div>
                  <h3>
                    Many-to-One Match Items: {matchedItems.manyToOne.length}
                  </h3>
                 
                </div>
              )}*/}
            {matchedItems &&
              matchedItems.manyToOne &&
              matchedItems.manyToOne.length > 0 && (
                <div>
                  {" "}
                  <h3>
                    Many-to-One Match Items: {matchedItems.manyToOne.length}
                  </h3>{" "}
                  {/* Render many-to-one match items here */}{" "}
                </div>
              )}{" "}
            {matchedItems &&
              matchedItems.manyToOne &&
              matchedItems.manyToOne.length === 0 && (
                <div>
                  {" "}
                  <h3>Many-to-One Match Items: (0)</h3>{" "}
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
