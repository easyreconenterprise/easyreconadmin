import React from 'react';

const Drag = () => {
  const rows = [
    { id: 1, name: 'Row 1' },
    { id: 2, name: 'Row 2' },
    { id: 3, name: 'Row 3' },
  ];

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const row = rows.find((r) => r.id === parseInt(id, 10));
    // Add your logic to handle the drop and move the row to the destination table
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Source Table</h2>
      <table>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} draggable onDragStart={(e) => handleDragStart(e, row.id)}>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Destination Table</h2>
      <table onDrop={handleDrop} onDragOver={handleDragOver}>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Drag;
