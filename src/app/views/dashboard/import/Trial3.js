import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import ExcelToJson from "./ExcelToJson";
import UnMappedData from "./UnmappedData";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

// const Trial3 = ({ session }) => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [isNext, setIsNext] = useState(false);
//   const [categorizedData, setCategorizedData] = useState([]);
//   const [isMap, setIsMap] = useState(false);
//   const [file, setFile] = useState(null); // Add state for the file
//   const [accountTitle, setAccountTitle] = useState("");

//   const { currentSession } = useContext(SessionContext);
//   console.log("Current session before uploading:", currentSession);

//   const handleDataChange = (jsonData) => {
//     setData(jsonData);
//   };

//   const apiUrl = process.env.REACT_APP_API_URL;

//   const handleNextClick = async () => {
//     try {
//       if (file) {
//         const formData = new FormData();
//         formData.append("csvFile", file); // Ensure this matches the backend field name
//         formData.append("switch", currentSession._id); // Ensure this is correctly included

//         const jwtToken = localStorage.getItem("jwtToken");
//         const headers = {
//           Authorization: `Bearer ${jwtToken}`,
//           "Content-Type": "multipart/form-data",
//         };

//         const response = await axios.post(`${apiUrl}/api/upload`, formData, {
//           headers,
//         });

//         console.log("Response after upload:", response.data);
//         setCategorizedData(response.data);
//         setIsNext(true);
//         navigate("/dashboard/unmapped");
//       } else {
//         console.log("No file selected. Cannot proceed.");
//       }
//     } catch (err) {
//       console.error("Error uploading data:", err);
//     }
//   };
//   const headers = ["PostDate", "ValDate", "Details", "Debit", "Credit", "USID"]; // Define headers array

//   const filteredData = data.map(({ switch: switchId, ...rest }) => rest); // Filter out 'switch' field
//   // Assuming session contains the account ID
//   const accountId = session?.account;

//   useEffect(() => {
//     const fetchAccountDetails = async () => {
//       if (accountId) {
//         try {
//           const token = localStorage.getItem("jwtToken");
//           const response = await axios.get(
//             `${apiUrl}/api/account/${accountId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           // Assuming the API response contains the accountTitle
//           const account = response.data;
//           if (account && account.accountTitle) {
//             setAccountTitle(account.accountTitle);
//           } else {
//             setAccountTitle("Account Not Found");
//           }
//         } catch (err) {
//           console.error("Error fetching account details:", err);

//           setAccountTitle("Error Fetching Account");
//         }
//       }
//     };

//     fetchAccountDetails();
//   }, [accountId, apiUrl]);

//   return (
//     <main>
//       {!isNext && (
//         <section style={{ marginTop: "50px" }}>
//           <b>
//             <h2
//               style={{
//                 fontSize: "20px",
//                 marginBottom: "10px",
//                 marginLeft: "30px",
//                 fontWeight: "800",
//                 textTransform: "uppercase",
//               }}
//             >
//               Ledger Excel Upload for {accountTitle} Account
//             </h2>
//           </b>
//           <h2
//             style={{
//               fontSize: "15px",
//               marginBottom: "30px",
//               marginLeft: "30px",
//             }}
//           >
//             Valid Format or Order(Postdate, Validate, Details, Amount or
//             Postdate, Validate, Details, Debit, Credit)
//           </h2>
//           <ExcelToJson
//             setData={setData}
//             setFile={setFile} // Pass setFile to update the file
//             onDataChange={handleDataChange}
//             style={{ marginTop: "100px" }}
//           />
//         </section>
//       )}
//       {isNext && (
//         <section>
//           <UnMappedData
//             data={filteredData}
//             headers={headers}
//             setCategorizedData={setCategorizedData}
//             setData={setData}
//             categorizedData={categorizedData}
//             isMap={isMap}
//             setIsMap={setIsMap}

//           />
//         </section>
//       )}
//       {!isNext && (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleNextClick}
//           style={{ marginLeft: "50px" }}
//         >
//           PROCESS
//         </Button>
//       )}

//       <Button
//         variant="contained"
//         color="primary"
//         style={{ marginLeft: "50px" }}
//       >
//         CANCEL
//       </Button>
//       <Button
//         variant="contained"
//         color="primary"
//         style={{ marginLeft: "50px" }}
//       >
//         SKIP
//       </Button>
//     </main>
//   );
// };
const Trial3 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [categorizedData, setCategorizedData] = useState([]);
  const [isMap, setIsMap] = useState(false);
  const [file, setFile] = useState(null); // Add state for the file
  const [accountTitle, setAccountTitle] = useState("");
  const [balanceAsPerLedger, setBalanceAsPerLedger] = useState("0.0"); // Add state for balance

  const { currentSession } = useContext(SessionContext);
  console.log("Session passed to Trial3:", currentSession); // Add this log
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleNextClick = async () => {
    try {
      if (file) {
        setData([]);
        setCategorizedData([]);
        const formData = new FormData();
        formData.append("csvFile", file);
        formData.append("switch", currentSession._id);

        const jwtToken = localStorage.getItem("jwtToken");
        const headers = {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "multipart/form-data",
        };

        const response = await axios.post(`${apiUrl}/api/upload`, formData, {
          headers,
        });

        setCategorizedData(response.data);
        setIsNext(true);
        navigate("/dashboard/unmapped");
      } else {
        console.log("No file selected. Cannot proceed.");
      }
    } catch (err) {
      console.error("Error uploading data:", err);
    }
  };

  useEffect(() => {
    const fetchAccountDetails = async () => {
      if (currentSession?.account) {
        console.log("Fetching account details for:", currentSession.account);
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

          const account = response.data;
          if (account) {
            setAccountTitle(account.accountTitle || "Account Not Found");
            setBalanceAsPerLedger(account.balanceAsPerLedger || "0.0"); // Set the balance here

            console.log("Fetched Balance:", account.balanceAsPerLedger);
          }
        } catch (err) {
          console.error("Error fetching account details:", err);
          setAccountTitle("Error Fetching Account");
        }
      }
    };

    fetchAccountDetails();
  }, [currentSession?.account, apiUrl]);
  const handleDataChange = (jsonData) => {
    setData(jsonData);
  };
  // const filteredData = data.map(({ switch: switchId, ...rest }) => rest);
  const filteredData = data.map(
    ({ switch: switchId, uploadSessionId, ...rest }) => rest
  );

  const headers = ["PostDate", "ValDate", "Details", "Debit", "Credit", "USID"]; // Define headers array
  return (
    <main>
      {!isNext && (
        <section style={{ marginTop: "50px" }}>
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "10px",
              marginLeft: "30px",
              fontWeight: "800",
              textTransform: "uppercase",
            }}
          >
            Ledger Excel Upload for {accountTitle} Account
          </h2>
          <ExcelToJson
            setData={setData}
            setFile={setFile}
            onDataChange={handleDataChange}
            style={{ marginTop: "100px" }}
          />
        </section>
      )}

      {isNext && (
        <section>
          <UnMappedData
            data={filteredData}
            headers={headers}
            setCategorizedData={setCategorizedData}
            setData={setData}
            categorizedData={categorizedData}
            isMap={isMap}
            setIsMap={setIsMap}
          />
        </section>
      )}
      {!isNext && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextClick}
          style={{ marginLeft: "50px" }}
        >
          PROCESS
        </Button>
      )}
    </main>
  );
};

export default Trial3;
