import React, { useState } from "react";
import getAuth from "../helpers/getAuth"

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorLogin, setShowErrorLogin] = useState(false);
  const [errorMesage, setErrorMesage] = useState('')

  const LoginWithEmail = async (e) => {
    e.preventDefault();
    //validate front
    const user = await getAuth(email, password)
    
    console.log(user)
    if (user.token) {
        localStorage.setItem('jwt', user.token)
    } else {
        setErrorMesage('Email o password inválidos');
        setShowErrorLogin(true);
    }
    

    
  };


  return (
    <div className=" bg-primary">
      <div className="card-body">
        <form>
          {showErrorLogin && (
            <h2 className="bg-danger text-white">
              {errorMesage}
            </h2>
          )}
          <h2>Sign In</h2>
          <button>google butom</button>
          <hr />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={LoginWithEmail}>SING IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
