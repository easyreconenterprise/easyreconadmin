// import React, { useState, useEffect } from 'react' // Import useEffect
// import { Button } from '@mui/material'
// import axios from 'axios'
// import UnMappedData from './UnmappedData' // Import the UnMappedData component
// import { useNavigate } from 'react-router-dom'
// import ExcelToJson from './ExcelToJson'

// const Trial3 = () => {
//     const navigate = useNavigate()
//     const [data, setData] = useState([])
//     const [isNext, setIsNext] = useState(false)
//     const [categorizedData, setCategorizedData] = useState([])
//     const [isMap, setIsMap] = useState(false)

//     const mappedHeaders =
//         categorizedData.length > 0 ? Object.keys(categorizedData[0]) : []

//     const handleDataChange = (jsonData) => {
//         setData(jsonData)
//     }
//     const apiUrl = process.env.REACT_APP_API_URL

//     // const checkIfDataExistsInDatabase = async () => {
//     //   try {
//     //     const response = await axios.get(
//     //       "http://localhost:5000/api/check-data-exists"
//     //     ); // Use the appropriate API endpoint
//     //     return response.data.exists; // Assuming your API returns an "exists" property
//     //   } catch (error) {
//     //     console.error("Error checking data in the database:", error);
//     //     return false;
//     //   }
//     // };

//     const handleNextClick = async () => {
//         try {
//             if (data.length > 0) {
//                 // ... Your existing code for uploading and categorizing data ...
//                 const formData = new FormData()
//                 formData.append(
//                     'csvFile',
//                     new Blob([JSON.stringify(data)], {
//                         type: 'application/json',
//                     })
//                 )
//                 // Replace with your actual JWT token

//                 const jwtToken = localStorage.getItem('jwtToken')
//                 console.log('Retrieved JWT Token:', jwtToken)

//                 const headers = {
//                     Authorization: `Bearer ${jwtToken}`,
//                 }

//                 const response = await axios.post(
//                     `${apiUrl}/api/upload`,
//                     formData,
//                     {
//                         headers,
//                     }
//                 )

//                 // Assuming your server responds with the categorized data
//                 const categorizedDataFromServer = response.data

//                 // Update your state with the categorized data
//                 setCategorizedData(categorizedDataFromServer)

//                 setIsNext(true)

//                 // Navigate to the UnMappedData page
//                 navigate('/dashboard/unmapped')
//             } else {
//                 // If there's no data, you can show an error message or prevent navigation
//                 console.log(
//                     'No data uploaded. Cannot navigate to UnmappedData page.'
//                 )
//                 // Alternatively, you can navigate to a different page or show an error message
//                 // navigate("/dashboard/error-page");
//             }
//         } catch (err) {
//             console.error('Error uploading data:', err)
//         }
//     }

//     // const checkIfDataExistsInDatabase = async () => {
//     //   try {
//     //     const response = await axios.get(
//     //       "http://localhost:5000/api/check-data-exists"
//     //     ); // Use the appropriate API endpoint
//     //     return response.data.exists; // Assuming your API returns an "exists" property
//     //   } catch (error) {
//     //     console.error("Error checking data in the database:", error);
//     //     return false;
//     //   }
//     // };
//     const checkIfDataExistsInDatabase = async () => {
//         try {
//             const jwtToken = localStorage.getItem('jwtToken')
//             const headers = {
//                 Authorization: `Bearer ${jwtToken}`,
//             }

//             const response = await axios.get(
//                 `${apiUrl}/api/check-data-exists`,
//                 {
//                     headers,
//                 }
//             ) // Use the appropriate API endpoint
//             return response.data.exists // Assuming your API returns an "exists" property
//         } catch (error) {
//             console.error('Error checking data in the database:', error)
//             return false
//         }
//     }

//     useEffect(() => {
//         let isMounted = true

//         const fetchDataExists = async () => {
//             try {
//                 const exists = await checkIfDataExistsInDatabase()
//                 if (isMounted && exists) {
//                     setIsNext(true)
//                     navigate('/dashboard/unmapped')
//                 }
//             } catch (error) {
//                 console.error('Error checking data in the database:', error)
//             }
//         }

//         fetchDataExists()

//         // Cleanup function to set isMounted to false when the component unmounts
//         return () => {
//             isMounted = false
//         }
//     }, [])

//     return (
//         <main>
//             {!isNext && (
//                 <section style={{ marginTop: '50px' }}>
//                     <b>
//                         <h2
//                             style={{
//                                 fontSize: '20px',
//                                 marginBottom: '10px',
//                                 marginLeft: '30px',
//                                 fontWeight: '800',
//                                 textTransform: 'uppercase',
//                             }}
//                         >
//                             Ledger Excel Upload for Demo Account
//                         </h2>
//                     </b>
//                     <h2
//                         style={{
//                             fontSize: '15px',
//                             marginBottom: '30px',
//                             marginLeft: '30px',
//                         }}
//                     >
//                         Valid Format or Order(Postdate, Validate, Details,
//                         Amount or Postdate, Validate, Details, Debit, Credit)
//                     </h2>
//                     <ExcelToJson
//                         setData={setData}
//                         onDataChange={handleDataChange}
//                         style={{ marginTop: '100px' }}
//                     />
//                 </section>
//             )}
//             {isNext && (
//                 <section>
//                     {/* Render components for UnMappedData page */}
//                     <UnMappedData
//                         setCategorizedData={setCategorizedData}
//                         setData={setData}
//                         categorizedData={categorizedData}
//                         isMap={isMap}
//                         setIsMap={setIsMap}
//                         mappedHeaders={mappedHeaders}
//                     />
//                 </section>
//             )}
//             {!isNext && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNextClick}
//                     style={{ marginLeft: '50px' }}
//                 >
//                     PROCESS
//                 </Button>
//             )}

//             <Button
//                 variant="contained"
//                 color="primary"
//                 style={{ marginLeft: '50px' }}
//             >
//                 CANCEL
//             </Button>
//             <Button
//                 variant="contained"
//                 color="primary"
//                 style={{ marginLeft: '50px' }}
//             >
//                 SKIP
//             </Button>
//         </main>
//     )
// }

// export default Trial3

// import React, { useState, useEffect, useContext } from "react";
// import { Button } from "@mui/material";
// import axios from "axios";
// import UnMappedData from "./UnmappedData";
// import { useNavigate } from "react-router-dom";
// import ExcelToJson from "./ExcelToJson";
// import { SessionContext } from "app/components/MatxLayout/SwitchContext";

// const Trial3 = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [isNext, setIsNext] = useState(false);
//   const [categorizedData, setCategorizedData] = useState([]);
//   const [isMap, setIsMap] = useState(false);

//   const { currentSession } = useContext(SessionContext);
//   console.log("Current session before uploading:", currentSession);

//   const handleDataChange = (jsonData) => {
//     setData(jsonData);
//   };

//   const apiUrl = process.env.REACT_APP_API_URL;

//   //   const handleNextClick = async () => {
//   //     try {
//   //       if (data.length > 0) {
//   //         const formData = new FormData();
//   //         formData.append(
//   //           "stmFile",
//   //           new Blob([JSON.stringify(data)], {
//   //             type: "application/json",
//   //           })
//   //         );
//   //         formData.append("affiliate", currentSession.affiliate);
//   //         formData.append("domain", currentSession.domain);
//   //         formData.append("account", currentSession.account);
//   //         formData.append("month", currentSession.month);
//   //         formData.append("switchId", currentSession._id);

//   //         const jwtToken = localStorage.getItem("jwtToken");
//   //         const headers = {
//   //           Authorization: `Bearer ${jwtToken}`,
//   //         };

//   //         const response = await axios.post(`${apiUrl}/api/upload`, formData, {
//   //           headers,
//   //         });

//   //         console.log("Response after upload:", response.data); // Log the response from the server

//   //         const categorizedDataFromServer = response.data;
//   //         setCategorizedData(categorizedDataFromServer);
//   //         setIsNext(true);
//   //         console.log("Navigating to /dashboard/unmapped...");
//   //         navigate("/dashboard/unmapped");
//   //       } else {
//   //         console.log("No data uploaded. Cannot navigate to UnmappedData page.");
//   //       }
//   //     } catch (err) {
//   //       console.error("Error uploading data:", err);
//   //     }
//   //   };

//   const handleNextClick = async () => {
//     try {
//       // Always upload without checking if data exists
//       const formData = new FormData();
//       formData.append(
//         "stmFile",
//         new Blob([JSON.stringify(data)], {
//           type: "application/json",
//         })
//       );

//       // formData.append("csvFile", file);
//       // formData.append("switch", switchId); // Add the switch ID
//       formData.append("csvFile", file);
//       formData.append("affiliate", currentSession.affiliate);
//       formData.append("domain", currentSession.domain);
//       formData.append("account", currentSession.account);
//       formData.append("month", currentSession.month);
//       formData.append("switch", currentSession._id);

//       const jwtToken = localStorage.getItem("jwtToken");
//       const headers = {
//         Authorization: `Bearer ${jwtToken}`,
//       };

//       const response = await axios.post(`${apiUrl}/api/upload`, formData, {
//         headers,
//       });

//       console.log("Response after upload:", response.data); // Log the response from the server

//       const categorizedDataFromServer = response.data;
//       setCategorizedData(categorizedDataFromServer);
//       setIsNext(true);
//       console.log("Navigating to /dashboard/unmapped...");
//       navigate("/dashboard/unmapped");
//     } catch (err) {
//       console.error("Error uploading data:", err);
//     }
//   };

//   //   const checkIfDataExistsInDatabase = async () => {
//   //     try {
//   //       const jwtToken = localStorage.getItem("jwtToken");
//   //       const headers = {
//   //         Authorization: `Bearer ${jwtToken}`,
//   //       };

//   //       const response = await axios.get(`${apiUrl}/api/check-data-exists`, {
//   //         headers,
//   //       });

//   //       return response.data.exists;
//   //     } catch (error) {
//   //       console.error("Error checking data in the database:", error);
//   //       return false;
//   //     }
//   //   };

//   //   useEffect(() => {
//   //     let isMounted = true;

//   //     const fetchDataExists = async () => {
//   //       try {
//   //         const exists = await checkIfDataExistsInDatabase();
//   //         if (isMounted && exists) {
//   //           setIsNext(true);
//   //           console.log("Navigating to /dashboard/unmapped...");
//   //           navigate("/dashboard/unmapped");
//   //         }
//   //       } catch (error) {
//   //         console.error("Error checking data in the database:", error);
//   //       }
//   //     };

//   //     fetchDataExists();

//   //     return () => {
//   //       isMounted = false;
//   //     };
//   //   }, []);

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
//               Ledger Excel Upload for Demo Account
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
//             setIsNext={setIsNext}
//             onDataChange={handleDataChange}
//             style={{ marginTop: "100px" }}
//           />
//         </section>
//       )}
//       {isNext && (
//         <section>
//           <UnMappedData
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

// export default Trial3;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import ExcelToJson from "./ExcelToJson";
import UnMappedData from "./UnmappedData";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

const Trial3 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [categorizedData, setCategorizedData] = useState([]);
  const [isMap, setIsMap] = useState(false);
  const [file, setFile] = useState(null); // Add state for the file

  const { currentSession } = useContext(SessionContext);
  console.log("Current session before uploading:", currentSession);

  const handleDataChange = (jsonData) => {
    setData(jsonData);
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleNextClick = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("csvFile", file); // Ensure this matches the backend field name
        formData.append("switch", currentSession._id); // Ensure this is correctly included

        const jwtToken = localStorage.getItem("jwtToken");
        const headers = {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "multipart/form-data",
        };

        const response = await axios.post(`${apiUrl}/api/upload`, formData, {
          headers,
        });

        console.log("Response after upload:", response.data);
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
  const headers = ["PostDate", "ValDate", "Details", "Debit", "Credit", "USID"]; // Define headers array

  const filteredData = data.map(({ switch: switchId, ...rest }) => rest); // Filter out 'switch' field

  return (
    <main>
      {!isNext && (
        <section style={{ marginTop: "50px" }}>
          <b>
            <h2
              style={{
                fontSize: "20px",
                marginBottom: "10px",
                marginLeft: "30px",
                fontWeight: "800",
                textTransform: "uppercase",
              }}
            >
              Ledger Excel Upload for Demo Account
            </h2>
          </b>
          <h2
            style={{
              fontSize: "15px",
              marginBottom: "30px",
              marginLeft: "30px",
            }}
          >
            Valid Format or Order(Postdate, Validate, Details, Amount or
            Postdate, Validate, Details, Debit, Credit)
          </h2>
          <ExcelToJson
            setData={setData}
            setFile={setFile} // Pass setFile to update the file
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

      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "50px" }}
      >
        CANCEL
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "50px" }}
      >
        SKIP
      </Button>
    </main>
  );
};

export default Trial3;
