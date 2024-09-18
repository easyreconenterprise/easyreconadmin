import React, { useEffect, useState } from "react";

import ChangeInv2 from "./ChangeInv2";
import Prepay2 from "./Prepay2";
import Trade2 from "./Trade2";
import Payable2 from "./Payable2";
import Investment2 from "./Investment2";
import Deferred2 from "./Deferred2";
import Property2 from "./Property2";
import CurrentTax2 from "./CurrentTax";
import Loans2 from "./Loans2";
import CurrentTax3 from "./CurrentTax3";
import Prior from "../ppe/Prior";
import Current from "../ppe/Current";
import axios from "axios";

const Working = () => {
  const [subcategory, setsubcategory] = useState({});
  // useEffect(() => {
  //   const storedData = localStorage.getItem('data');
  //   // Parse the JSON string back to an object (if applicable)
  //   setsubcategory(JSON.parse(storedData));

  //   //
  // }, []);
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
        setsubcategory(mappedData.subcategory);

        // Calculate summations and set state for incomeSum
      } catch (error) {
        console.error("Error fetching mapped data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{ flexBasis: "45%", marginLeft: "20px", marginRight: "20px" }}
        >
          <b>
            <p>Cashflow workings</p>
          </b>
          <ChangeInv2 subcategory={subcategory} />
          <Prepay2 subcategory={subcategory} />
          <Trade2 subcategory={subcategory} />
          <Payable2 subcategory={subcategory} />
          <Investment2 subcategory={subcategory} />
          <Deferred2 subcategory={subcategory} />
          <Property2 subcategory={subcategory} />
        </div>
        <div style={{ flexBasis: "45%" }}>
          <b>
            <p>Cashflow workings</p>
          </b>
          <CurrentTax2 subcategory={subcategory} />
          <Loans2 subcategory={subcategory} />
          {/*<CurrentTax3 subcategory={subcategory} />*/}
        </div>
      </div>
    </div>
  );
};

export default Working;
