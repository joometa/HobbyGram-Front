import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../pages/Main";
import Header from "../components/Header";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../pages/PostEdit";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import { getCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
  const dispatch = useDispatch();
  const cookie = getCookie("is_login") ? true : false;

  // 쿠키가 있으면 새로고침 시 회원정보를 불러와 is_login = true를 유지 시켜준다.
  React.useEffect(() => {
    if (cookie) {
      dispatch(userActions.getUserDB());
    }
  }, []);

  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/post/:id/edit" exact component={PostEdit} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </ConnectedRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
