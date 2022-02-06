// import { Todo } from "./components/Todo";
import TodoInput from "./components/TodoInput";
import TodosList from "./components/TodosList";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";

// import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  const addTodo = async (todoText, todoTitle) => {
    // console.log(todoText);
    try {
      var res = await axios.post(
        "https://json-todo-api-server.herokuapp.com/todos",
        {
          text: todoText,
          title: todoTitle,
        }
      );
      setTodos([...todos, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    var fetchdata = async () => {
      try {
        var res = await axios.get(
          `https://json-todo-api-server.herokuapp.com/todos?_page=${page}&_limit=1`
        );
        console.log(res);
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, [page]);

  return (
    <div className="outterScreen">
      <div className="App">
        {/* <h1 className="title">Todo - sahil</h1> */}
        <TodoInput addTodo={addTodo} />
        <TodosList todos={todos} />
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
