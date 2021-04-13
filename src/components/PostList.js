import React from "react";
import Post from "./Post";

import styled from "styled-components";

const PostList = (props) => {
  return (
    <React.Fragment>
      <PostWrap>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </PostWrap>
    </React.Fragment>
  );
};

const PostWrap = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 1000px;
  margin: 0px auto;
`;

export default PostList;
