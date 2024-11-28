import {
  Box,
  Grid,
  Icon,
  IconButton,
  styled,
  TableBody,
  TableCell,
  TableHead,
  Table,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Breadcrumb } from "app/components";
import { Small, H3 } from "app/components/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./Style.css";
import useAuth from "app/hooks/useAuth";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  BarElement,
  CategoryScale,
  ArcElement,
} from "chart.js";
import "./print.css";
import { useContext, useEffect, useState } from "react";

import { BarChart, PieChart } from "@mui/icons-material";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";
const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const Card = styled("div")(({ theme }) => ({
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const subscribarList = [
  {
    accountInfo: "Total No of Record(Ledger)",
    count: "18",
    value: "231,332.52",
  },
  {
    accountInfo: "Total Record Matched(Ledger)",
    count: "10 ",
    value: "231,332.52",
  },
  {
    accountInfo: "Total outstanding record(Ledger)",
    count: "8 ",
    value: "231,332.52",
  },
  {
    accountInfo: "Total No of Record(Stmt)",
    count: "1",
    value: "231,332.52",
  },
  {
    accountInfo: "Total Record Matched(Stmt)",
    count: "1",
    value: "231,332.52",
  },
  {
    accountInfo: "Total outstanding record(Ledger)",
    count: "21",
    value: "231,332.52",
  },
];
Chart.register(LinearScale, BarElement, CategoryScale, ArcElement);

const Cover = () => {
  const { logout, user } = useAuth();
  const { sessions, currentSession, setCurrentSession, switchSession } =
    useContext(SessionContext);
  const [balanceAsPerStmt, setBalanceAsPerStmt] = useState("0.0");
  const [balanceAsPerLedger, setBalanceAsPerLedger] = useState("0.0");
  const [balanceAsPerLedgerDate, setBalanceAsPerLedgerDate] = useState("0.0");
  const [balanceAsPerStatementDate, setBalanceAsPerStatementDate] =
    useState("0.0");
  const [lastLedgerDate, setLastLedgerDate] = useState(null);
  const [lastStatementDate, setLastStatementDate] = useState(null);

  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Check local storage for 'lastSession' on component mount
    const savedSession = localStorage.getItem("lastSession");
    if (savedSession) {
      setCurrentSession(JSON.parse(savedSession));
    }
  }, [setCurrentSession]);

  useEffect(() => {
    // Calculate total debit and credit here
    // For demonstration, let's assume some values
    const debitTotal = 5000;
    const creditTotal = 3000;

    setTotalDebit(debitTotal);
    setTotalCredit(creditTotal);
  }, []);

  useEffect(() => {
    // For demonstration, let's assume some values
    const debitTotal = 40000; // Example total ledger
    const creditTotal = 25000; // Example total statement

    setTotalDebit(debitTotal);
    setTotalCredit(creditTotal);
  }, []);

  // Prepare data for Bar chart
  const data = {
    labels: ["Ledger", "Statement"],
    datasets: [
      {
        label: "Amount (NGN)",
        data: [totalDebit, totalCredit],
        backgroundColor: ["red", "#2d5893"], // Ledger in red, Statement in blue
        borderColor: ["darkred", "darkblue"],
        borderWidth: 1,
        barThickness: 50,
      },
    ],
  };

  // Bar chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000, // Calibration of y-axis
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Prepare data for Pie charts
  const ledgerMatched = 10; // Example matched ledger records
  const ledgerUnmatched = 8; // Example unmatched ledger records
  const statementMatched = 1; // Example matched statement records
  const statementUnmatched = 0; // Example unmatched statement records

  const pieData1 = {
    labels: ["Matched", "Unmatched"],
    datasets: [
      {
        data: [ledgerMatched, ledgerUnmatched],
        backgroundColor: ["#2d5893", "red"],
      },
    ],
  };

  const pieData2 = {
    labels: ["Matched", "Unmatched"],
    datasets: [
      {
        data: [statementMatched, statementUnmatched],
        backgroundColor: ["#2d5893", "red"],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  useEffect(() => {
    if (currentSession?.account) {
      const fetchAccountData = async () => {
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

          const accountData = response.data;
          console.log("Fetched Account Data:", accountData);

          // Format dates if they exist, else set default value
          const formattedLedgerDate = accountData.balanceAsPerLedgerDate
            ? new Date(accountData.balanceAsPerLedgerDate).toLocaleDateString(
                "en-GB", // Use 'en-GB' for DD-MMM-YYYY format
                { day: "2-digit", month: "short", year: "numeric" }
              )
            : "N/A"; // fallback if no date

          const formattedStatementDate = accountData.balanceAsPerStatementDate
            ? new Date(
                accountData.balanceAsPerStatementDate
              ).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "N/A";

          // Set the balance from the fetched account data
          setBalanceAsPerStmt(accountData.balanceAsPerStmt || "0.0");
          setBalanceAsPerLedger(accountData.balanceAsPerLedger || "0.0");
          setBalanceAsPerLedger(accountData.balanceAsPerLedger || "0.0");
          setBalanceAsPerLedgerDate(formattedLedgerDate);
          setBalanceAsPerStatementDate(formattedStatementDate);
        } catch (error) {
          console.error("Error fetching account data:", error);
        }
      };

      fetchAccountData();
    }
  }, [currentSession]);
  useEffect(() => {
    const fetchLastUploadedDates = async () => {
      try {
        const token = localStorage.getItem("jwtToken");

        // Fetch the last statement date
        const statementResponse = await axios.get(
          `${apiUrl}/api/laststatement`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Fetch the last ledger date
        const ledgerResponse = await axios.get(`${apiUrl}/api/lastledger`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Extract uploadedAt dates
        const lastStatementUploadedAt = statementResponse.data.uploadedAt;
        const lastLedgerUploadedAt = ledgerResponse.data.uploadedAt;

        // Format and set the dates in state
        setLastStatementDate(
          lastStatementUploadedAt
            ? new Date(lastStatementUploadedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "N/A"
        );

        setLastLedgerDate(
          lastLedgerUploadedAt
            ? new Date(lastLedgerUploadedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "N/A"
        );

        console.log("Last statement uploaded at:", lastStatementUploadedAt);
        console.log("Last ledger uploaded at:", lastLedgerUploadedAt);
      } catch (error) {
        console.error("Error fetching last uploaded dates:", error);
      }
    };

    fetchLastUploadedDates();
  }, []);

  return (
    <div>
      <div>
        {currentSession ? (
          <>
            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <Card>
                  <p>outstanding item chart</p>
                  <div style={{ height: "300px" }}>
                    {" "}
                    {/* Set height for Bar chart */}
                    <Bar data={data} options={options} />
                  </div>

                  <div>
                    <p>Ledger Item Match Rate</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "300px",
                      }}
                    >
                      <div style={{ width: "38%", height: "70%" }}>
                        <Pie data={pieData1} options={pieOptions} />
                        <H3 style={{ textAlign: "center" }}>
                          Ledger Match Rate
                        </H3>
                      </div>
                      <div style={{ width: "38%", height: "70%" }}>
                        <Pie data={pieData2} options={pieOptions} />
                        <H3 style={{ textAlign: "center" }}>
                          Statement Match Rate
                        </H3>
                      </div>
                    </div>
                  </div>
                </Card>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <Card>
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

                    <TableBody>
                      <TableRow>
                        <TableCell align="left">
                          {lastLedgerDate ? lastLedgerDate : "-"}
                        </TableCell>
                        <TableCell align="left">
                          {lastStatementDate ? lastStatementDate : "-"}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </StyledTable>
                </Card>
                <Card>
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
                          -{balanceAsPerLedger}
                        </TableCell>
                        <TableCell className="credit" align="center">
                          <p>{balanceAsPerStmt}</p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </StyledTable>
                </Card>
                <Card>
                  <StyledTable
                    style={{ marginBottom: "100px", border: "none" }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#2d5893", color: "white" }}
                        >
                          Account Information
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ backgroundColor: "#2d5893", color: "white" }}
                        >
                          Count
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ backgroundColor: "#2d5893", color: "white" }}
                        >
                          Value
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {subscribarList.map((subscriber, index) => (
                        <TableRow
                          key={index}
                          style={{
                            backgroundColor:
                              index % 3 === 0
                                ? "#2d5893" // First row color
                                : index % 3 === 1
                                ? "#1b3c7a" // Deeper shade of the first color
                                : "green", // Third row color
                          }}
                        >
                          <TableCell align="left" style={{ color: "white" }}>
                            {subscriber.accountInfo}
                          </TableCell>
                          <TableCell align="center" style={{ color: "white" }}>
                            {subscriber.count}
                          </TableCell>
                          <TableCell align="center" style={{ color: "white" }}>
                            {subscriber.value}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </StyledTable>
                </Card>
              </Grid>
            </Grid>
          </>
        ) : (
          <b>
            {/*} <h1>{user.company_name}</h1>*/}
            <h2>EASY RECON</h2>
            <p>Account Reconcilation System</p>
          </b>
        )}
      </div>
    </div>
  );
};

export default Cover;
