const TodoComponent = ({ todoName, todoDate, deleteTodo }) => {
  return (
    <div className="row">
      <div className="col-6">{todoName}</div>
      <div className="col">{todoDate}</div>
      <div className="col">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => deleteTodo(todoName)}
        >
          delete
        </button>
      </div>
    </div>
  );
};
export default TodoComponent;
