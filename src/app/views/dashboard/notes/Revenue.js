import React from "react";

const Revenue = ({ subcategory }) => {
  const properties = subcategory?.Income?.["Revenue"];

  if (properties) {
    properties.forEach((property) => {
      for (const key in property) {
        if (typeof property[key] === "string") {
          const numericValue = parseFloat(property[key].replace(/[\s,]/g, ""));
          if (!isNaN(numericValue)) {
            property[key] = Math.abs(numericValue).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
          }
        }
      }
    });
  }

  return (
    <div style={{ margin: "20px" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Description
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Prior Year
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Current Year
            </th>
          </tr>
        </thead>
        <tbody>
          {properties?.map((property, index) => (
            <tr key={index}>
              <td
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {property.Description}
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {
                  property[
                    Object.keys(property)[Object.keys(property).length - 2]
                  ]
                }
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {
                  property[
                    Object.keys(property)[Object.keys(property).length - 1]
                  ]
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Revenue;
