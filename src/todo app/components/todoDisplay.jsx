import TodoComponent from "./todoComponent.jsx";
const TodoDisplay = ({ todoList, deleteTodo }) => {
  return (
    <>
      {todoList.map((todo, index) => (
        <TodoComponent
          key={index}
          todoName={todo.todoName}
          todoDate={todo.todoDate}
          deleteTodo={deleteTodo}
        ></TodoComponent>
      ))}
    </>
  );
};

export default TodoDisplay;
