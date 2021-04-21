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
  console.log(user);

  // 로그아웃 실행함수
  const logout = () => {
    dispatch(userActions.logOut());
    window.alert("로그아웃 되었습니다.");
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
              history.go(0); // 메인 페이지로 돌아간 후 새로고침
            }}
          >
            Hobbygram
          </Font>
          <Buttondiv>
            <Nickname>
              <div style={{ fontWeight: "700" }}>{user.user.name}</div>님
            </Nickname>
            <Button
              style={{ margin: "7px", marginRight: "5px" }}
              onClick={() => {
                history.push("/write");
              }}
            >
              새글작성
            </Button>
            <Button
              style={{ margin: "7px", marginRight: "15px" }}
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
  width: 100vw;
  height: 60px;
  background-color: #f6f6f6;
  position: sticky;
  top: 0px;
  z-index: 999;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Button = styled.button`
  font: inherit;
  font-size: 0.9rem;
  align-items: center;
  width: 100px;
  height: 35px;
  padding-top: 0.3rem;
  margin: 0px;
  border: 0px solid;
  background-color: #e6ccef;
  border-radius: 10px;
  :hover {
    /* background-color: white; */
    transition: all 0.3s;
    font-weight: bold;
  }
`;

const Buttondiv = styled.div`
  display: flex;
  width: 90%;
  margin: 0px auto;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1024px) {
    font-size: 1rem;
    width: 70%;
    margin: 0px;
    & > div {
      width: 90%;
    }
    & > button {
      font-size: 1rem;
      width: 7.5rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 80%;
    & > div {
      width: 70%;
    }
    & > button {
      font-size: 0.9rem;
      width: 7.5rem;
    }
  }
  @media (max-width: 414px) {
    font-size: 0.8rem;
    width: 72%;
    & > div {
      width: 75%;
    }
    & > button {
      font-size: 0.7rem;
      width: 8rem;
    }
  }
  @media (max-width: 375px) {
    font-size: 0.8rem;
    & > div {
      width: 80%;
    }
    & > button {
      font-size: 0.5rem;
      width: auto;
    }
  }
  @media (max-width: 280px) {
    font-size: 0.5rem;
    width: 65%;
    & > div {
      width: 80%;
    }
    & > button {
      font-size: 0.4rem;
      width: 5rem;
    }
  }
`;

const Font = styled.div`
  font-family: "Lobster", cursive;
  font-size: 40px;
  color: #a445c5;
  margin-left: 15px;
  cursor: pointer;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 414px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
  @media (max-width: 280px) {
    font-size: 1.2rem;
  }
`;

const Nickname = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
  align-items: center;
`;
