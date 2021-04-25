const getAuth = async ( email, password ) => {
  // validar frontend

  // enviar validacion al backend
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      });
    
      const user = await res.json();
      return user
  } catch (error) {
      console.log(error)
  }
  
  
};
//resetear campos

export default getAuth;
