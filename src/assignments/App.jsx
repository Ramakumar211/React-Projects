import { useState } from "react";
import { memo } from "react";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
    { id: 3, title: "Task 3", description: "Description 3" },
  ]);

  function addTodo() {
    const newTodo = {
      id: 4,
      title: "New Todo4",
      description: "New Todo Description4",
    };
    setTodos([...todos, newTodo]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
