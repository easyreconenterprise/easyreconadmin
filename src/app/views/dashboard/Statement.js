import { useContext, useEffect, useState } from "react";

import "./Style.css";

import axios from "axios";
import UnMappedStatement from "./import/UnmappedStatement";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";
// import FinancialSummary from './FinancialSummary'

const Subcategory = {
  Asset: {
    "Non-current": {
      "Property plant and equipment": [],
      "Deferred tax assets": [],
      Investment: [],
      "Other receivables": [],
      "Intangible assets and good will": [],
      "Biological assets": [],
      "Investment property": [],
    },
    Current: {
      Inventories: [],
      "Trade and other receivables": [],
      "prepayment and advances": [],
      "Cash and cash equivalent": [],
    },
  },
  "Equity and Liability": {
    "Non-current-Liability": {
      "Deferred Income": [],
      Provision: [],
      "Deferred tax liability": [],
      "Trade and other payables": [],
      "Loans and borrowings": [],
    },

    "Current-liability": {
      "Bank Overdraft": [],
      "Current tax liabilities": [],
      "Deferred Incomes": [],
      "Loans and borrowing": [],
      "Trade and other payable": [],
    },
    Equity: {
      "Capital and reserves": [],
      "Share capital": [],
      "Retained earnings": [],
      " Reserves": [],
      "Share Premium": [],
    },
  },
  Income: {
    Revenue: [],
    "Cost of sales": [],
    "Other income": [],
    "Administrative,  and selling expenses": [],
    "Impairment loss on trade receivables": [],
    "Finance income": [],
    "Finance cost": [],
    "Minimum tax expense": [],
    Taxation: [],
    "Loss from discontinued operations": [],
  },
};

const Statement = ({}) => {
  const [mappedData, setMappedData] = useState([]); // State to manage mapped data

  const [data, setData] = useState([]);

  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const { currentSession } = useContext(SessionContext);
  const [balanceAsPerStmt, setBalanceAsPerStmt] = useState("0.0");

  const headers =
    data?.length > 0
      ? Object.keys(data[0]).filter(
          (key) => key !== "switch" && key !== "uploadSessionId"
        )
      : [];

  const apiUrl = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   let cancelRequest = false; // Flag to track whether the component is unmounted

  //   const fetchData = async () => {
  //     try {
  //       const token = localStorage.getItem("jwtToken");
  //       const source = axios.CancelToken.source(); // Create a cancel token source

  //       const response = await axios.get(`${apiUrl}/api/statement`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         cancelToken: source.token, // Associate the cancel token with the request
  //       });

  //       if (!cancelRequest) {
  //         setData(response.data);
  //       }
  //     } catch (error) {
  //       if (!axios.isCancel(error)) {
  //         // Check if the error is due to a canceled request or another error
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  //   };

  //   fetchData();

  //   // Cleanup function to cancel the request when the component unmounts
  //   return () => {
  //     cancelRequest = true;
  //   };
  // }, []); // The empty dependency array ensures this effect runs only once

  useEffect(() => {
    let cancelRequest = false; // Flag to track whether the component is unmounted

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const source = axios.CancelToken.source(); // Create a cancel token source

        const response = await axios.get(`${apiUrl}/api/statement`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          cancelToken: source.token, // Associate the cancel token with the request
        });

        if (!cancelRequest) {
          setData(response.data);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          // Check if the error is due to a canceled request or another error
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    // Cleanup function to cancel the request when the component unmounts
    return () => {
      cancelRequest = true;
    };
  }, []); // The empty dependency array ensures this effect runs only once

  useEffect(() => {
    // Calculate total Debit and Credit
    const debitTotal = data.reduce(
      (total, row) => total + parseFloat(row.Debit || 0),
      0
    );
    const creditTotal = data.reduce(
      (total, row) => total + parseFloat(row.Credit || 0),
      0
    );

    // Update state with the totals
    setTotalDebit(debitTotal);
    setTotalCredit(creditTotal);
  }, [data]);
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

          // Set the balance from the fetched account data
          setBalanceAsPerStmt(accountData.balanceAsPerStmt || "0.0");
        } catch (error) {
          console.error("Error fetching account data:", error);
        }
      };

      fetchAccountData();
    }
  }, [currentSession]);

  useEffect(() => {
    // Calculate total Debit and Credit
    const debitTotal = data.reduce(
      (total, row) => total + parseFloat(row.Debit || 0),
      0
    );
    const creditTotal = data.reduce(
      (total, row) => total + parseFloat(row.Credit || 0),
      0
    );

    // Update state with the totals
    setTotalDebit(debitTotal);
    setTotalCredit(creditTotal);
  }, [data]);
  const debitItemsCount = data.filter((row) => row.Debit).length;
  const creditItemsCount = data.filter((row) => row.Credit).length;
  const filteredData = data.map(
    ({ switch: switchId, uploadSessionId, ...rest }) => rest
  );

  return (
    <div className="containers bottom-scroll-container">
      <div className="lefts">
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          Statemet Account Data
        </h2>
        {data?.length > 0 ? (
          <>
            <UnMappedStatement
              data={filteredData}
              headers={headers}
              setData={setData}
              setMappedData={setMappedData}
              mappedData={mappedData}
            />
          </>
        ) : (
          <div>Table is Empty</div>
        )}

        <div className="all">
          <table>
            <tbody>
              <tr>
                <td className="closing">
                  <p>Closing Balance</p>
                  <p> {balanceAsPerStmt}</p>
                </td>
                <td className="credit">
                  <p>Total Credit</p>
                  <p>{totalCredit.toFixed(2)}</p>
                </td>
                <td className="debit">
                  <p>Total Debit</p>
                  <p>{totalDebit.toFixed(2)}</p>
                </td>
              </tr>
              <tr>
                <td className="closing"></td>
                <td className="debit">
                  <p>{debitItemsCount} time(s) Credit</p>
                  <p></p>
                </td>
                <td className="credit">
                  <p>{creditItemsCount} time(s) Credit</p>
                  <p></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
          style={{ marginLeft: "50px", marginBottom: "200px", color: "white" }}
        >
          <Link
            to="/dashboard/reco-statement-summary"
            style={{ color: "white" }}
          >
            {" "}
            PROCEED
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Statement;
