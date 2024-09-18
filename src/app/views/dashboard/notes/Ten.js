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
import { useTotal } from "../pages/TotalContext";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Ten = () => {
  const [subcategory, setSubcategory] = useState({});
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);

  const { total3, setTotal3 } = useTotal();
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);
  const [total6, setTotal6] = useState(0);
  const [total7, setTotal7] = useState(0);
  const [total8, setTotal8] = useState(0);
  const [total9, setTotal9] = useState(0);
  const [total10, setTotal10] = useState(0);
  const [total11, setTotal11] = useState(0);
  const { total12, setTotal12 } = useTotal();
  const [total13, setTotal13] = useState(0);
  const [total14, setTotal14] = useState(0);
  const [total15, setTotal15] = useState(0);
  const [total16, setTotal16] = useState(0);
  const [total17, setTotal17] = useState(0);
  const [total18, setTotal18] = useState(0);
  const [total19, setTotal19] = useState(0);
  const [total20, setTotal20] = useState(0);
  const [total21, setTotal21] = useState(0);
  const { total22, setTotal22 } = useTotal();
  const [total23, setTotal23] = useState(0);
  const [total24, setTotal24] = useState(0);
  const [total25, setTotal25] = useState(0);
  const [total26, setTotal26] = useState(0);
  const [total27, setTotal27] = useState(0);
  const [total28, setTotal28] = useState(0);
  const [total29, setTotal29] = useState(0);
  const [total30, setTotal30] = useState(0);
  const [total31, setTotal31] = useState(0);
  const { total32, setTotal32 } = useTotal();
  const [total33, setTotal33] = useState(0);
  const [total34, setTotal34] = useState(0);
  const [total35, setTotal35] = useState(0);
  const [total36, setTotal36] = useState(0);
  const [total37, setTotal37] = useState(0);
  const [total38, setTotal38] = useState(0);
  const [total39, setTotal39] = useState(0);
  const [total40, setTotal40] = useState(0);
  const [total41, setTotal41] = useState(0);
  const [total42, setTotal42] = useState(0);
  const [total43, setTotal43] = useState(0);
  const [total44, setTotal44] = useState(0);
  const [total45, setTotal45] = useState(0);
  const [total46, setTotal46] = useState(0);
  const [total47, setTotal47] = useState(0);
  const [total48, setTotal48] = useState(0);
  const [total49, setTotal49] = useState(0);
  const [total50, setTotal50] = useState(0);
  const [total51, setTotal51] = useState(0);
  const [total52, setTotal52] = useState(0);
  const [total53, setTotal53] = useState(0);
  const [total54, setTotal54] = useState(0);
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
    content40: "0.000",
    content41: "0.000",
    content42: "0.000",
    content43: "0.000",
    content44: " 0.000",
    content45: "0.000",
    content46: "0.000",
    content47: "0.000",
    content48: "0.000",
    content49: "0.000",
    content50: "0.000",
    content511: "0.000",
    content521: "0.000",
    content531: "0.000",
    content541: "0.000",
    content551: "0.000",
    content561: "0.000",
    content571: "0.000",
    content581: "0.000",
    content591: "0.000",
    content601: "0.000",
    content61: "0.000",
    content62: "0.000",
    content63: "0.000",
    content64: "0.000",
    content65: "0.000",
    content66: "0.000",
    content67: "0.000",
    content68: "0.000",
    content69: "0.000",
    content70: "0.000",
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
    content11: "0.000",
    content12: "0.000",
    content13: "0.000",
    content14: "0.000",
    content15: "0.000",
    content16: "0.000",
    content17: "0.000",
    content18: "0.000",
    content19: "0.000",
    content20: "0.000",
    content21: "0.000",
    content22: "0.000",
    content23: "0.000",
    content24: "0.000",
    content25: "0.000",
    content90: "0.000",
    content91: "0.000",
    content92: "0.000",
    content93: "0.000",
    content94: "0.000",
    content95: "0.000",
    content96: "0.000",
    content97: "0.000",
    content98: "0.000",
    content99: "0.000",
    content100: "0.000",
    content82: "0.000",
    content83: "0.000",
    content84: "0.000",
    content84: "0.000",
    content86: "0.000",
    content87: "0.000",
    content88: "0.000",
    content89: "0.000",
  };

  const [editedText40, setEditedText40] = useState(initialData.content40);
  const [editedText41, setEditedText41] = useState(initialData.content41);
  const [editedText42, setEditedText42] = useState(initialData.content42);
  const [editedText43, setEditedText43] = useState(initialData.content43);
  const [editedText44, setEditedText44] = useState(initialData.content44);
  const [editedText45, setEditedText45] = useState(initialData.content45);
  const [editedText46, setEditedText46] = useState(initialData.content46);
  const [editedText47, setEditedText47] = useState(initialData.content47);
  const [editedText48, setEditedText48] = useState(initialData.content48);
  const [editedText49, setEditedText49] = useState(initialData.content49);
  const [editedText50, setEditedText50] = useState(initialData.content50);
  const [editedText511, setEditedText511] = useState(initialData.content511);
  const [editedText521, setEditedText521] = useState(initialData.content521);
  const [editedText531, setEditedText531] = useState(initialData.content531);
  const [editedText541, setEditedText541] = useState(initialData.content541);
  const [editedText551, setEditedText551] = useState(initialData.content551);
  const [editedText561, setEditedText561] = useState(initialData.content561);
  const [editedText571, setEditedText571] = useState(initialData.content571);
  const [editedText581, setEditedText581] = useState(initialData.content581);
  const [editedText591, setEditedText591] = useState(initialData.content591);
  const [editedText601, setEditedText601] = useState(initialData.content601);
  const [editedText61, setEditedText61] = useState(initialData.content61);
  const [editedText62, setEditedText62] = useState(initialData.content62);
  const [editedText63, setEditedText63] = useState(initialData.content63);
  const [editedText64, setEditedText64] = useState(initialData.content64);
  const [editedText65, setEditedText65] = useState(initialData.content65);
  const [editedText66, setEditedText66] = useState(initialData.content66);
  const [editedText67, setEditedText67] = useState(initialData.content67);
  const [editedText68, setEditedText68] = useState(initialData.content68);
  const [editedText69, setEditedText69] = useState(initialData.content69);
  const [editedText70, setEditedText70] = useState(initialData.content70);
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
  const [editedText90, setEditedText90] = useState(initialData.content90);
  const [editedText91, setEditedText91] = useState(initialData.content91);
  const [editedText92, setEditedText92] = useState(initialData.content92);
  const [editedText93, setEditedText93] = useState(initialData.content93);
  const [editedText94, setEditedText94] = useState(initialData.content94);
  const [editedText95, setEditedText95] = useState(initialData.content95);
  const [editedText96, setEditedText96] = useState(initialData.content96);
  const [editedText97, setEditedText97] = useState(initialData.content97);
  const [editedText98, setEditedText98] = useState(initialData.content98);
  const [editedText99, setEditedText99] = useState(initialData.content99);
  const [editedText100, setEditedText100] = useState(initialData.content100);

  const [editedText82, setEditedText82] = useState(initialData.content82);
  const [editedText83, setEditedText83] = useState(initialData.content83);
  const [editedText84, setEditedText84] = useState(initialData.content84);
  const [editedText85, setEditedText85] = useState(initialData.content85);
  const [editedText86, setEditedText86] = useState(initialData.content86);
  const [editedText87, setEditedText87] = useState(initialData.content87);
  const [editedText88, setEditedText88] = useState(initialData.content88);
  const [editedText89, setEditedText89] = useState(initialData.content89);

  useEffect(() => {
    // Fetch the last edited text from localStorage when the component mounts

    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content40", setEditedText40);
    fetchDataFromDatabase("content41", setEditedText41);
    fetchDataFromDatabase("content42", setEditedText42);
    fetchDataFromDatabase("content43", setEditedText43);
    fetchDataFromDatabase("content44", setEditedText44);
    fetchDataFromDatabase("content45", setEditedText45);
    fetchDataFromDatabase("content46", setEditedText46);
    fetchDataFromDatabase("content47", setEditedText47);
    fetchDataFromDatabase("content48", setEditedText48);
    fetchDataFromDatabase("content49", setEditedText49);
    fetchDataFromDatabase("content50", setEditedText50);
    fetchDataFromDatabase("content511", setEditedText511);
    fetchDataFromDatabase("content521", setEditedText521);
    fetchDataFromDatabase("content531", setEditedText531);
    fetchDataFromDatabase("content541", setEditedText541);
    fetchDataFromDatabase("content551", setEditedText551);
    fetchDataFromDatabase("content561", setEditedText561);
    fetchDataFromDatabase("content571", setEditedText571);
    fetchDataFromDatabase("content581", setEditedText581);
    fetchDataFromDatabase("content591", setEditedText591);
    fetchDataFromDatabase("content601", setEditedText601);
    fetchDataFromDatabase("content61", setEditedText61);
    fetchDataFromDatabase("content62", setEditedText62);
    fetchDataFromDatabase("content63", setEditedText63);
    fetchDataFromDatabase("content64", setEditedText64);
    fetchDataFromDatabase("content65", setEditedText65);
    fetchDataFromDatabase("content66", setEditedText66);
    fetchDataFromDatabase("content67", setEditedText67);
    fetchDataFromDatabase("content68", setEditedText68);
    fetchDataFromDatabase("content69", setEditedText69);
    fetchDataFromDatabase("content70", setEditedText70);
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
    fetchDataFromDatabase("content90", setEditedText90);
    fetchDataFromDatabase("content91", setEditedText91);
    fetchDataFromDatabase("content92", setEditedText92);
    fetchDataFromDatabase("content93", setEditedText93);
    fetchDataFromDatabase("content94", setEditedText94);
    fetchDataFromDatabase("content95", setEditedText95);
    fetchDataFromDatabase("content96", setEditedText96);
    fetchDataFromDatabase("content97", setEditedText97);
    fetchDataFromDatabase("content98", setEditedText98);
    fetchDataFromDatabase("content99", setEditedText99);
    fetchDataFromDatabase("content100", setEditedText100);
    fetchDataFromDatabase("content82", setEditedText82);
    fetchDataFromDatabase("content83", setEditedText83);
    fetchDataFromDatabase("content84", setEditedText84);
    fetchDataFromDatabase("content85", setEditedText85);
    fetchDataFromDatabase("content86", setEditedText86);
    fetchDataFromDatabase("content87", setEditedText87);
    fetchDataFromDatabase("content88", setEditedText88);
    fetchDataFromDatabase("content89", setEditedText89);

    // ... Fetch data for other text areas
  }, []);

  // Event handlers for text area changes

  const handleText40Change = (e) => {
    const newText = e.target.value;
    setEditedText40(newText);
    saveTextToDatabase("content40", newText);
  };
  const handleText41Change = (e) => {
    const newText = e.target.value;
    setEditedText41(newText);
    saveTextToDatabase("content41", newText);
  };
  const handleText42Change = (e) => {
    const newText = e.target.value;
    setEditedText42(newText);
    saveTextToDatabase("content42", newText);
  };
  const handleText43Change = (e) => {
    const newText = e.target.value;
    setEditedText43(newText);
    saveTextToDatabase("content43", newText);
  };
  const handleText44Change = (e) => {
    const newText = e.target.value;
    setEditedText44(newText);
    saveTextToDatabase("content44", newText);
  };
  const handleText45Change = (e) => {
    const newText = e.target.value;
    setEditedText45(newText);
    saveTextToDatabase("content45", newText);
  };
  const handleText46Change = (e) => {
    const newText = e.target.value;
    setEditedText46(newText);
    saveTextToDatabase("content46", newText);
  };

  const handleText47Change = (e) => {
    const newText = e.target.value;
    setEditedText47(newText);
    saveTextToDatabase("content47", newText);
  };
  const handleText48Change = (e) => {
    const newText = e.target.value;
    setEditedText48(newText);
    saveTextToDatabase("content48", newText);
  };
  const handleText49Change = (e) => {
    const newText = e.target.value;
    setEditedText49(newText);
    saveTextToDatabase("content49", newText);
  };
  const handleText50Change = (e) => {
    const newText = e.target.value;
    setEditedText50(newText);
    saveTextToDatabase("content50", newText);
  };

  const handleText511Change = (e) => {
    const newText = e.target.value;
    setEditedText511(newText);
    saveTextToDatabase("content511", newText);
  };
  const handleText521Change = (e) => {
    const newText = e.target.value;
    setEditedText521(newText);
    saveTextToDatabase("content521", newText);
  };
  const handleText531Change = (e) => {
    const newText = e.target.value;
    setEditedText531(newText);
    saveTextToDatabase("content531", newText);
  };
  const handleText541Change = (e) => {
    const newText = e.target.value;
    setEditedText541(newText);
    saveTextToDatabase("content541", newText);
  };
  const handleText551Change = (e) => {
    const newText = e.target.value;
    setEditedText551(newText);
    saveTextToDatabase("content551", newText);
  };
  const handleText561Change = (e) => {
    const newText = e.target.value;
    setEditedText561(newText);
    saveTextToDatabase("content561", newText);
  };
  const handleText571Change = (e) => {
    const newText = e.target.value;
    setEditedText571(newText);
    saveTextToDatabase("content571", newText);
  };
  const handleText581Change = (e) => {
    const newText = e.target.value;
    setEditedText581(newText);
    saveTextToDatabase("content581", newText);
  };
  const handleText591Change = (e) => {
    const newText = e.target.value;
    setEditedText591(newText);
    saveTextToDatabase("content591", newText);
  };
  const handleText601Change = (e) => {
    const newText = e.target.value;
    setEditedText601(newText);
    saveTextToDatabase("content601", newText);
  };

  const handleText61Change = (e) => {
    const newText = e.target.value;
    setEditedText61(newText);
    saveTextToDatabase("content61", newText);
  };

  const handleText62Change = (e) => {
    const newText = e.target.value;
    setEditedText62(newText);
    saveTextToDatabase("content62", newText);
  };

  const handleText63Change = (e) => {
    const newText = e.target.value;
    setEditedText63(newText);
    saveTextToDatabase("content63", newText);
  };

  const handleText64Change = (e) => {
    const newText = e.target.value;
    setEditedText64(newText);
    saveTextToDatabase("content64", newText);
  };

  const handleText65Change = (e) => {
    const newText = e.target.value;
    setEditedText65(newText);
    saveTextToDatabase("content65", newText);
  };

  const handleText66Change = (e) => {
    const newText = e.target.value;
    setEditedText66(newText);
    saveTextToDatabase("content66", newText);
  };

  const handleText67Change = (e) => {
    const newText = e.target.value;
    setEditedText67(newText);
    saveTextToDatabase("content67", newText);
  };

  const handleText68Change = (e) => {
    const newText = e.target.value;
    setEditedText68(newText);
    saveTextToDatabase("content68", newText);
  };

  const handleText69Change = (e) => {
    const newText = e.target.value;
    setEditedText69(newText);
    saveTextToDatabase("content69", newText);
  };

  const handleText70Change = (e) => {
    const newText = e.target.value;
    setEditedText70(newText);
    saveTextToDatabase("content70", newText);
  };

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

  const handleText90Change = (e) => {
    const newText = e.target.value;
    setEditedText90(newText);
    saveTextToDatabase("content90", newText);
  };
  const handleText91Change = (e) => {
    const newText = e.target.value;
    setEditedText91(newText);
    saveTextToDatabase("content91", newText);
  };
  const handleText92Change = (e) => {
    const newText = e.target.value;
    setEditedText92(newText);
    saveTextToDatabase("content92", newText);
  };
  const handleText93Change = (e) => {
    const newText = e.target.value;
    setEditedText93(newText);
    saveTextToDatabase("content93", newText);
  };
  const handleText94Change = (e) => {
    const newText = e.target.value;
    setEditedText94(newText);
    saveTextToDatabase("content94", newText);
  };
  const handleText95Change = (e) => {
    const newText = e.target.value;
    setEditedText95(newText);
    saveTextToDatabase("content95", newText);
  };
  const handleText96Change = (e) => {
    const newText = e.target.value;
    setEditedText96(newText);
    saveTextToDatabase("content96", newText);
  };
  const handleText97Change = (e) => {
    const newText = e.target.value;
    setEditedText97(newText);
    saveTextToDatabase("content97", newText);
  };
  const handleText98Change = (e) => {
    const newText = e.target.value;
    setEditedText98(newText);
    saveTextToDatabase("content98", newText);
  };
  const handleText99Change = (e) => {
    const newText = e.target.value;
    setEditedText99(newText);
    saveTextToDatabase("content99", newText);
  };
  const handleText100Change = (e) => {
    const newText = e.target.value;
    setEditedText100(newText);
    saveTextToDatabase("content100", newText);
  };

  const handleText82Change = (e) => {
    const newText = e.target.value;
    setEditedText82(newText);
    saveTextToDatabase("content82", newText);
  };
  const handleText83Change = (e) => {
    const newText = e.target.value;
    setEditedText83(newText);
    saveTextToDatabase("content83", newText);
  };
  const handleText84Change = (e) => {
    const newText = e.target.value;
    setEditedText84(newText);
    saveTextToDatabase("content84", newText);
  };
  const handleText85Change = (e) => {
    const newText = e.target.value;
    setEditedText85(newText);
    saveTextToDatabase("content85", newText);
  };
  const handleText86Change = (e) => {
    const newText = e.target.value;
    setEditedText86(newText);
    saveTextToDatabase("content86", newText);
  };
  const handleText87Change = (e) => {
    const newText = e.target.value;
    setEditedText87(newText);
    saveTextToDatabase("content87", newText);
  };
  const handleText88Change = (e) => {
    const newText = e.target.value;
    setEditedText88(newText);
    saveTextToDatabase("content88", newText);
  };
  const handleText89Change = (e) => {
    const newText = e.target.value;
    setEditedText89(newText);
    saveTextToDatabase("content89", newText);
  };

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-cash-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-cash-text`, data, {
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
    const value61 = parseFloat(editedText61) || 0;
    const value62 = parseFloat(editedText62) || 0;
    const value63 = parseFloat(editedText63) || 0;
    const value64 = parseFloat(editedText64) || 0;
    const value65 = parseFloat(editedText65) || 0;
    const value66 = parseFloat(editedText66) || 0;
    const value67 = parseFloat(editedText67) || 0;
    const value40 = parseFloat(editedText40) || 0;
    const value41 = parseFloat(editedText41) || 0;
    const value42 = parseFloat(editedText42) || 0;
    const value43 = parseFloat(editedText43) || 0;
    const value44 = parseFloat(editedText44) || 0;
    const value45 = parseFloat(editedText45) || 0;
    const value47 = parseFloat(editedText47) || 0;
    const value511 = parseFloat(editedText511) || 0;
    const value521 = parseFloat(editedText521) || 0;
    const value531 = parseFloat(editedText531) || 0;
    const value541 = parseFloat(editedText541) || 0;
    const value551 = parseFloat(editedText551) || 0;
    const value561 = parseFloat(editedText561) || 0;
    const value68 = parseFloat(editedText68) || 0;
    const value571 = parseFloat(editedText571) || 0;
    const value581 = parseFloat(editedText581) || 0;
    const value591 = parseFloat(editedText591) || 0;
    const value46 = parseFloat(editedText46) || 0;
    const value601 = parseFloat(editedText601) || 0;
    const value69 = parseFloat(editedText69) || 0;
    const value70 = parseFloat(editedText70) || 0;
    const value48 = parseFloat(editedText48) || 0;
    const value49 = parseFloat(editedText49) || 0;
    const value50 = parseFloat(editedText50) || 0;
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
    const value19 = parseFloat(editedText19) || 0;
    const value20 = parseFloat(editedText20) || 0;
    const value21 = parseFloat(editedText21) || 0;
    const value22 = parseFloat(editedText22) || 0;
    const value23 = parseFloat(editedText23) || 0;
    const value24 = parseFloat(editedText24) || 0;
    const value25 = parseFloat(editedText25) || 0;
    const value90 = parseFloat(editedText90) || 0;
    const value91 = parseFloat(editedText91) || 0;
    const value92 = parseFloat(editedText92) || 0;
    const value93 = parseFloat(editedText93) || 0;
    const value94 = parseFloat(editedText94) || 0;
    const value95 = parseFloat(editedText95) || 0;
    const value96 = parseFloat(editedText96) || 0;
    const value82 = parseFloat(editedText82) || 0;
    const value83 = parseFloat(editedText83) || 0;
    const value84 = parseFloat(editedText84) || 0;
    const value86 = parseFloat(editedText86) || 0;
    const value87 = parseFloat(editedText87) || 0;
    const value88 = parseFloat(editedText88) || 0;
    const value89 = parseFloat(editedText89) || 0;

    const newTotal =
      value61 + value62 + value63 + value64 + value65 + value66 + value67;
    setTotal(newTotal);
    const newTotal1 =
      value40 + value41 + value42 + value43 + value44 + value45 + value47;
    setTotal1(newTotal1);
    const newTotal2 =
      value511 + value521 + value531 + value541 + value551 + value561 + value68;
    setTotal2(newTotal2);
    const newTotal3 =
      value571 + value581 + value591 + value46 + value601 + value69 + value70;
    setTotal3(newTotal3);
    const newTotal4 = value61 + value40 + value511 + value571;
    setTotal4(newTotal4);
    const newTotal5 = value62 + value41 + value521 + value581;
    setTotal5(newTotal5);
    const newTotal6 = value63 + value42 + value591 + value531;
    setTotal6(newTotal6);
    const newTotal7 = value64 + value43 + value541 + value46;
    setTotal7(newTotal7);
    const newTotal8 = value65 + value47 + value551 + value601;
    setTotal8(newTotal8);
    const newTotal9 = value66 + value44 + value561 + value69;
    setTotal9(newTotal9);
    const newTotal10 = value67 + value45 + value68 + value70;
    setTotal10(newTotal10);
    const newTotal11 =
      newTotal10 + newTotal9 + newTotal8 + newTotal7 + newTotal6 + newTotal5;
    setTotal11(newTotal11);
    const newTotal12 =
      value48 + value49 + value50 + value1 + value2 + value3 + value4;
    setTotal12(newTotal12);
    const newTotal13 =
      value5 + value6 + value7 + value8 + value9 + value10 + value11;
    setTotal13(newTotal13);
    const newTotal14 = total4 + value48 + value5;
    setTotal14(newTotal14);
    const newTotal15 = total5 + value49 + value6;
    setTotal15(newTotal15);
    const newTotal16 = total6 + value50 + value7;
    setTotal16(newTotal16);
    const newTotal17 = total7 + value1 + value8;
    setTotal17(newTotal17);
    const newTotal18 = total8 + value2 + value9;
    setTotal18(newTotal18);
    const newTotal19 = total9 + value3 + value10;
    setTotal19(newTotal19);
    const newTotal20 = total10 + value4 + value11;
    setTotal20(newTotal20);
    const newTotal21 = total13 + total12 + total11;
    setTotal21(newTotal21);
    const newTotal22 =
      value19 + value20 + value21 + value22 + value23 + value24 + value25;
    setTotal22(newTotal22);
    const newTotal23 =
      value90 + value91 + value92 + value93 + value94 + value95 + value96;
    setTotal23(newTotal23);
    const newTotal24 = total21 + total22 + total23;
    setTotal24(newTotal24);
    const newTotal25 = total14 + value19 + value90;
    setTotal25(newTotal25);
    const newTotal26 = total15 + value20 + value91;
    setTotal26(newTotal26);
    const newTotal27 = total16 + value21 + value92;
    setTotal27(newTotal27);
    const newTotal28 = total17 + value22 + value93;
    setTotal28(newTotal28);
    const newTotal29 = total18 + value23 + value94;
    setTotal29(newTotal29);
    const newTotal30 = total19 + value24 + value95;
    setTotal30(newTotal30);
    const newTotal31 = total20 + value25 + value96;
    setTotal31(newTotal31);
    const newTotal32 =
      value82 + value83 + value84 + value86 + value87 + value88 + value89;
    setTotal32(newTotal32);
    const newTotal33 = value82 + total25;
    setTotal33(newTotal33);
    const newTotal34 = total26 + value83;
    setTotal34(newTotal34);
    const newTotal35 = total27 + value84;
    setTotal35(newTotal35);
    const newTotal36 = total28 + value86;
    setTotal36(newTotal36);
    const newTotal37 = total29 + value87;
    setTotal37(newTotal37);
    const newTotal38 = total30 + value88;
    setTotal38(newTotal38);
    const newTotal39 = total31 + value89;
    setTotal39(newTotal39);
    const newTotal40 = total32 + total24;
    setTotal40(newTotal40);
    const newTotal41 = total4 - total25;
    setTotal41(newTotal41);
    const newTotal42 = total5 - total26;
    setTotal42(newTotal42);
    const newTotal43 = total6 - total27;
    setTotal43(newTotal43);
    const newTotal44 = total7 - total28;
    setTotal44(newTotal44);
    const newTotal45 = total8 - total29;
    setTotal45(newTotal45);
    const newTotal46 = total9 - total30;
    setTotal46(newTotal46);
    const newTotal47 = total10 - total31;
    setTotal47(newTotal47);
    const newTotal48 = total14 - total33;
    setTotal48(newTotal48);
    const newTotal49 = total15 - total34;
    setTotal49(newTotal49);
    const newTotal50 = total16 - total35;
    setTotal50(newTotal50);
    const newTotal51 = total17 - total36;
    setTotal51(newTotal51);
    const newTotal52 = total18 - total37;
    setTotal52(newTotal52);
    const newTotal53 = total19 - total38;
    setTotal53(newTotal53);
    const newTotal54 = total20 - total39;
    setTotal54(newTotal54);
  }, [
    editedText61,
    editedText62,
    editedText63,
    editedText64,
    editedText65,
    editedText66,
    editedText67,
    editedText40,
    editedText41,
    editedText42,
    editedText43,
    editedText44,
    editedText45,
    editedText47,
    editedText511,
    editedText521,
    editedText531,
    editedText541,
    editedText551,
    editedText561,
    editedText68,
    editedText571,
    editedText581,
    editedText591,
    editedText46,
    editedText601,
    editedText69,
    editedText70,
    editedText61,
    editedText40,
    editedText70,
    editedText511,
    editedText571,
    editedText48,
    editedText49,
    editedText50,
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
    editedText19,
    editedText20,
    editedText21,
    editedText22,
    editedText23,
    editedText24,
    editedText25,
    editedText90,
    editedText91,
    editedText92,
    editedText93,
    editedText94,
    editedText95,
    editedText96,
    editedText82,
    editedText83,
    editedText84,
    editedText86,
    editedText87,
    editedText88,
    editedText89,
  ]);

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

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText
              name="textArea61"
              value={editedText61}
              onChange={handleText61Change}
            />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText
              name="textArea62"
              value={editedText62}
              onChange={handleText62Change}
            />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText
              name="textArea63"
              value={editedText63}
              onChange={handleText63Change}
            />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText
              name="textArea64"
              value={editedText64}
              onChange={handleText64Change}
            />
          </td>
          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText
              name="textArea65"
              value={editedText65}
              onChange={handleText65Change}
            />
          </td>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText
              name="textArea66"
              value={editedText66}
              onChange={handleText66Change}
            />
          </td>

          <td style={{ fontWeight: "800" }}>
            {" "}
            <EditText
              name="textArea67"
              value={editedText67}
              onChange={handleText67Change}
            />
          </td>

          <td style={{ fontWeight: "800" }}>{total}</td>
        </tr>
        <tr>
          <td>Transfer to Nature savvy</td>

          <td>
            {" "}
            <EditText
              name="textArea40"
              value={editedText40}
              onChange={handleText40Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea41"
              value={editedText41}
              onChange={handleText41Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea42"
              value={editedText42}
              onChange={handleText42Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea43"
              value={editedText43}
              onChange={handleText43Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea47"
              value={editedText47}
              onChange={handleText47Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea44"
              value={editedText44}
              onChange={handleText44Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea45"
              value={editedText45}
              onChange={handleText45Change}
            />
          </td>
          <td>{total1}</td>
        </tr>
        <tr>
          <td>Disposal</td>

          <td>
            {" "}
            <EditText
              name="textArea511"
              value={editedText511}
              onChange={handleText511Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea521"
              value={editedText521}
              onChange={handleText521Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea531"
              value={editedText531}
              onChange={handleText531Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea541"
              value={editedText541}
              onChange={handleText541Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea551"
              value={editedText551}
              onChange={handleText551Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea561"
              value={editedText561}
              onChange={handleText561Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea68"
              value={editedText68}
              onChange={handleText68Change}
            />
          </td>
          <td>{total2}</td>
        </tr>
        <tr>
          <td>Addition</td>

          <td>
            {" "}
            <EditText
              name="textArea571"
              value={editedText571}
              onChange={handleText571Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea581"
              value={editedText581}
              onChange={handleText581Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea591"
              value={editedText591}
              onChange={handleText591Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea46"
              value={editedText46}
              onChange={handleText46Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea601"
              value={editedText601}
              onChange={handleText601Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea69"
              value={editedText69}
              onChange={handleText69Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea70"
              value={editedText70}
              onChange={handleText70Change}
            />
          </td>
          <td>{total3}</td>
        </tr>

        <tr>
          <b>
            {" "}
            <td>At 31 December 2021</td>
          </b>

          <td style={{ fontWeight: "800" }}>{total4}</td>
          <td style={{ fontWeight: "800" }}>{total5}</td>
          <td style={{ fontWeight: "800" }}>{total6}</td>
          <td style={{ fontWeight: "800" }}>{total7}</td>
          <td style={{ fontWeight: "800" }}>{total8}</td>
          <td style={{ fontWeight: "800" }}>{total9}</td>
          <td style={{ fontWeight: "800" }}>{total10}</td>
          <td style={{ fontWeight: "800" }}>{total11}</td>
        </tr>

        <br></br>

        <tr>
          <b>
            {" "}
            <td>At 1 January 2022 </td>
          </b>
          <td style={{ fontWeight: "800" }}>{total4}</td>

          <td style={{ fontWeight: "800" }}>{total5}</td>
          <td style={{ fontWeight: "800" }}>{total6}</td>
          <td style={{ fontWeight: "800" }}>{total7}</td>
          <td style={{ fontWeight: "800" }}>{total8}</td>
          <td style={{ fontWeight: "800" }}>{total9}</td>
          <td style={{ fontWeight: "800" }}>{total10}</td>
          <td style={{ fontWeight: "800" }}>{total11}</td>
        </tr>

        <tr>
          <td>Addition </td>

          <td>
            {" "}
            <EditText
              name="textArea48"
              value={editedText48}
              onChange={handleText48Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea49"
              value={editedText49}
              onChange={handleText49Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea50"
              value={editedText50}
              onChange={handleText50Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea1"
              value={editedText1}
              onChange={handleText1Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea2"
              value={editedText2}
              onChange={handleText2Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea3"
              value={editedText3}
              onChange={handleText3Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea4"
              value={editedText4}
              onChange={handleText4Change}
            />
          </td>
          <td>{total12}</td>
        </tr>

        <tr>
          <td>Reclassification </td>

          <td>
            {" "}
            <EditText
              name="textArea5"
              value={editedText5}
              onChange={handleText5Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea6"
              value={editedText6}
              onChange={handleText6Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea7"
              value={editedText7}
              onChange={handleText7Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea8"
              value={editedText8}
              onChange={handleText8Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea9"
              value={editedText9}
              onChange={handleText9Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea10"
              value={editedText10}
              onChange={handleText10Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea11"
              value={editedText11}
              onChange={handleText11Change}
            />
          </td>

          <td>{total13}</td>
        </tr>
        <tr>
          <b>
            {" "}
            <td>At 31 December 2022 </td>
          </b>
          <td style={{ fontWeight: "800" }}>{total14}</td>

          <td style={{ fontWeight: "800" }}>{total15}</td>
          <td style={{ fontWeight: "800" }}>{total16}</td>
          <td style={{ fontWeight: "800" }}>{total17}</td>
          <td style={{ fontWeight: "800" }}>{total18}</td>
          <td style={{ fontWeight: "800" }}>{total19}</td>
          <td style={{ fontWeight: "800" }}>{total20}</td>
          <td style={{ fontWeight: "800" }}>{total21}</td>
        </tr>
        <th style={{ fontSize: "15px" }}>Accumulated Depreciation</th>
        <tr>
          <b>
            <td>At 1 January 2021</td>
          </b>

          <td style={{ fontWeight: "800" }}>{total14}</td>
          <td style={{ fontWeight: "800" }}>{total15}</td>
          <td style={{ fontWeight: "800" }}>{total16}</td>

          <td style={{ fontWeight: "800" }}>{total17}</td>

          <td style={{ fontWeight: "800" }}>{total18}</td>

          <td style={{ fontWeight: "800" }}>{total19}</td>

          <td style={{ fontWeight: "800" }}>{total20}</td>
          <td style={{ fontWeight: "800" }}>{total21}</td>
        </tr>
        <tr>
          <td>Charge for the year</td>

          <td>
            {" "}
            <EditText
              name="textArea19"
              value={editedText19}
              onChange={handleText19Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea20"
              value={editedText20}
              onChange={handleText20Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea21"
              value={editedText21}
              onChange={handleText21Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea22"
              value={editedText22}
              onChange={handleText22Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea23"
              value={editedText23}
              onChange={handleText23Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea24"
              value={editedText24}
              onChange={handleText24Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea25"
              value={editedText25}
              onChange={handleText25Change}
            />
          </td>
          <td>{total22}</td>
        </tr>
        <tr>
          <td>Transfer to Nature savvy</td>

          <td>
            {" "}
            <EditText
              name="textArea90"
              value={editedText90}
              onChange={handleText90Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea91"
              value={editedText91}
              onChange={handleText91Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea92"
              value={editedText92}
              onChange={handleText92Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea93"
              value={editedText93}
              onChange={handleText93Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea94"
              value={editedText94}
              onChange={handleText94Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea95"
              value={editedText95}
              onChange={handleText95Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea96"
              value={editedText96}
              onChange={handleText96Change}
            />
          </td>
          <td>{total23}</td>
        </tr>
        <tr>
          <td>At 31 December 2021</td>

          <td style={{ fontWeight: "800" }}>{total25}</td>

          <td style={{ fontWeight: "800" }}>{total26}</td>
          <td style={{ fontWeight: "800" }}>{total27}</td>
          <td style={{ fontWeight: "800" }}>{total28}</td>
          <td style={{ fontWeight: "800" }}>{total29}</td>
          <td style={{ fontWeight: "800" }}>{total30}</td>
          <td style={{ fontWeight: "800" }}>{total31}</td>

          <td style={{ fontWeight: "800" }}>{total24}</td>
        </tr>
        <tr>
          <td>At 1 January 2022</td>

          <td style={{ fontWeight: "800" }}>{total25}</td>
          <td style={{ fontWeight: "800" }}>{total26}</td>
          <td style={{ fontWeight: "800" }}>{total27}</td>
          <td style={{ fontWeight: "800" }}>{total28}</td>
          <td style={{ fontWeight: "800" }}>{total29}</td>

          <td style={{ fontWeight: "800" }}>{total30}</td>
          <td style={{ fontWeight: "800" }}>{total31}</td>
          <td style={{ fontWeight: "800" }}>{total24}</td>
        </tr>
        <tr>
          <td>Charge for the year</td>

          <td>
            {" "}
            <EditText
              name="textArea82"
              value={editedText82}
              onChange={handleText82Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea83"
              value={editedText83}
              onChange={handleText83Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea84"
              value={editedText84}
              onChange={handleText84Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea86"
              value={editedText86}
              onChange={handleText86Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea87"
              value={editedText87}
              onChange={handleText87Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea88"
              value={editedText88}
              onChange={handleText88Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea89"
              value={editedText89}
              onChange={handleText89Change}
            />
          </td>

          <td>{total32}</td>
        </tr>

        <tr>
          <td>At 31 December 2022</td>

          <td style={{ fontWeight: "800" }}>{total33}</td>

          <td style={{ fontWeight: "800" }}>{total34}</td>
          <td style={{ fontWeight: "800" }}>{total35}</td>
          <td style={{ fontWeight: "800" }}>{total36}</td>
          <td style={{ fontWeight: "800" }}>{total37}</td>
          <td style={{ fontWeight: "800" }}>{total38}</td>
          <td style={{ fontWeight: "800" }}>{total39}</td>
          <td style={{ fontWeight: "800" }}>{total40}</td>
        </tr>
        <b>
          {" "}
          <td>Carrying amount</td>
        </b>
        <tr>
          <b>
            {" "}
            <td>At 31 December 2021</td>
          </b>
          <td style={{ fontWeight: "800" }}>{total41}</td>
          <td style={{ fontWeight: "800" }}>{total42}</td>
          <td style={{ fontWeight: "800" }}>{total43}</td>
          <td style={{ fontWeight: "800" }}>{total44}</td>
          <td style={{ fontWeight: "800" }}>{total45}</td>

          <td style={{ fontWeight: "800" }}>{total46}</td>

          <td style={{ fontWeight: "800" }}>{total47}</td>
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

          <td style={{ fontWeight: "800" }}>{total48}</td>
          <td style={{ fontWeight: "800" }}>{total49}</td>
          <td style={{ fontWeight: "800" }}>{total50}</td>
          <td style={{ fontWeight: "800" }}>{total51}</td>
          <td style={{ fontWeight: "800" }}>{total52}</td>
          <td style={{ fontWeight: "800" }}>{total53}</td>
          <td style={{ fontWeight: "800" }}>{total54}</td>
          <td style={{ fontWeight: "800" }}>
            <Prior subcategory={subcategory} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Ten;
