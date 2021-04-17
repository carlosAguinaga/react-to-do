import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import getAuth from "../helpers/getAuth"
import { types } from "../types/types";

const Login = ({history}) => {


  const { dispatch } = useContext(AuthContext)
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorLogin, setShowErrorLogin] = useState(false);
  const [errorMesage, setErrorMesage] = useState('')


  const handleLogin = ( email ) => {
    dispatch({
      type: types.login,
      payload: {
        name: email
      }
    })
    history.replace('/')
  }

  const LoginWithEmail = async (e) => {
    e.preventDefault();
    const user = await getAuth(email, password)
    
    if (user.token) {
        localStorage.setItem('jwt', user.token)
        handleLogin(user.email)
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
