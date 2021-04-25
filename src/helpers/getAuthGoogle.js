const getAuthGoogle = async ( id_token ) => {

  // enviar validacion al backend
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_token
        }),
      });
    
      const user = await res.json();
      return user
  } catch (error) {
      console.log(error)
  }
  
};

export default getAuthGoogle;
