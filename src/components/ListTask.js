import React from "react";

const ListTask = ({ tasks, taskControlers }) => {
  return (
    <div>
      {tasks.map((task, id) => (
        <div className="card card-body mt-2" key={id}>
          <h2 style={{ textDecoration: task.done ? "line-through" : "" }}>
            {task.note}
          </h2>
          <div>
            <button onClick={() => taskControlers.toggleDoneTask(id)}>
              {task.done ? "✅" : "❌"}
            </button>
            <button
              className="btn btn-danger"
              onClick={() => taskControlers.removeTask(id)}
            >
              🗑
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTask;
