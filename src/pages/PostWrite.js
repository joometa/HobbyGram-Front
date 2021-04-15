import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Grid, Input, Text, Upload, Image } from "../element/Index";
import axios from "axios";

const PostWrite = (props) => {
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState();

  // 사진 업로드
  // const fileInput = React.useRef();
  // const selectfile = (e) => {
  //   //이미지 파일정보
  //   setFile(e.target.files[0]);
  //   console.log(e.target.files[0]);

  //   const fd = new FormData();

  //   fd.append("fileName", e.target.files[0]);
  //   axios({
  //     method: "post",
  //     // url: `${api}/post/:category`,
  //     data: fd,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log("에러메세지", err);
  //     });
  // };
  const fileInput = React.useRef();

  const selectFile = (e) => {
    //file state에 현재 선택된 파일 저장
    setFile(e.target.files[0]);
    console.log(e.target.files);
    const reader = new FileReader();
    // 현재 선택된 파일을 dataurl로 변환
    reader.readAsDataURL(e.target.files[0]);
    // 변환된 dataurl을 preview state에 저장
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Input
            _onChange={changeTitle}
            bold
            placeholder="제목을 입력하세요."
          />
        </Grid>

        <Grid padding="30px 0px">
          <Upload _onChange={selectFile}>사진선택</Upload>
        </Grid>
        <Grid>
          <Image src={preview}></Image>
        </Grid>
        <Grid>
          <Input
            _onChange={changeContents}
            multiline
            placeholder="내용을 입력하세요."
          />
        </Grid>
        <Grid is_flex padding="30px 0px">
          <Button>완료</Button>
          <Button>취소</Button>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
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

export default PostWrite;
