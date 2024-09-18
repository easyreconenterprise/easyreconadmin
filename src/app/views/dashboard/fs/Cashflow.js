/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { TablePanel } from "./TablePanel";
import Profit from "../notes/Profit";
import ChangeInv from "../cashflow/ChangeInv";
import Trade from "../cashflow/Trade";
import Prepay from "../cashflow/Prepay";
import Payable from "../cashflow/Payable";
import Deferred from "../cashflow/Deferred";
import Impair2 from "../cashflow/Impair2";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import Taxation2 from "../cashflow/Taxation2";
import Minimum2 from "../cashflow/Minimum2";
import CurrentTax3 from "../cashflow/CurrentTax3";
import Cash from "../cashflow/Cash3";
import Cash2 from "../cashflow/Cash2";
import Cash3 from "../cashflow/Cash3";
import NetCashIncrease from "../cashflow/NetCashIncrease";
import Investment from "../cashflow/Investment";
import axios from "axios";
import Impair from "../cashflow/Impair";
import Charge from "../notes/Charge";
import Charge2 from "../notes/Charge2";
import Taxation3 from "../cashflow/Taxation3";
import Minimum3 from "../cashflow/Minimum3";
import Proceed from "../cashflow/Proceed";
import Other from "../notes/Other";
import Other2 from "../cashflow/Other2";
import Other3 from "../cashflow/Other3";
import Invest3 from "../cashflow/Invest3";
import Move2 from "../cashflow/Move2";
import Move3 from "../cashflow/Move3";
import Move4 from "../cashflow/Move4";
import Move5 from "../cashflow/Move5";
import Def from "../cashflow/Def";
import { useTotal } from "../pages/TotalContext";
import Parent from "./Parent";

const Cashflow = ({ incomeSum, total2, total4, total6, total8 }) => {
  console.log("incomeSum: " + incomeSum);
  // const impairment = subcategory.impairment || 0;
  // const taxation = subcategory.taxation || 0;
  const [categorySum, setCategorySum] = useState([]);
  const [subcategory, setSubcategory] = useState({});
  const [editedText202, setEditedText202] = useState(""); // State to store editedText34
  const [editedText203, setEditedText203] = useState(""); // State to store editedText34
  const [editedText208, setEditedText208] = useState(""); // State to store editedText34
  const [editedText209, setEditedText209] = useState(""); // State to store editedText34
  const [editedText204, setEditedText204] = useState(""); // State to store editedText34
  const [editedText205, setEditedText205] = useState(""); // State to store editedText34
  const [editedText94, setEditedText94] = useState(""); // State to store editedText34
  const [editedText22, setEditedText22] = useState(""); // State to store editedText34
  const [editedText23, setEditedText23] = useState(""); // State to store editedText34
  const [editedText95, setEditedText95] = useState(""); // State to store editedText34
  const [editedText96, setEditedText96] = useState(""); // State to store editedText34
  const [editedText97, setEditedText97] = useState(""); // State to store editedText34
  const [total7, setTotal7] = useState(""); // State to store editedText34
  const { total1 } = useTotal();
  const { total15 } = useTotal();
  const { total22 } = useTotal();
  const { total32 } = useTotal();
  const { total3 } = useTotal();
  const { total12 } = useTotal();

  const [editedText36, setEditedText36] = useState(""); // Initialize with default value
  const [editedText35, setEditedText35] = useState(""); // Initialize with default value
  // const total = impairment + taxation; /* + tax2 + other2 + ... */

  // useEffect(() => {
  //   const storedData = localStorage.getItem('data');
  //   setSubcategory(JSON.parse(storedData));

  //   console.log(storedData);
  // }, []);

  // Function to handle editedText34 change and update the state
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the authentication token from wherever you've stored it (e.g., local storage)
        const token = localStorage.getItem("jwtToken");

        // Include the token in the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Make an API call to fetch categorized data
        const response = await axios.get(
          `${apiUrl}/api/mapped-data`,
          { headers } // Include the headers in the request
        );

        // Assuming the fetched data structure matches your requirements
        const mappedData = response.data[0];

        // Set the subcategory state with the fetched data
        setSubcategory(mappedData.subcategory);

        // Calculate summations and set state for incomeSum
      } catch (error) {
        console.error("Error fetching mapped data:", error);
      }
    };

    fetchData();
  }, []);
  const [additionalLoans, setAdditionalLoans] = useState(
    localStorage.getItem("additionalLoans") || ""
  );
  const [interest, setInterest] = useState(
    localStorage.getItem("interest") || ""
  );
  const [over, setOver] = useState(localStorage.getItem("over") || "");
  const [principal, setPrincipal] = useState(
    localStorage.getItem("principal") || ""
  );

  // const calculateTotal = () => {
  //   const profit = parseFloat(incomeSum) || 0;
  //   const depreciation = parseFloat(total32) || 0;
  //   const impairment = parseFloat(subcategory.impairment) || 0;
  //   const gainOnDisposal = parseFloat(subcategory.gainOnDisposal) || 0;
  //   const financeCost = parseFloat(total1) || 0;
  //   const taxation = parseFloat(subcategory.taxation) || 0;
  //   const minimumTax = parseFloat(editedText94) || 0;

  //   console.log("Profit:", profit);
  //   console.log("Depreciation:", depreciation);
  //   console.log("Impairment:", impairment);
  //   console.log("Gain on Disposal:", gainOnDisposal);
  //   console.log("Finance Cost:", financeCost);
  //   console.log("Taxation:", taxation);
  //   console.log("Minimum Tax:", minimumTax);

  //   const total =
  //     profit +
  //     depreciation +
  //     impairment +
  //     gainOnDisposal +
  //     financeCost +
  //     taxation +
  //     minimumTax;

  //   console.log("Total (before formatting):", total);

  //   const formattedTotal = total.toFixed(2); // Format the total with 2 decimal places

  //   console.log("Formatted Total:", formattedTotal);

  //   return formattedTotal;
  // };

  // Modify the calculateTotal function to accept additional arguments

  useEffect(() => {
    // If you want to do something when the value changes, you can do it here
    console.log("Additional Loans:", additionalLoans);
    console.log("Interest:", interest);
  }, [additionalLoans, interest, over, principal]);

  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-cash-text?field=content36`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText36(response.data.content36 || "");
        console.log("editedText34 value from API:", response.data.content36);
      })
      .catch((error) => {
        console.error("Error fetching editedText36:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-loans-text?field=content2`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText202(response.data.content2 || "");
        console.log("editedText34 value from API:", response.data.content34);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-loans-text?field=content3`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText203(response.data.content3 || "");
        console.log("editedText34 value from API:", response.data.content34);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-loans-text?field=content8`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText208(response.data.content8 || "");
        console.log("editedText34 value from API:", response.data.content34);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-loans-text?field=content9`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText209(response.data.content9 || "");
        console.log("editedText34 value from API:", response.data.content34);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-loans-text?field=content4`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText204(response.data.content4 || "");
        console.log("editedText34 value from API:", response.data.content34);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-loans-text?field=content5`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText205(response.data.content5 || "");
        console.log("editedText34 value from API:", response.data.content34);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-eight-text?field=content94`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText94(response.data.content94 || "");
        console.log("editedText34 value from API:", response.data.content94);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-move-text?field=content22`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText22(response.data.content22 || "");
        console.log("editedText34 value from API:", response.data.content22);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-move-text?field=content23`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText23(response.data.content23 || "");
        console.log("editedText34 value from API:", response.data.content23);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-eight-text?field=content96`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText96(response.data.content96 || "");
        console.log("editedText96 value from API:", response.data.content96);
      })
      .catch((error) => {
        console.error("Error fetching editedText96:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-eight-text?field=content97`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText97(response.data.content97 || "");
        console.log("editedText97 value from API:", response.data.content97);
      })
      .catch((error) => {
        console.error("Error fetching editedText37:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-eight-text?field=content95`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText95(response.data.content95 || "");
        console.log("editedText35 value from API:", response.data.content95);
      })
      .catch((error) => {
        console.error("Error fetching editedText34:", error);
      });

    // Fetch other values as needed...
  }, []);
  useEffect(() => {
    // Fetch total16 value from the database
    const token = localStorage.getItem("jwtToken");

    // Fetch other values like editedText82, editedText83, etc.
    axios
      .get(`${apiUrl}/api/get-cash-text?field=content35`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request header
        },
      })
      .then((response) => {
        setEditedText35(response.data.content35 || "");
        console.log("editedText35 value from API:", response.data.content35);
      })
      .catch((error) => {
        console.error("Error fetching editedText35:", error);
      });

    // Fetch other values as needed...
  }, []);

  const initialData = {
    content1: "0.000",
    content2: "0.000",
    content3: "0.000",
    content4: "0.000",
    content5: "0.000",
    content6: "0.000",
    content7: "0.000",
    content8: "0.000",
    content9: "0.000",
    content10: "0.000",
  };

  const [editedText1, setEditedText1] = useState(initialData.content1);
  const [editedText2, setEditedText2] = useState(initialData.content2);
  const [editedText3, setEditedText3] = useState(initialData.content3);
  const [editedText4, setEditedText4] = useState(initialData.content4);
  const [editedText5, setEditedText5] = useState(initialData.content5);
  const [editedText6, setEditedText6] = useState(initialData.content6);
  const [editedText7, setEditedText7] = useState(initialData.content7);
  const [editedText8, setEditedText8] = useState(initialData.content8);
  const [editedText9, setEditedText9] = useState(initialData.content9);
  const [editedText10, setEditedText10] = useState(initialData.content10);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    fetchDataFromDatabase("content1", setEditedText1);
    fetchDataFromDatabase("content2", setEditedText2);
    fetchDataFromDatabase("content3", setEditedText3);
    fetchDataFromDatabase("content4", setEditedText4);
    fetchDataFromDatabase("content5", setEditedText5);
    fetchDataFromDatabase("content6", setEditedText6);
    fetchDataFromDatabase("content7", setEditedText7);
    fetchDataFromDatabase("content8", setEditedText8);
    fetchDataFromDatabase("content9", setEditedText9);
    fetchDataFromDatabase("content10", setEditedText10);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText1Change = (e) => {
    const newText = e.target.value;
    setEditedText1(newText);
    saveTextToDatabase("content1", newText);
  };
  const handleText2Change = (e) => {
    const newText = e.target.value;
    setEditedText2(newText);
    saveTextToDatabase("content2", newText);
  };
  const handleText3Change = (e) => {
    const newText = e.target.value;
    setEditedText3(newText);
    saveTextToDatabase("content3", newText);
  };
  const handleText4Change = (e) => {
    const newText = e.target.value;
    setEditedText4(newText);
    saveTextToDatabase("content4", newText);
  };
  const handleText5Change = (e) => {
    const newText = e.target.value;
    setEditedText5(newText);
    saveTextToDatabase("content5", newText);
  };
  const handleText6Change = (e) => {
    const newText = e.target.value;
    setEditedText6(newText);
    saveTextToDatabase("content6", newText);
  };
  const handleText7Change = (e) => {
    const newText = e.target.value;
    setEditedText7(newText);
    saveTextToDatabase("content7", newText);
  };
  const handleText8Change = (e) => {
    const newText = e.target.value;
    setEditedText8(newText);
    saveTextToDatabase("content8", newText);
  };
  const handleText9Change = (e) => {
    const newText = e.target.value;
    setEditedText9(newText);
    saveTextToDatabase("content9", newText);
  };
  const handleText10Change = (e) => {
    const newText = e.target.value;
    setEditedText10(newText);
    saveTextToDatabase("content10", newText);
  };

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-cashflow-text?field=${field}`, {
        headers,
      })
      .then((response) => {
        setField(response.data[field] || "");
      })
      .catch((error) => {
        console.error(`Error fetching ${field}:`, error);
      });
  };

  // Define the function to save edited text to the API
  const saveTextToDatabase = (field, content) => {
    const token = localStorage.getItem("jwtToken"); // You may not need this if you have a different authentication method.
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = {
      [field]: content,
    };

    axios
      .post(`${apiUrl}/api/save-cashflow-text`, data, {
        headers,
      })
      .then((response) => {
        // Data saved successfully
      })
      .catch((error) => {
        console.error(`Error saving ${field}:`, error);
      });
  };

  useEffect(() => {
    const value1 = parseFloat(editedText1) || 0;
    const value2 = parseFloat(editedText2) || 0;
    const value3 = parseFloat(editedText3) || 0;
    const value4 = parseFloat(editedText4) || 0;
    const value5 = parseFloat(editedText5) || 0;
    const value6 = parseFloat(editedText6) || 0;
    const value7 = parseFloat(editedText7) || 0;
    const value8 = parseFloat(editedText8) || 0;
    const value9 = parseFloat(editedText9) || 0;
    const value10 = parseFloat(editedText10) || 0;

    // Use Promise.all to wait for the promises to resolve

    const newTotal7 = value1 + value3;
    setTotal7(newTotal7);
  }, [
    editedText1,
    editedText2,
    editedText3,
    editedText4,
    editedText5,
    editedText6,
    editedText7,
    editedText8,
  ]);

  const calculateTotal = (
    incomeSum,
    total32,
    subcategory,
    total1,
    editedText94
  ) => {
    // Parse input values into floating-point numbers with appropriate defaults
    const profit = parseFloat(incomeSum) || 0;
    const depreciation = parseFloat(total32) || 0;
    const financeCost = parseFloat(total1) || 0;
    const minimumTax = parseFloat(editedText94) || 0;
    console.log("Profit: " + profit);
    console.log("Depreciation: " + depreciation);
    // ... other variables ...

    // Check if subcategory exists and has relevant properties, then parse them into floats
    const impairment =
      subcategory && subcategory.impairment
        ? parseFloat(subcategory.impairment)
        : 0;
    const gainOnDisposal =
      subcategory && subcategory.gainOnDisposal
        ? parseFloat(subcategory.gainOnDisposal)
        : 0;
    const taxation =
      subcategory && subcategory.taxation
        ? parseFloat(subcategory.taxation)
        : 0;

    // Calculate the total
    const total =
      profit +
      depreciation +
      financeCost +
      minimumTax +
      impairment +
      gainOnDisposal +
      taxation;
    // Apply rounding to the total
    const roundedTotal = Math.round(total);

    return roundedTotal;
  };

  // ... other variables ...

  // Use this calculatedTotal value in your component or wherever you need it
  const calculatedTotal = calculateTotal(
    incomeSum,
    total32,
    subcategory,
    total1,
    editedText94
  );

  const roundedTotal = Math.round(calculatedTotal); // Round the calculated total

  console.log("Calculated Total (Rounded): " + roundedTotal);
  // Then you can display the calculatedTotal in your component as needed

  return (
    <TablePanel title="Statement of Cashflow">
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}>
              For the year ended 31 December 2022
            </th>

            <th style={{ fontSize: "15px" }}>Notes</th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2023</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}></th>

            <th></th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
          </tr>
        </thead>

        <tbody>
          <b>
            <h6 style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}>
              Cash flow from operating activities
            </h6>
          </b>

          <tr>
            <td className="statement-key">Profit for the year</td>

            <td></td>

            <td>
              {/* Display the profit for the current year */}
              <Profit incomeSum={incomeSum} priorYear={false} />
            </td>
            <td className="statement-value">
              <Profit incomeSum={incomeSum} priorYear={true} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">Adjustment for depreciation</td>

            <td>10(a)</td>
            <td>{total32}</td>
            <td>{total22}</td>
          </tr>
          <tr>
            <td className="statement-key">
              Impairment allowance on trade receivables
            </td>

            <td></td>
            <td>
              <Impair2 subcategory={subcategory} />
            </td>
            <td className="statement-value">
              <Impair subcategory={subcategory} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">
              Gain on disposal of Property, plant and equipment
            </td>

            <td>5</td>
            <td>
              <Other2 subcategory={subcategory} />
            </td>
            <td>
              <Other3 subcategory={subcategory} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">Finance cost</td>

            <td>6</td>
            <td>{total1}</td>
            <td className="statement-value">{total15}</td>
          </tr>
          <tr>
            <td className="statement-key">Taxation</td>

            <td>9(a)</td>
            <td>
              {" "}
              <Taxation2 subcategory={subcategory} />
            </td>
            <td>
              {" "}
              <Taxation3 subcategory={subcategory} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">Minimum Tax</td>

            <td>9(e)</td>
            <td> {editedText94}</td>
            <td> {editedText95}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>
            <td className="statement-key">29524107100</td>
            <td className="statement-key">34862207742</td>
          </tr>
          <br></br>
          <b>
            <h6>Changes In:</h6>
          </b>
          <tr>
            <td className="statement-key">Inventories</td>

            <td>11(b)</td>
            <td>
              {" "}
              <ChangeInv subcategory={subcategory} />
            </td>
            <td className="statement-value">
              {" "}
              <Move2 total2={total2} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">Trade and other receivables</td>

            <td>12(c)</td>
            <td>
              {" "}
              <Trade subcategory={subcategory} />
            </td>
            <td className="statement-value">
              <Move3 total4={total4} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">Prepayment and advances</td>

            <td>12(a)</td>
            <td>
              {" "}
              <Prepay subcategory={subcategory} />
            </td>
            <td className="statement-value">
              <Move4 total6={total6} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">Trade and other payables</td>

            <td>16(d)</td>
            <td>
              {" "}
              <Payable subcategory={subcategory} />
            </td>
            <td className="statement-value">
              {" "}
              <Move5 total8={total8} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">Deferred Income</td>

            <td></td>
            <td>
              {" "}
              <Deferred subcategory={subcategory} />
            </td>
            <td className="statement-value">
              {" "}
              <Def subcategory={subcategory} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">Total</td>

            <td></td>
            <td> 42527600956</td>
            <td className="statement-value"> 35341574511</td>
          </tr>

          <tr>
            <td className="statement-key">Income tax paid</td>

            <td>9(c)</td>
            <td> {editedText96}</td>
            <td className="statement-value">{editedText97}</td>
          </tr>
          <tr>
            <td className="statement-key">Value added tax(VAT) paid</td>

            <td>16(c)</td>
            <td> {editedText22}</td>
            <td className="statement-value">{editedText23}</td>
          </tr>
          <tr>
            <td
              className="statement-key"
              style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
            >
              Net cash generated from operating activities
            </td>

            <td></td>
            <td> 42527607179</td>
            <td
              className="statement-value"
              style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
            >
              35342009177
            </td>
          </tr>

          <b>
            <h6>Cash flows from investing activities</h6>
          </b>
          <tr>
            <td className="statement-key">Investment</td>

            <td></td>
            <td>
              {" "}
              <Investment subcategory={subcategory} />
            </td>
            <td className="statement-value">
              {" "}
              <Invest3 subcategory={subcategory} />
            </td>
          </tr>
          <tr>
            <td className="statement-key">
              Proceeds from sales of property, plant and equipment
            </td>

            <td></td>
            <td>
              {" "}
              <EditText
                name="textArea1"
                value={editedText1}
                onChange={handleText1Change}
              />
            </td>
            <td className="statement-value">
              {" "}
              <EditText
                name="textArea1"
                value={editedText2}
                onChange={handleText2Change}
              />
            </td>
          </tr>

          {/*<tr>
            <td className="statement-key">
              Disposal of discontinued operations, net of cash disposed
            </td>

            <td></td>
            <td>
              {" "}
              <EditText defaultValue="56788" />
            </td>
            <td className="statement-value"></td>
  </tr>*/}
          <tr>
            <td className="statement-key">
              Acquisition of property, plants and equipment
            </td>

            <td>10(a)</td>
            <td> {total3}</td>
            <td className="statement-value">{total12}</td>
          </tr>
          <tr>
            <b>
              <td
                className="statement-key"
                style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
              >
                Net cash generated from investing activites
              </td>
            </b>

            <td></td>
            <td> 11722476892</td>
            <td
              className="statement-value"
              style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
            >
              783353371
            </td>
          </tr>
          <b>
            <h6>Cash flows from financing activities</h6>
          </b>
          <tr>
            <td className="statement-key">
              Proceeds from loans and borrowings
            </td>
            <td> 18(b)</td>

            <td>{editedText202}</td>
            <td className="statement-value">{editedText203}</td>
          </tr>
          <tr>
            <td className="statement-key">
              Interest paid on loans and borrowing
            </td>

            <td>18(b)</td>
            <td>
              {" "}
              <p> {editedText208}</p>
            </td>
            <td className="statement-value">{editedText209}</td>
          </tr>
          {/*<tr>
            <td className="statement-key">Interest paid on overdraft</td>

            <td></td>
            <td> {over}</td>
            <td className="statement-value"></td>
</tr>*/}
          <tr>
            <td className="statement-key">Net princpal repayments</td>
            <td>18(b)</td>
            <td>{editedText204}</td>
            <td className="statement-value">{editedText205}</td>
          </tr>
          <tr>
            <b>
              <td
                className="statement-key"
                style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
              >
                Net cash generated from (used in) financial activities
              </td>
            </b>

            <td></td>
            <td> 10490</td>
            <td
              className="statement-value"
              style={{ fontSize: 16, marginBottom: 10, fontWeight: 800 }}
            >
              1000698
            </td>
          </tr>
          <br></br>
          <tr>
            <td className="statement-key">
              Net increase in cash and cash equivalents
            </td>

            <td></td>
            <td>
              <p>
                <NetCashIncrease subcategory={subcategory} />
              </p>
            </td>
            <td className="statement-value">36126363245</td>
          </tr>

          <tr>
            <td className="statement-key">
              Cash and cash equivalents at beginning of the year
            </td>

            <td></td>

            <td>
              <Cash3 subcategory={subcategory} />
            </td>

            <td className="statement-value">1702129040</td>
          </tr>
          <tr>
            <td className="statement-key">
              Cash and cash equivalent at end of the year
            </td>
            <td className="statement-value">14</td>
            <td>
              <Cash2 subcategory={subcategory} />
            </td>

            <td>
              <Cash3 subcategory={subcategory} />
            </td>
          </tr>
        </tbody>
      </table>
    </TablePanel>
  );
};

export default Cashflow;
