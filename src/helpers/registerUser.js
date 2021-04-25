const registerUser = async (email, password) => {
  // validar frontend

  const data = {
    name: email,
    password,
    email,
    role: "USER_ROLE",
  };

  // enviar validacion al backend
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    const user = await res.json();
    return user;
  } catch (error) {
    console.log(error);
    return null
  }
};
//resetear campos

export default registerUser;
