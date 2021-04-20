import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actionCreators as postActions } from "../redux/modules/post";

import icon from "../shared/icon.png";

const Category = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  React.useEffect(() => {
    dispatch(postActions.setPostDB(text));
  }, [text]);

  return (
    <React.Fragment>
      <Div>
        <div style={{ flexDirection: "column" }}>
          <div style={{ marginBottom: "100px" }}></div>
          <Button
            style={{ marginRight: "4rem" }}
            onClick={() => {
              setText("음악");
            }}
          >
            음악
          </Button>

          <Button
            style={{ marginRight: "4rem" }}
            onClick={() => {
              setText("여행");
            }}
          >
            여행
          </Button>

          <Button
            style={{ marginRight: "4rem" }}
            onClick={() => {
              setText("재테크");
            }}
          >
            재테크
          </Button>

          <Button
            onClick={() => {
              setText("반려동물");
            }}
          >
            반려동물
          </Button>
        </div>
      </Div>
    </React.Fragment>
  );
};

export default Category;

const Div = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-around;
  margin: 0px auto;
  /* background-color: #f5f5f5; */
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 150px;
  height: 150px;
  font: inherit;
  border: hidden;
  font-size: 15px;
  background-image: url(${icon});
  background-size: 150px 150px;
  background-color: white;
  margin: 0px auto;
  padding-top: 7.5rem;
  font-weight: 800;
  font-size: 17px;
  :hover {
    /* background-color: #ffffff;
    transition: all 0.3s;
    border: 3px solid solid; */
    font-weight: bold;
    transform: translateY(-4px);
  }
`;
