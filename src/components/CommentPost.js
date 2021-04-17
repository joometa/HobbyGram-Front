import React from "react";
import styled from "styled-components";

const CommentPost = (props) => {
  const { user, content, createdAt } = props;

  return (
    <React.Fragment>
      <CommentPostWrap>
        <div
          style={{
            width: "10rem",
          }}
        >
          {user}
        </div>
        <div
          style={{
            display: "block",
            textAlign: "",
            width: "100%",
          }}
        >
          {content}
        </div>
        <div style={{ width: "11rem", textAlign: "end" }}>{createdAt}</div>
      </CommentPostWrap>
    </React.Fragment>
  );
};

CommentPost.defaultProps = {
  user: "댓글쓴이",
  content: "댓글내용이에요!",
  createdAt: "2021-04-13",
};

const CommentPostWrap = styled.div`
  display: flex;
  justify-content: "space-between";
  margin-bottom: 1rem;
`;

export default CommentPost;
