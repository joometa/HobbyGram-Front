import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import Login from "./Login";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { emailCheck, pwdCheck } from "../shared/common";

import { actionCreators as userActions } from "../redux/modules/user";

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdcheck, setPwdCheck] = React.useState("");

  const signup = () => {
    if (!email || !name || !pwd || !pwdcheck) {
      window.alert("모든 내용을 입력해주세요!");
      return;
    }
    if (!emailCheck(email)) {
      window.alert("이메일 형식으로 입력해주세요!");
      return;
    }
    if (!pwdCheck(pwd)) {
      window.alert("8~16자리의 영문과 숫자를 조합해주세요!");
      return;
    }
    // 인자로 history 넘겨주면 모듈 함수에서 적용할 수 있음.
    dispatch(userActions.signUpDB(email, name, pwd, pwdcheck));
  };

  return (
    <React.Fragment>
      <Div>
        <H1>회원가입</H1>
        <P>아이디</P>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="이메일 형식으로 입력해주세요."
        />
        <P>닉네임</P>
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="닉네임을 입력해주세요."
        ></Input>
        <P>비밀번호</P>
        <Input
          type="password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        ></Input>
        <P>비밀번호 확인</P>
        <Input
          type="password"
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
          placeholder="비밀번호를 한번 더 입력해주세요."
        ></Input>

        <Button onClick={signup}>회원가입하기</Button>
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
  padding-left: 5px;
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
