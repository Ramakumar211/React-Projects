import { useState } from "react";
import Heading from "./components/heading";
import TodoAdder from "./components/todoAdder";
import TodoDisplay from "./components/todoDisplay";

const NewTodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (todoName, todoDate) => {
    setTodoList((currentTodoList) => [
      ...currentTodoList,
      { todoName: todoName, todoDate: todoDate },
    ]);
  };
  console.log(todoList);
  const deleteTodo = (todoName) => {
    setTodoList((currentTodoList) => {
      return currentTodoList.filter((todo) => todo.todoName !== todoName);
    });
  };

  return (
    <center>
      <Heading></Heading>
      <TodoAdder addTodo={addTodo}></TodoAdder>
      <TodoDisplay todoList={todoList} deleteTodo={deleteTodo}></TodoDisplay>
    </center>
  );
};
export default NewTodoApp;
