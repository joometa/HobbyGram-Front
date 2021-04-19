import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch } from "react-redux";

const CommentPost = (props) => {
  const { user, content, createdAt } = props;
  const dispatch = useDispatch();
  const comment_id = props._id;
  console.log(comment_id);

  const deleteComment = () => {
    dispatch(commentActions.deleteCommentDB(comment_id));
  };
  return (
    <React.Fragment>
      <CommentPostWrap>
        <div
          style={{
            width: "10rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {user}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          {content}
        </div>
        <div
          style={{
            width: "11rem",
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {moment(new Date(createdAt)).fromNow()}
        </div>
        <div style={{ display: "flex", width: "5rem", marginLeft: "15px" }}>
          <Button onClick={deleteComment}>삭제</Button>
        </div>
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
  & {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  min-width: 2.6rem;
  min-height: 35px;
  margin: 0px;
  color: red;
  border: none;
  background-color: #ebe8e8;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  :hover {
    color: #9c0404;
  }
`;

export default CommentPost;
