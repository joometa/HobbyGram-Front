import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { getCookie } from "../shared/Cookie";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const is_login = getCookie("is_login") ? true : false;

  const logout = () => {
    dispatch(userActions.logOut());
    history.push("/");
  };
  // 로그인 상태일 때
  if (is_login && user) {
    return (
      <React.Fragment>
        <Div>
          <Font
            onClick={() => {
              history.push("/");
            }}
          >
            Hobbygram
          </Font>
          <Buttondiv>
            <Button
              style={{ margin: "7px", marginRight: "5px" }}
              onClick={() => {
                history.push("/write");
              }}
            >
              게시글작성
            </Button>
            <Button
              style={{ margin: "7px", marginRight: "5px" }}
              onClick={logout}
            >
              로그아웃
            </Button>
          </Buttondiv>
        </Div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Div>
          <Font
            onClick={() => {
              history.push("/");
            }}
          >
            Hobbygram
          </Font>
          <Buttondiv>
            <Button
              style={{ margin: "7px", marginRight: "5px" }}
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </Button>
            <Button
              style={{ margin: "7px", marginRight: "15px" }}
              onClick={() => {
                history.push("/signup");
              }}
            >
              회원가입
            </Button>
          </Buttondiv>
        </Div>
      </React.Fragment>
    );
  }
};

export default Header;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background-color: #f6f6f6;
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  margin: 0px;
  border: 0px solid;
  background-color: #e6ccef;
  border-radius: 10px;
  :hover {
    background-color: white;
    transition: all 0.3s;
    border: 3px solid #e6ccef;
    font-weight: bold;
  }
`;

const Buttondiv = styled.div`
  display: flex;
  width: 100%;
  margin: 0px auto;
  justify-content: flex-end;
  align-items: center;
`;

const Font = styled.div`
  font-family: "Lobster", cursive;
  font-size: 40px;
  color: #a445c5;
  margin-left: 15px;
  cursor: pointer;
`;
