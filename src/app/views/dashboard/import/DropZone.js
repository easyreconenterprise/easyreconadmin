/* eslint-disable react/prop-types */
import { useState } from 'react';

const DropZone = ({ captions, onDrop, headers }) => {
  const [selectedCaption, setSelectedCaption] = useState('');

  const handleCaptionChange = (event) => {
    setSelectedCaption(event.target.value);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedObject = JSON.parse(event.dataTransfer.getData('application/json'));
    console.log(droppedObject);

    const objectWithCaption = {};
    headers.forEach((header) => {
      const keyWithoutSpaces = header.replace(/\s+/g, '');
      objectWithCaption[keyWithoutSpaces] = droppedObject[header];
    });

    // Add the caption property
    objectWithCaption.CATEGORIES = selectedCaption;
    // console.log(objectWithCaption);
    onDrop(objectWithCaption);
    //  console.log("caption:", objectWithCaption);
  };

  return (
    <section className="drop-area">
      <div>
        <h2>Account Captions</h2>
        <select value={selectedCaption} onChange={handleCaptionChange}>
          <option value="">Select Caption</option>
          {captions?.map((caption) => (
            <option key={caption} value={caption}>
              {caption}
            </option>
          ))}
        </select>
        <div
          className="drop-field"
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
        >
          Drop items here
        </div>
      </div>
    </section>
  );
};
export default DropZone;
