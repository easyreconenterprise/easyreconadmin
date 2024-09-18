import React from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import End from "../notes/End";
import Begin from "../notes/Begin";
import LocalStorageEdit from "./LocalStorageEdit";

const Loans3 = ({ subcategory }) => {
  console.log(
    subcategory?.["Equity and Liability"]?.["Non-current-Liability"]?.[
      "Loans and borrowings"
    ]
  );

  const properties =
    subcategory?.["Equity and Liability"]?.["Non-current-Liability"]?.[
      "Loans and borrowings"
    ];

  let totalKmlValue = 0;
  let totalKmlValues = 0;
  if (properties) {
    properties.forEach((property) => {
      const lastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 1]];
      const secondLastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 2]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ""));
      const kmlValues = parseFloat(secondLastColumnValue.replace(/[\s,]/g, ""));

      if (!isNaN(kmlValue)) {
        totalKmlValue += kmlValue;
      }

      if (!isNaN(kmlValues)) {
        totalKmlValues += kmlValues;
      }
    });
  }

  const formattedTotalKmlValue = totalKmlValue.toFixed(2);
  const formattedTotalKmlValues = totalKmlValues.toFixed(2);

  const changeInInventories = (totalKmlValues - totalKmlValue).toFixed(2);

  return (
    <div>
      <div>
        <b>
          {" "}
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
                <LocalStorageEdit
                  defaultValue="56788"
                  storageKey="additionalLoans"
                />
              </td>
            </tr>
            <tr>
              <td>Principal repayments</td>
              <td>
                <LocalStorageEdit defaultValue="56788" storageKey="principal" />
              </td>
            </tr>

            <tr>
              <td>Interest paid on loans and borrowings</td>
              <td>
                <LocalStorageEdit defaultValue="56788" storageKey="interest" />
              </td>
            </tr>
            <tr>
              <td>Interest paid on overdraft</td>
              <td>
                <LocalStorageEdit defaultValue="56788" storageKey="over" />
              </td>
            </tr>
            <tr>
              <td>Closing balance</td>
              <td>
                {" "}
                <End subcategory={subcategory} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loans3;
