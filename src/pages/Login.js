import React from "react";
import styled from "styled-components";
import Signup from "./Signup";
import { Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <Div>
        <H1>로그인</H1>
        <P>아이디</P>
        <Input placeholder="아이디를 입력해주세요." />
        <P>비밀번호</P>
        <Input placeholder="비밀번호를 입력해주세요."></Input>
        <Button>로그인하기</Button>
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
  width: 500px;
  margin: 0px auto;
  margin-top: 100px;
  border: 2px solid #f9ebff;
  border-radius: 20px;
  padding: 50px 50px 50px 50px;
  background-color: #f4f4f4;
`;

const P = styled.p`
  font-size: 20px;
  color: #a445c5;
  margin: 0px auto;
  margin-bottom: 5px;
  margin-left: 50px;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  margin: 0px auto;
`;

const Button = styled.button`
  width: 200px;
  height: 45px;
  margin: 30px auto;
  background-color: #e6ccef;
  border: 0px solid #e6ccef;
  border-radius: 5px;
  font-size: 16px;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  margin-bottom: 30px;
`;

const Question = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  margin-left: 200px;
  justify-content: flex-end;
`;
