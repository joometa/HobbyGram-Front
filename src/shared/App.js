import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/ConfigureStore";

import Main from "../pages/Main";
import Header from "../components/Header";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../pages/PostEdit";
import PostDetail from "../pages/PostDetail";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/post" exact component={PostWrite} />
        <Route path="/post/edit" exact component={PostEdit} />
        <Route path="/post/detail" exact component={PostDetail} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
