import React from "react";
import Post from "./Post";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";

import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list); // post는 모듈js를 뜻함 post 모듈에서 initialState에 list 값을 가져옴

  React.useEffect(() => {
    dispatch(postActions.setPostDB());
  }, []);

  return (
    <React.Fragment>
      <PostWrap>
        {post_list.map((p, idx) => {
          const id = p.id;
          return (
            <div
              onClick={() => {
                history.push(`post/${id}`);
              }}
            >
              <Post key={id} {...p} />
            </div>
          );
        })}
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
