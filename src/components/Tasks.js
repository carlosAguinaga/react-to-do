import React, {useState, useEffect} from "react";
import ListTask from "./ListTask";
import InputTask from "./InputTask";
import NavBar from "./NavBar";
import getTasks from "../helpers/getTasks";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (name) => {
      const newTask = [...tasks, { name, done: false }];
      setTasks(newTask);
    };
  
    const toggleDoneTask = (i) => {
      const newTasks = [...tasks];
      newTasks[i].done = !newTasks[i].done;
      setTasks(newTasks);
    };
  
    const removeTask = (i) => {
      const newTasks = [...tasks];
      newTasks.splice(i, 1);
      setTasks(newTasks);
    };
  

    useEffect(() => {
      getTasks();

    }, [])

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
