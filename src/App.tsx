import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [num, setNum] = useState<number>(0);
  const [list, setList] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "task") {
      setTask(e.target.value)
    } else {
      setNum(Number(e.target.value));
    }
  };

  return (
    <div className="App">
      <div className="header">
        <input type="text" placeholder="Item..." name="task" onChange={handleChange} />
        <input type="number" name="number" placeholder="Number" />
        <button>Add Item</button>
      </div>
      <div className="list"></div>
    </div>
  );
}

export default App;
