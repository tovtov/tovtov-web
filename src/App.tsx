import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfilePage from "./pages/profilePage/profilePage";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/tovtov" component={ProfilePage}></Route>
      </div>
    </Router>
  );
};

export default App;
