import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actionCreators as postActions } from "../redux/modules/post";

import icon from "../shared/icon.png";

const Category = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  // 버튼 클릭 시 카테고리 값을 text로 보내서 해당된 게시글만 불러오기.
  React.useEffect(() => {
    dispatch(postActions.setPostDB(text));
  }, [text]);

  return (
    <React.Fragment>
      <Wrap>
        <Div>
          <div style={{ marginBottom: "2.5rem" }}></div>
          <ButtonBox
            onClick={() => {
              setText("음악");
            }}
          >
            <Icon>음악</Icon>
          </ButtonBox>
          <ButtonBox
            onClick={() => {
              setText("여행");
            }}
          >
            <Icon>여행</Icon>
          </ButtonBox>
          <ButtonBox
            onClick={() => {
              setText("맛집");
            }}
          >
            <Icon>맛집</Icon>
          </ButtonBox>
          <ButtonBox
            onClick={() => {
              setText("반려동물");
            }}
          >
            <Icon>반려동물</Icon>
          </ButtonBox>
        </Div>
      </Wrap>
    </React.Fragment>
  );
};

export default Category;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px auto 0px auto;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const Div = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 80%;
    height: auto;
    justify-content: center;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    justify-content: center;
  }
`;
const ButtonBox = styled.div`
  flex-direction: column;
  text-align: center;
  width: 9rem;
  height: 9rem;
  display: flex;
  font: inherit;
  font-weight: 800;
  font-size: 17px;
  margin: 0px 3rem;

  :hover {
    transition: all 0.3s;
    font-weight: bold;
    transform: translateY(-4px);
  }

  @media (max-width: 1024px) {
    width: 9rem;
    height: auto;
    justify-content: center;
    margin: 0px;
    & div {
      width: 9rem;
      height: 9rem;
      font-size: 15px;
    }
  }

  @media (max-width: 767px) {
    width: 6.5rem;
    height: auto;
    justify-content: center;
    margin: 0px;
    & div {
      width: 6.5rem;
      height: 6.5rem;
      font-size: 15px;
    }
  }
  @media (max-width: 414px) {
    width: 4.7rem;
    height: auto;
    justify-content: center;
    margin: 0px;
    & div {
      width: 5rem;
      height: 5rem;
      font-size: 12px;
    }
  }

  @media (max-width: 375px) {
    width: 5rem;
    height: auto;
    justify-content: center;
    margin: 0px;
    & div {
      width: 5rem;
      height: 5rem;
      font-size: 12px;
    }
  }

  @media (max-width: 280px) {
    width: 6rem;
    height: auto;
    justify-content: center;
    margin: 0px;
    & div {
      width: 5.5rem;
      height: 5.5rem;
      font-size: 12px;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  width: 9rem;
  height: 9rem;
  background-size: cover;
  background-image: url("${icon}");
  align-items: flex-end;
  justify-content: center;
`;
