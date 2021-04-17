
const renewToken = async () => {

  // enviar validacion al backend
  try {
    const res = await fetch("http://localhost:4000/api/auth/renew", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-token": localStorage.getItem("jwt")
        }
      });
    
      const user = await res.json();
      if (user.token) {
        localStorage.setItem('jwt', user.token)
      }
  } catch (error) {
      console.log(error)
  }
  
}

export default renewToken;