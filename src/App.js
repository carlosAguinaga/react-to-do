import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./components/Tasks";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
