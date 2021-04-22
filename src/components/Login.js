import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import getAuth from "../helpers/getAuth";
import { types } from "../types/types";
import getAuthGoogle from "../helpers/getAuthGoogle";

const Login = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorLogin, setShowErrorLogin] = useState(false);
  const [errorMesage, setErrorMesage] = useState("");

  const handleLogin = (email) => {
    dispatch({
      type: types.login,
      payload: {
        name: email,
      },
    });
    history.replace("/");
  };

  const LoginWithEmail = async (e) => {
    e.preventDefault();
    const user = await getAuth(email, password);

    if (user.token) {
      localStorage.setItem("jwt", user.token);
      handleLogin(user.email);
    } else {
      setErrorMesage("Email o password inválidos");
      setShowErrorLogin(true);
    }
  };

  const successResponseGoogle = async (response) => {
    const res = await getAuthGoogle(response.tokenId);
    localStorage.setItem("jwt", res.token);
    handleLogin(res.user.email);
  };

  const failureGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="text-center bg-primary p-5 rounded">
        {showErrorLogin && (
          <h4 className="bg-danger text-white">{errorMesage}</h4>
        )}
        <h1 className="text-white">Login</h1>
        <hr />
        <GoogleLogin
          clientId="1009734769717-hkln3hufsd6r3suk3pluajmr9c16rrrh.apps.googleusercontent.com"
          buttonText="Sign in"
          onSuccess={successResponseGoogle}
          onFailure={failureGoogle}
          cookiePolicy={"single_host_origin"}
          className="mb-4"
        />
        <div className="mb-4">
          <input
            className="form-control text-body"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="form-control text-body"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={LoginWithEmail} className="mb-3 btn btn-success">
          SING IN
        </button>
        <br />
        <Link to="/register" className="text-prymary">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
