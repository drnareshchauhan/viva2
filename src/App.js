import React from "react";
import { Route, Routes } from "react-router";

import Home from "./Home";
import About from "./pages/About";
import VivaOne from "./pages/VivaOne";
import VivaTwo from "./pages/VivaTwo";
import ReactGA from "react-ga";
ReactGA.initialize("UA-163903670-2");
ReactGA.pageview(window.location.pathname + window.location.search);
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/vivaone" element={<VivaOne />}></Route>
      <Route exact path="/vivatwo" element={<VivaTwo />}></Route>
      <Route exact path="/aboutus" element={<About />}></Route>
      {/* <Route path="/about" component={About}></Route>
      <Route path="/service" component={Services2}></Route>
      <Route path="/contact" component={Contact2}></Route>
      <Route component={Error}></Route> */}
    </Routes>
  );
};

export default App;
