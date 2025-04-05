import { useState } from "react";
import { MdAdd } from "react-icons/md";


function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleChangeName = (event) => {
    setTodoName(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            value={todoName}
            onChange={handleChangeName}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input value={dueDate} onChange={handleChangeDate} type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
