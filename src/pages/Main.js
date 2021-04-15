import React from "react";
import styled from "styled-components";

import Category from "../components/category";

import ChattingBox from "../components/ChattingBox";
import PostList from "../components/PostList";

const Main = () => {
  return (
    <React.Fragment>
      <Loginuser>접속자 수 : 0명</Loginuser>
      <Title>Hobbygram🙂</Title>
      <Category></Category>
      {/* <ChattingBox></ChattingBox> */}
      <PostList></PostList>
    </React.Fragment>
  );
};

export default Main;

const Loginuser = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px auto;
  margin-right: 30px;
  margin-top: 10px;
  font-size: 15px;
`;

const Title = styled.div`
  font-family: "Lobster", cursive;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  font-size: 70px;
`;
