import React from "react";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// Define custom icons for the toolbar
const icons = {
  customBold: `
    <svg viewBox="0 0 18 18">
      <rect fill="currentColor" width="12" height="2" rx="1" ry="1" />
      <rect
        fill="currentColor"
        x="1"
        y="4"
        width="16"
        height="2"
        rx="1"
        ry="1"
      />
      <rect
        fill="currentColor"
        x="3"
        y="8"
        width="12"
        height="2"
        rx="1"
        ry="1"
      />
      <rect
        fill="currentColor"
        x="4"
        y="12"
        width="10"
        height="2"
        rx="1"
        ry="1"
      />
    </svg>
  `,
};

// Add the custom icons to Quill
const CustomQuill = Quill.import("modules/toolbar");
CustomQuill.DEFAULTS["modules"]["toolbar"]["handlers"]["customBold"] =
  function () {
    this.quill.format("bold", !this.quill.getFormat().bold);
  };

// CustomToolbar component
const CustomToolbar = () => {
  return (
    <div id="toolbar">
      <select className="ql-header">
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option selected>Normal</option>
      </select>
      <button className="ql-bold" value="bold" />
      <button className="customBold" title="Custom Bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-link" />
      <button className="ql-image" />
    </div>
  );
};

export default CustomToolbar;
