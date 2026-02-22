import React, { useState } from "react";

function App() {
  const [list, setList] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]);

  const removeItem = (id) => {
    setList(prevList =>
      prevList.filter(item => item.id !== id)
    );
  };

  return (
    <div>
      {list.map(item => (
        <div key={item.id}>
          <span>ID: {item.id}</span>
          <button onClick={() => removeItem(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;