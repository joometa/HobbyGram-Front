import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/ConfigureStore";

import Main from "../pages/Main";
import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
