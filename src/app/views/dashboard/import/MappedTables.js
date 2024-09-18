import React from 'react';
import TableComponent from './TableComponent';
import DropZone from './DropZone';

const Maps = ({ data, headers, handleDragStart, handleDrop, CATEGORIES }) => {
  return (
    <div>
      {<TableComponent data={data} headers={headers} handleDragStart={handleDragStart} />}
      <div className="right-panel">
        <DropZone headers={headers} CATEGORIES={CATEGORIES} onDrop={handleDrop} />
      </div>
      <div className="right-panel"></div>
    </div>
  );
};

export default Maps;
