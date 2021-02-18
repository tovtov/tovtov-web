import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfilePage from "./pages/profilePage/profilePage";
import SignIn from "./pages/signInPage/signIn";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={ProfilePage}></Route>
      <Route exact path="/hello" component={SignIn}></Route>
    </Router>
  );
};

export default App;
