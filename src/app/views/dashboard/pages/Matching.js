// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import { MenuItem, Select, Stack, Typography } from "@mui/material";
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
//   FormLabel,
//   RadioGroup,
//   Radio,
//   TextField,
// } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { Span } from "app/components/Typography";
// import { useEffect, useState } from "react";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import axios from "axios";

// // import { ToastContainer, toast } from 'react-toastify'
// // import 'react-toastify/dist/ReactToastify.css'

// // import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
// import { Navigate, useNavigate } from "react-router-dom";
// import SimpleTable from "app/views/material-kit/tables/SimpleTable";
// import HomeTable from "./HomeTable";
// import Home2Table from "../Home2Table";

// import ComparisonChart from "../Comparison";
// import ComparisonChart2 from "app/views/charts/echarts/ComparisonChart2";
// import DoughnutChart from "app/views/charts/echarts/Doughnut";
// import AppEchart from "app/views/charts/echarts/AppEchart";
// import { useRule } from "./RuleContext";
// const Container = styled("div")(({ theme }) => ({
//   margin: "30px",
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
//   "& .breadcrumb": {
//     marginBottom: "30px",
//     [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
//   },
// }));

// // const TextField = styled(TextValidator)(() => ({
// //     width: '100%',
// //     marginBottom: '16px',
// // }))

// const Matching = () => {
//   const { rules, setRules } = useRule(); // Access rule state
//   // const [rules, setRules] = useState({
//   //   allowUSID: false, // Add initial state for "Allow USID"
//   //   ledgerKeyword: "",
//   //   statementKeyword: "",
//   //   order: "",
//   //   statementSequence: "",
//   //   ledgerSequence: "",
//   // });
//   const apiUrl = process.env.REACT_APP_API_URL;
//   // const handleRuleChange = (event) => {
//   //   const ruleType = event.target.value;
//   //   setRules({ ...rules, [ruleType]: event.target.checked });
//   //   console.log(`Rule for ${ruleType} set to ${event.target.checked}`);
//   // };
//   const handleRuleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === "checkbox" ? checked : value;
//     setRules((prevRules) => ({ ...prevRules, [name]: newValue }));
//   };
//   const handleInputChange = (event) => {
//     setRules({ ...rules, [event.target.name]: event.target.value });
//   };

//   // Handle form submission

//   const handleSave = async () => {
//     const token = localStorage.getItem("jwtToken");

//     if (!token) {
//       console.error("Authentication token missing. Please log in again.");
//       return;
//     }

//     try {
//       console.log("Request Body:", rules); // Log the rules before sending

//       const response = await axios.post(`${apiUrl}/api/rule`, rules, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Rule saved:", response.data);
//     } catch (error) {
//       console.error(
//         "Error saving rule:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <main style={{ marginBottom: "100px" }}>
//       <Typography
//         sx={{
//           m: "2rem",
//           p: "1rem",
//           bgcolor: "primary.main",
//           color: "white",
//           fontWeight: "bold",
//         }}
//         variant="h4"
//         component="h2"
//       >
//         Reconcilation Keyword
//       </Typography>
//       <Container maxWidth="sm">
//         <FormControl
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             value="New"
//             control={<Radio color="primary" />}
//             label="New"
//           />
//           <FormControlLabel
//             value="Edit"
//             control={<Radio color="primary" />}
//             label="Edit"
//           />
//           <FormControlLabel
//             value="Delete"
//             control={<Radio color="primary" />}
//             label="Delete"
//           />
//         </FormControl>
//         <FormControlLabel
//           control={<Checkbox value="usid" onChange={handleRuleChange} />}
//           label="Allow USID"
//         />
//         <FormControl
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <TextField
//             id="ledger"
//             label="Ledger Keyword"
//             variant="outlined"
//             onChange={handleRuleChange}
//           />
//           <TextField
//             id="statement"
//             label="Statement Keyword"
//             variant="outlined"
//           />
//           <TextField
//             id="order"
//             label="Order (1,2...)"
//             variant="outlined"
//             onChange={handleRuleChange}
//           />
//           <TextField
//             id="statement-sequence"
//             label="Statement Sequence (Optional)"
//             variant="outlined"
//             onChange={handleRuleChange}
//           />
//           <TextField
//             id="ledger-sequence"
//             label="Ledger Sequence (Optional)"
//             variant="outlined"
//             onChange={handleRuleChange}
//           />
//         </FormControl>
//         <FormControl
//           sx={{
//             display: "flex",
//             mt: "1rem",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             control={<Checkbox onChange={handleRuleChange} />}
//             label="For Reversals"
//           />
//           <FormControlLabel
//             control={<Checkbox onChange={handleRuleChange} />}
//             label="Enable Special Characters"
//           />
//           <FormControlLabel
//             control={<Checkbox onChange={handleRuleChange} />}
//             label="Allow Alphanumeric"
//           />
//         </FormControl>
//         <FormControl
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControl
//             sx={{
//               display: "flex",
//               justifyContent: "space-around",
//               flexDirection: "row",
//             }}
//           >
//             <FormControlLabel
//               value="Ledger"
//               control={<Checkbox color="primary" onChange={handleRuleChange} />}
//               label="Ledger"
//             />
//             <FormControlLabel
//               value="Statement"
//               control={<Checkbox color="primary" onChange={handleRuleChange} />}
//               label="Statement"
//             />
//             <FormControlLabel
//               value="Both"
//               control={<Checkbox color="primary" onChange={handleRuleChange} />}
//               label="Both"
//             />
//           </FormControl>
//           <FormControl sx={{ display: "flex", justifyContent: "space-around" }}>
//             <TextField
//               sx={{ mb: "1rem" }}
//               id="Delimit-ledger"
//               label="Delimit Ledger"
//               variant="outlined"
//               onChange={handleRuleChange}
//             />
//             <TextField
//               id="Delimit-statement"
//               label="Delimit Statement"
//               variant="outlined"
//               onChange={handleRuleChange}
//             />
//           </FormControl>
//         </FormControl>

//         <FormControl
//           sx={{
//             mt: "1.5rem",
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             value="Exact References"
//             control={<Radio color="primary" onChange={handleRuleChange} />}
//             label="Exact References"
//           />
//           <FormControlLabel
//             value="Sub-characters"
//             control={<Radio color="primary" onChange={handleRuleChange} />}
//             label="Sub-characters"
//           />
//         </FormControl>
//         <FormControl
//           sx={{
//             mt: "1rem",
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControl>
//             <Typography variant="h5" sx={{ mb: ".5rem" }}>
//               Ledger:
//             </Typography>
//             <TextField
//               sx={{ mb: "1rem", width: "20rem" }}
//               id="ledger-sequence"
//               label="No of characters to omit after a word"
//               variant="outlined"
//               onChange={handleRuleChange}
//             />
//             <TextField
//               id="ledger-sequence"
//               label="No of characters to count after a word"
//             />
//           </FormControl>
//           <FormControl>
//             <Typography variant="h5" sx={{ mb: ".5rem" }}>
//               Statement:
//             </Typography>
//             <TextField
//               sx={{ mb: "1rem", width: "20rem" }}
//               id="ledger-sequence"
//               label="No of characters to omit after a word"
//               variant="outlined"
//               onChange={handleRuleChange}
//             />
//             <TextField
//               id="ledger-sequence"
//               label="No of characters to count after a word"
//               onChange={handleRuleChange}
//             />
//           </FormControl>
//         </FormControl>
//         <FormControl
//           sx={{
//             mt: "1rem",
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             control={<Checkbox onChange={handleRuleChange} />}
//             label="Use Extended Settings"
//           />
//           <TextField
//             id="ledger-sequence"
//             label="No of matches details"
//             onChange={handleRuleChange}
//           />
//         </FormControl>
//         <FormControl
//           sx={{
//             mt: "1rem",
//             display: "flex",
//             justifyContent: "end",
//             alignItems: "end",
//             flexDirection: "row",
//           }}
//         >
//           <Button variant="contained" onClick={handleSave}>
//             Save
//           </Button>
//           <Button variant="contained" sx={{ ml: "2rem" }}>
//             Cancel
//           </Button>
//         </FormControl>
//       </Container>
//     </main>
//   );
// };

// export default Matching;

import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
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
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Span } from "app/components/Typography";
import { useContext, useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Navigate, useNavigate } from "react-router-dom";
import SimpleTable from "app/views/material-kit/tables/SimpleTable";
import HomeTable from "./HomeTable";
import Home2Table from "../Home2Table";

import ComparisonChart from "../Comparison";
import ComparisonChart2 from "app/views/charts/echarts/ComparisonChart2";
import DoughnutChart from "app/views/charts/echarts/Doughnut";
import AppEchart from "app/views/charts/echarts/AppEchart";
import { useRule } from "./RuleContext";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

// const TextField = styled(TextValidator)(() => ({
//     width: '100%',
//     marginBottom: '16px',
// }))

// const Matching = () => {
//   const { rules, setRules } = useRule(); // Access rule state

//   const initialRulesState = {
//     allowUSID: false,
//     ledgerKeyword: '',
//     statementKeyword: '',
//     order: '',
//     statementSequence: '',
//     ledgerSequence: '',
//     // ...other fields
// };
//   const apiUrl = process.env.REACT_APP_API_URL;

//   // Handle changes for both checkboxes and input fields
//   const handleRuleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === "checkbox" ? checked : value;
//     setRules((prevRules) => ({ ...prevRules, [name]: newValue }));
//   };

//   // Handle form submission
//   const handleSave = async () => {
//     const token = localStorage.getItem("jwtToken");

//     if (!token) {
//       console.error("Authentication token missing. Please log in again.");
//       return;
//     }
//     const { ledgerKeyword, statementKeyword, order } = rules;
//         if (!ledgerKeyword || !statementKeyword || !order) {
//             console.error("Missing required fields: ledgerKeyword, statementKeyword, and/or order.");
//             return;
//         }

//     try {
//       console.log("Request Body:", rules); // Log the rules before sending

//       const response = await axios.post(`${apiUrl}/api/rule`, rules, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Rule saved:", response.data);
//     } catch (error) {
//       console.error(
//         "Error saving rule:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <main style={{ marginBottom: "100px" }}>
//       <Typography
//         sx={{
//           m: "2rem",
//           p: "1rem",
//           bgcolor: "primary.main",
//           color: "white",
//           fontWeight: "bold",
//         }}
//         variant="h4"
//         component="h2"
//       >
//         Reconciliation Keyword
//       </Typography>
//       <Container maxWidth="sm">
//         <FormControl
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             value="New"
//             control={<Radio color="primary" />}
//             label="New"
//             name="action"
//             onChange={handleRuleChange}
//           />
//           <FormControlLabel
//             value="Edit"
//             control={<Radio color="primary" />}
//             label="Edit"
//             name="action"
//             onChange={handleRuleChange}
//           />
//           <FormControlLabel
//             value="Delete"
//             control={<Radio color="primary" />}
//             label="Delete"
//             name="action"
//             onChange={handleRuleChange}
//           />
//         </FormControl>
//         <FormControlLabel
//           control={
//             <Checkbox
//               name="allowUSID"
//               checked={rules.allowUSID}
//               onChange={handleRuleChange}
//             />
//           }
//           label="Allow USID"
//         />
//         <FormControl
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <TextField
//             name="ledgerKeyword"
//             label="Ledger Keyword"
//             variant="outlined"
//             value={rules.ledgerKeyword}
//             onChange={handleRuleChange}
//           />
//           <TextField
//             name="statementKeyword"
//             label="Statement Keyword"
//             variant="outlined"
//             value={rules.statementKeyword}
//             onChange={handleRuleChange}
//           />
//           <TextField
//             name="order"
//             label="Order (1,2...)"
//             variant="outlined"
//             value={rules.order}
//             onChange={handleRuleChange}
//           />
//           <TextField
//             name="statementSequence"
//             label="Statement Sequence (Optional)"
//             variant="outlined"
//             value={rules.statementSequence}
//             onChange={handleRuleChange}
//           />
//           <TextField
//             name="ledgerSequence"
//             label="Ledger Sequence (Optional)"
//             variant="outlined"
//             value={rules.ledgerSequence}
//             onChange={handleRuleChange}
//           />
//         </FormControl>
//         <FormControl
//           sx={{
//             display: "flex",
//             mt: "1rem",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             control={
//               <Checkbox
//                 name="forReversals"
//                 checked={rules.forReversals}
//                 onChange={handleRuleChange}
//               />
//             }
//             label="For Reversals"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 name="enableSpecialChars"
//                 checked={rules.enableSpecialChars}
//                 onChange={handleRuleChange}
//               />
//             }
//             label="Enable Special Characters"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 name="allowAlphanumeric"
//                 checked={rules.allowAlphanumeric}
//                 onChange={handleRuleChange}
//               />
//             }
//             label="Allow Alphanumeric"
//           />
//         </FormControl>
//         <FormControl
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControl
//             sx={{
//               display: "flex",
//               justifyContent: "space-around",
//               flexDirection: "row",
//             }}
//           >
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="ledger"
//                   checked={rules.ledger}
//                   onChange={handleRuleChange}
//                 />
//               }
//               label="Ledger"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="statement"
//                   checked={rules.statement}
//                   onChange={handleRuleChange}
//                 />
//               }
//               label="Statement"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="both"
//                   checked={rules.both}
//                   onChange={handleRuleChange}
//                 />
//               }
//               label="Both"
//             />
//           </FormControl>
//           <FormControl sx={{ display: "flex", justifyContent: "space-around" }}>
//             <TextField
//               name="delimitLedger"
//               label="Delimit Ledger"
//               variant="outlined"
//               value={rules.delimitLedger}
//               onChange={handleRuleChange}
//             />
//             <TextField
//               name="delimitStatement"
//               label="Delimit Statement"
//               variant="outlined"
//               value={rules.delimitStatement}
//               onChange={handleRuleChange}
//             />
//           </FormControl>
//         </FormControl>

//         <FormControl
//           sx={{
//             mt: "1.5rem",
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             control={
//               <Radio
//                 name="referenceType"
//                 value="Exact References"
//                 checked={rules.referenceType === "Exact References"}
//                 onChange={handleRuleChange}
//               />
//             }
//             label="Exact References"
//           />
//           <FormControlLabel
//             control={
//               <Radio
//                 name="referenceType"
//                 value="Sub-characters"
//                 checked={rules.referenceType === "Sub-characters"}
//                 onChange={handleRuleChange}
//               />
//             }
//             label="Sub-characters"
//           />
//         </FormControl>
//         <FormControl
//           sx={{
//             mt: "1rem",
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControl>
//             <Typography variant="h5" sx={{ mb: ".5rem" }}>
//               Ledger:
//             </Typography>
//             <TextField
//               name="ledgerOmitChars"
//               label="No of characters to omit after a word"
//               variant="outlined"
//               value={rules.ledgerOmitChars}
//               onChange={handleRuleChange}
//             />
//             <TextField
//               name="ledgerCountChars"
//               label="No of characters to count after a word"
//               variant="outlined"
//               value={rules.ledgerCountChars}
//               onChange={handleRuleChange}
//             />
//           </FormControl>
//           <FormControl>
//             <Typography variant="h5" sx={{ mb: ".5rem" }}>
//               Statement:
//             </Typography>
//             <TextField
//               name="statementOmitChars"
//               label="No of characters to omit after a word"
//               variant="outlined"
//               value={rules.statementOmitChars}
//               onChange={handleRuleChange}
//             />
//             <TextField
//               name="statementCountChars"
//               label="No of characters to count after a word"
//               variant="outlined"
//               value={rules.statementCountChars}
//               onChange={handleRuleChange}
//             />
//           </FormControl>
//         </FormControl>
//         <FormControl
//           sx={{
//             mt: "1rem",
//             display: "flex",
//             justifyContent: "space-around",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             control={
//               <Checkbox
//                 name="useExtendedSettings"
//                 checked={rules.useExtendedSettings}
//                 onChange={handleRuleChange}
//               />
//             }
//             label="Use Extended Settings"
//           />
//           <TextField
//             name="noOfMatches"
//             label="No of matches details"
//             variant="outlined"
//             value={rules.noOfMatches}
//             onChange={handleRuleChange}
//           />
//         </FormControl>
//         <FormControl
//           sx={{
//             mt: "1rem",
//             display: "flex",
//             justifyContent: "end",
//             alignItems: "end",
//             flexDirection: "row",
//           }}
//         >
//           <Button variant="contained" onClick={handleSave}>
//             Save
//           </Button>
//           <Button variant="contained" sx={{ ml: "2rem" }}>
//             Cancel
//           </Button>
//         </FormControl>
//       </Container>
//     </main>
//   );
// };

const Matching = () => {
  const initialRulesState = {
    allowUSID: false,
    ledgerKeyword: "",
    statementKeyword: "",
    order: "",
    statementSequence: "",
    ledgerSequence: "",
    // ...other fields
  };
  const { currentSession } = useContext(SessionContext);
  console.log("Current Session:", currentSession);

  // const { rules, setRules } = useRule(); // Access rule state
  const [rules, setRules] = useState(initialRulesState);

  const apiUrl = process.env.REACT_APP_API_URL;

  // Handle changes for both checkboxes and input fields
  const handleRuleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setRules((prevRules) => ({ ...prevRules, [name]: newValue }));
  };

  // // Handle form submission
  // const handleSave = async () => {
  //   const token = localStorage.getItem("jwtToken");

  //   if (!token) {
  //     console.error("Authentication token missing. Please log in again.");
  //     return;
  //   }

  //   const uploadSessionId =
  //   latestLedger?.uploadSessionId || latestStatement?.uploadSessionId;

  // if (!uploadSessionId) {
  //   console.error("No uploadSessionId found in the latest ledger or statement.");
  //   return;
  // }
  //   // Ensure these IDs are set appropriately (e.g., from the current session or context)
  //   const requestBody = {
  //     ...rules, // existing rules
  //     uploadSessionId: uploadSessionId, // Extracted from matched items
  //     switchId: currentSession._id,
  //   };

  //   try {
  //     console.log("Request Body:", requestBody); // Log the rules before sending

  //     const response = await axios.post(`${apiUrl}/api/rule`, requestBody, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     console.log("Rule saved:", response.data);
  //   } catch (error) {
  //     console.error(
  //       "Error saving rule:",
  //       error.response ? error.response.data : error.message
  //     );
  //   }
  // };
  const handleSave = async () => {
    const token = localStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;

    if (!token) {
      console.error("Authentication token missing. Please log in again.");
      return;
    }

    if (!currentSession) {
      console.error("Current session is missing.");
      return;
    }

    try {
      const switchId = currentSession._id;

      // Fetch the latest ledger and statement data
      const [ledgerResponse, statementResponse] = await Promise.all([
        axios.get(`${apiUrl}/api/ledger/${switchId}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${apiUrl}/api/statements/${switchId}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const latestLedger = Array.isArray(ledgerResponse.data)
        ? ledgerResponse.data[0]
        : ledgerResponse.data;
      const latestStatement = Array.isArray(statementResponse.data)
        ? statementResponse.data[0]
        : statementResponse.data;

      // Extract the uploadSessionId from the latest ledger and statement
      const uploadSessionId =
        latestLedger?.uploadSessionId || latestStatement?.uploadSessionId;

      if (!uploadSessionId) {
        console.error(
          "No uploadSessionId found in the latest ledger or statement."
        );
        return;
      }
      const ledgerSessionId = latestLedger?.uploadSessionId;
      const statementSessionId = latestStatement?.uploadSessionId;

      // Combine both session IDs, filtering out any undefined values
      const uploadSessionIds = [ledgerSessionId, statementSessionId].filter(
        Boolean
      );

      // Prepare the request body with rules and IDs
      const requestBody = {
        ...rules,
        uploadSessionIds, // Send the array of session IDs
        switchId: switchId,
      };

      // // Prepare the request body with rules and IDs
      // const requestBody = {
      //   ...rules, // existing rules state
      //   // uploadSessionId: uploadSessionId, // The extracted upload session ID
      //   uploadSessionIds: [uploadSessionId],
      //   switchId: switchId, // The switch ID from the current session
      // };

      console.log("Request Body:", requestBody); // Log the request body

      // Send the rule save request to the backend
      const response = await axios.post(`${apiUrl}/api/rule`, requestBody, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Rule saved successfully:", response.data);
    } catch (error) {
      console.error(
        "Error saving rule:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <main style={{ marginBottom: "100px" }}>
      <Typography
        sx={{
          m: "2rem",
          p: "1rem",
          bgcolor: "primary.main",
          color: "white",
          fontWeight: "bold",
        }}
        variant="h4"
        component="h2"
      >
        Reconciliation Keyword
      </Typography>
      <Container maxWidth="sm">
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            value="New"
            control={<Radio color="primary" />}
            label="New"
            name="action"
            onChange={handleRuleChange}
          />
          <FormControlLabel
            value="Edit"
            control={<Radio color="primary" />}
            label="Edit"
            name="action"
            onChange={handleRuleChange}
          />
          <FormControlLabel
            value="Delete"
            control={<Radio color="primary" />}
            label="Delete"
            name="action"
            onChange={handleRuleChange}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="allowUSID"
              checked={rules.allowUSID}
              onChange={handleRuleChange}
            />
          }
          label="Allow USID"
        />
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <TextField
            name="ledgerKeyword"
            label="Ledger Keyword"
            variant="outlined"
            value={rules.ledgerKeyword}
            onChange={handleRuleChange}
          />
          <TextField
            name="statementKeyword"
            label="Statement Keyword"
            variant="outlined"
            value={rules.statementKeyword}
            onChange={handleRuleChange}
          />
          <TextField
            name="order"
            label="Order (1,2...)"
            variant="outlined"
            value={rules.order}
            onChange={handleRuleChange}
          />
          <TextField
            name="statementSequence"
            label="Statement Sequence (Optional)"
            variant="outlined"
            value={rules.statementSequence}
            onChange={handleRuleChange}
          />
          <TextField
            name="ledgerSequence"
            label="Ledger Sequence (Optional)"
            variant="outlined"
            value={rules.ledgerSequence}
            onChange={handleRuleChange}
          />
        </FormControl>
        <FormControl
          sx={{
            display: "flex",
            mt: "1rem",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="forReversals"
                checked={rules.forReversals}
                onChange={handleRuleChange}
              />
            }
            label="For Reversals"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="enableSpecialChars"
                checked={rules.enableSpecialChars}
                onChange={handleRuleChange}
              />
            }
            label="Enable Special Characters"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="allowAlphanumeric"
                checked={rules.allowAlphanumeric}
                onChange={handleRuleChange}
              />
            }
            label="Allow Alphanumeric"
          />
        </FormControl>
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="ledger"
                  checked={rules.ledger}
                  onChange={handleRuleChange}
                />
              }
              label="Ledger"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="statement"
                  checked={rules.statement}
                  onChange={handleRuleChange}
                />
              }
              label="Statement"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="both"
                  checked={rules.both}
                  onChange={handleRuleChange}
                />
              }
              label="Both"
            />
          </FormControl>
          <FormControl sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField
              name="delimitLedger"
              label="Delimit Ledger"
              variant="outlined"
              value={rules.delimitLedger}
              onChange={handleRuleChange}
            />
            <TextField
              name="delimitStatement"
              label="Delimit Statement"
              variant="outlined"
              value={rules.delimitStatement}
              onChange={handleRuleChange}
            />
          </FormControl>
        </FormControl>

        <FormControl
          sx={{
            mt: "1.5rem",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            control={
              <Radio
                name="referenceType"
                value="Exact References"
                checked={rules.referenceType === "Exact References"}
                onChange={handleRuleChange}
              />
            }
            label="Exact References"
          />
          <FormControlLabel
            control={
              <Radio
                name="referenceType"
                value="Sub-characters"
                checked={rules.referenceType === "Sub-characters"}
                onChange={handleRuleChange}
              />
            }
            label="Sub-characters"
          />
        </FormControl>
        <FormControl
          sx={{
            mt: "1rem",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <FormControl>
            <Typography variant="h5" sx={{ mb: ".5rem" }}>
              Ledger:
            </Typography>
            <TextField
              name="ledgerOmitChars"
              label="No of characters to omit after a word"
              variant="outlined"
              value={rules.ledgerOmitChars}
              onChange={handleRuleChange}
            />
            <TextField
              name="ledgerCountChars"
              label="No of characters to count after a word"
              variant="outlined"
              value={rules.ledgerCountChars}
              onChange={handleRuleChange}
            />
          </FormControl>
          <FormControl>
            <Typography variant="h5" sx={{ mb: ".5rem" }}>
              Statement:
            </Typography>
            <TextField
              name="statementOmitChars"
              label="No of characters to omit after a word"
              variant="outlined"
              value={rules.statementOmitChars}
              onChange={handleRuleChange}
            />
            <TextField
              name="statementCountChars"
              label="No of characters to count after a word"
              variant="outlined"
              value={rules.statementCountChars}
              onChange={handleRuleChange}
            />
          </FormControl>
        </FormControl>
        <FormControl
          sx={{
            mt: "1rem",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="useExtendedSettings"
                checked={rules.useExtendedSettings}
                onChange={handleRuleChange}
              />
            }
            label="Use Extended Settings"
          />
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Save
          </Button>
        </FormControl>
      </Container>
    </main>
  );
};
export default Matching;
