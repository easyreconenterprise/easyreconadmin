import React, { useState } from 'react';

export default function Task({ chore, onChange, onClick }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          autoFocus
          value={chore}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          type="text"
        />
      ) : (
        <span onClick={handleClick}>{chore}</span>
      )}
    </>
  );
}
