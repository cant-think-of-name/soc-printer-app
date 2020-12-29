import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Print from "../views/Print";
import PrintStatus from "../views/PrintStatus";
import Login from "../views/Login";
import Test from "../views/Test";
/**
 * the main page of the app
 * @param {} props
 */
function Body(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/status">
            <PrintStatus />
          </Route>
          <Route path="/print">
            <Print />
          </Route>
          <Route path="/test">
            <Test />
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
