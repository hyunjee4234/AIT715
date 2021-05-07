import React, { Fragment } from "react";
import {
  BrowserRouter as Router,


  Redirect, Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Landing from "./layout/Landing";
import Navbar from "./layout/Navbar";




function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <section className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
