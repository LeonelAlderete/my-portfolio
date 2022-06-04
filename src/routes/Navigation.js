import React from "react";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

export default function Navigation() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => <route.component {...props} />}
          ></Route>
        ))}
      </Switch>
    </Router>
  );
}
