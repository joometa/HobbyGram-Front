import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Input, Text, Upload, Image } from "../element/Index";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";
import axios from "axios";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Category } from "@material-ui/icons";
import preview_img from "../image/no_image.png";
import { actionCreators as userActions } from "../redux/modules/user";
import { titleCheck, contentCheck } from "../shared/common";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState("카테고리 선택");
  const [imgfile, setImgFile] = React.useState(null);
  const [preview, setPreview] = React.useState(preview_img);

  const user = useSelector((state) => state.user);
  const username = user.user.name;
  console.log(username);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  // Material UI --start
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // 카테고리 선택시 발생하는 이벤트 (드롭다운 close, 카테고리 값 변동)
  const handleClose = (e) => {
    setAnchorEl(null);

    // 드롭다운 활성화하고 선택안했을때 오류 방지
    if (e.target.childNodes.length === 0) {
      return;
    }
    setCategory(e.target.childNodes[0].textContent);
  };
  // Material UI --end

  const addPost = () => {
    if (!title || !content || !category || !imgfile) {
      window.alert("제목, 카테고리, 이미지, 내용은 필수 기입 항목입니다.");
      return;
    }

    if (!titleCheck(title)) {
      window.alert("제목을 20자 이내로 작성해주세요.");
      return;
    }

    if (!contentCheck(content)) {
      window.alert("내용을 150자 이내로 작성해주세요.");
      return;
    }

    dispatch(
      postActions.addPostDB(title, content, imgfile, category, username)
    );
    history.replace("/");
  };

  const selectFile = (e) => {
    //file state에 현재 선택된 파일 저장
    setImgFile(e.target.files[0]);
    console.log(e.target.files);
    const reader = new FileReader();
    // 만약 파일이 선택되지 않았을 경우 그냥 반환한다.
    if (!e.target.files[0]) {
      return;
    }

    // 현재 선택된 파일을 dataurl로 변환
    reader.readAsDataURL(e.target.files[0]);
    console.log(reader);
    // 변환된 dataurl을 preview state에 저장
    reader.onload = () => {
      setPreview(reader.result);
      console.log(preview.length);
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
        <Grid padding="30px 0px 0px 0px">
          <Button
            style={{
              boxShadow: "rgb(0 0 0 / 30%) 0px 1.5px 2.5px 0px",
              border: "1px solid #dddddd",
            }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {category}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} label="music">
              음악
            </MenuItem>
            <MenuItem onClick={handleClose}>여행</MenuItem>
            <MenuItem onClick={handleClose}>재테크</MenuItem>
            <MenuItem onClick={handleClose}>반려동물</MenuItem>
          </Menu>
        </Grid>

        <Grid padding="30px 0px">
          <Upload _onChange={selectFile}>사진선택</Upload>
        </Grid>
        <Grid>
          <Image detail src={preview}></Image>
        </Grid>
        <Grid>
          <Input
            value={content}
            _onChange={changeContent}
            multiline
            placeholder="내용을 입력하세요."
          />
        </Grid>
        <Grid is_flex padding="30px 0px">
          <BasicButton onClick={addPost}>완료</BasicButton>
          <BasicButton
            onClick={() => {
              history.goBack();
            }}
          >
            취소
          </BasicButton>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
};

const BasicButton = styled.button`
  width: 100px;
  height: 35px;
  margin: 0px;
  border: 0px solid;
  background-color: #ccd6f1;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1.5px 2.5px 0px;
`;

const Wrapper = styled.div`
  width: 50rem;
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
