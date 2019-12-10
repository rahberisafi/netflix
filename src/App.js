import React from "react";
import "./css/Main.css";
import Main from "./pages";
import Login from "./pages/Login";
import ChoosePlan from "./pages/ChoosePlan";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={Login} />
    <Route path="/choose-plan" component={ChoosePlan} />
  </Switch>
  );
}

export default App;
