import { FiPlusCircle } from "react-icons/fi";
import css from "./todoAdder.module.css";
import { useState, useRef } from "react";
const TodoAdder = ({ addTodo }) => {
  //let [todoName, setTodoName] = useState("");
  let todoNameElement = useRef("");
  let todoDateElement = useRef("");
  const addButtonHandler = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    if (todoName === "" || todoDate === "") {
      alert("Please enter both task name and due date");
      return null;
    }
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addTodo(todoName, todoDate);
  };
  return (
    <form onSubmit={addButtonHandler} className="row">
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="enter task name"
        ></input>
      </div>
      <div className="col">
        <input
          type="date"
          ref={todoDateElement}
          placeholder="select due date"
        ></input>
      </div>
      <div className="col">
        <button className={`btn btn-success ${css["custom-button"]}`}>
          <FiPlusCircle />
        </button>
      </div>
    </form>
  );
};
export default TodoAdder;
