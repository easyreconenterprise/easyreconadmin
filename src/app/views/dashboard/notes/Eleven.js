import {
  Box,
  Card,
  Grid,
  Icon,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import React, { useEffect, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import Inventories from "./Inventories";
import Trade from "./Trade";
import Prepayment from "./Prepayment";
import Cash from "./Cash";
import Capital from "./Capital";
import Shared from "./Shared";
import axios from "axios";
import Movement from "../cashflow/Movement";
import Movement2 from "../cashflow/Movement2";
import Movement3 from "../cashflow/Movement3";
import Anal from "./Anal";
import TotalAnal from "./TotalAnal";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const EleventoFif = () => {
  const [subcategory, setSubcategory] = useState({});

  const tableData4 = [
    {
      id: 1,
      description: "Current",
      value: 34563,
    },
    {
      id: 1,
      description: "Non-current",
      value: 34563,
    },
  ];
  const tableData5 = [
    {
      id: 1,
      description: "Movement in trade and other receivables",
      value: 34563,
    },
    {
      id: 1,
      description: "Transfer of Nature Savvy",
      value: 34563,
    },
    {
      id: 1,
      description: "Recognition of loan conversion",
      value: 34563,
    },
    {
      id: 1,
      description: "Impairment loss on trade receivables",
      value: 34563,
    },
  ];
  const tableData6 = [
    {
      id: 1,
      description: "Prepaid rent",
      value: 34563,
    },
    {
      id: 1,
      description: "Prepaid insurance",
      value: 34563,
    },
    {
      id: 1,
      description: "Prepaid transaction code",
      value: 34563,
    },
    {
      id: 1,
      description: "Advance payment for supplies",
      value: 34563,
    },
    {
      id: 1,
      description: "Advance to suppliers",
      value: 34563,
    },
  ];
  const tableData7 = [
    {
      id: 1,
      description: "Movement in prepayment and advances",
      value: 34563,
    },
    {
      id: 1,
      description: "Transfer to Nature Savvy",
      value: 34563,
    },
  ];
  const cashEqui = [
    {
      id: 1,
      description: "Cash at hand",
      value: 34563,
    },
    {
      id: 1,
      description: "Bank balances",
      value: 34563,
    },
    {
      id: 1,
      description: "Restricted cash",
      value: 34563,
    },
    {
      id: 1,
      description: "Fund placed for purchase of foreign currenncy",
      value: 34563,
    },
    {
      id: 1,
      description:
        "Cash and cash equivalents per statement of financial position",
      value: 34563,
    },
  ];
  const totalnonData = [
    {
      id: 1,
      description: "",
      value: 34563,
    },
  ];
  const totalAsset = [
    {
      id: 1,
      description: "total  asset",
      value: 34563,
    },
  ];
  const totalEquit = [
    {
      id: 1,
      description: "total  Equity and Liability",
      value: 34563,
    },
  ];
  const currentEquit = [
    {
      id: 1,
      description: "total  current Liabilites",
      value: 34563,
    },
  ];
  const noncurrentEquit = [
    {
      id: 1,
      description: "total  non-current Liabilites",
      value: 34563,
    },
  ];
  // useEffect(() => {
  //   const storedData = localStorage.getItem("data");
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
        setSubcategory(mappedData.subcategory);

        // Calculate summations and set state for incomeSum
      } catch (error) {
        console.error("Error fetching mapped data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SimpleCard>
        <React.Fragment>
          <div>
            <b>
              <EditText defaultValue="Notes to the financial statement" />
            </b>
            <b>
              <EditText defaultValue="(a) Impairment loss" />
            </b>
            <EditText defaultValue="The Company had no impairment loss on property, plants and equipment" />
            <b>
              <EditText defaultValue="(b) Capital commitment" />
            </b>
            <EditText defaultValue="The Company had no capital commitments at the year end(2021: Nil)" />
            <b>
              <EditText defaultValue="(c) Security " />
            </b>
            <EditTextarea defaultValue="The Company's property, plant and equipment together with other floating assets are pledged as security for bank loans held by the Company as at year end." />
            <b>
              <EditText defaultValue="(d) Borrowing costs" />
            </b>
            <EditText defaultValue="No borrowing costs were capitalised during the year(2021: Nil)" />
            <b>
              <EditText defaultValue="11. Inventories" />
            </b>
          </div>
        </React.Fragment>
      </SimpleCard>
      <Inventories subcategory={subcategory} />
      <EditText defaultValue="(b) Reconcilation of changes in inventories included in the statement of cash flow" />
      <Movement subcategory={subcategory} />
      <EditTextarea defaultValue="The value of raw materials, packaging materials, changes in finished products recognised in cost of sales during the year amounted to ₦ XXX (2021: ₦11.7 billion)." />
      <b>
        <EditText defaultValue="12. Trade and other receivables" />
      </b>
      <Trade subcategory={subcategory} />

      <EditText defaultValue="(b) The Company’s exposure to credit risks and impairment losses related to trade and other receivables is disclosed in Note 19." />
      <EditText defaultValue="(c)  Reconciliation of changes in trade and other receivables included in the statement of cashflows:" />
      <Movement2 subcategory={subcategory} />
      <b>
        <EditText defaultValue="13. Prepayment and advancement" />
      </b>
      <Prepayment subcategory={subcategory} />
      <EditText defaultValue="(b) Reconcilation of changes in prepayment and advances" />
      <Movement3 subcategory={subcategory} />
      <EditText defaultValue="Analyzed as follows" />
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}></th>
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
        {tableData4.map((sale) => (
          <tr key={sale.id}>
            {" "}
            <td>{sale.description}</td>
            <td></td>
            <td></td>
            <td>N{sale.value}</td>
          </tr>
        ))}
        {totalnonData.map((sale) => (
          <tr
            key={sale.id}
            style={{
              borderBottom: "2px solid black",
              borderTop: "2px solid black",
            }}
          >
            <b>
              {" "}
              <td>{sale.description}</td>
            </b>
            <td></td>

            <td></td>
            <td>N{sale.value}</td>
          </tr>
        ))}
      </table>
      <b>
        <EditText defaultValue="14. Cash and cash equivalent" />
      </b>
      <Cash subcategory={subcategory} />
      <EditTextarea defaultValue="The total overdraft facilities available to the Company as at the year end amounted to ₦ 377 million (2021: ₦234 million) and are secured by a debenture over the fixed and floating assets of the Company. The interest rate on the overdraft facilities during the year was 16%  (2021: 16%)." />
      <EditTextarea defaultValue="Restricted cash represents other financial assets held for the purchase of foreign currencies with the Central Bank of Nigeria (CBN) as at year end. The funds were deducted from the Companys bank accounts by the Companys banker and were placed with the CBN for the allocation and purchase of foreign currencies which are to be used for normal business transactions" />
      <EditText defaultValue="The Company’s exposure to liquidity risk and sensitivity analysis for financial assets and liabilities is disclosed in Note 19." />

      <b>
        {" "}
        <EditText defaultValue="15. Capital and reserves" />
      </b>
      <EditText defaultValue="(a) Autorized ordinary share of N1 each" />
      <Capital subcategory={subcategory} />
      <EditText defaultValue="(b) Issued, allotted and fully paid ordinary shares of N1 each" />
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}></th>
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
        {cashEqui.map((sale) => (
          <tr key={sale.id}>
            {" "}
            <td>{sale.description}</td>
            <td></td>
            <td></td>
            <td>N{sale.value}</td>
          </tr>
        ))}
        {totalnonData.map((sale) => (
          <tr
            key={sale.id}
            style={{
              borderBottom: "2px solid black",
              borderTop: "2px solid black",
            }}
          >
            <b>
              {" "}
              <td>{sale.description}</td>
            </b>
            <td></td>

            <td></td>
            <td>N{sale.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default EleventoFif;
