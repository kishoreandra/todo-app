import React, { useRef } from "react";
import "./ShowTodos.css";

const ShowTodos = ({ todo, saveTodo }) => {
  const ref = useRef();

  const onDelete = () => {
    saveTodo("");
  };
  const onSave = () => {
    ref.current.readOnly = true;
  };
  const onEdit = () => {
    ref.current.readOnly = false;
  };
  const onTodoEdit = (e) => {
    saveTodo(e.target.value);
  };

  return (
    <div className="ui celled list">
      <div className="item">
        <div className="content">
          <div className="ui input show-todos-input">
            <input
              ref={ref}
              type="text"
              readOnly={true}
              value={todo}
              onChange={onTodoEdit}
            />
          </div>
          <div className="show-todos-icons">
            <i
              onClick={onDelete}
              className="trash alternate outline icon right floated"
            ></i>
            <i onClick={onSave} className="save outline icon right floated"></i>
            <i onClick={onEdit} className="edit icon right floated"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTodos;
