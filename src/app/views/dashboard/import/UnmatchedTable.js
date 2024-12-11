// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { SessionContext } from "app/components/MatxLayout/SwitchContext";

// const UnmatchedItems = () => {
//   const [unmatchedItems, setUnmatchedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { currentSession } = useContext(SessionContext);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUnmatchedItems = async () => {
//       const switchId = currentSession._id;
//       try {
//         const response = await axios.get(
//           `http://localhost:7000/api/matches/${switchId}?type=unmatched`
//         );
//         setUnmatchedItems(response.data.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUnmatchedItems();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Unmatched Items</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Details</th>
//             <th>Debit</th>
//             <th>Credit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {unmatchedItems.map((item) => (
//             <tr key={item._id}>
//               <td>{item.type}</td>
//               <td>{JSON.stringify(item.details)}</td>
//               <td>{item.details.Debit}</td>
//               <td>{item.details.Credit}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UnmatchedItems;
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

const UnmatchedItems = () => {
  const [ledgerItems, setLedgerItems] = useState([]);
  const [statementItems, setStatementItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentSession } = useContext(SessionContext);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchUnmatchedItems = async () => {
      const switchId = currentSession._id;
      try {
        const response = await axios.get(
          `${apiUrl}/api/matches/${switchId}?type=unmatched`
        );
        const allItems = response.data.data;

        // Separate ledger and statement items
        const ledgerData = allItems.filter((item) => item.type === "ledger");
        const statementData = allItems.filter(
          (item) => item.type === "statement"
        );

        setLedgerItems(ledgerData);
        setStatementItems(statementData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUnmatchedItems();
  }, [currentSession]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div
        style={{ display: "flex" }}
        className="containers bottom-scroll-container"
      >
        {/* Ledger Section */}
        <div style={{ flexBasis: "50%", marginRight: "30px" }}>
          <div
            style={{
              margin: "20px 0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "800",
            }}
          >
            <div>
              <h5>Ledger</h5>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "30px",
                backgroundColor: "#666666",
                padding: "5px 15px",
                color: "white",
              }}
            >
              <h5 style={{ margin: "0 10px" }}>Page 1 of 1</h5>
              <h5 style={{ margin: "0 10px" }}>
                0 of {ledgerItems.length} Records
              </h5>
            </div>
            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "#666666",
                padding: "5px 10px",
                color: "white",
              }}
            >
              <p style={{ margin: 0 }}>{ledgerItems.length} item(s)</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th></th> {/* Checkbox column */}
                <th></th> {/* Edit icon column */}
                <th>Date</th>
                <th>Details</th>
                <th>Debit</th>
                <th>UID</th>
              </tr>
            </thead>
            <tbody>
              {ledgerItems.map((data, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <EditIcon /> {/* Edit icon */}
                  </td>
                  <td>{data.details.PostDate}</td>
                  <td>{data.details.Details}</td>
                  <td>{data.details.Debit}</td>
                  <td>{data.details.USID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Statement Section */}
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div
            style={{
              margin: "20px 0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "800",
            }}
          >
            <div>
              <h5>Statement</h5>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "30px",
                backgroundColor: "#666666",
                padding: "5px 15px",
                color: "white",
              }}
            >
              <h5 style={{ margin: "0 10px" }}>Page 1 of 1</h5>
              <h5 style={{ margin: "0 10px" }}>
                0 of {statementItems.length} Records
              </h5>
            </div>
            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "#666666",
                padding: "5px 10px",
                color: "white",
              }}
            >
              <p style={{ margin: 0 }}>{statementItems.length} item(s)</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th></th> {/* Checkbox column */}
                <th></th> {/* Edit icon column */}
                <th>Date</th>
                <th>Details</th>
                <th>Credit</th>
                <th>UID</th>
              </tr>
            </thead>
            <tbody>
              {statementItems.map((data, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <EditIcon /> {/* Edit icon */}
                  </td>
                  <td>{data.details.PostDate}</td>
                  <td>{data.details.Details}</td>
                  <td>{data.details.Credit}</td>
                  <td>{data.details.USID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>
      </div>
    </>
  );
};

export default UnmatchedItems;
