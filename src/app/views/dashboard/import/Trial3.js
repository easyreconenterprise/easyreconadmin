import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import ExcelToJson from "./ExcelToJson";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import UnMappedData from "./UnmappedData";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

const Trial3 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [categorizedData, setCategorizedData] = useState([]);
  const [isMap, setIsMap] = useState(false);
  const [file, setFile] = useState(null); // Add state for the file
  const [accountTitle, setAccountTitle] = useState("");
  const [balanceAsPerLedger, setBalanceAsPerLedger] = useState("0.0"); // Add state for balance
  const [loading, setLoading] = useState(false); // Add loading state

  const { currentSession } = useContext(SessionContext);
  console.log("Session passed to Trial3:", currentSession); // Add this log
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleNextClick = async () => {
    try {
      if (file) {
        setData([]);
        setCategorizedData([]);
        setLoading(true);
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
    } finally {
      setLoading(false); // Hide spinner
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
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 9999,
          }}
        >
          <CircularProgress size={60} />
        </Box>
      )}
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
        style={{ marginLeft: "50px", marginRight: "10px" }}
      >
        <a
          href="/template.xlsx"
          download="Ledger_Template.xlsx"
          style={{ textDecoration: "none", color: "white" }}
        >
          Download Template
        </a>
      </Button>
    </main>
  );
};

export default Trial3;
