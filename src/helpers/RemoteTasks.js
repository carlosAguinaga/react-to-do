const getRemoteTasks = async () => {
  try {
    const res = await fetch("http://localhost:4000/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": localStorage.getItem("jwt"),
      },
    });
    const data = await res.json();
    return data.tasks
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
    console.log(data._id)
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
    return res.status

  } catch (error) {
    console.log('falla en update')
    console.log(error);
  }
};

const deleteRemoteTask = async (id) => {
  try {
    const res = await fetch(`http://localhost:4000/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": localStorage.getItem("jwt"),
      },
    });

    return res.status
  } catch (error) {
    console.log(error);
  }
};

export { getRemoteTasks, setRemoteTask, updateRemoteTask, deleteRemoteTask };
