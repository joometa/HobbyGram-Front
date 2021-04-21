import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
// import { setCookie, deleteCookie, getCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (email === "" || pwd === "") {
      window.alert("로그인 정보를 모두 입력해주세요.");
      return;
    }
    dispatch(userActions.LoginDB(email, pwd));
    history.replace("/");
  };

  return (
    <React.Fragment>
      <Div>
        <H1>로그인</H1>
        <P>아이디</P>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="이메일 형식으로 입력해주세요."
        />
        <P>비밀번호</P>
        <Input
          type="password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        ></Input>
        <Button onClick={login}>로그인하기</Button>
        <Question>
          <p>아직 회원이 아니신가요?</p>
          <Link to="/signup" style={{ marginTop: "16px", marginLeft: "10px" }}>
            회원가입
          </Link>
        </Question>
      </Div>
    </React.Fragment>
  );
};

export default Login;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32rem;
  margin: 0px auto;
  margin-top: 6.25rem;
  border: 2px solid #f9ebff;
  border-radius: 20px;
  padding: 50px 50px 50px 50px;
  background-color: #f4f4f4;
  @media all and (max-width: 414px) {
    width: auto;
    margin: 1rem;
    & h1 {
      font-size: 1.5rem;
    }
  }
  @media all and (max-width: 375px) {
    width: auto;
    margin: 1rem;
    & h1 {
      font-size: 1.5rem;
    }
  }
`;

const P = styled.p`
  font-size: 20px;
  color: #a445c5;
  margin: 0px auto;
  margin-bottom: 5px;
  margin-left: 50px;
  margin-top: 10px;
  @media all and (max-width: 414px) {
    margin-left: 0;
    font-size: 1rem;
  }
  @media all and (max-width: 375px) {
    margin-left: 0;
    font-size: 1rem;
  }
`;

const Input = styled.input`
  width: 25rem;
  height: 40px;
  margin: 0px auto;
  @media all and (max-width: 414px) {
    width: 100%;
  }
  @media all and (max-width: 375px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 12.5rem;
  height: 3rem;
  margin: 30px auto;
  background-color: #e6ccef;
  border: 0px solid #e6ccef;
  border-radius: 5px;
  font-size: 1rem;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  margin-bottom: 30px;
`;

const Question = styled.div`
  font-size: 1rem;
  width: 12.5rem;
  display: flex;
  flex-direction: row;
  margin-left: 19rem;
  justify-content: flex-end;
  @media all and (max-width: 414px) {
    width: auto;
    font-size: 0.8rem;
    margin: 0;
    justify-content: center;

    & > p {
      margin-top: 1rem;
      display: flex;
      align-items: center;
    }
  }
  @media all and (max-width: 375px) {
    width: auto;
    font-size: 0.8rem;
    margin: 0;
    justify-content: center;
    & > p {
      margin-top: 1rem;
      display: flex;
      align-items: center;
    }
  }
`;
