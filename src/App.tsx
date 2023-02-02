import React, {FC} from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <input type="text" placeholder="Item..." />
        <input type="number" placeholder="Number" />
        <button>Add Item</button>
      </div>
      <div className="list"></div>
    </div>
  );
}

export default App;
