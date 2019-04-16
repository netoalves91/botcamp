import React, { Component } from "react";
import "./styles/reset.css";

import LogoBotcamp from "./components/LogoBotcamp";
import BtnBotcamp from "./components/BtnBotcamp";


class App extends Component {
  render() {
    return(
      <>
        <LogoBotcamp/>
        <BtnBotcamp/>
      </>
    )
  }
};

export default App;
