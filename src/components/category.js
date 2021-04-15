import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <React.Fragment>
      <Div>
        <div style={{ flexDirection: "column" }}>
          <div>카테고리</div>
          <Button style={{ marginRight: "5px" }}>음악</Button>
          <Button style={{ marginRight: "5px" }}>여행</Button>
          <Button style={{ marginRight: "5px" }}>재테크</Button>
          <Button style={{ width: "250px" }}>반려동물</Button>
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
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 245px;
  height: 50px;
  border: hidden;
  font-size: 15px;
  background-color: #fa768d;
  margin: 0px auto;
  font-size: 17px;
`;
