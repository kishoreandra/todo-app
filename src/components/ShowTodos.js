import React, { useState } from "react";
import "./ShowTodos.css";

const ShowTodos = ({ todo, saveTodo }) => {
  const [editedTodo, setEditedTodo] = useState("");
  const [editing, setEditing] = useState(null);

  const onDelete = (idx) => {
    const filtered = todo.filter((t, i) => i !== idx);
    saveTodo(filtered);
  };
  const onSave = (idx) => {
    const updatedTodos = todo.map((t) => {
      if (idx === t.idx) {
        t = editedTodo;
      }
      return t;
    });
    saveTodo(updatedTodos);
    setEditing(null);
    setEditedTodo("");
  };
  const onEdit = (idx) => {
    setEditing(idx);
  };
  const onTodoChange = (e, idx) => {
    setEditedTodo(e.target.value);
  };

  const todoList = todo.map((t, idx) => {
    if (t) {
      return (
        <div className="item" key={[t, idx].join("_")}>
          <div className="content">
            <div className="ui input show-todos-input">
              {editing === idx ? (
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => onTodoChange(e, idx)}
                />
              ) : (
                <input type="text" value={t} />
              )}
            </div>
            <div className="show-todos-icons">
              <div
                className="ui icon button"
                data-content="Add users to your feed"
              >
                <i
                  onClick={() => onDelete(idx)}
                  className="trash alternate outline icon right floated"
                ></i>
              </div>
              <div
                className="ui icon button"
                dataContent="Add users to your feed"
              >
                <i
                  onClick={() => onSave(idx)}
                  className="save outline icon right floated"
                  placeholder="Save"
                ></i>
              </div>
              <div
                className="ui icon button"
                data-content="Add users to your feed"
              >
                <i
                  onClick={() => onEdit(idx)}
                  className="edit icon right floated"
                  placeholder="Edit"
                ></i>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
  return <div className="ui celled list">{todoList}</div>;
};

export default ShowTodos;
