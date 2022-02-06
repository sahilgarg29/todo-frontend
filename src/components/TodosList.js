const TodosList = ({ todos }) => {
  return (
    <div className="container">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todoItem">
            <h1 className="title">
              {"Todo..." + todo.title + " - " + todo.text}
            </h1>
            {/* <h2>{todo.text}</h2> */}
          </div>
        );
      })}
    </div>
  );
};

export default TodosList;
