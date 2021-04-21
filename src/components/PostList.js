import React, { useState } from "react";
import Post from "./Post";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";

import { actionCreators as postActions } from "../redux/modules/post";

import LArrow from "../shared/LArrow.png";
import RArrow from "../shared/RArrow.png";

const PostList = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.post.text);
  const [page, setPage] = useState(1);

  // 다음 페이지로 이동
  const pageUp = () => {
    setPage(page + 1);
  };

  // 이전 페이지로 이동
  const pageDown = () => {
    if (page === 1) {
      // 첫 페이지일 때 바로 변환
      window.alert("첫 페이지입니다.");
      return;
    }
    setPage(page - 1);
  };

  React.useEffect(() => {
    dispatch(postActions.setPostDB(text, page));
  }, [page]);

  const post_list = useSelector((state) => state.post.list); // post는 모듈js를 뜻함 post 모듈에서 initialState에 list 값을 가져옴

  React.useEffect(() => {
    dispatch(postActions.setPostDB());
  }, []);

  return (
    <React.Fragment>
      <Wrap>
        <LeftArrow onClick={pageDown}></LeftArrow>
        <PostWrap>
          {post_list.map((p, idx) => {
            let id = p._id;
            return (
              <div
                key={id}
                onClick={() => {
                  history.push(`post/${id}`);
                }}
              >
                <Post {...p} />
              </div>
            );
          })}
        </PostWrap>
        <RightArrow onClick={pageUp}></RightArrow>
      </Wrap>
    </React.Fragment>
  );
};

export default PostList;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 1024px) {
    & > button {
      background-size: 4rem 4rem;
      width: 4rem;
      height: 4rem;
    }
    & > div {
      width: 75%;
    }
  }
  @media (max-width: 768px) {
    & > button {
      background-size: 3rem 3rem;
      width: 3rem;
      height: 3rem;
    }
    & > div {
      width: 70%;
    }
  }
  @media (max-width: 414px) {
    & > button {
      background-size: 2.2rem 2.2rem;
      width: 2.2rem;
      height: 2.2rem;
      margin: 0px 10px;
    }
    & > div {
      width: 70%;
    }
  }
  @media (max-width: 375px) {
    & > button {
      background-size: 2rem 2rem;
      width: 2rem;
      height: 2rem;
      margin: 0px 10px;
    }
  }
  @media (max-width: 280px) {
    & > button {
      background-size: 1.5rem 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0px 5px;
    }
  }
`;

const PostWrap = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 62.5rem;
  margin: 0px auto;
  justify-content: space-around;
`;

const LeftArrow = styled.button`
  background-image: url(${LArrow});
  background-size: 4.5rem 4.5rem;
  background-color: #ffffff;
  width: 4.5rem;
  height: 4.5rem;
  margin-left: 1.5rem;
  border: none;
`;

const RightArrow = styled.button`
  background-image: url(${RArrow});
  background-size: 4.5rem 4.5rem;
  background-color: #ffffff;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 1.5rem;
  border: none;
`;
