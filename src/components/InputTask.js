import React, { useState } from "react";

const InputTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <div className="card card-body">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Ingresa una tarea"
            value={newTask}
            className="form-control text-body"
            autoFocus
          />
          <button className="btn btn-success btn-block mt-2">agregar</button>
        </form>
      </div>
    </div>
  );
};

export default InputTask;
