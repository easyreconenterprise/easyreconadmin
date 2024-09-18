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
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const EighttoNine = () => {
  const [subcategory, setSubcategory] = useState({});
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);
  const [total6, setTotal6] = useState(0);
  const [total7, setTotal7] = useState(0);
  const [total8, setTotal8] = useState(0);
  const [total9, setTotal9] = useState(0);
  const [total10, setTotal10] = useState(0);
  const [total11, setTotal11] = useState(0);
  const [total12, setTotal12] = useState(0);
  const [total13, setTotal13] = useState(0);
  const [total14, setTotal14] = useState(0);
  const [total15, setTotal15] = useState(0);
  const [total16, setTotal16] = useState(0);
  const [total17, setTotal17] = useState(0);
  const [total18, setTotal18] = useState(0);
  const [total19, setTotal19] = useState(0);
  const [total20, setTotal20] = useState(0);
  const [total21, setTotal21] = useState(0);
  const [total22, setTotal22] = useState(0);
  const [total23, setTotal23] = useState(0);
  const [total24, setTotal24] = useState(0);
  const [total25, setTotal25] = useState(0);
  const [total26, setTotal26] = useState(0);
  const [total27, setTotal27] = useState(0);
  const [total28, setTotal28] = useState(0);
  const [total29, setTotal29] = useState(0);
  const [total30, setTotal30] = useState(0);
  const [total31, setTotal31] = useState(0);
  const [total32, setTotal32] = useState(0);
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
  const [total90, setTotal90] = useState(0);
  const [total91, setTotal91] = useState(0);
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
    content40: "8,000,000",
    content41: "0.000",
    content42: "0.000",
    content43: "Chairman",
    content44: " 0.000",
    content45: "0.000",
    content46: "Executive Director",
    content47: "0.000",
    content48: "0.000",
    content49: "0.000",
    content50: "0.000",
    content51: "0.000",
    content52: "0.000",
    content53: "0.000",
    content54: "0.000",
    content55: "0.000",
    content56: "0.000",
    content57: "0.000",
    content58: "0.000",
    content59: "0.000",
    content60: "0.000",
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
    content7: "0 --",
    content8: "500,000 ",
    content9: "0.000",
    content10: "0.000",
    content11: "500,000 --",
    content12: "1,000,000 ",
    content13: "0.000",
    content14: "0.000",
    content15: "1,500,000 --",
    content16: "2,000,000 ",
    content17: "0.000",
    content18: "0.000",
    content19: "2,500,000 --",
    content20: "3,000,000 ",
    content21: "0.000",
    content22: "0.000",
    content23: "3,500,000 --",
    content24: "4,000,000 ",
    content25: "0.000",
    content26: "0.000",
    content27: "4,500,000 --",
    content28: "5,000,000 ",
    content29: "0.000",
    content30: "0.000",
    content31: "5,500,000 --",
    content32: "6,000,000 ",
    content33: "0.000",
    content34: "0.000",
    content35: "6,500,000 --",
    content36: "7,000,000 ",
    content37: "0.000",
    content38: "0.000",
    content39: "7,500,000 --",
    content84: "0.000",
    content86: "0.000",
    content87: "0.000",
    content88: "0.000",
    content89: "0.000",
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
  const [editedText51, setEditedText51] = useState(initialData.content51);
  const [editedText52, setEditedText52] = useState(initialData.content52);
  const [editedText53, setEditedText53] = useState(initialData.content53);
  const [editedText54, setEditedText54] = useState(initialData.content54);
  const [editedText55, setEditedText55] = useState(initialData.content55);
  const [editedText56, setEditedText56] = useState(initialData.content56);
  const [editedText57, setEditedText57] = useState(initialData.content57);
  const [editedText58, setEditedText58] = useState(initialData.content58);
  const [editedText59, setEditedText59] = useState(initialData.content59);
  const [editedText60, setEditedText60] = useState(initialData.content60);
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
  const [editedText26, setEditedText26] = useState(initialData.content26);
  const [editedText27, setEditedText27] = useState(initialData.content27);
  const [editedText28, setEditedText28] = useState(initialData.content28);
  const [editedText29, setEditedText29] = useState(initialData.content29);
  const [editedText30, setEditedText30] = useState(initialData.content30);
  const [editedText31, setEditedText31] = useState(initialData.content31);
  const [editedText32, setEditedText32] = useState(initialData.content32);
  const [editedText33, setEditedText33] = useState(initialData.content33);
  const [editedText34, setEditedText34] = useState(initialData.content34);
  const [editedText35, setEditedText35] = useState(initialData.content35);
  const [editedText36, setEditedText36] = useState(initialData.content36);

  const [editedText37, setEditedText37] = useState(initialData.content37);
  const [editedText38, setEditedText38] = useState(initialData.content38);
  const [editedText39, setEditedText39] = useState(initialData.content39);
  const [editedText85, setEditedText85] = useState(initialData.content85);
  const [editedText86, setEditedText86] = useState(initialData.content86);
  const [editedText87, setEditedText87] = useState(initialData.content87);
  const [editedText88, setEditedText88] = useState(initialData.content88);
  const [editedText89, setEditedText89] = useState(initialData.content89);
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
    fetchDataFromDatabase("content51", setEditedText51);
    fetchDataFromDatabase("content52", setEditedText52);
    fetchDataFromDatabase("content53", setEditedText53);
    fetchDataFromDatabase("content54", setEditedText54);
    fetchDataFromDatabase("content55", setEditedText55);
    fetchDataFromDatabase("content56", setEditedText56);
    fetchDataFromDatabase("content57", setEditedText57);
    fetchDataFromDatabase("content58", setEditedText58);
    fetchDataFromDatabase("content59", setEditedText59);
    fetchDataFromDatabase("content60", setEditedText60);
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
    fetchDataFromDatabase("content26", setEditedText26);
    fetchDataFromDatabase("content27", setEditedText27);
    fetchDataFromDatabase("content28", setEditedText28);
    fetchDataFromDatabase("content29", setEditedText29);
    fetchDataFromDatabase("content30", setEditedText30);
    fetchDataFromDatabase("content31", setEditedText31);
    fetchDataFromDatabase("content32", setEditedText32);
    fetchDataFromDatabase("content33", setEditedText33);
    fetchDataFromDatabase("content34", setEditedText34);
    fetchDataFromDatabase("content35", setEditedText35);
    fetchDataFromDatabase("content36", setEditedText36);
    fetchDataFromDatabase("content37", setEditedText37);
    fetchDataFromDatabase("content38", setEditedText38);
    fetchDataFromDatabase("content39", setEditedText39);
    fetchDataFromDatabase("content85", setEditedText85);
    fetchDataFromDatabase("content86", setEditedText86);
    fetchDataFromDatabase("content87", setEditedText87);
    fetchDataFromDatabase("content88", setEditedText88);
    fetchDataFromDatabase("content89", setEditedText89);
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

  const handleText51Change = (e) => {
    const newText = e.target.value;
    setEditedText51(newText);
    saveTextToDatabase("content51", newText);
  };
  const handleText52Change = (e) => {
    const newText = e.target.value;
    setEditedText52(newText);
    saveTextToDatabase("content52", newText);
  };
  const handleText53Change = (e) => {
    const newText = e.target.value;
    setEditedText53(newText);
    saveTextToDatabase("content53", newText);
  };
  const handleText54Change = (e) => {
    const newText = e.target.value;
    setEditedText54(newText);
    saveTextToDatabase("content54", newText);
  };
  const handleText55Change = (e) => {
    const newText = e.target.value;
    setEditedText55(newText);
    saveTextToDatabase("content55", newText);
  };
  const handleText56Change = (e) => {
    const newText = e.target.value;
    setEditedText56(newText);
    saveTextToDatabase("content56", newText);
  };
  const handleText57Change = (e) => {
    const newText = e.target.value;
    setEditedText57(newText);
    saveTextToDatabase("content57", newText);
  };
  const handleText58Change = (e) => {
    const newText = e.target.value;
    setEditedText58(newText);
    saveTextToDatabase("content58", newText);
  };
  const handleText59Change = (e) => {
    const newText = e.target.value;
    setEditedText59(newText);
    saveTextToDatabase("content59", newText);
  };
  const handleText60Change = (e) => {
    const newText = e.target.value;
    setEditedText60(newText);
    saveTextToDatabase("content60", newText);
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
  const handleText31Change = (e) => {
    const newText = e.target.value;
    setEditedText31(newText);
    saveTextToDatabase("content31", newText);
  };
  const handleText32Change = (e) => {
    const newText = e.target.value;
    setEditedText32(newText);
    saveTextToDatabase("content32", newText);
  };
  const handleText33Change = (e) => {
    const newText = e.target.value;
    setEditedText33(newText);
    saveTextToDatabase("content33", newText);
  };
  const handleText34Change = (e) => {
    const newText = e.target.value;
    setEditedText34(newText);
    saveTextToDatabase("content34", newText);
  };
  const handleText35Change = (e) => {
    const newText = e.target.value;
    setEditedText35(newText);
    saveTextToDatabase("content35", newText);
  };
  const handleText36Change = (e) => {
    const newText = e.target.value;
    setEditedText36(newText);
    saveTextToDatabase("content36", newText);
  };

  const handleText37Change = (e) => {
    const newText = e.target.value;
    setEditedText37(newText);
    saveTextToDatabase("content37", newText);
  };
  const handleText38Change = (e) => {
    const newText = e.target.value;
    setEditedText38(newText);
    saveTextToDatabase("content38", newText);
  };
  const handleText39Change = (e) => {
    const newText = e.target.value;
    setEditedText39(newText);
    saveTextToDatabase("content39", newText);
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

  const fetchDataFromDatabase = (field, setField) => {
    const token = localStorage.getItem("jwtToken"); // Get the auth token from your storage

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${apiUrl}/api/get-eight-text?field=${field}`, {
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
      .post(`${apiUrl}/api/save-eight-text`, data, {
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
    const value51 = parseFloat(editedText51) || 0;
    const value52 = parseFloat(editedText52) || 0;
    const value53 = parseFloat(editedText53) || 0;
    const value54 = parseFloat(editedText54) || 0;
    const value55 = parseFloat(editedText55) || 0;
    const value56 = parseFloat(editedText56) || 0;
    const value68 = parseFloat(editedText68) || 0;
    const value57 = parseFloat(editedText57) || 0;
    const value58 = parseFloat(editedText58) || 0;
    const value59 = parseFloat(editedText59) || 0;
    const value46 = parseFloat(editedText46) || 0;
    const value60 = parseFloat(editedText60) || 0;
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
    const value13 = parseFloat(editedText13) || 0;
    const value14 = parseFloat(editedText14) || 0;
    const value18 = parseFloat(editedText18) || 0;
    const value17 = parseFloat(editedText17) || 0;
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
    const value31 = parseFloat(editedText31) || 0;
    const value32 = parseFloat(editedText32) || 0;
    const value33 = parseFloat(editedText33) || 0;
    const value34 = parseFloat(editedText34) || 0;
    const value35 = parseFloat(editedText35) || 0;
    const value36 = parseFloat(editedText36) || 0;
    const value37 = parseFloat(editedText37) || 0;
    const value38 = parseFloat(editedText38) || 0;
    const value39 = parseFloat(editedText39) || 0;
    const value86 = parseFloat(editedText86) || 0;
    const value87 = parseFloat(editedText87) || 0;
    const value88 = parseFloat(editedText88) || 0;
    const value89 = parseFloat(editedText89) || 0;
    const value90 = parseFloat(editedText90) || 0;
    const value91 = parseFloat(editedText91) || 0;
    const value92 = parseFloat(editedText92) || 0;
    const value93 = parseFloat(editedText93) || 0;
    const value94 = parseFloat(editedText94) || 0;
    const value95 = parseFloat(editedText95) || 0;
    const value96 = parseFloat(editedText96) || 0;
    const value97 = parseFloat(editedText97) || 0;
    const value98 = parseFloat(editedText98) || 0;
    const value99 = parseFloat(editedText99) || 0;

    const newTotal90 = value90 + value92 + value94 + value96 + value98;
    setTotal90(newTotal90);
    const newTotal91 = value91 + value93 + value95 + value97 + value99;
    setTotal91(newTotal91);
    const newTotal =
      value61 + value62 + value63 + value64 + value65 + value66 + value67;
    setTotal(newTotal);
    const newTotal1 = value1 + value3 + value5;
    setTotal1(newTotal1);
    const newTotal2 = value2 + value4 + value6;
    setTotal2(newTotal2);
    const newTotal3 =
      value9 +
      value13 +
      value17 +
      value21 +
      value25 +
      value29 +
      value33 +
      value37 +
      value41;
    setTotal3(newTotal3);
    const newTotal4 =
      value10 +
      value14 +
      value18 +
      value22 +
      value26 +
      value30 +
      value34 +
      value38 +
      value42;
    setTotal4(newTotal4);
    const newTotal5 = value49 + value51 + value53 + value55;
    setTotal5(newTotal5);
    const newTotal6 = value50 + value52 + value54 + value56;
    setTotal6(newTotal6);
    const newTotal7 = total5 + value57;
    setTotal7(newTotal7);
    const newTotal8 = total6 + value58;
    setTotal8(newTotal8);
    const newTotal9 = value66 + value44 + value56 + value69;
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
    editedText51,
    editedText52,
    editedText53,
    editedText54,
    editedText55,
    editedText56,
    editedText68,
    editedText57,
    editedText58,
    editedText59,
    editedText46,
    editedText60,
    editedText69,
    editedText70,
    editedText61,
    editedText40,
    editedText70,

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
    editedText13,
    editedText14,
    editedText18,
    editedText17,
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
    editedText33,
    editedText34,
    editedText35,
    editedText36,
    editedText37,
    editedText38,
    editedText39,
    editedText41,
    editedText86,
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
    editedText97,
    editedText98,
    editedText99,
  ]);
  return (
    <div>
      <EditText value="  The number of persons employed at year end are:" />
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}> </th>

            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2021</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td style={{ fontSize: "15px" }}>Operations </td>

            <td></td>
            <td style={{ fontSize: "15px" }}>
              {" "}
              <EditText
                name="textArea1"
                value={editedText1}
                onChange={handleText1Change}
              />
            </td>
            <td style={{ fontSize: "15px" }}>
              {" "}
              <EditText
                name="textArea2"
                value={editedText2}
                onChange={handleText2Change}
              />
            </td>
          </tr>
        </thead>
        <tr>
          <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
            {" "}
            Sales and distribution{" "}
          </p>

          <td> </td>
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
        </tr>

        <tr>
          <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
            Administration
          </p>

          <td></td>
          <td>
            <EditText
              name="textArea5"
              value={editedText5}
              onChange={handleText5Change}
            />
          </td>
          <td>
            <EditText
              name="textArea6"
              value={editedText6}
              onChange={handleText6Change}
            />
          </td>
        </tr>

        <tr>
          <p style={{ fontSize: "15px", paddingLeft: "10px" }}>Total</p>
          <b> </b>
          <td></td>
          <td>{total1}</td>
          <td>{total2}</td>
        </tr>
      </table>
      <EditTextarea value="Employees of the Company whose duties were wholly or mainly discharged in Nigeria, received remuneration (excluding pension cost and certain benefits) in the following range:" />

      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2021</th>
          </tr>
          <tr style={{ textDecoration: "underline 2px" }}>
            <td style={{ fontSize: "15px", fontWeight: "500" }}>N</td>

            <td style={{ fontSize: "15px" }}>N</td>
            <td style={{ fontSize: "15px" }}>Number</td>
            <td style={{ fontSize: "15px" }}>Number</td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td style={{ fontSize: "15px" }}>
              {" "}
              <EditText
                name="textArea7"
                value={editedText7}
                onChange={handleText7Change}
              />{" "}
            </td>

            <td>
              {" "}
              <EditText
                name="textArea8"
                value={editedText8}
                onChange={handleText8Change}
              />
            </td>
            <td style={{ fontSize: "15px" }}>
              {" "}
              <EditText
                name="textArea9"
                value={editedText9}
                onChange={handleText9Change}
              />
            </td>
            <td style={{ fontSize: "15px" }}>
              {" "}
              <EditText
                name="textArea10"
                value={editedText10}
                onChange={handleText10Change}
              />
            </td>
          </tr>
        </thead>
        <tr>
          <td>
            {" "}
            <EditText
              name="textArea11"
              value={editedText11}
              onChange={handleText11Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea12"
              value={editedText12}
              onChange={handleText12Change}
            />{" "}
          </td>
          <td>
            {" "}
            <EditText
              name="textArea13"
              value={editedText13}
              onChange={handleText13Change}
            />
          </td>
          <td>
            {" "}
            <EditText
              name="textArea14"
              value={editedText14}
              onChange={handleText14Change}
            />
          </td>
        </tr>

        <tr>
          <td>
            {" "}
            <EditText
              name="textArea15"
              value={editedText15}
              onChange={handleText15Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea16"
              value={editedText16}
              onChange={handleText16Change}
            />
          </td>
          <td>
            <EditText
              name="textArea17"
              value={editedText17}
              onChange={handleText17Change}
            />
          </td>
          <td>
            <EditText
              name="textArea18"
              value={editedText18}
              onChange={handleText18Change}
            />
          </td>
        </tr>
        <tr>
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
            <EditText
              name="textArea21"
              value={editedText21}
              onChange={handleText21Change}
            />
          </td>
          <td>
            <EditText
              name="textArea22"
              value={editedText22}
              onChange={handleText22Change}
            />
          </td>
        </tr>
        <tr>
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
            <EditText
              name="textArea25"
              value={editedText25}
              onChange={handleText25Change}
            />
          </td>
          <td>
            <EditText
              name="textArea26"
              value={editedText26}
              onChange={handleText26Change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <EditText
              name="textArea27"
              value={editedText27}
              onChange={handleText27Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea28"
              value={editedText28}
              onChange={handleText28Change}
            />
          </td>
          <td>
            <EditText
              name="textArea29"
              value={editedText29}
              onChange={handleText29Change}
            />
          </td>
          <td>
            <EditText
              name="textArea30"
              value={editedText30}
              onChange={handleText30Change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <EditText
              name="textArea31"
              value={editedText31}
              onChange={handleText31Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea32"
              value={editedText32}
              onChange={handleText32Change}
            />
          </td>
          <td>
            <EditText
              name="textArea33"
              value={editedText33}
              onChange={handleText33Change}
            />
          </td>
          <td>
            <EditText
              name="textArea34"
              value={editedText34}
              onChange={handleText34Change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <EditText
              name="textArea35"
              value={editedText35}
              onChange={handleText35Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea36"
              value={editedText36}
              onChange={handleText36Change}
            />
          </td>
          <td>
            <EditText
              name="textArea37"
              value={editedText37}
              onChange={handleText37Change}
            />
          </td>
          <td>
            <EditText
              name="textArea38"
              value={editedText38}
              onChange={handleText38Change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <EditText
              name="textArea39"
              value={editedText39}
              onChange={handleText39Change}
            />
          </td>

          <td>
            {" "}
            <EditText
              name="textArea40"
              value={editedText40}
              onChange={handleText40Change}
            />
          </td>
          <td>
            <EditText
              name="textArea41"
              value={editedText41}
              onChange={handleText41Change}
            />
          </td>
          <td>
            <EditText
              name="textArea42"
              value={editedText42}
              onChange={handleText42Change}
            />
          </td>
        </tr>

        <tr>
          <p style={{ fontSize: "15px", paddingLeft: "10px" }}>Total</p>
          <b> </b>
          <td></td>
          <td>{total3}</td>
          <td>{total4}</td>
        </tr>
      </table>
      <b>
        {" "}
        <EditText value="(d) Director's renumeration" />
      </b>
      <EditTextarea value="Directors’ remuneration, excluding certain benefits of Directors of the Company, who discharged their duties mainly in Nigeria is as follows:" />
      <table>
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2021</th>
          </tr>
          <tr style={{ textDecoration: "underline 2px" }}>
            <td style={{ fontSize: "15px", fontWeight: "500" }}></td>

            <td style={{ fontSize: "15px" }}></td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
          </tr>
        </thead>
        <tr>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea43"
              value={editedText43}
              onChange={handleText43Change}
            />{" "}
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea44"
              value={editedText44}
              onChange={handleText44Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea45"
              value={editedText45}
              onChange={handleText45Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea46"
              value={editedText46}
              onChange={handleText46Change}
            />{" "}
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea47"
              value={editedText47}
              onChange={handleText47Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea48"
              value={editedText48}
              onChange={handleText48Change}
            />
          </td>
        </tr>

        <tr>
          <p style={{ fontSize: "15px", paddingLeft: "10px" }}>Total</p>
          <b> </b>
          <td></td>
          <td>{total5}</td>
          <td>{total6}</td>
        </tr>
      </table>
      <b>
        {" "}
        <EditText value="9. Taxation" />
      </b>
      <b>
        {" "}
        <EditText value="(a) Income and tertiary education tax" />
      </b>
      <EditTextarea value="The tax charge for the year has been computed after adjusting for certain items of expenditure and income which are not deductible or chargeable for tax purposes, and comprises;" />
      <table>
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2021</th>
          </tr>
          <tr style={{ textDecoration: "underline 2px" }}>
            <td style={{ fontSize: "15px", fontWeight: "500" }}></td>

            <td style={{ fontSize: "15px" }}></td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
          </tr>
        </thead>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Current Tax Expense</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea49"
              value={editedText49}
              onChange={handleText49Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea50"
              value={editedText50}
              onChange={handleText50Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <p>Company Income Tax CIT</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea51"
              value={editedText51}
              onChange={handleText51Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea52"
              value={editedText52}
              onChange={handleText52Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <p>Nigeria police trust fund</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea53"
              value={editedText53}
              onChange={handleText53Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea54"
              value={editedText54}
              onChange={handleText54Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <p>tertiary education tax</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea55"
              value={editedText55}
              onChange={handleText55Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea56"
              value={editedText56}
              onChange={handleText56Change}
            />
          </td>
        </tr>

        <tr>
          <p style={{ fontSize: "15px", paddingLeft: "10px" }}>Total</p>
          <b> </b>
          <td></td>
          <td>{total5}</td>
          <td>{total6}</td>
        </tr>
      </table>
      <EditText value="Deferred Tax Credit" />
      <table>
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2021</th>
          </tr>
          <tr style={{ textDecoration: "underline 2px" }}>
            <td style={{ fontSize: "15px", fontWeight: "500" }}></td>

            <td style={{ fontSize: "15px" }}></td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
          </tr>
        </thead>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Changes in recognized temporary difference</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <p> Income Tax credit recognized in profit and los</p>
          </td>

          <td></td>

          <td style={{ fontSize: "15px" }}> {total7}</td>
          <td style={{ fontSize: "15px" }}>{total8}</td>
        </tr>
      </table>
      <b>
        {" "}
        <EditText value="Reconcilation of effective tax rate" />
      </b>
      <table>
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2021</th>
          </tr>
          <tr style={{ textDecoration: "underline 2px" }}>
            <td style={{ fontSize: "15px", fontWeight: "500" }}></td>

            <td style={{ fontSize: "15px" }}></td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
          </tr>
        </thead>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Profit before taxation</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Income tax using the statutory tax rate (30%)</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Impact of tertiary education tax (2%)</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Nigeria Police Trust Fund</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Non deductible expenses</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Impact of tax exempt income</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Reversal of temporary differences on transferred assets</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Effect of change in education tax rate</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Changes in prior year estimates</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Total income tax expense in profit or loss</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea57"
              value={editedText57}
              onChange={handleText57Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea58"
              value={editedText58}
              onChange={handleText58Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <p> Total</p>
          </td>

          <td></td>

          <td style={{ fontSize: "15px" }}> {total7}</td>
          <td style={{ fontSize: "15px" }}>{total8}</td>
        </tr>
      </table>
      <b>
        {" "}
        <EditText value="(c) Movement in income tax liability" />
      </b>
      <table>
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

            <th style={{ fontSize: "15px" }}></th>
            <th style={{ fontSize: "15px" }}>2022</th>
            <th style={{ fontSize: "15px" }}>2021</th>
          </tr>
          <tr style={{ textDecoration: "underline 2px" }}>
            <td style={{ fontSize: "15px", fontWeight: "500" }}></td>

            <td style={{ fontSize: "15px" }}></td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
            <td style={{ fontSize: "15px" }}>₦’000</td>
          </tr>
        </thead>

        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Balance, beginning of year</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea90"
              value={editedText90}
              onChange={handleText90Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea91"
              value={editedText91}
              onChange={handleText91Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Charge for the year</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea92"
              value={editedText92}
              onChange={handleText92Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea93"
              value={editedText93}
              onChange={handleText93Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Minimum tax expense</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea94"
              value={editedText94}
              onChange={handleText94Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea95"
              value={editedText95}
              onChange={handleText95Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Payment during the year</p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea96"
              value={editedText96}
              onChange={handleText96Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea97"
              value={editedText97}
              onChange={handleText97Change}
            />
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "15px" }}>
            <p>Balance, end of the year </p>
          </td>

          <td></td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea98"
              value={editedText98}
              onChange={handleText98Change}
            />
          </td>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <EditText
              name="textArea99"
              value={editedText99}
              onChange={handleText99Change}
            />
          </td>
        </tr>

        <tr>
          <td style={{ fontSize: "15px" }}>
            {" "}
            <p> Total</p>
          </td>

          <td></td>

          <td style={{ fontSize: "15px" }}> {total90}</td>
          <td style={{ fontSize: "15px" }}>{total91}</td>
        </tr>
      </table>
      <b>
        {" "}
        <EditText value="(d) Movement in deferred taxation balance" />
      </b>
      <EditText value="(i)	Deferred tax (assets)/liabilities are attributable to the following:" />
      <div className="bottom-scroll-container" style={{ marginRight: "50px" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ textDecoration: "underline 2px" }}>
              <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

              <th style={{ fontSize: "15px" }}>Asset </th>

              <th style={{ fontSize: "15px", width: "1500px" }}>Asset</th>
              <th style={{ fontSize: "15px" }}>liabilities</th>

              <th style={{ fontSize: "15px" }}>liabilities</th>
              <th style={{ fontSize: "15px" }}>Net</th>
              <th style={{ fontSize: "15px" }}>Net</th>
            </tr>
          </thead>
          <thead>
            <tr style={{ textDecoration: "underline 2px" }}>
              <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

              <th style={{ fontSize: "15px" }}>2022 </th>

              <th style={{ fontSize: "15px", width: "1500px" }}>2021</th>
              <th style={{ fontSize: "15px" }}>2022</th>

              <th style={{ fontSize: "15px" }}>2021</th>
              <th style={{ fontSize: "15px" }}>2022</th>
              <th style={{ fontSize: "15px" }}>2021</th>
            </tr>
          </thead>

          <thead>
            <tr>
              <th style={{ fontSize: "15px" }}></th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
              <th style={{ fontSize: "15px" }}>N0.00</th>
            </tr>
          </thead>

          <tr>
            <b>
              {" "}
              <td>Property plant and equipment </td>
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
          </tr>

          <tr>
            <b>
              {" "}
              <td>Tax losses</td>
            </b>

            <td style={{ fontWeight: "800" }}>{total4}</td>
            <td style={{ fontWeight: "800" }}>{total5}</td>
            <td style={{ fontWeight: "800" }}>{total6}</td>
            <td style={{ fontWeight: "800" }}>{total7}</td>
            <td style={{ fontWeight: "800" }}>{total8}</td>
            <td style={{ fontWeight: "800" }}>{total9}</td>
          </tr>

          <br></br>

          <tr>
            <b>
              {" "}
              <td>Trade and other receivables </td>
            </b>
            <td style={{ fontWeight: "800" }}>{total4}</td>

            <td style={{ fontWeight: "800" }}>{total5}</td>
            <td style={{ fontWeight: "800" }}>{total6}</td>
            <td style={{ fontWeight: "800" }}>{total7}</td>
            <td style={{ fontWeight: "800" }}>{total8}</td>
            <td style={{ fontWeight: "800" }}>{total9}</td>
          </tr>

          <tr>
            <td>Total </td>

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
          </tr>
        </table>
      </div>

      <b>
        {" "}
        <EditText value="Movement in temporary difference during the year" />
      </b>
      <div className="bottom-scroll-container" style={{ marginRight: "50px" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ textDecoration: "underline 2px" }}>
              <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

              <th style={{ fontSize: "15px" }}> </th>

              <th style={{ fontSize: "15px", width: "1500px" }}>
                Balance 1 January 2021
              </th>
              <th style={{ fontSize: "15px" }}>Recognized in profit or loss</th>

              <th style={{ fontSize: "15px" }}>Balance 31 December 2021</th>
              <th style={{ fontSize: "15px" }}>Recognizzed n profit or loss</th>
              <th style={{ fontSize: "15px" }}>Balance 31 December 2022</th>
            </tr>
          </thead>

          <thead>
            <tr>
              <th style={{ fontSize: "15px", fontWeight: "500" }}></th>

              <th style={{ fontSize: "15px" }}> </th>

              <th style={{ fontSize: "15px", width: "1500px" }}>0.00</th>
              <th style={{ fontSize: "15px" }}>0.000</th>

              <th style={{ fontSize: "15px" }}>0.00</th>
              <th style={{ fontSize: "15px" }}>0.00</th>
              <th style={{ fontSize: "15px" }}>0.00</th>
            </tr>
          </thead>

          <tr>
            <b>
              {" "}
              <td>Property plant and equipment </td>
            </b>

            <td style={{ fontWeight: "800" }}></td>
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
          </tr>

          <tr>
            <b>
              {" "}
              <td>Tax losses</td>
            </b>

            <td style={{ fontWeight: "800" }}></td>
            <td style={{ fontWeight: "800" }}>{total5}</td>
            <td style={{ fontWeight: "800" }}>{total6}</td>
            <td style={{ fontWeight: "800" }}>{total7}</td>
            <td style={{ fontWeight: "800" }}>{total8}</td>
            <td style={{ fontWeight: "800" }}>{total9}</td>
          </tr>

          <br></br>

          <tr>
            <b>
              {" "}
              <td>Trade and other receivables </td>
            </b>
            <td style={{ fontWeight: "800" }}></td>

            <td style={{ fontWeight: "800" }}>{total4}</td>
            <td style={{ fontWeight: "800" }}>{total6}</td>
            <td style={{ fontWeight: "800" }}>{total7}</td>
            <td style={{ fontWeight: "800" }}>{total8}</td>
            <td style={{ fontWeight: "800" }}>{total9}</td>
          </tr>

          <tr>
            <td>Total </td>

            <td></td>
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
          </tr>
        </table>
      </div>
      <EditTextarea value="As at 31 December 2022, the Company had deferred tax assets amounting to ₦ XXX (2021: ₦900.7 million), which arose mainly from unutilised tax deductible capital allowances on property, plant and equipment and unutilised tax losses. The Company will continue to assess the recoverability of its deferred tax assets, and ensure that only the amount considered recoverable are recognised in the books and presented in the statement of financial position." />
      <EditTextarea value="(e) In current year, the Company income tax charge for the period was higher than the minimum tax computed, hence, no minimum tax expense was recognized. In prior year, it was computed based on 0.25% of turnover in line with the Finance Act, 2019 and this amounted to ₦ 39.6 million. The minimum tax payable is presented as current tax liabilities in the statement of financial position." />
    </div>
  );
};

export default EighttoNine;
