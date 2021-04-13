import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Grid, Input, Text, Upload, Image } from "../element/Index";

const PostEdit = (props) => {
  const [contents, setContents] = React.useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Text bold size="40px">
            {props.title}
          </Text>
        </Grid>
        <Grid>
          <Image></Image>
        </Grid>
        <Grid>
          <Input
            _onChange={changeContents}
            multiline
            placeholder="내용을 입력하세요."
          />
        </Grid>
        <Grid is_flex padding="30px 0px">
          <Button>수정</Button>
          <Button>취소</Button>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
};

PostEdit.defaultProps = {
  title: "제목이에요. 진짜로",
  img: "",
  content: "내용이 들어가요.",
};

const Button = styled.button`
  width: 100px;
  height: 35px;
  margin: 0px;
  border: 0px solid;
  background-color: #ccd6f1;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1.5px 2.5px 0px;
`;

const Wrapper = styled.div`
  width: 70rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  margin-bottom: 10rem;
  padding: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 16px 0px;
  border-radius: 10px;

  @media (max-width: 1270px) {
    width: calc(70% - 2rem);
  }

  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 767px) {
    width: calc(50% - 0.5rem);
  }
`;

export default PostEdit;
