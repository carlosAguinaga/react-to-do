import { AuthContext } from "./auth/AuthContext";
import { useEffect, useReducer } from "react";
import { authReducer } from "./auth/authRedducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function TaskApp() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default TaskApp;