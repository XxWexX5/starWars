import React from "react";

import App from "./App";
import Films from "./Films";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/filmes" component={Films} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
