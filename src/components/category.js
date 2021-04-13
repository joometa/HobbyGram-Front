import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <React.Fragment>
      <Div>
        <div style={{ flexDirection: "column" }}>
          <div>카테고리</div>
          <Button>전체보기</Button>
          <Button>음악</Button>
          <Button>여행</Button>
          <Button>재테크</Button>
          <Button>반려동물</Button>
        </div>
      </Div>
    </React.Fragment>
  );
};

export default Category;

const Div = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  /* background-color: #f5f5f5; */
`;

const Button = styled.button`
  width: 190px;
  height: 50px;
  border: hidden;
  font-size: 15px;
  background-color: #fa768d;
  margin: 3px;
  font-size: 17px;
`;
