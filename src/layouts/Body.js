import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Print from "../views/Print"
import Login from "../views/Login"
/**
 * the main page of the app
 * @param {} props 
 */
function Body(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/print">
            <Print />
          </Route>
          <Route path="*">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Body;
