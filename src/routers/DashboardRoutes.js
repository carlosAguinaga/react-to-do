import { Switch, Route, Redirect } from "react-router";
import Navbar from "../components/NavBar";
import Tasks from "../components/Tasks";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/tasks" component={Tasks} />
        
        <Redirect to="/tasks"/>
      </Switch>
    </>
  );
};

export default DashboardRoutes;
