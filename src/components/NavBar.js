import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/login");

    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Tasks
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample"
        aria-controls="navbarsExample"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link mx-auto">{name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
