// import React, { useEffect, useState } from "react";
// import { EditText, EditTextarea } from "react-edit-text";
// import "react-edit-text/dist/index.css";
// import End from "../notes/End";
// import Begin from "../notes/Begin";
// import LocalStorageEdit from "./LocalStorageEdit";
// import axios from "axios";

// const Loans2 = ({ subcategory }) => {
//   console.log(
//     subcategory?.["Equity and Liability"]?.["Non-current-Liability"]?.[
//       "Loans and borrowings"
//     ]
//   );

//   const properties =
//     subcategory?.["Equity and Liability"]?.["Non-current-Liability"]?.[
//       "Loans and borrowings"
//     ];

//   let totalKmlValue = 0;
//   let totalKmlValues = 0;
//   if (properties) {
//     properties.forEach((property) => {
//       const lastColumnValue =
//         property[Object.keys(property)[Object.keys(property).length - 1]];
//       const secondLastColumnValue =
//         property[Object.keys(property)[Object.keys(property).length - 2]];
//       const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ""));
//       const kmlValues = parseFloat(secondLastColumnValue.replace(/[\s,]/g, ""));

//       if (!isNaN(kmlValue)) {
//         totalKmlValue += kmlValue;
//       }

//       if (!isNaN(kmlValues)) {
//         totalKmlValues += kmlValues;
//       }
//     });
//   }

//   const formattedTotalKmlValue = totalKmlValue.toFixed(2);
//   const formattedTotalKmlValues = totalKmlValues.toFixed(2);

//   const changeInInventories = (totalKmlValues - totalKmlValue).toFixed(2);

//   const [editedText34, setEditedText34] = useState("");
//   const [editedText35, setEditedText35] = useState("");
//   const [editedText36, setEditedText36] = useState("");
//   const [editedText37, setEditedText37] = useState("");

//   useEffect(() => {
//     // Fetch the last edited text from localStorage when the component mounts
//     const savedText34 = localStorage.getItem("content34") || "5454";
//     const savedText35 = localStorage.getItem("content35") || "5454";
//     const savedText36 = localStorage.getItem("content36") || "5454";
//     const savedText37 = localStorage.getItem("content37") || "5454";

//     setEditedText34(savedText34);
//     setEditedText35(savedText35);
//     setEditedText36(savedText36);
//     setEditedText37(savedText37);
//   }, []);

//   // Automatically save edited text to the database when it changes
//   useEffect(() => {
//     saveTextToDatabase("content34", editedText34);
//     saveTextToDatabase("content35", editedText35);
//     saveTextToDatabase("content36", editedText36);
//     saveTextToDatabase("content37", editedText37);
//   }, [editedText34, editedText35, editedText36, editedText37]);

//   const saveTextToDatabase = (field, content) => {
//     const token = localStorage.getItem("jwtToken");
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };

//     const data = {
//       [field]: content,
//     };

//     axios
//       .post("http://localhost:5000/api/save-cash-text", data, {
//         headers,
//       })
//       .then((response) => {
//         // Update the edited text in local storage
//         localStorage.setItem(field, response.data[field]);
//       })
//       .catch((error) => {
//         console.error("Error saving text:", error);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <b>
//           {" "}
//           <p>9. Loans and borrowing</p>
//         </b>

//         <table>
//           <tbody>
//             <tr>
//               <td>Opening balance</td>
//               <td>
//                 <Begin subcategory={subcategory} />
//               </td>
//             </tr>
//             <tr>
//               <td>Additional loans obtained</td>
//               <td>
//                 <EditText
//                   name="textArea34"
//                   value={editedText34}
//                   onChange={(e) => setEditedText34(e.target.value)}
//                   dangerouslySetInnerHTML={{ __html: editedText34 }}
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Principal repayments</td>
//               <td>
//                 <EditText
//                   name="textArea35"
//                   value={editedText35}
//                   onChange={(e) => setEditedText35(e.target.value)}
//                   dangerouslySetInnerHTML={{ __html: editedText35 }}
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Interest paid on loans and borrowings</td>
//               <td>
//                 <EditText
//                   name="textArea36"
//                   value={editedText36}
//                   onChange={(e) => setEditedText36(e.target.value)}
//                   dangerouslySetInnerHTML={{ __html: editedText36 }}
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Interest paid on overdraft</td>
//               <td>
//                 <EditText
//                   name="textArea37"
//                   value={editedText37}
//                   onChange={(e) => setEditedText37(e.target.value)}
//                   dangerouslySetInnerHTML={{ __html: editedText37 }}
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Closing balance</td>
//               <td>
//                 {" "}
//                 <End subcategory={subcategory} />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Loans2;
import React, { useEffect, useState } from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import End from "../notes/End";
import Begin from "../notes/Begin";
import axios from "axios";

const Loans4 = ({ subcategory }) => {
  const properties =
    subcategory?.["Equity and Liability"]?.["Non-current-Liability"]?.[
      "Loans and borrowings"
    ];
  const apiUrl = process.env.REACT_APP_API_URL;

  // Initialize state variables for edited text
  const [editedText34, setEditedText34] = useState("");
  const [editedText35, setEditedText35] = useState("");
  const [editedText36, setEditedText36] = useState("");
  const [editedText37, setEditedText37] = useState("");

  useEffect(() => {
    // Fetch the last edited text from the database when the component mounts
    fetchDataFromDatabase("content34", setEditedText34);
    fetchDataFromDatabase("content35", setEditedText35);
    fetchDataFromDatabase("content36", setEditedText36);
    fetchDataFromDatabase("content37", setEditedText37);
  }, []);

  const fetchDataFromDatabase = (field, setField) => {
    // Get the token from localStorage or wherever you store it
    const token = localStorage.getItem("jwtToken");

    // Set up the headers with the Authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Make a GET request to retrieve data with authorization
    axios
      .get(`${apiUrl}/api/get-cash-text?field=${field}`, {
        headers,
      })
      .then((response) => {
        console.log(`Fetched ${field}:`, response.data);
        // Set the edited text from the response data
        setField(response.data[field] || ""); // Use an empty string as a default
      })
      .catch((error) => {
        console.error(`Error fetching ${field}:`, error);
      });
  };

  // Helper function to save edited text to the database
  const saveTextToDatabase = (field, content) => {
    const token = localStorage.getItem("jwtToken");
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

  // Event handlers for text area changes
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

  return (
    <div>
      <div>
        <b>
          <p>9. Loans and borrowing</p>
        </b>

        <table>
          <tbody>
            <tr>
              <td>Opening balance</td>
              <td>
                <Begin subcategory={subcategory} />
              </td>
            </tr>
            <tr>
              <td>Additional loans obtained</td>
              <td>
                <EditText
                  name="textArea34"
                  value={editedText34}
                  onChange={handleText34Change}
                />
              </td>
            </tr>
            <tr>
              <td>Principal repayments</td>
              <td>
                <EditText
                  name="textArea35"
                  value={editedText35}
                  onChange={handleText35Change}
                />
              </td>
            </tr>
            <tr>
              <td>Interest paid on loans and borrowings</td>
              <td>
                <EditText
                  name="textArea36"
                  value={editedText36}
                  onChange={handleText36Change}
                />
              </td>
            </tr>
            <tr>
              <td>Interest paid on overdraft</td>
              <td>
                <EditText
                  name="textArea37"
                  value={editedText37}
                  onChange={handleText37Change}
                />
              </td>
            </tr>
            <tr>
              <td>Closing balance</td>
              <td>
                <End subcategory={subcategory} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loans4;
