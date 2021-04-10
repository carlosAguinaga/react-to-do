import React, { useState, useEffect } from "react";
import ListTask from "./ListTask";
import InputTask from "./InputTask";
import NavBar from "./NavBar";
import {
  getRemoteTasks,
  setRemoteTask,
  updateRemoteTask,
  deleteRemoteTask,
} from "../helpers/RemoteTasks";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (note) => {
    const _id = await setRemoteTask({ note, done: false });
    const task = { _id, note, done: false};
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  const toggleDoneTask = async (i) => {
    const newTasks = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    updateRemoteTask(newTasks[i])
    setTasks(newTasks);
  };

  const removeTask = (i) => {
    // deleteRemoteTask(tasks[i])
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  useEffect(() => {
    getRemoteTasks(setTasks);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container p-4 bg-primary">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <InputTask addTask={addTask} />
            <ListTask
              tasks={tasks}
              taskControlers={{ toggleDoneTask, removeTask }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
