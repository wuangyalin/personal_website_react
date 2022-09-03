import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import adminUser from "./pages/AdminPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/admin" component={adminUser} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
