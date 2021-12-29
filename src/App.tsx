import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";

const App: FC = () => { 

const [task, setTask] = useState<string>("")
const [deadline, setDeadline] = useState<number>(0)
const [todo, setTodo] = useState([])

const handleChange = (event: ChangeEvent<HTMLInputElement>) : void =>{
  if(event.target.name === 'task'){
    setTask(event.target.value)
  }else{
    setDeadline(Number(event.target.value))
  }
}



const addtask = () : void  =>{
  console.log("hello")
}

  return (
    <div className="App">
      <div className="header">
        <input name ="task" type="text" onChange={e => handleChange(e)} placeholder="...Task" />
        <input type="number" placeholder="Deadline in  days" onChange={e => handleChange(e)}/>
        <button id="btn" onClick={addtask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
