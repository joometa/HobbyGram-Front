import React from "react";
import styled from "styled-components";

import commentImg from "../image/comment-icon.jpg";

import { history } from "../redux/ConfigureStore";

const CommentButton = (props) => {
  return (
    <React.Fragment>
      <CommentBnt icon_url={commentImg}></CommentBnt>
    </React.Fragment>
  );
};

const CommentBnt = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  background: url(${(props) => props.icon_url});
  background-size: cover;
  cursor: pointer;
  align-items: center;
`;

export default CommentButton;
