// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import useAuth from "app/hooks/useAuth";
// import EditIcon from "@mui/icons-material/Edit";
// import { SessionContext } from "app/components/MatxLayout/SwitchContext";
// import { useData } from "../DataContext";
// import { useMatchedItems } from "../MatchedItemsContext";
// import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// const ParentMapped = () => {
//   // const [ledgerData, setLedgerData] = useState([]); // For Ledger
//   const { ledgerData, setLedgerData, statementData, setStatementData } =
//     useData();
//   const { matchedItems, setMatchedItems } = useMatchedItems();
//   // const [statementData, setStatementData] = useState([]); // For Statement
//   const [loading, setLoading] = useState(true);
//   const [exactMatches, setExactMatches] = useState([]);
//   const [matchedStatements, setMatchedStatements] = useState([]);
//   const [error, setError] = useState(null);
//   const { logout, user } = useAuth();
//   const { currentSession } = useContext(SessionContext); // Assuming you have this session context
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const [dateFilter, setDateFilter] = useState("allItems"); // Initialize dateFilter state
//   const navigate = useNavigate(); // Hook for navigation

//   useEffect(() => {
//     const fetchLedgerAndStatement = async () => {
//       if (!currentSession) return;

//       const accountId = currentSession.account;
//       const switchId = currentSession._id;
//       const token = localStorage.getItem("jwtToken");

//       if (!token) {
//         setError("Authentication token missing. Please log in again.");
//         return;
//       }

//       try {
//         setLoading(true);
//         console.log("Fetching ledger data for switchId:", switchId);

//         // Fetch ledger data
//         const ledgerResponse = await axios.get(
//           `${apiUrl}/api/ledger/${switchId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Ledger response:", ledgerResponse.data);

//         // If response is an object, convert it into an array to map over
//         // setLedgerData(ledgerResponse.data);
//         setLedgerData(
//           Array.isArray(ledgerResponse.data)
//             ? ledgerResponse.data
//             : [ledgerResponse.data]
//         );

//         console.log("Fetching statement data for switchId:", switchId);

//         // Fetch statement data
//         const statementResponse = await axios.get(
//           `${apiUrl}/api/statements/${switchId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Statement response:", statementResponse.data);

//         setStatementData(
//           Array.isArray(statementResponse.data)
//             ? statementResponse.data
//             : [statementResponse.data]
//         );

//         {
//           console.log("Rendering statementData:", statementData);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchLedgerAndStatement();
//   }, [currentSession, apiUrl, setLedgerData, setStatementData]);

//   const isMatched = (item, type, matchType) => {
//     if (!Array.isArray(matchedItems)) {
//       console.warn("matchedItems is not an array:", matchedItems);
//       return false;
//     }

//     return matchedItems.some((match) => {
//       if (type === "ledger") {
//         if (matchType === "probable") {
//           // Probable match logic
//           return item.USID === match.USID || item.Debit === match.Credit;
//         }
//         if (matchType === "exact") {
//           // Exact match logic
//           return item.Debit === match.Credit && item.USID === match.USID;
//         }
//         if (matchType === "similardetails") {
//           // Similar details match logic
//           return (
//             item.USID === match.USID &&
//             (type === "ledger"
//               ? item.Debit === match.Credit
//               : item.Credit === match.Debit) &&
//             item.PostDate === match.PostDate &&
//             item.Details?.trim().toLowerCase() ===
//               match.Details?.trim().toLowerCase() &&
//             item.ValDate === match.ValDate
//           );
//         }
//       }
//       if (type === "statement") {
//         if (matchType === "probable") {
//           // Probable match logic
//           return item.USID === match.USID || item.Credit === match.Debit;
//         }
//         if (matchType === "exact") {
//           // Exact match logic
//           return item.Credit === match.Debit && item.USID === match.USID;
//         }
//         if (matchType === "similardetails") {
//           // Exact match logic
//           return (
//             item.Debit === match.Credit &&
//             item.USID === match.USID &&
//             item.PostDate === match.PostDate &&
//             item.Details === match.Details &&
//             item.ValDate === match.ValDate
//           );
//         }
//       }
//       if (type === "ledger" || type === "statement") {
//         if (matchType === "manyToOne") {
//           // Many-to-One match logic
//           const relevantMatches = matchedItems.filter(
//             (match) => match.USID === item.USID
//           );

//           if (type === "ledger") {
//             const totalDebit = relevantMatches.reduce(
//               (sum, match) => sum + match.Debit,
//               0
//             );
//             return totalDebit === item.Credit;
//           }

//           if (type === "statement") {
//             const totalCredit = relevantMatches.reduce(
//               (sum, match) => sum + match.Credit,
//               0
//             );
//             return totalCredit === item.Debit;
//           }
//         }
//       }

//       return false;
//     });
//   };

//   const handleDateFilterChange = (event) => {
//     const filter = event.target.value;
//     setDateFilter(filter);

//     if (filter === "unmatched") {
//       navigate(`/dashboard/unmatched-item`); // Navigate to unmatched items route
//     }
//   };

//   useEffect(() => {
//     const fetchMatchedItems = async () => {
//       if (!currentSession) return;

//       const switchId = currentSession._id;
//       const token = localStorage.getItem("jwtToken");

//       if (!token) {
//         setError("Authentication token missing. Please log in again.");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           `${apiUrl}/api/matches/${switchId}?type=${dateFilter}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           const data = response.data.data;
//           // Ensure data has exactMatches and matchedStatements arrays
//           if (Array.isArray(data.exactMatches)) {
//             setExactMatches(data.exactMatches); // Ledger matches
//           } else {
//             console.warn(
//               "Expected an array for exactMatches, but received:",
//               data.exactMatches
//             );
//             setExactMatches([]);
//           }

//           if (Array.isArray(data.matchedStatements)) {
//             setMatchedStatements(data.matchedStatements); // Statement matches
//           } else {
//             console.warn(
//               "Expected an array for matchedStatements, but received:",
//               data.matchedStatements
//             );
//             setMatchedStatements([]);
//           }

//           console.log("Fetched matched items:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching matched items:", error);
//       }
//     };

//     fetchMatchedItems();
//   }, [currentSession, dateFilter, apiUrl]);

//   const filteredItems = Array.isArray(matchedItems)
//     ? matchedItems.filter((item) => {
//         switch (dateFilter) {
//           case "unmatched":
//             return item.status === "unmatched";
//           case "allMatched":
//             return item.status === "matched";
//           case "probable":
//             return item.status === "probable";
//           case "reversal":
//             return item.status === "reversal";
//           case "manualMatched":
//             return item.matchType === "manual";
//           case "autoMatched":
//             return item.matchType === "auto";
//           case "partiallyMatched":
//             return item.status === "partiallyMatched";
//           case "partiallyReversed":
//             return item.status === "partiallyReversed";
//           case "allItems":
//           default:
//             return true; // Return all items if no specific filter is selected
//         }
//       })
//     : []; // Return an empty array if matchedItems is not an array

//   return (
//     <>
//       <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mt: 2 }}>
//         <FormControl size="small" sx={{ mb: 3 }} style={{ width: "30%" }}>
//           <InputLabel id="date-filter-label">All Matches</InputLabel>
//           <Select
//             labelId="date-filter-label"
//             id="date-filter"
//             value={dateFilter}
//             onChange={handleDateFilterChange}
//             label="Select"
//           >
//             <MenuItem value="unmatched">Unmatched Items</MenuItem>
//             <MenuItem value="allMatched">All Matched Items</MenuItem>
//             <MenuItem value="probable">Probable Matched</MenuItem>
//             <MenuItem value="reversal">Reversal</MenuItem>
//             <MenuItem value="manualMatched">All Man-Matched Items</MenuItem>
//             <MenuItem value="autoMatched">All Auto-Matched Items</MenuItem>
//             <MenuItem value="partiallyMatched">
//               All Partially-Matched Items
//             </MenuItem>
//             <MenuItem value="partiallyReversed">
//               All Partially Reversals
//             </MenuItem>
//             <MenuItem value="allItems">All Items</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <div
//         style={{ display: "flex" }}
//         className="containers bottom-scroll-container"
//       >
//         {/* Ledger Section */}
//         <div style={{ flexBasis: "50%", marginRight: "30px" }}>
//           <div
//             style={{
//               margin: "20px 0", // reduce top/bottom margin
//               display: "flex",
//               alignItems: "center",
//               gap: "10px", // reduce space between elements
//               fontWeight: "800",
//             }}
//           >
//             <div>
//               <h5>Ledger</h5>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 borderRadius: "30px", // reduced radius
//                 backgroundColor: "#666666",
//                 padding: "5px 15px", // smaller padding
//                 color: "white",
//               }}
//             >
//               <h5 style={{ margin: "0 10px" }}>Page 1 of 1</h5>
//               <h5 style={{ margin: "0 10px" }}>0 of 38 Records</h5>
//             </div>
//             <div
//               style={{
//                 borderRadius: "30px",
//                 backgroundColor: "#666666",
//                 padding: "5px 10px", // reduced padding
//                 color: "white",
//               }}
//             >
//               <p style={{ margin: 0 }}>369 item(s)</p>
//             </div>
//           </div>

//           <table>
//             <tbody>
//               {(dateFilter === "allMatched" ? exactMatches : ledgerData).map(
//                 (data, index) => (
//                   <tr
//                     key={index}
//                     style={{
//                       backgroundColor:
//                         dateFilter === "allMatched" &&
//                         isMatched(data, "ledger", "exact")
//                           ? "lightblue"
//                           : "white",
//                     }}
//                   >
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td>
//                       <EditIcon /> {/* Edit icon */}
//                     </td>
//                     <td>{data.PostDate}</td>
//                     <td>{data.Details}</td>
//                     <td>{data.Debit}</td>
//                     <td>{data.USID}</td>
//                   </tr>
//                 )
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Statement Data Table */}
//         <Grid item lg={6} md={6} sm={12} xs={12}>
//           <div
//             style={{
//               margin: "20px 0", // reduce top/bottom margin
//               display: "flex",
//               alignItems: "center",
//               gap: "10px", // reduce space between elements
//               fontWeight: "800",
//             }}
//           >
//             <div>
//               <h5>Statement</h5>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 borderRadius: "30px", // reduced radius
//                 backgroundColor: "#666666",
//                 padding: "5px 15px", // smaller padding
//                 color: "white",
//               }}
//             >
//               <h5 style={{ margin: "0 10px" }}>Page 1 of 1</h5>
//               <h5 style={{ margin: "0 10px" }}>0 of 38 Records</h5>
//             </div>
//             <div
//               style={{
//                 borderRadius: "30px",
//                 backgroundColor: "#666666",
//                 padding: "5px 10px", // reduced padding
//                 color: "white",
//               }}
//             >
//               <p style={{ margin: 0 }}>369 item(s)</p>
//             </div>
//           </div>
//           <table>
//             <tbody>
//               {(dateFilter === "allMatched"
//                 ? matchedStatements
//                 : statementData
//               ).map((data, index) => (
//                 <tr
//                   key={index}
//                   style={{
//                     backgroundColor:
//                       dateFilter === "allMatched" &&
//                       isMatched(data, "statement", "exact")
//                         ? "lightblue"
//                         : "white",
//                   }}
//                 >
//                   <td>
//                     <input type="checkbox" />
//                   </td>
//                   <td>
//                     <EditIcon /> {/* Edit icon */}
//                   </td>
//                   <td>{data.PostDate}</td>
//                   <td>{data.Details}</td>
//                   <td>{data.Credit}</td>
//                   <td>{data.USID}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Grid>
//       </div>
//     </>
//   );
// };

// export default ParentMapped;
// export default ParentMapped;
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import useAuth from "app/hooks/useAuth";
import EditIcon from "@mui/icons-material/Edit";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";
import { useData } from "../DataContext";
import { useMatchedItems } from "../MatchedItemsContext";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

const ParentMapped = () => {
  // const [ledgerData, setLedgerData] = useState([]); // For Ledger
  const { ledgerData, setLedgerData, statementData, setStatementData } =
    useData();
  const { matchedItems, setMatchedItems } = useMatchedItems();
  // const [statementData, setStatementData] = useState([]); // For Statement
  const [loading, setLoading] = useState(true);
  const [exactMatches, setExactMatches] = useState([]);
  const [matchedStatements, setMatchedStatements] = useState([]);
  const [error, setError] = useState(null);
  const { logout, user } = useAuth();
  const { currentSession } = useContext(SessionContext); // Assuming you have this session context
  const apiUrl = process.env.REACT_APP_API_URL;
  const [dateFilter, setDateFilter] = useState("allItems"); // Initialize dateFilter state

  useEffect(() => {
    const fetchLedgerAndStatement = async () => {
      if (!currentSession) return;

      const accountId = currentSession.account;
      const switchId = currentSession._id;
      const token = localStorage.getItem("jwtToken");

      if (!token) {
        setError("Authentication token missing. Please log in again.");
        return;
      }

      try {
        setLoading(true);
        console.log("Fetching ledger data for switchId:", switchId);

        // Fetch ledger data
        const ledgerResponse = await axios.get(
          `${apiUrl}/api/ledger/${switchId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Ledger response:", ledgerResponse.data);

        // If response is an object, convert it into an array to map over
        // setLedgerData(ledgerResponse.data);
        setLedgerData(
          Array.isArray(ledgerResponse.data)
            ? ledgerResponse.data
            : [ledgerResponse.data]
        );

        console.log("Fetching statement data for switchId:", switchId);

        // Fetch statement data
        const statementResponse = await axios.get(
          `${apiUrl}/api/statements/${switchId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Statement response:", statementResponse.data);

        // If response is an object, convert it into an array to map over
        // setStatementData([statementResponse.data]);
        // setStatementData(statementResponse.data);

        setStatementData(
          Array.isArray(statementResponse.data)
            ? statementResponse.data
            : [statementResponse.data]
        );

        {
          console.log("Rendering statementData:", statementData);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchLedgerAndStatement();
  }, [currentSession, apiUrl, setLedgerData, setStatementData]);

  const isMatched = (item, type, matchType) => {
    if (!Array.isArray(matchedItems)) {
      console.warn("matchedItems is not an array:", matchedItems);
      return false;
    }

    return matchedItems.some((match) => {
      if (type === "ledger") {
        if (matchType === "probable") {
          // Probable match logic
          return item.USID === match.USID || item.Debit === match.Credit;
        }
        if (matchType === "exact") {
          // Exact match logic
          return item.Debit === match.Credit && item.USID === match.USID;
        }
        if (matchType === "similar") {
          // Exact match logic
          return (
            item.Debit === match.Credit &&
            item.USID === match.USID &&
            item.PostDate === match.PostDate &&
            item.Details === match.Details
          );
        }
      }
      if (type === "statement") {
        if (matchType === "probable") {
          // Probable match logic
          return item.USID === match.USID || item.Credit === match.Debit;
        }
        if (matchType === "exact") {
          // Exact match logic
          return item.Credit === match.Debit && item.USID === match.USID;
        }
      }
      if (type === "ledger" || type === "statement") {
        if (matchType === "manyToOne") {
          // Many-to-One match logic
          const relevantMatches = matchedItems.filter(
            (match) => match.USID === item.USID
          );

          if (type === "ledger") {
            const totalDebit = relevantMatches.reduce(
              (sum, match) => sum + match.Debit,
              0
            );
            return totalDebit === item.Credit;
          }

          if (type === "statement") {
            const totalCredit = relevantMatches.reduce(
              (sum, match) => sum + match.Credit,
              0
            );
            return totalCredit === item.Debit;
          }
        }
      }
      return false;
    });
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  useEffect(() => {
    const fetchMatchedItems = async () => {
      if (!currentSession) return;

      const switchId = currentSession._id;
      const token = localStorage.getItem("jwtToken");

      if (!token) {
        setError("Authentication token missing. Please log in again.");
        return;
      }

      try {
        const response = await axios.get(
          `${apiUrl}/api/matches/${switchId}?type=${dateFilter}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          const data = response.data.data;
          // Ensure data has exactMatches and matchedStatements arrays
          if (Array.isArray(data.exactMatches)) {
            setExactMatches(data.exactMatches); // Ledger matches
          } else {
            console.warn(
              "Expected an array for exactMatches, but this is what i received:",
              data.exactMatches
            );
            setExactMatches([]);
          }

          if (Array.isArray(data.matchedStatements)) {
            setMatchedStatements(data.matchedStatements); // Statement matches
          } else {
            console.warn(
              "Expected an array for matchedStatements, but received:",
              data.matchedStatements
            );
            setMatchedStatements([]);
          }

          console.log("Fetched matched items:", data);
        }
      } catch (error) {
        console.error("Error fetching matched items:", error);
      }
    };

    fetchMatchedItems();
  }, [currentSession, dateFilter, apiUrl]);

  const filteredItems = Array.isArray(matchedItems)
    ? matchedItems.filter((item) => {
        switch (dateFilter) {
          case "unmatched":
            return item.status === "unmatched";
          case "allMatched":
            return item.status === "matched";
          case "probable":
            return item.status === "probable";
          case "reversal":
            return item.status === "reversal";
          case "manualMatched":
            return item.matchType === "manual";
          case "autoMatched":
            return item.matchType === "auto";
          case "partiallyMatched":
            return item.status === "partiallyMatched";
          case "partiallyReversed":
            return item.status === "partiallyReversed";
          case "allItems":
          default:
            return true; // Return all items if no specific filter is selected
        }
      })
    : []; // Return an empty array if matchedItems is not an array

  return (
    <>
      <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mt: 2 }}>
        <FormControl size="small" sx={{ mb: 3 }} style={{ width: "30%" }}>
          <InputLabel id="date-filter-label">All Matches</InputLabel>
          <Select
            labelId="date-filter-label"
            id="date-filter"
            value={dateFilter}
            onChange={handleDateFilterChange}
            label="Select"
          >
            <MenuItem value="unmatched">Unmatched Items</MenuItem>
            <MenuItem value="allMatched">All Matched Items</MenuItem>
            <MenuItem value="probable">Probable Matched</MenuItem>
            <MenuItem value="reversal">Reversal</MenuItem>
            <MenuItem value="manualMatched">All Man-Matched Items</MenuItem>
            <MenuItem value="autoMatched">All Auto-Matched Items</MenuItem>
            <MenuItem value="partiallyMatched">
              All Partially-Matched Items
            </MenuItem>
            <MenuItem value="partiallyReversed">
              All Partially Reversals
            </MenuItem>
            <MenuItem value="allItems">All Items</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <div
        style={{ display: "flex" }}
        className="containers bottom-scroll-container"
      >
        {/* Ledger Section */}
        <div style={{ flexBasis: "50%", marginRight: "30px" }}>
          <div
            style={{
              margin: "20px 0", // reduce top/bottom margin
              display: "flex",
              alignItems: "center",
              gap: "10px", // reduce space between elements
              fontWeight: "800",
            }}
          >
            <div>
              <h5>Ledger</h5>
            </div>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "30px", // reduced radius
                backgroundColor: "#666666",
                padding: "5px 15px", // smaller padding
                color: "white",
              }}
            >
              <h5 style={{ margin: "0 10px" }}>Page 1 of 1</h5>
              <h5 style={{ margin: "0 10px" }}>0 of 38 Records</h5>
            </div> */}
            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "#666666",
                padding: "5px 10px", // reduced padding
                color: "white",
              }}
            >
              <p style={{ margin: 0 }}>
                {ledgerData.length > 1 || ledgerData.length === 0
                  ? `${ledgerData.length} items`
                  : `${ledgerData.length} item`}
              </p>
            </div>
          </div>

          <table>
            <tbody>
              {(dateFilter === "allMatched" ? exactMatches : ledgerData).map(
                (data, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor:
                        dateFilter === "allMatched" &&
                        isMatched(data, "ledger", "exact")
                          ? "lightblue"
                          : "white",
                    }}
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <EditIcon /> {/* Edit icon */}
                    </td>
                    <td>{data.PostDate}</td>
                    <td>{data.Details}</td>

                    <td>{data.Debit}</td>

                    <td>{data.USID}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Statement Data Table */}
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div
            style={{
              margin: "20px 0", // reduce top/bottom margin
              display: "flex",
              alignItems: "center",
              gap: "10px", // reduce space between elements
              fontWeight: "800",
            }}
          >
            <div>
              <h5>Statement</h5>
            </div>

            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "#666666",
                padding: "5px 10px", // reduced padding
                color: "white",
              }}
            >
              <p style={{ margin: 0 }}>
                {statementData.length > 1 || statementData.length === 0
                  ? `${statementData.length} items`
                  : `${statementData.length} item`}
              </p>
            </div>
          </div>
          <table>
            <tbody>
              {(dateFilter === "allMatched"
                ? matchedStatements
                : statementData
              ).map((data, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor:
                      dateFilter === "allMatched" &&
                      isMatched(data, "statement", "exact")
                        ? "lightblue"
                        : "white",
                  }}
                >
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <EditIcon /> {/* Edit icon */}
                  </td>
                  <td>{data.PostDate}</td>
                  <td>{data.Details}</td>
                  <td>{data.Credit}</td>
                  <td>{data.USID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>
      </div>
    </>
  );
};

export default ParentMapped;
