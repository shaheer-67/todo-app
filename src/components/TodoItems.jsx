import style from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          onDeleteClick={onDeleteClick}
          key={`${item.name}`}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
