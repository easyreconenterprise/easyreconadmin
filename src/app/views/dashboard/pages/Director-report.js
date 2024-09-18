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
import { Small, H3 } from "app/components/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useReactToPrint } from "react-to-print";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import axios from "axios";
import Revenue from "../notes/Revenue";
import Revenue2 from "../notes/Revenue2";
import Revenue3 from "../notes/Revenue3";
import Result from "../notes/Result";
import Minimum from "../notes/Minimum";
import Income from "../notes/Income";
import Taxation2 from "../notes/Taxation2";
import Taxation3 from "../notes/Taxation3";
import Continue from "../notes/Continue";
import Profit from "../notes/Profit";
import "./print.css";
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const tableData5 = [
  {
    id: 1,
    description: "XX",
    percent: "10%",
    price: "223039",
    value: "223039",
  },
  {
    id: 2,
    description: "XX",
    percent: "10%",
    price: "223039",
    value: "223039",
  },

  {
    id: 3,
    description: "Parent Total",
    price: "223039",
    value: "223039",
  },
];
const tableData4 = [
  {
    id: 1,
    description: "XX",
    price: "223039",
    value: "223039",
  },
  {
    id: 2,
    description: "XX",
    price: "223039",
    value: "223039",
  },

  {
    id: 6,
    description: "Parent Total",
    price: "223039",
    value: "223039",
  },
];
const tableData = [
  {
    id: 1,
    description: "Revenue",
    price: "223039",
    value: "223039",
  },
  {
    id: 2,
    description: "Result from operating activities",
    price: "223039",
    value: "223039",
  },
  {
    id: 3,
    description: "Profit before minimum tax",
    price: "223039",
    value: "223039",
  },
  {
    id: 4,
    description: "Profit before incoming tax",
    price: "223039",
    value: "223039",
  },
  {
    id: 5,
    description: "taxation",
    price: "223039",
    value: "223039",
  },
  {
    id: 6,
    description: "Profit from continuing operations",
    price: "223039",
    value: "223039",
  },
  {
    id: 6,
    description: "loss from discontinuing operations",
    price: "223039",
    value: "223039",
  },
  {
    id: 6,
    description: "Profit from the year",
    price: "223039",
    value: "223039",
  },
  {
    id: 6,
    description: "Total comprehensive income for the year",
    price: "223039",
    value: "223039",
  },
];
const totalData = [
  {
    id: 1,
    description: "asset",
    value: "223039",
  },
];
const totalnonData = [
  {
    id: 1,
    description: "asset",
    value: "223039",
  },
  {
    id: 2,
    description: "asset",
    value: "223039",
  },
  {
    id: 3,
    description: "asset",
    value: "223039",
  },
];

const DirectorsReport = ({ incomeSum }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [textbox1Value, setTextbox1Value] = useState(
    localStorage.getItem("textbox1Value") || ""
  );

  useEffect(() => {
    // Save values to local storage whenever they change
    localStorage.setItem("textbox1Value", textbox1Value);
  }, [textbox1Value]);

  const [subcategory, setSubcategory] = useState({});
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
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

  const initialData = {
    content1: "for the year ended 31 December 2022.",
    content2:
      "The Directors are pleased to present their annual report on the affairs of XXX (“the Company”) together with the financial statements and the independent auditors report for the year ended 31 December 2022.",
    content3: "  Legal form and principal activity",
    content4:
      "The Company was incorporated on X month year as a limited liability company under the Companies  and Allied Matters Act Cap C.20, Laws of the Federation of Nigeria, 2004, with the name xxx  limited. The change in name was effected by a special resolution of the board of Directors and authority of Corporate Affairs Commission on xx month, year\n\nThe Company commenced business in year and has its Registered office at xx, Nigeria\n\n               The parent and ultimate controlling entity of the Company is xxx, a company incorporated on xx month year and domiciled in xxx. The principal activity of the Company continues to be the business of sale and distribution of crop protection chemicals.\n\n  Operating results\n\nThe following is a summary of the Company’s operating results:",
    content5:
      "  Directors and their interest\n\nThe Directors who served during the year and their interest in the ordinary shares of the Company as at year end were as follows:",
    content6: "Interest in the oridinary share of N1",
    content7: "XX",
    content8: "50,000,000",
    content9: "40,000,000",
    content10: "XX",
    content11: "30,000,000",
    content12: "20,000,000",
    content13: "Parent Company",
    content14: "50,000,000",
    content15: "10,000,000",
    content16:
      "The Directors of the Company, xxxx and xxx jointly have indirect shares through Parent company. \n\nIn accordance with Section 301 and 302 of the Companies and Allied Matters Act Cap C.20 CAMA 2020, none of the Directors has notified the Company of any declarable interests in contracts with the Company except as disclosed in Note 21(b)i.\n\n Director's report continues\n\nShareholder structure \n\n The following represents the analysis of the Company's shareholding structure as at the current and preceeding year ends:",
    content17: "0.000",
    content18: "5%",
    content19: "0.000",
    content20: "0.000",
    content21:
      "Property, plant and equipment\n\nInformation relating to changes in PPE is disclosed in Note 10 of these financial statements.\n\nCharitable donations\n\nIn the year under review, the Company made donation of  XXX in 2022 to Covid-19 relief fund (2021: ₦2.35 million). In compliance with Section 43(2) of the (CAMA), 2020, the Company did not make any donation or gift to any political party, political association or for any political purpose in the course of the year under review (2021: Nil)\n\nEmployment of physically challenged person\n\n",
    content22:
      "xxxx  is an equal opportunity employer and does not discriminate on any grounds. Thus, the Company provides employment opportunities to physically-challenged persons. However this goes beyond the need to ensure that there is no discrimination against such persons, but driven by a deep conviction that even in disability there could be immense ability. The Company did not have any physically challenged person in its employment at the year end 2021: Nil. In the event of members of staff becoming physically challenged, every effort is made to ensure that their employment with the Company continues and that appropriate training is arranged. It is the policy of the Company that the training, career development and promotion of physically challenged persons should, as far as possible, be identical with those of other employees.\n\n Health safety and welfare at work   ",

    content23:
      "xxx Limited is committed to preventing accidents, injuries and illness related to work, and to protecting  employees, contractors and others involved along the value chain. The Company recognise and require that everyone play an active role in providing a safe and healthy environment, and promote awareness and knowledge of safety and health among  employees, contractors and other people related to or impacted by the Company's business activities by setting high  safety and welfare standards. \n\nEmployees' involvement and training\n\nThe Company places considerable value on the involvement of its employees and has continued the practice of keeping them informed on matters affecting them as employees and on various factors affecting the performance of the Company.",
    content24:
      "Employee representatives are consulted regularly on a wide range of matters affecting their current and future interests. Circulars and newsletters on significant corporate issues are published in order to further facilitate the exchange of information. \n\nDirectors' report cont'd\n\nManagement, professional and technical expertise are the Company’s major assets. The Company continues to invest in developing such skills to enhance the productivity of its employees. This has broadened opportunities for career development within the Company.",
    content25:
      "Independent Auditor\n\nxxxxx, having satisfied the relevant corporate governance rules have indicated their willingness to continue as independent auditors to the Company in accordance with Section 401 (2) of the Companies and Allied Matters Act of Nigeria, CAMA 2020, therefore, the auditors will be reappointed at the next annual general meeting of the Company without any resolution being passed. ",
    content26: "BY ORDER OF THE BOARD",
    content27: "XXXX",
    content28: "XXXX",
    content29: "Company Secretary",
    content30: "0.000",
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
  const [editedText11, setEditedText11] = useState(initialData.content11);
  const [editedText12, setEditedText12] = useState(initialData.content12);
  const [editedText13, setEditedText13] = useState(initialData.content13);
  const [editedText14, setEditedText14] = useState(initialData.content14);
  const [editedText15, setEditedText15] = useState(initialData.content15);
  const [editedText16, setEditedText16] = useState(initialData.content16);
  const [editedText17, setEditedText17] = useState(initialData.content17);
  const [editedText18, setEditedText18] = useState(initialData.content18);
  const [editedText19, setEditedText19] = useState(initialData.content19);
  const [editedText20, setEditedText20] = useState(initialData.content20);
  const [editedText21, setEditedText21] = useState(initialData.content21);
  const [editedText22, setEditedText22] = useState(initialData.content22);
  const [editedText23, setEditedText23] = useState(initialData.content23);
  const [editedText24, setEditedText24] = useState(initialData.content24);
  const [editedText25, setEditedText25] = useState(initialData.content25);
  const [editedText26, setEditedText26] = useState(initialData.content26);
  const [editedText27, setEditedText27] = useState(initialData.content27);
  const [editedText28, setEditedText28] = useState(initialData.content28);
  const [editedText29, setEditedText29] = useState(initialData.content29);
  const [editedText30, setEditedText30] = useState(initialData.content30);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
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
    fetchDataFromDatabase("content11", setEditedText11);
    fetchDataFromDatabase("content12", setEditedText12);
    fetchDataFromDatabase("content13", setEditedText13);
    fetchDataFromDatabase("content14", setEditedText14);
    fetchDataFromDatabase("content15", setEditedText15);
    fetchDataFromDatabase("content16", setEditedText16);
    fetchDataFromDatabase("content17", setEditedText17);
    fetchDataFromDatabase("content18", setEditedText18);
    fetchDataFromDatabase("content19", setEditedText19);
    fetchDataFromDatabase("content20", setEditedText20);
    fetchDataFromDatabase("content21", setEditedText21);
    fetchDataFromDatabase("content22", setEditedText22);
    fetchDataFromDatabase("content23", setEditedText23);
    fetchDataFromDatabase("content24", setEditedText24);
    fetchDataFromDatabase("content25", setEditedText25);
    fetchDataFromDatabase("content26", setEditedText26);
    fetchDataFromDatabase("content27", setEditedText27);
    fetchDataFromDatabase("content28", setEditedText28);
    fetchDataFromDatabase("content29", setEditedText29);
    fetchDataFromDatabase("content30", setEditedText30);

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
  const handleText11Change = (e) => {
    const newText = e.target.value;
    setEditedText11(newText);
    saveTextToDatabase("content11", newText);
  };
  const handleText12Change = (e) => {
    const newText = e.target.value;
    setEditedText12(newText);
    saveTextToDatabase("content12", newText);
  };
  const handleText13Change = (e) => {
    const newText = e.target.value;
    setEditedText13(newText);
    saveTextToDatabase("content13", newText);
  };
  const handleText14Change = (e) => {
    const newText = e.target.value;
    setEditedText14(newText);
    saveTextToDatabase("content14", newText);
  };
  const handleText15Change = (e) => {
    const newText = e.target.value;
    setEditedText15(newText);
    saveTextToDatabase("content15", newText);
  };
  const handleText16Change = (e) => {
    const newText = e.target.value;
    setEditedText16(newText);
    saveTextToDatabase("content16", newText);
  };
  const handleText17Change = (e) => {
    const newText = e.target.value;
    setEditedText17(newText);
    saveTextToDatabase("content17", newText);
  };
  const handleText18Change = (e) => {
    const newText = e.target.value;
    setEditedText18(newText);
    saveTextToDatabase("content18", newText);
  };
  const handleText19Change = (e) => {
    const newText = e.target.value;
    setEditedText19(newText);
    saveTextToDatabase("content19", newText);
  };
  const handleText20Change = (e) => {
    const newText = e.target.value;
    setEditedText20(newText);
    saveTextToDatabase("content20", newText);
  };
  const handleText21Change = (e) => {
    const newText = e.target.value;
    setEditedText21(newText);
    saveTextToDatabase("content21", newText);
  };
  const handleText22Change = (e) => {
    const newText = e.target.value;
    setEditedText22(newText);
    saveTextToDatabase("content22", newText);
  };
  const handleText23Change = (e) => {
    const newText = e.target.value;
    setEditedText23(newText);
    saveTextToDatabase("content23", newText);
  };
  const handleText24Change = (e) => {
    const newText = e.target.value;
    setEditedText24(newText);
    saveTextToDatabase("content24", newText);
  };
  const handleText25Change = (e) => {
    const newText = e.target.value;
    setEditedText25(newText);
    saveTextToDatabase("content25", newText);
  };
  const handleText26Change = (e) => {
    const newText = e.target.value;
    setEditedText26(newText);
    saveTextToDatabase("content26", newText);
  };
  const handleText27Change = (e) => {
    const newText = e.target.value;
    setEditedText27(newText);
    saveTextToDatabase("content27", newText);
  };
  const handleText28Change = (e) => {
    const newText = e.target.value;
    setEditedText28(newText);
    saveTextToDatabase("content28", newText);
  };
  const handleText29Change = (e) => {
    const newText = e.target.value;
    setEditedText29(newText);
    saveTextToDatabase("content29", newText);
  };
  const handleText30Change = (e) => {
    const newText = e.target.value;
    setEditedText30(newText);
    saveTextToDatabase("content30", newText);
  };

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-dir-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-dir-text`, data, {
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
    const value11 = parseFloat(editedText11) || 0;
    const value12 = parseFloat(editedText12) || 0;
    const value13 = parseFloat(editedText13) || 0;
    const value14 = parseFloat(editedText14) || 0;
    const value15 = parseFloat(editedText15) || 0;
    const value16 = parseFloat(editedText16) || 0;
    const value17 = parseFloat(editedText17) || 0;
    const value18 = parseFloat(editedText18) || 0;
    const value19 = parseFloat(editedText19) || 0;
    const value20 = parseFloat(editedText20) || 0;
    const value21 = parseFloat(editedText21) || 0;
    const value22 = parseFloat(editedText22) || 0;
    const value23 = parseFloat(editedText23) || 0;
    const value24 = parseFloat(editedText24) || 0;
    const value25 = parseFloat(editedText25) || 0;
    const value26 = parseFloat(editedText26) || 0;
    const value27 = parseFloat(editedText27) || 0;
    const value28 = parseFloat(editedText28) || 0;
    const value29 = parseFloat(editedText29) || 0;
    const value30 = parseFloat(editedText30) || 0;
  }, [
    editedText1,
    editedText2,
    editedText3,
    editedText4,
    editedText5,
    editedText6,
    editedText7,
    editedText8,
    editedText9,
    editedText10,
    editedText11,
    editedText12,
    editedText13,
    editedText14,
    editedText15,
    editedText16,
    editedText17,
    editedText18,
    editedText19,
    editedText20,
    editedText21,
    editedText22,
    editedText23,
    editedText24,
    editedText25,
    editedText26,
    editedText27,
    editedText28,
    editedText29,
    editedText30,
  ]);

  return (
    <>
      <div ref={componentRef}>
        <Box className="breadcrumb no-print">
          <Breadcrumb routeSegments={[{ name: "Directors Report" }]} />
        </Box>
        <h6 style={{ marginLeft: "30px" }}>
          <b>
            <EditText
              name="textArea1"
              value={editedText1}
              onChange={handleText1Change}
            />
          </b>
        </h6>
        <SimpleCard>
          <React.Fragment>
            <div>
              <EditTextarea
                name="textArea2"
                value={editedText2}
                onChange={handleText2Change}
              />

              <b>
                <EditText
                  name="textArea3"
                  value={editedText3}
                  onChange={handleText3Change}
                />
              </b>

              <EditTextarea
                name="textArea4"
                value={editedText4}
                onChange={handleText4Change}
                rows={15}
              />
            </div>

            <div>
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

                <tbody>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Revenue
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Revenue2 subcategory={subcategory} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Revenue3 subcategory={subcategory} />
                    </td>
                  </tr>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Result from operating activities
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Result incomeSum={incomeSum} priorYear={false} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Result incomeSum={incomeSum} priorYear={true} />
                    </td>
                  </tr>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Profit before Minimum Tax
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Minimum incomeSum={incomeSum} priorYear={false} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Minimum incomeSum={incomeSum} priorYear={true} />
                    </td>
                  </tr>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Profit before Income Tax
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Income incomeSum={incomeSum} priorYear={false} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Income incomeSum={incomeSum} priorYear={true} />
                    </td>
                  </tr>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Taxation
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Taxation2 subcategory={subcategory} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Taxation3 subcategory={subcategory} />
                    </td>
                  </tr>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Profit from continuing operation
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Continue incomeSum={incomeSum} priorYear={false} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Continue incomeSum={incomeSum} priorYear={true} />
                    </td>
                  </tr>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Loss from discontinued operations, net of tax
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Continue incomeSum={incomeSum} priorYear={false} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Continue incomeSum={incomeSum} priorYear={true} />
                    </td>
                  </tr>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Profit for the year
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Profit incomeSum={incomeSum} priorYear={false} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Profit incomeSum={incomeSum} priorYear={true} />
                    </td>
                  </tr>
                  <tr>
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        Total comprehensive income for the year
                      </td>
                    </b>
                    <td></td>

                    <td>
                      <Profit incomeSum={incomeSum} priorYear={false} />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      {" "}
                      <Profit incomeSum={incomeSum} priorYear={true} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <b>
                {" "}
                <EditTextarea
                  name="textArea5"
                  value={editedText5}
                  onChange={handleText5Change}
                />
              </b>
              <b>
                {" "}
                <p style={{ float: "right" }}>
                  <EditText
                    name="textArea6"
                    value={editedText6}
                    onChange={handleText6Change}
                  />
                </p>
              </b>
              <table>
                <thead>
                  <tr>
                    <th style={{ fontSize: "15px" }}></th>

                    <th></th>
                    <th style={{ fontSize: "15px" }}></th>
                    <th style={{ fontSize: "15px" }}>Each</th>
                  </tr>
                  <tr style={{ textDecoration: "underline 2px" }}>
                    <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

                    <th style={{ fontSize: "15px" }}></th>
                    <th style={{ fontSize: "15px" }}>2022</th>
                    <th style={{ fontSize: "15px" }}>2023</th>
                  </tr>
                </thead>
                <thead></thead>

                <tr style={{ border: "none" }}>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    <EditText
                      name="textArea7"
                      value={editedText7}
                      onChange={handleText7Change}
                    />
                  </td>
                  <td style={{ border: "none", fontSize: "15px" }}></td>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    {" "}
                    <EditText
                      name="textArea8"
                      value={editedText8}
                      onChange={handleText8Change}
                    />
                  </td>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    <EditText
                      name="textArea9"
                      value={editedText9}
                      onChange={handleText9Change}
                    />
                  </td>
                </tr>
                <tr style={{ border: "none" }}>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    <EditText
                      name="textArea10"
                      value={editedText10}
                      onChange={handleText10Change}
                    />
                  </td>
                  <td style={{ border: "none", fontSize: "15px" }}></td>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    {" "}
                    <EditText
                      name="textArea11"
                      value={editedText11}
                      onChange={handleText11Change}
                    />
                  </td>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    <EditText
                      name="textArea12"
                      value={editedText12}
                      onChange={handleText12Change}
                    />
                  </td>
                </tr>
                <tr style={{ border: "none" }}>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    <EditText
                      name="textArea13"
                      value={editedText13}
                      onChange={handleText13Change}
                    />
                  </td>
                  <td style={{ border: "none", fontSize: "15px" }}></td>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    {" "}
                    <EditText
                      name="textArea14"
                      value={editedText14}
                      onChange={handleText14Change}
                    />
                  </td>
                  <td style={{ border: "none", fontSize: "15px" }}>
                    <EditText
                      name="textArea15"
                      value={editedText15}
                      onChange={handleText15Change}
                    />
                  </td>
                </tr>
              </table>

              <EditTextarea
                name="textArea16"
                value={editedText16}
                onChange={handleText16Change}
                rows={12}
              />

              <table className="table">
                <thead>
                  <p>Number of ordinary shares of</p>
                  <tr style={{ textDecoration: "underline 2px" }}>
                    <th style={{ fontSize: "15px", fontWeight: "500" }}>
                      Shareholders
                    </th>

                    <th style={{ fontSize: "15px" }}>%</th>
                    <th style={{ fontSize: "15px" }}>N1 Each</th>
                    <th style={{ fontSize: "15px" }}>Amount N</th>
                  </tr>
                </thead>
                <thead></thead>

                <tbody>
                  <tr
                    style={{
                      borderBottom: "2px solid black",
                      borderTop: "2px solid black",
                    }}
                  >
                    <b>
                      {" "}
                      <td style={{ fontSize: "15px", border: "none" }}>
                        <EditTextarea
                          name="textArea17"
                          value={editedText17}
                          onChange={handleText17Change}
                        />
                      </td>
                    </b>
                    <td>
                      {" "}
                      <EditTextarea
                        name="textArea18"
                        value={editedText18}
                        onChange={handleText18Change}
                      />
                    </td>
                    <td>
                      {" "}
                      <EditTextarea
                        name="textArea19"
                        value={editedText19}
                        onChange={handleText19Change}
                      />
                    </td>
                    <td style={{ fontSize: "15px", border: "none" }}>
                      <EditTextarea
                        name="textArea20"
                        value={editedText20}
                        onChange={handleText20Change}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <b>
                {" "}
                <EditTextarea
                  name="textArea21"
                  value={editedText21}
                  onChange={handleText21Change}
                  rows={15}
                />
              </b>

              <EditTextarea
                name="textArea22"
                value={editedText22}
                onChange={handleText22Change}
                rows={12}
              />
              <EditTextarea
                name="textArea23"
                value={editedText23}
                onChange={handleText23Change}
                rows={12}
              />

              <EditTextarea
                name="textArea24"
                value={editedText24}
                onChange={handleText24Change}
                rows={9}
              />

              <EditTextarea
                name="textArea25"
                value={editedText25}
                onChange={handleText25Change}
                rows={9}
              />
            </div>

            <b>
              <EditText
                name="textArea26"
                value={editedText26}
                onChange={handleText26Change}
              />
            </b>
            <b>
              <EditText
                name="textArea27"
                value={editedText27}
                onChange={handleText27Change}
              />
            </b>
            <b>
              <EditText
                name="textArea28"
                value={editedText28}
                onChange={handleText28Change}
              />
            </b>
            <b>
              <EditText
                name="textArea29"
                value={editedText29}
                onChange={handleText29Change}
              />
            </b>
          </React.Fragment>
        </SimpleCard>
      </div>
    </>
  );
};

export default DirectorsReport;
