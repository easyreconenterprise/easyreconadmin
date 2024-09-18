import React, { useState, useEffect } from "react";
import axios from "axios";

function Charge() {
  const [total32, setTotal32] = useState(0);

  const [editedText82, setEditedText82] = useState("");
  const [editedText83, setEditedText83] = useState("");
  const [editedText84, setEditedText84] = useState("");
  const [editedText86, setEditedText86] = useState("");
  const [editedText87, setEditedText87] = useState("");
  const [editedText88, setEditedText88] = useState("");
  const [editedText89, setEditedText89] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    const fetchData = async () => {
      const fieldNames = [
        "content82",
        "content83",
        "content84",
        "content86",
        "content87",
        "content88",
        "content89",
      ];

      try {
        const fetchPromises = fieldNames.map((fieldName) =>
          axios.get(`${apiUrl}/api/get-cash-text?field=${fieldName}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        );

        const responses = await Promise.all(fetchPromises);

        const values = responses.map((response) => {
          const value = response.data[fieldNames.shift()];

          if (typeof value === "string" && !isNaN(value)) {
            return parseFloat(value);
          }

          return 0;
        });

        setEditedText82(values[0].toString());
        setEditedText83(values[1].toString());
        setEditedText84(values[2].toString());
        setEditedText86(values[3].toString());
        setEditedText87(values[4].toString());
        setEditedText88(values[5].toString());
        setEditedText89(values[6].toString());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const value82 = parseFloat(editedText82);
    const value83 = parseFloat(editedText83);
    const value84 = parseFloat(editedText84);
    const value86 = parseFloat(editedText86);
    const value87 = parseFloat(editedText87);
    const value88 = parseFloat(editedText88);
    const value89 = parseFloat(editedText89);

    const newTotal32 =
      value82 + value83 + value84 + value86 + value87 + value88 + value89;

    setTotal32(newTotal32);
  }, [
    editedText82,
    editedText83,
    editedText84,
    editedText86,
    editedText87,
    editedText88,
    editedText89,
  ]);

  return (
    <div>
      <p> {total32}</p>
    </div>
  );
}

export default Charge;
