import React from "react";
import styled from "styled-components";

import Category from "../components/category";

import ChattingBox from "../components/ChattingBox";
import PostList from "../components/PostList";

const Main = () => {
  return (
    <React.Fragment>
      <Title>Hobbygram</Title>
      <Category></Category>
      {/* <ChattingBox></ChattingBox> */}
      <PostList></PostList>
    </React.Fragment>
  );
};

export default Main;

const Title = styled.div`
  font-family: "Lobster", cursive;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  font-size: 70px;
  margin-top: 1.5rem;
`;
