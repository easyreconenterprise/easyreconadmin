// import {
//   Box,
//   Icon,
//   IconButton,
//   styled,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@mui/material";

// const StyledTable = styled(Table)(({ theme }) => ({
//   whiteSpace: "pre",
//   "& thead": {
//     "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
//   },
//   "& tbody": {
//     "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
//   },
// }));

// const subscribarList = [
//   {
//     leddate: "18 january, 2019",
//     stmdate: "18 january, 2019",
//   },
// ];

// const subscribarList2 = [
//   {
//     pled: "-50,6343.10",
//     pstm: "0.00",
//   },
// ];

// const HomeTable = () => {
//   return (
//     <Box width="100%" overflow="auto">
//       <StyledTable style={{ marginBottom: "20px" }}>
//         <TableHead>
//           <TableRow>
//             <TableCell
//               align="left"
//               style={{
//                 backgroundColor: "#2d5893",
//                 color: "white",
//               }}
//             >
//               Last Ledger Date
//             </TableCell>
//             <TableCell
//               align="center"
//               style={{ backgroundColor: "green", color: "white" }}
//             >
//               Late Stmt Date
//             </TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {subscribarList.map((subscriber, index) => (
//             <TableRow key={index}>
//               <TableCell align="left" style={{ color: "blue" }}>
//                 {subscriber.leddate}
//               </TableCell>
//               <TableCell align="center" style={{ color: "red" }}>
//                 {subscriber.stmdate}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </StyledTable>
//       <StyledTable>
//         <TableHead>
//           <TableRow>
//             <TableCell
//               align="left"
//               style={{
//                 backgroundColor: "#2d5893",
//                 color: "white",
//               }}
//             >
//               Period Ledger Balance
//             </TableCell>
//             <TableCell
//               align="center"
//               style={{ backgroundColor: "green", color: "white" }}
//             >
//               Period Stmt Balance
//             </TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {subscribarList2.map((subscriber, index) => (
//             <TableRow key={index}>
//               <TableCell align="left" style={{ color: "blue" }}>
//                 {subscriber.name}
//               </TableCell>
//               <TableCell align="center" style={{ color: "blue" }}>
//                 {subscriber.company}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </StyledTable>
//     </Box>
//   );
// };

// export default HomeTable;

import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const HomeTable = () => {
  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    // Calculate total debit and credit here
    // For demonstration, let's assume some values
    const debitTotal = 5000;
    const creditTotal = 3000;

    setTotalDebit(debitTotal);
    setTotalCredit(creditTotal);
  }, []);

  return (
    <Box width="100%" overflow="auto">
      <StyledTable style={{ marginBottom: "20px" }}>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              style={{
                backgroundColor: "#2d5893",
                color: "white",
              }}
            >
              Last Ledger Date
            </TableCell>
            <TableCell
              align="center"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Late Stmt Date
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{/* Your table rows */}</TableBody>
      </StyledTable>

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              style={{
                backgroundColor: "#2d5893",
                color: "white",
              }}
            >
              Period Ledger Balance
            </TableCell>
            <TableCell
              align="center"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Period Stmt Balance
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell className="debit" align="left">
              <p>Total Debit</p>
              <p>{totalDebit.toFixed(2)}</p>
            </TableCell>
            <TableCell className="credit" align="center">
              <p>Total Credit</p>
              <p>{totalCredit.toFixed(2)}</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default HomeTable;
