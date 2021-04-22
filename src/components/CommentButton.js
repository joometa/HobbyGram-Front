import React from "react";
import styled from "styled-components";
import commentImg from "../image/comment-icon.jpg";

// PostDetail 컴포넌트에서 활용되는 댓글 갯수 알리미 아이콘(버튼)
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
