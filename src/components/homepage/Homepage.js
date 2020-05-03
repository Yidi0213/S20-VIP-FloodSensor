import React, { Component } from "react";
import NavBar from "../navbar/NavBar";
import AUX from "../../HOC/AUX";
import About from "../about/About";
import Demo from "../demo/Demo";
import Team from "../team/Team";
import Footer from "../footer/Footer";
import module from "./Homepage.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <AUX>
        <div className={module.body} >
        <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
      </Router>
        </div>
      <Footer module = {module.footer}/>
      </AUX>
    );
  }
}

export default Homepage;
