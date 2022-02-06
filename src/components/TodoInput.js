import { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  return (
    <div>
      <input
        type="text"
        className="inputTitle"
        onChange={(e) => setTodoTitle(e.target.value)}
        value={todoTitle}
      />
      <input
        type="text"
        className="inputBody"
        placeholder="Add Task..."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />

      <button className="addBtn" onClick={() => addTodo(todoText, todoTitle)}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
