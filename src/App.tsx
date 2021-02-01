import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import SignIn from "./components/slackSignIn";

function App() {
  return (
    <Router>
      <div className=""></div>

      <Route exact path="/" component={SignIn}></Route>
    </Router>
  );
}

export default App;
