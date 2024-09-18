import React, { useState } from "react";

import Category from "../import/Category";
import DropZone from "../import/DropZone";
import Excel from "../import/Excel";
import HeaderSelection from "../import/HeaderSelection";
import MappedTable from "../import/MappedTable";
import TableComponent from "../import/TableComponent";

const Fs = () => {
  const [data, setData] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDataChange = (jsonData) => {
    setData(jsonData);
  };

  const CATEGORIES = ["expenditure", "income"];

  const [categorizedData, setCategorizedData] = useState([]);

  const handleDrop = (objectWithCaption) => {
    setCategorizedData((prevData) => [...prevData, objectWithCaption]);
    const updatedData = data.filter((item) => item !== draggedItem);
    setData(updatedData);

    // Clear the dragged item from the state
    setDraggedItem(null);
  };

  console.log(data);
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  // const headers = header.map((header) => header.trim());
  const mappedHeaders =
    categorizedData.length > 0 ? Object.keys(categorizedData[0]) : [];
  // const mappedHeaders = mappedHeader.map((header) => header.trim());
  const handleDragStart = (event, row) => {
    setDraggedItem(row);
    event.dataTransfer.setData("application/json", JSON.stringify(row));
  };

  return (
    <main>
      <h2>Import Excel Sheet</h2>
      <Excel setData={setData} onDataChange={handleDataChange} />

      <div>
        <div className="container">
          <div className="left-panel">
            <h2>Unmapped Data</h2>
            {data.length > 0 ? (
              <>
                <TableComponent
                  data={data}
                  headers={headers}
                  handleDragStart={handleDragStart}
                />
              </>
            ) : (
              <div>Table is Empty</div>
            )}
          </div>
          <div className="right-panel">
            <DropZone
              headers={headers}
              captions={CATEGORIES}
              onDrop={handleDrop}
            />
          </div>
        </div>
        <h2>Mapped Data</h2>
        {/* <pre>{JSON.stringify(categorizedData, null, 2)}</pre> */}
        <MappedTable
          mappedHeaders={mappedHeaders}
          categorizedData={categorizedData}
        />
        <Category categorizedData={categorizedData} />
        <HeaderSelection />
        {/* <HeaderSelection2/> */}
      </div>
    </main>
  );
};

export default Fs;
