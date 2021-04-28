import "./AddTodo.css";
import React, { useState } from "react";
import ShowTodos from "./ShowTodos";

const AddTodo = () => {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const onAddTodo = () => {
    todo.length === 0 ? setTodo([todoValue]) : setTodo([...todo, todoValue]);
    setTodoValue("");
  };

  const onTodoWrite = (e) => {
    setTodoValue(e.target.value);
  };

  const onReturnPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <form className="ui form">
      <h2>Add a Todo Item</h2>
      <div className="ui items">
        <div className="item">
          <div className="middle aligned content">
            <div className="ui input add-todo-input">
              <input
                type="text"
                value={todoValue}
                onKeyPress={onReturnPress}
                onChange={onTodoWrite}
                placeholder="e.g. learn css"
              />
            </div>
            <div className="ui right floated button" onClick={onAddTodo}>
              Add
            </div>
          </div>
        </div>
      </div>

      <hr style={{ margin: "30px 0px" }}></hr>

      <ShowTodos todo={todo} saveTodo={setTodo} />
    </form>
  );
};

export default AddTodo;
