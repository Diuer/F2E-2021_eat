import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "normalize.css";
import "@fontsource/inter";
import "./style.scss";

import { TopNavigation } from "./Common/TopNavigation";
import { Footer } from "./Common/Footer";
import { HeaderSearch, HeaderInfo } from "./Common/Header";

const App = () => {
  return (
    <>
      <TopNavigation />
      <HeaderSearch />
      <HeaderInfo />
      <Router>
        <Switch></Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
