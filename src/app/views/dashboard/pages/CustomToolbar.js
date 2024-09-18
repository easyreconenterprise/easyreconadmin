import React from "react";

const CustomToolbar = ({ onChangeHeader }) => {
  const handleHeaderChange = (e) => {
    const value = e.target.value;
    onChangeHeader(value);
  };

  return (
    <div>
      <select onChange={handleHeaderChange}>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
    </div>
  );
};

export default CustomToolbar;
