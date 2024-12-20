import { useContext, useEffect, useState } from "react";
import MappedTable from "./MappedTable";

import "./Style.css";
import DropDown from "./DropDown";
import UnMappedTable from "./UnmappedTable";
import Incomefs from "../fs/Incomefs";
import NewFs from "../fs/NewFs";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";
// import FinancialSummary from './FinancialSummary'

const UnMappedData = () => {
  const [mappedData, setMappedData] = useState([]); // State to manage mapped data

  const [data, setData] = useState([]);

  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  const { currentSession } = useContext(SessionContext);
  const [balanceAsPerLedger, setBalanceAsPerLedger] = useState("0.0");

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
          setBalanceAsPerLedger(accountData.balanceAsPerLedger || "0.0");
        } catch (error) {
          console.error("Error fetching account data:", error);
        }
      };

      fetchAccountData();
    }
  }, [currentSession]);

  // console.log('unmapped', subcategory);
  // const headers = data?.length > 0 ? Object.keys(data[0]) : [];

  const headers =
    data?.length > 0
      ? Object.keys(data[0]).filter(
          (key) => key !== "switch" && key !== "uploadSessionId"
        )
      : [];

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let cancelRequest = false; // Flag to track whether the component is unmounted

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const source = axios.CancelToken.source(); // Create a cancel token source

        const response = await axios.get(`${apiUrl}/api/data`, {
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
  const debitItemsCount = data.filter((row) => row.Debit).length;
  const creditItemsCount = data.filter((row) => row.Credit).length;

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
          setBalanceAsPerLedger(accountData.balanceAsPerLedger || "0.0");
          setTotalDebit(accountData.totalDebitForCurrentFile || 0.0); // Only show current file's debit
        } catch (error) {
          console.error("Error fetching account data:", error);
        }
      };

      fetchAccountData();
    }
  }, [currentSession]);

  const filteredData = data.map(
    ({ switch: switchId, uploadSessionId, ...rest }) => rest
  );

  return (
    <>
      <div className="containers bottom-scroll-container">
        <div style={{ marginBottom: "150px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginTop: "40px",
            }}
          >
            Ledger Account Data
          </h2>
          {data?.length > 0 ? (
            <>
              <UnMappedTable
                data={filteredData}
                // data={data}
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
                    <p> {balanceAsPerLedger}</p>
                  </td>
                  {/*} <td className="debit">
                    <p>Total Debit</p>
                    <p>-{totalDebit.toFixed(2)}</p>
                  </td>*/}

                  <td className="debit">
                    <p>Total Debit</p>
                    <p>
                      {totalDebit < 0
                        ? totalDebit.toFixed(2)
                        : `-${totalDebit.toFixed(2)}`}
                    </p>
                  </td>

                  <td className="credit">
                    <p>Total Credit</p>
                    <p>{totalCredit.toFixed(2)}</p>
                  </td>
                </tr>
                <tr>
                  <td className="closing"></td>
                  <td className="debit">
                    <p>{debitItemsCount} time(s) Debit</p>
                    <p></p>
                  </td>
                  <td className="credit">
                    <p>{creditItemsCount} time(s) Debit</p>
                    <p></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="button-container" style={{ fload: "right" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ color: "white" }}
            >
              <Link
                to="/dashboard/reco-ledger-summary"
                style={{ color: "white" }}
              >
                CANCEL
              </Link>
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "20px", color: "white" }}
            >
              <Link to="/dashboard/upload-excel" style={{ color: "white" }}>
                PROCEED
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnMappedData;
