import { useEffect, useState } from "react";
import MappedTable from "./MappedTable";

import "./Style.css";
import DropDown from "./DropDown";
import UnMappedTable from "./UnmappedTable";
import Incomefs from "../fs/Incomefs";
import NewFs from "../fs/NewFs";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
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

const UnMappedData = ({}) => {
  const [draggedItem, setDraggedItem] = useState(null);

  const [mappedData, setMappedData] = useState([]); // State to manage mapped data
  const [categorizedData, setCategorizedData] = useState([]);
  const [data, setData] = useState([]);
  const [Statement, setStatement] = useState(false);
  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  const [subcategory, setSubcategory] = useState(Subcategory);

  // console.log('unmapped', subcategory);
  const headers = data?.length > 0 ? Object.keys(data[0]) : [];

  // const handleDrop = () => {
  //   const updatedData = data.filter((item) => item !== draggedItem);

  //   setData(updatedData);
  //   console.log("Dropped data:", updatedData);
  //   // Clear the dragged item from the state
  //   setDraggedItem(null);
  // };
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleDrop = async () => {
    const updatedData = data.filter((item) => item !== draggedItem);

    setData(updatedData);

    if (draggedItem) {
      const { Category, Subcategory, SubSubcategory } = draggedItem;

      if (Subcategory) {
        const updatedSubcategory = { ...subcategory };
        if (SubSubcategory) {
          updatedSubcategory[Category][Subcategory][SubSubcategory].push(
            draggedItem
          );
        } else {
          updatedSubcategory[Category][Subcategory].push(draggedItem);
        }
        setSubcategory(updatedSubcategory);

        // Log the data before sending
        console.log("Sending data to backend:", {
          category: Category,
          subcategory: Subcategory,
          subSubcategory: SubSubcategory,
          item: [draggedItem],
        });

        // Fetch the authentication token from wherever you've stored it (e.g., local storage)
        const token = localStorage.getItem("jwtToken");
        console.log("is token fetched", token);

        // Include the token in the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Make an API call to update the mapped data in the database
        try {
          const response = await axios.post(
            `${apiUrl}/api/update-mapped-data`,
            {
              category: Category,
              subcategory: Subcategory,
              subSubcategory: SubSubcategory,
              item: [draggedItem],
            },
            { headers } // Include the headers in the request
          );

          // Log the response from the backend
          console.log("Response from backend:", response.data);

          // Update the categorizedData state with the updated mapped data from the response
          setCategorizedData(response.data);

          // ... your existing code ...
        } catch (error) {
          console.error("Error updating mapped data:", error);
          // ... your existing error handling ...
        }
      }
    }
    setDraggedItem(null);
  };

  const handleDragStart = (event, rowObject) => {
    console.log("Drag started:", rowObject);
    setDraggedItem(rowObject);
    const rowJSON = JSON.stringify(rowObject); // Convert the object to JSON string
    event.dataTransfer.setData("application/json", rowJSON);
  };

  const handleDropMapped = (droppedItem) => {
    console.log("Dropped Item:", droppedItem);

    // Remove the dropped item from mappedData and update state
    setMappedData((prevMappedData) =>
      prevMappedData.filter((item) => item !== droppedItem)
    );

    // Add the dropped item back to the unmapped table's data
    setData((prevData) => [...prevData, droppedItem]);
  };

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

  return (
    <div className="containers bottom-scroll-container">
      <div className="lefts" style={{ marginBottom: "150px" }}>
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
              data={data}
              headers={headers}
              setData={setData}
              handleDragStart={handleDragStart}
              handleDropMapped={handleDropMapped} // Pass the function like this
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
                  <input type="text" placeholder="0.0" />
                </td>
                <td className="debit">
                  <p>Total Debit</p>
                  <p>{totalDebit.toFixed(2)}</p>
                </td>
                <td className="credit">
                  <p>Total Credit</p>
                  <p>{totalCredit.toFixed(2)}</p>
                </td>
              </tr>
              <tr>
                <td className="closing">
                  <p>11 time(s)</p>
                  <input type="text" placeholder="0.0" />
                </td>
                <td className="debit">
                  <p></p>
                  <p></p>
                </td>
                <td className="credit">
                  <p>0 time(s)</p>
                  <p></p>
                </td>
              </tr>

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
                style={{ marginLeft: "50px", color: "white" }}
              >
                <Link to="/dashboard/upload-excel" style={{ color: "white" }}>
                  {" "}
                  PROCEED
                </Link>
              </Button>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnMappedData;
