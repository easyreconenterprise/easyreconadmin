import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomToolbar = () => {
  const quillRef = useRef(null);

  // Function to handle bold formatting
  const handleBoldClick = () => {
    const quill = quillRef.current.getEditor();
    const format = quill.getFormat();
    quill.format("bold", !format.bold);
  };

  // Initialize ReactQuill with custom toolbar
  React.useEffect(() => {
    const quill = quillRef.current.getEditor();

    // Add custom bold button to the toolbar
    const toolbar = quill.getModule("toolbar");
    if (toolbar) {
      toolbar.addHandler("bold", handleBoldClick);
    }
  }, []);

  return (
    <div>
      <div id="toolbar">
        <button className="ql-bold" />
        <button className="custom-bold-button">Custom Bold</button>
        <button className="ql-italic" />
        <button className="ql-underline" />
      </div>
      <div>
        <ReactQuill
          ref={quillRef}
          modules={{
            toolbar: {
              container: "#toolbar",
            },
          }}
          style={{ height: "400px" }}
        />
      </div>
    </div>
  );
};

export default CustomToolbar;
