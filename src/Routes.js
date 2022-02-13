import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "./components/layout/index";
// import DashboardRoutes from './dashboard/';
import Home from "./screens/home/index";
import Contact from "./screens/contact";
import AboutUs from "./screens/about/index";
function Routes() {
  return (
    <Router>
      <Switch>
        <AuthRoute exact path="/">
          <Home />
        </AuthRoute>

        <AuthRoute exact path="/home">
          <Home />
        </AuthRoute>

        <AuthRoute exact path="/about-us">
          <AboutUs />
        </AuthRoute>

        <AuthRoute exact path="/contact">
          <Contact />
        </AuthRoute>
      </Switch>
    </Router>
  );
}

export default Routes;
