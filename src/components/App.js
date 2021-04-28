import React from "react";
import "./App.css";
import AddTodo from "./AddTodo";

const App = () => {
  return (
    <div
      className="ui raised very padded text container segment"
      id="app-segment"
    >
      <AddTodo />
    </div>
  );
};

export default App;
