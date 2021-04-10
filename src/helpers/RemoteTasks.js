const getRemoteTasks = async (setTasks) => {
  try {
    const res = await fetch("http://localhost:4000/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": localStorage.getItem("jwt"),
      },
    });
    const data = await res.json();
    setTasks(data.tasks);
  } catch (error) {
    console.log(error);
  }
};
const setRemoteTask = async (task) => {
  try {
    const res = await fetch("http://localhost:4000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": localStorage.getItem("jwt"),
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    return data._id;
  } catch (error) {
    console.log(error);
  }
};

const updateRemoteTask = async (task) => {
  try {
    const res = await fetch(`http://localhost:4000/api/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": localStorage.getItem("jwt"),
      },
      body: JSON.stringify(task)
    });
    // const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteRemoteTask = async (task) => {};

export { getRemoteTasks, setRemoteTask, updateRemoteTask, deleteRemoteTask };
