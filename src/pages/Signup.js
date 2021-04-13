import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import Login from "./Login";

const Signup = () => {
  return (
    <React.Fragment>
      <Div>
        <H1>회원가입</H1>
        <P>아이디</P>
        <Input placeholder="아이디를 입력해주세요." />
        <P>닉네임</P>
        <Input placeholder="닉네임을 입력해주세요."></Input>
        <P>비밀번호</P>
        <Input placeholder="비밀번호를 입력해주세요."></Input>
        <P>비밀번호 확인</P>
        <Input placeholder="비밀번호를 한번 더 입력해주세요."></Input>

        <Button>로그인하기</Button>
        <Question>
          <p>회원이신가요?</p>
          <Link to="/login" style={{ marginTop: "16px", marginLeft: "10px" }}>
            로그인
          </Link>
        </Question>
      </Div>
    </React.Fragment>
  );
};

export default Signup;

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
  width: 200px;
  display: flex;
  flex-direction: row;
  margin-left: 300px;
  justify-content: flex-end;
`;
