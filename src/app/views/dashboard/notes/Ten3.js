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
import axios from "axios";
import "react-edit-text/dist/index.css";
import "./Style.css";
import Property from "./Property";
import { WorkbookHyperlink } from "@syncfusion/ej2-react-spreadsheet";
import Prior from "../ppe/Prior";
import Current from "../ppe/Current";
import LocalStorageEdit from "../cashflow/LocalStorageEdit";
import Get from "./Get";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Ten3 = () => {
  const [subcategory, setSubcategory] = useState({});

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
          "https://kubique-624550d33ef4.herokuapp.com/api/mapped-data",
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
  const [editedText39, setEditedText39] = useState("");
  const [editedText40, setEditedText40] = useState("");
  const [editedText41, setEditedText41] = useState("");
  const [editedText42, setEditedText42] = useState("");
  const [editedText43, setEditedText43] = useState("");
  const [editedText44, setEditedText44] = useState("");
  const [editedText45, setEditedText45] = useState("");
  const [editedText46, setEditedText46] = useState("");
  const [editedText47, setEditedText47] = useState("");
  const [editedText48, setEditedText48] = useState("");
  const [editedText49, setEditedText49] = useState("");
  const [editedText50, setEditedText50] = useState("");
  const [editedText61, setEditedText61] = useState("");
  const [editedText62, setEditedText62] = useState("");
  const [editedText63, setEditedText63] = useState("");
  const [editedText64, setEditedText64] = useState("");
  const [editedText65, setEditedText65] = useState("");
  const [editedText66, setEditedText66] = useState("");
  const [editedText87, setEditedText87] = useState("");
  const [editedText88, setEditedText88] = useState("");
  const [editedText89, setEditedText89] = useState("");
  const [editedText90, setEditedText90] = useState("");
  const [editedText91, setEditedText91] = useState("");
  const [editedText92, setEditedText92] = useState("");
  const [editedText93, setEditedText93] = useState("");
  const [editedText94, setEditedText94] = useState("");
  const [editedText95, setEditedText95] = useState("");
  const [editedText96, setEditedText96] = useState("");
  // const [editedText76, setEditedText76] = useState("");
  // const [editedText77, setEditedText77] = useState("");
  // const [editedText78, setEditedText78] = useState("");
  // const [editedText79, setEditedText79] = useState("");
  // const [editedText80, setEditedText80] = useState("");
  // const [editedText81, setEditedText81] = useState("");
  // const [editedText82, setEditedText82] = useState("");

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts
    const savedText39 = localStorage.getItem("content39") || "5454";
    const savedText40 = localStorage.getItem("content40") || "5454";
    const savedText41 = localStorage.getItem("content41") || "5454";
    const savedText42 = localStorage.getItem("content42") || "5454";
    const savedText43 = localStorage.getItem("content43") || "5454";
    const savedText44 = localStorage.getItem("content44") || "5454";
    const savedText45 = localStorage.getItem("content45") || "5454";
    const savedText46 = localStorage.getItem("content46") || "5454";
    const savedText47 = localStorage.getItem("content47") || "5454";
    const savedText48 = localStorage.getItem("content48") || "5454";
    const savedText49 = localStorage.getItem("content49") || "5454";
    const savedText50 = localStorage.getItem("content50") || "5454";
    const savedText61 = localStorage.getItem("content61") || "5454";
    const savedText62 = localStorage.getItem("content62") || "5454";
    const savedText63 = localStorage.getItem("content63") || "5454";
    const savedText64 = localStorage.getItem("content64") || "5454";
    const savedText65 = localStorage.getItem("content65") || "5454";
    const savedText66 = localStorage.getItem("content66") || "5454";
    const savedText87 = localStorage.getItem("content87") || "5454";
    const savedText88 = localStorage.getItem("content88") || "5454";
    const savedText89 = localStorage.getItem("content89") || "5454";
    const savedText90 = localStorage.getItem("content90") || "5454";
    const savedText91 = localStorage.getItem("content91") || "5454";
    const savedText92 = localStorage.getItem("content92") || "5454";
    const savedText93 = localStorage.getItem("content93") || "5454";
    const savedText94 = localStorage.getItem("content94") || "5454";
    const savedText95 = localStorage.getItem("content95") || "5454";
    const savedText96 = localStorage.getItem("content96") || "5454";

    setEditedText39(savedText39);
    setEditedText40(savedText40);
    setEditedText41(savedText41);
    setEditedText42(savedText42);
    setEditedText43(savedText43);
    setEditedText44(savedText44);
    setEditedText45(savedText45);
    setEditedText46(savedText46);
    setEditedText47(savedText47);
    setEditedText48(savedText48);
    setEditedText49(savedText49);
    setEditedText50(savedText50);
    setEditedText61(savedText61);
    setEditedText62(savedText62);
    setEditedText63(savedText63);
    setEditedText64(savedText64);
    setEditedText65(savedText65);
    setEditedText66(savedText66);
    setEditedText87(savedText87);
    setEditedText88(savedText88);
    setEditedText89(savedText89);
    setEditedText90(savedText90);
    setEditedText91(savedText91);
    setEditedText92(savedText92);
    setEditedText93(savedText93);
    setEditedText94(savedText94);
    setEditedText95(savedText95);
    setEditedText96(savedText96);
  }, []);

  // Automatically save edited text to the database when it changes
  useEffect(() => {
    saveTextToDatabase("content39", editedText39);
    saveTextToDatabase("content40", editedText40);
    saveTextToDatabase("content41", editedText41);
    saveTextToDatabase("content42", editedText42);
    saveTextToDatabase("content43", editedText43);
    saveTextToDatabase("content44", editedText44);
    saveTextToDatabase("content45", editedText45);
    saveTextToDatabase("content46", editedText46);
    saveTextToDatabase("content47", editedText47);
    saveTextToDatabase("content48", editedText48);
    saveTextToDatabase("content49", editedText49);
    saveTextToDatabase("content50", editedText50);
    saveTextToDatabase("content61", editedText61);
    saveTextToDatabase("content62", editedText62);
    saveTextToDatabase("content63", editedText63);
    saveTextToDatabase("content64", editedText64);
    saveTextToDatabase("content65", editedText65);
    saveTextToDatabase("content66", editedText66);
    saveTextToDatabase("content87", editedText87);
    saveTextToDatabase("content88", editedText88);
    saveTextToDatabase("content89", editedText89);
    saveTextToDatabase("content90", editedText90);
    saveTextToDatabase("content91", editedText91);
    saveTextToDatabase("content92", editedText92);
    saveTextToDatabase("content93", editedText93);
    saveTextToDatabase("content94", editedText94);
    saveTextToDatabase("content95", editedText95);
    saveTextToDatabase("content96", editedText96);
  }, [
    editedText39,
    editedText40,
    editedText41,
    editedText42,
    editedText43,
    editedText44,
    editedText45,
    editedText46,
    editedText47,
    editedText48,
    editedText49,
    editedText50,
    editedText61,
    editedText62,
    editedText63,
    editedText64,
    editedText65,
    editedText66,
    editedText87,
    editedText88,
    editedText89,
    editedText90,
    editedText91,
    editedText92,
    editedText93,
    editedText94,
    editedText95,
    editedText96,
  ]);

  const saveTextToDatabase = (field, content) => {
    const token = localStorage.getItem("jwtToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = {
      [field]: content,
    };

    axios
      .post(
        "https://kubique-624550d33ef4.herokuapp.com/api/save-cash-text",
        data,
        {
          headers,
        }
      )
      .then((response) => {
        // Update the edited text in local storage
        localStorage.setItem(field, response.data[field]);
      })
      .catch((error) => {
        console.error("Error saving text:", error);
      });
  };

  return (
    <div className="bottom-scroll-container" style={{ marginRight: "50px" }}>
      <SimpleCard>
        <React.Fragment>
          <div>
            <b>
              <EditText defaultValue="Notes to the financial statement" />
            </b>
            <b>
              <EditText defaultValue="10. Property, plant and equipment" />
            </b>

            <EditText defaultValue="The movement on these accounts during the current and preceding year was as follows:" />
          </div>
        </React.Fragment>
      </SimpleCard>

      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}>Land </th>

            <th style={{ fontSize: "15px", width: "1500px" }}>Building</th>

            <th style={{ fontSize: "15px" }}>Plant and machinery</th>

            <th style={{ fontSize: "15px" }}>Furniture and Fittings</th>
            <th style={{ fontSize: "15px" }}>Motor Vehicles</th>
            <th style={{ fontSize: "15px" }}>Computer Equipment</th>
            <th style={{ fontSize: "15px" }}>CWIP</th>
            <th style={{ fontSize: "15px" }}>Total</th>
          </tr>
        </thead>

        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
            <th style={{ fontSize: "15px" }}>N0.00</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}>Cost</th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
          </tr>
        </thead>

        <tr>
          <b>
            {" "}
            <td>At 1 January 2021</td>
          </b>
          <td>
            <EditText
              name="textArea39"
              value={editedText39}
              onChange={(e) => setEditedText39(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText39 }}
            />
          </td>
          <td>
            <EditText
              name="textArea40"
              value={editedText40}
              onChange={(e) => setEditedText40(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText40 }}
            />
          </td>
          <td>
            <EditText
              name="textArea41"
              value={editedText41}
              onChange={(e) => setEditedText41(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText41 }}
            />
          </td>
          <td>
            <EditText
              name="textArea42"
              value={editedText42}
              onChange={(e) => setEditedText42(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText42 }}
            />
          </td>
          <td>
            <EditText
              name="textArea43"
              value={editedText43}
              onChange={(e) => setEditedText43(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText43 }}
            />
          </td>
          <td>
            <EditText
              name="textArea44"
              value={editedText44}
              onChange={(e) => setEditedText44(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText44 }}
            />
          </td>
          <td>
            <EditText
              name="textArea45"
              value={editedText45}
              onChange={(e) => setEditedText45(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText45 }}
            />
          </td>
          <td>
            {" "}
            <Get />
          </td>
        </tr>
        <tr>
          <td>Transfer to Nature savvy</td>
          <td>
            <EditText
              name="textArea46"
              value={editedText46}
              onChange={(e) => setEditedText46(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText46 }}
            />
          </td>
          <td>
            <EditText
              name="textArea47"
              value={editedText47}
              onChange={(e) => setEditedText47(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText47 }}
            />
          </td>
          <td>
            <EditText
              name="textArea48"
              value={editedText48}
              onChange={(e) => setEditedText48(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText48 }}
            />
          </td>
          <td>
            <EditText
              name="textArea49"
              value={editedText49}
              onChange={(e) => setEditedText49(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText49 }}
            />
          </td>
          <td>
            <EditText
              name="textArea50"
              value={editedText50}
              onChange={(e) => setEditedText50(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText50 }}
            />
          </td>
          <td>
            <EditText
              name="textArea61"
              value={editedText61}
              onChange={(e) => setEditedText61(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText61 }}
            />
          </td>
          <td>
            <EditText
              name="textArea62"
              value={editedText62}
              onChange={(e) => setEditedText62(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText62 }}
            />
          </td>
        </tr>
        <tr>
          <td>Additions</td>
          <td>
            <EditText
              name="textArea63"
              value={editedText63}
              onChange={(e) => setEditedText63(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText63 }}
            />
          </td>
          <td>
            <EditText
              name="textArea64"
              value={editedText64}
              onChange={(e) => setEditedText64(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText64 }}
            />
          </td>
          <td>
            <EditText
              name="textArea65"
              value={editedText65}
              onChange={(e) => setEditedText65(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText65 }}
            />
          </td>
          <td>
            <EditText
              name="textArea66"
              value={editedText66}
              onChange={(e) => setEditedText66(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText66 }}
            />
          </td>
          <td>
            <EditText
              name="textArea87"
              value={editedText87}
              onChange={(e) => setEditedText87(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText87 }}
            />
          </td>
          <td>
            <EditText
              name="textArea88"
              value={editedText88}
              onChange={(e) => setEditedText88(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText88 }}
            />
          </td>
          <td>
            <EditText
              name="textArea89"
              value={editedText89}
              onChange={(e) => setEditedText89(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText89 }}
            />
          </td>
        </tr>
        <tr>
          <td>Disposal</td>
          <td>
            <EditText
              name="textArea90"
              value={editedText90}
              onChange={(e) => setEditedText90(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText90 }}
            />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            <EditText
              name="textArea96"
              value={editedText96}
              onChange={(e) => setEditedText96(e.target.value)}
              dangerouslySetInnerHTML={{ __html: editedText96 }}
            />
          </td>
        </tr>

        <tr>
          <b>
            {" "}
            <td>At 31 December 2021</td>
          </b>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <br></br>

        <tr>
          <b>
            {" "}
            <td>At 1 January 2022 </td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <tr>
          <td>Addition</td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <td>Reclassification</td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td>At 31 December 2022</td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}>Accumulated Depreciation</th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
          </tr>
        </thead>
        <tr>
          <b>
            {" "}
            <td>At 1 January 2021</td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <td>Charge for the year</td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <tr>
          <td>Transfer to nature savvy</td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <b>
            <td>At 31 December 2021</td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <b>
            {" "}
            <td>At 1 January 2022</td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>
        <tr>
          <td>Charge for the year </td>

          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <tr>
          <b>
            {" "}
            <td>At 31 December 2022 </td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
        </tr>

        <thead>
          <tr>
            <th style={{ fontSize: "15px" }}>Carrying Amount</th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}></th>
          </tr>
        </thead>
        <tr>
          <b>
            {" "}
            <td>At 1 December 2021</td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <Current subcategory={subcategory} />
          </td>
        </tr>

        <tr>
          <b>
            {" "}
            <td>At 31 December 2022</td>
          </b>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText defaultValue="89798" />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <Prior subcategory={subcategory} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Ten3;
