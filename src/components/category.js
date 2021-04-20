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
            style={{ marginRight: "5px" }}
            onClick={() => {
              setText("음악");
            }}
          >
            음악
          </Button>

          <Button
            style={{ marginRight: "5px" }}
            onClick={() => {
              setText("여행");
            }}
          >
            여행
          </Button>

          <Button
            style={{ marginRight: "5px" }}
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
  justify-content: space-between;
  margin: 0px auto;
  /* background-color: #f5f5f5; */
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 150px;
  height: 150px;
  border: hidden;
  font-size: 15px;
  background-image: url(${icon});
  background-size: 150px 150px;
  background-color: white;
  margin: 0px auto;
  color: white;
  font-weight: 800;
  font-size: 17px;
  :hover {
    background-color: white;
    transition: all 0.3s;
    border: 3px solid #e6ccef;
    font-weight: bold;
  }
`;
