const getTasks = async ( email, password ) => {
  // validar frontend

  // pedir tareas
  try {
    const res = await fetch("http://localhost:4000/api/tasks", {
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-token": localStorage.getItem('jwt')
        }
    })
    const data = await res.json();

    console.log(data)
      return data
  } catch (error) {
      console.log(error)
  }
  
  
};

export default getTasks;
