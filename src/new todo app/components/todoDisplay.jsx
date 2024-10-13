import Reward from "./reward";
import TodoComponent from "./todoComponent";

const TodoDisplay = ({ todoList, deleteTodo }) => {
  return (
    <>
      {todoList.length == 0 ? (
        <Reward></Reward>
      ) : (
        todoList.map((todo, index) => {
          return (
            <TodoComponent
              key={index}
              todoName={todo.todoName}
              todoDate={todo.todoDate}
              deleteTodo={deleteTodo}
            ></TodoComponent>
          );
        })
      )}
    </>
  );
};
export default TodoDisplay;
