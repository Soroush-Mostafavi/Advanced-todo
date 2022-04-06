import React from "react";
import Switch from "react-router-dom";
import { Route } from "react-router";

import Tpp from "../Tpp";
import Documents from "./documnet/Documents";
const TodoRouter = () => {
  return (
  
    <Switch>
      <Route path="/" exact component={Tpp} />
      <Route path="/document" exact component={Documents} />
    </Switch>
  );
};
export default TodoRouter;
