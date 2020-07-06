import React from "react";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
