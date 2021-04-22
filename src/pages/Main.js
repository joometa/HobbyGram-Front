import React from "react";
import styled from "styled-components";

import Category from "../components/category";
import PostList from "../components/PostList";

const Main = () => {
  return (
    <React.Fragment>
      <Title>Hobbygram</Title>
      <Category />
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
  font-size: 5rem;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    font-size: 4.7rem;
  }
  @media (max-width: 414px) {
    font-size: 3.2rem;
  }
  @media (max-width: 375px) {
    font-size: 3rem;
  }
  @media (max-width: 280px) {
    font-size: 2.8rem;
  }
`;
