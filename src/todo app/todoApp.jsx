import css from "./todoApp.module.css";
import TodoAdder from "./components/todoAdder.jsx";
import TodoDisplay from "./components/todoDisplay.jsx";
import { useState } from "react";
const TodoApp = () => {
  /*     let todoList = [
    { todoName: "buy milk", todoDate: "01/01/2015" },
    { todoName: "Goto college", todoDate: "01/01/2015" },
  ];        */
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (todoName, todoDate) => {
    setTodoList((currentTodoList) => {
      let updatedTodoList = [
        ...currentTodoList,
        { todoName: todoName, todoDate: todoDate },
      ];
      return updatedTodoList;
    });
  };

  const deleteTodo = (todoItemName) => {
    setTodoList((currentTodoList) => {
      let updatedTodoList = currentTodoList.filter(
        (todo) => todo.todoName !== todoItemName
      );
      return updatedTodoList;
    });
  };

  return (
    <>
      <center className={css.heading}>Todo app</center>
      <TodoAdder addNewTodo={addNewTodo}></TodoAdder>
      <TodoDisplay todoList={todoList} deleteTodo={deleteTodo}></TodoDisplay>
    </>
  );
};
export default TodoApp;
/*            */
