import React from "react";
import "./Map.css";

const MappedTable = ({
  subcategory,
  onDropMapped,
  draggedItem,
  setDraggedItem,
  setData,

  mappedData, // New prop to manage mapped data
  setMappedData, // New prop to set mapped data
}) => {
  const flattenSubcategoryData = () => {
    let flattenedData = [];
    for (let category in subcategory) {
      for (let subCategoryKey in subcategory[category]) {
        if (category === "Income") {
          // Treat subcategories of "Income" as sub-subcategories of other categories
          subcategory[category][subCategoryKey].forEach((item) => {
            flattenedData.push({
              Category: category,
              Subcategory: subCategoryKey,
              SubSubcategory: "",
              ...item,
            });
          });
        } else {
          for (let subSubcategoryKey in subcategory[category][subCategoryKey]) {
            subcategory[category][subCategoryKey][subSubcategoryKey].forEach(
              (item) => {
                flattenedData.push({
                  Category: category,
                  Subcategory: subCategoryKey,
                  SubSubcategory: subSubcategoryKey,
                  ...item,
                });
              }
            );
          }
        }
      }
    }
    return flattenedData;
  };

  const data = flattenSubcategoryData();
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  const handleDragStart = (event, row) => {
    console.log("handleDragStart called");
    event.dataTransfer.setData("application/json", JSON.stringify(row));
  };

  const handleDragOver = (event) => {
    console.log("handleDragOver called");
    event.preventDefault();
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            onDragStart={(event) => handleDragStart(event, row)}
            draggable
            onDragOver={handleDragOver}
            onDrop={(event) => {
              event.preventDefault();
              console.log("handle drop call");
              const droppedData = JSON.parse(
                event.dataTransfer.getData("application/json")
              );
              console.log("Dropped data:", droppedData);
              // Check if the dropped item is no longer in the mappedData
              // Call the handleDropMapped function
              console.log("Dropped Item:", droppedData);

              // Remove the dropped item from mappedData and update state
              setMappedData((prevMappedData) =>
                prevMappedData.filter((item) => item !== droppedData)
              );

              // Add the dropped item back to the unmapped table's data
              setData((prevData) => [...prevData, droppedData]);
            }}
            style={{
              backgroundColor: row === draggedItem ? "lightblue" : "white",
            }}
          >
            {headers.map((header, colIndex) => (
              <td key={`${index}-${colIndex}`}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MappedTable;
