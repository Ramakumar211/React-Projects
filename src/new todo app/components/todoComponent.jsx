import { BiMinusCircle } from "react-icons/bi";
import css from "./todoAdder.module.css";
const TodoComponent = ({ todoName, todoDate, deleteTodo }) => {
  const deleteButtonHandler = () => {
    deleteTodo(todoName);
  };

  return (
    <div className="row">
      <div className="col-6">{todoName}</div>
      <div className="col">{todoDate}</div>
      <div className="col">
        <button
          type="button"
          className={`btn btn-secondary ${css["custom-button"]}`}
          onClick={deleteButtonHandler}
        >
          <BiMinusCircle />
        </button>
      </div>
    </div>
  );
};
export default TodoComponent;
