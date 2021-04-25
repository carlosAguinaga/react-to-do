import React, { useState, useEffect, useContext } from "react";
import ListTask from "./ListTask";
import InputTask from "./InputTask";
import { AuthContext } from "../auth/AuthContext";
import { useHistory } from "react-router-dom";
import { types } from "../types/types";
import {
  getRemoteTasks,
  setRemoteTask,
  updateRemoteTask,
  deleteRemoteTask,
} from "../helpers/remoteTasks.js";
import renewToken from "../helpers/renewToken";

const Tasks = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = async (note) => {
    const _id = await setRemoteTask({ note, done: false });
    if (!_id) {
      setRedirect(true);
    }
    const task = { _id, note, done: false };
    const newTasks = [...tasks, task];

    renewToken();
    setTasks(newTasks);
  };

  const toggleDoneTask = async (i) => {
    const newTasks = [...tasks];
    newTasks[i].done = !newTasks[i].done;

    updateRemoteTask(newTasks[i]).then((res) => {
      if (res === 401) {
        setRedirect(true);
      }
    });

    renewToken();
    setTasks(newTasks);
  };

  const removeTask = (i) => {
    deleteRemoteTask(tasks[i]._id).then((res) => {
      if (res === 401) {
        setRedirect(true);
      }
    });
    const newTasks = [...tasks];
    newTasks.splice(i, 1);

    renewToken();
    setTasks(newTasks);
  };

  const goToLogin = () => {
    history.replace("/login");
    dispatch({
      type: types.logout,
    });
  };

  useEffect(() => {
    let mounted = true;

    getRemoteTasks().then((tasks) => {
      if (mounted && tasks) {
        setTasks(tasks);
      } else if (mounted) {
        setRedirect(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {redirect && goToLogin()}
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
