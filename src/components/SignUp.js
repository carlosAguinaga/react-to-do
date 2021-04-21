import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import GoogleLogin from "react-google-login";
import registerUser from "../helpers/registerUser";
import { types } from "../types/types";
import getAuthGoogle from "../helpers/getAuthGoogle";

const SignUp = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorLogin, setShowErrorLogin] = useState(false);
  const [errorMesage, setErrorMesage] = useState("");

  const successResponseGoogle = async (response) => {
    const res = await getAuthGoogle(response.tokenId);
    localStorage.setItem("jwt", res.token);
    goToHome(res.user.email);
  };

  const failureGoogle = (response) => {
    console.log(response);
  };

  const goToHome = (email) => {
    dispatch({
      type: types.login,
      payload: {
        name: email,
      },
    });
    history.replace("/");
  };

  const handleRegister = (email) => {
    dispatch({
      type: types.login,
      payload: {
        name: email,
      },
    });
    history.replace("/");
  };

  const RegisterWithEmail = async (e) => {
    e.preventDefault();
    const res = await registerUser(email, password);

    if (res.token) {
      localStorage.setItem("jwt", res.token);
      handleRegister(res.email);
    } else {
      const msg = res.errors[0].msg;
      setErrorMesage(msg);
      setShowErrorLogin(true);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="text-center bg-primary p-5 rounded">
        {showErrorLogin && (
          <h2 className="bg-danger text-white">{errorMesage}</h2>
        )}
        <h1 className="text-white">Register</h1>
        <hr />
        <GoogleLogin
          clientId="1009734769717-hkln3hufsd6r3suk3pluajmr9c16rrrh.apps.googleusercontent.com"
          buttonText="Sign up"
          onSuccess={successResponseGoogle}
          onFailure={failureGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <hr />
        <div className="mb-4">
          <input
          className="form-control"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
           <br />
          <input
          className="form-control"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={RegisterWithEmail} className="mb-3 btn btn-success">SING UP</button>
        <br/>
        <Link to="/login" className="text-success">
          Login
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
