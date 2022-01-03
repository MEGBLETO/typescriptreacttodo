import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import Todotask from "./components/Todotask";
import { Itask } from "./interface";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<Itask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addtask = (): void => {
    const newTask = { taskName: task, taskDeadline: deadline };

    setTodo([...todo, newTask]);
    console.log(todo);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="App">
      <div className="header">
        <input
          name="task"
          type="text"
          value={task}
          onChange={(e) => handleChange(e)}
          placeholder="...Task"
        />
        <input
          type="number"
          placeholder="Deadline in  days"
          value={deadline}
          onChange={(e) => handleChange(e)}
        />
        <button id="btn" onClick={addtask}>
          Add Task
        </button>
      </div>
      <div className="todoList">
      {todo.map((item: Itask, key: number) => {
          return <Todotask key={key} task={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
