import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Input, Text, Image } from "../element/Index";

import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";

const PostEdit = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);

  const post_id = props.match.params.id;

  // 수정 시 현재 게시물의 content를 수정 인풋창에 띄워주기 위해 state의 default값을 props.content로 설정
  const [contents, setContents] = React.useState(post.content);
  const [title, setTitle] = React.useState(post.title);
  const [img, setImg] = React.useState(post.img);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  React.useEffect(() => {
    dispatch(postActions.getOnePostDB(post_id));
  }, []);

  const editPost = () => {
    dispatch(postActions.editPostDB(contents, img, title, post_id));
    history.push("/");
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <h1>제목</h1>
          <TitleInput value={title} onChange={changeTitle}></TitleInput>
        </Grid>
        <Grid>
          <Image src={post.img}></Image>
        </Grid>
        <Grid>
          <Input
            _onChange={changeContents}
            multiline
            value={contents}
            placeholder="수정할 내용을 입력하세요."
          />
        </Grid>
        <Grid is_flex padding="30px 0px">
          <Button onClick={editPost}>수정완료</Button>
          <Button
            onClick={() => {
              history.replace(`/post/${post_id}`);
            }}
          >
            취소
          </Button>
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

const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 30px;
  margin: 10px auto;
`;

export default PostEdit;
