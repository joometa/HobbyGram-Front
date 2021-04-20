import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../redux/configureStore";

const CommentPost = (props) => {
  const { user, content, createdAt } = props;
  const dispatch = useDispatch();

  // 댓글 id 가져오기
  const comment_id = props._id;

  // 로그인한 유저 정보 불러오기
  const login_user = useSelector((state) => state.user);

  const deleteComment = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentActions.deleteCommentDB(comment_id));
      window.alert("삭제되었습니다!");
      // history.go(0); // 현재 페이지 새로고침
    } else {
      return;
    }
  };
  return (
    <React.Fragment>
      <CommentPostWrap>
        <div
          style={{
            width: "10rem",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
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
            color: "#888686",
          }}
        >
          {moment(new Date(createdAt)).fromNow()}
        </div>
        {login_user.user.name === user ? (
          <div style={{ display: "flex", width: "5rem", marginLeft: "15px" }}>
            <Button onClick={deleteComment}>삭제</Button>
          </div>
        ) : (
          <></>
        )}
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
  border-bottom: 1px solid #dddddd;
  padding-bottom: 12px;
`;

const Button = styled.button`
  min-width: 2.6rem;
  min-height: 35px;
  margin: 0px auto;
  color: gray;
  border: none;
  background-color: #ccd6f1;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export default CommentPost;
