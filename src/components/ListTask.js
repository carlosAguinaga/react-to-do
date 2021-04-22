import React from "react";

const ListTask = ({ tasks, taskControlers }) => {
  return (
    <div>
      {tasks.map((task, id) => (
        <div className="card card-body mt-2" key={id}>
          <h4 style={{ textDecoration: task.done ? "line-through" : "" }}>
            {task.note}
          </h4>
          <div>
            <button onClick={() => taskControlers.toggleDoneTask(id)} className="mr-2 btn btn-warning">
              {task.done ? "✅" : "❌"}
            </button>
            <button
              className="btn btn-warning"
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
