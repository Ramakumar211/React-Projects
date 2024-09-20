import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";
const todoAdder = ({ addNewTodo }) => {
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const todoInputCollect = (event) => {
    let inputValue = event.target.value;

    setTodoName(inputValue);
  };

  const todoDateCollect = (event) => {
    let inputDate = event.target.value;

    setTodoDate(inputDate);
  };
  const addButtonHandler = () => {
    if (todoName === "" || todoDate === "") {
      alert("Please enter both task name and due date");
      return null;
    }

    addNewTodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          value={todoName}
          placeholder="enter a task "
          onChange={todoInputCollect}
        />
      </div>
      <div className="col">
        <input type="date" value={todoDate} onChange={todoDateCollect} />
      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-success"
          onClick={addButtonHandler}
        >
          <IoAddCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default todoAdder;
