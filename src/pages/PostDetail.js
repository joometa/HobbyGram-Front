import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Grid, Input, Text, Image } from "../element/Index";
import moment from "moment";

import CommentButton from "../components/CommentButton";
import CommentPost from "../components/CommentPost";
import HeartButton from "../components/HeartButton";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";

const PostDetail = (props) => {
  const dispatch = useDispatch();

  const [comment, setComment] = React.useState("");

  //포스트 id 추출
  const post_id = props.match.params.id;
  // console.log(post_id);

  // 유저정보 불러오기
  const user = useSelector((state) => state.user.user);
  // console.log(user);

  React.useEffect(() => {
    dispatch(postActions.getOnePostDB(post_id));
    dispatch(commentActions.getCommentDB(post_id));
  }, [user]);

  // 게시글 정보 불러오기
  const post = useSelector((state) => state.post.post);
  console.log(post);

  // 댓글 불러오기
  const comment_list = useSelector((state) => state.comment.list);
  // console.log(comment_list);

  //게시글 삭제함수
  const deletePost = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(postActions.deletePostDB(post_id));
      window.alert("삭제되었습니다!");
      history.replace("/");
    } else {
      return;
    }
  };

  // 좋아요 실행함수
  const changeLike = (e) => {
    // 이벤트 버블링,캡쳐링 방지
    e.preventDefault();
    e.stopPropagation();
    console.log("클릭");
    const is_like = props.is_like;
    dispatch(postActions.toggleLikeDB(post_id, is_like));
    console.log(is_like);
  };

  // 댓글작성 실행함수
  const addComment = () => {
    if (!comment) {
      window.alert("댓글 내용을 입력해주세요.");
      return;
    }
    dispatch(commentActions.addCommentDB(user.name, comment, post_id));
    window.alert("댓글을 게시하였습니다.");
  };

  return (
    <React.Fragment>
      <Wrapper>
        {user.name == post.user ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "0px 0px 0px 0px",
            }}
          >
            <div style={{ marginRight: "0.5rem" }}>
              <Button
                onClick={() => {
                  history.push(`/post/${post_id}/edit`);
                }}
              >
                수정
              </Button>
            </div>
            <div>
              <Button onClick={deletePost}>삭제</Button>
            </div>
          </div>
        ) : (
          <></> // 빈 값 <React.Fragment>랑 같은 것
        )}
        <Grid padding="0px">
          <Text bold size="30px">
            {post.title}
          </Text>
          <InfoWrap>
            <Info_Box>
              <InfoText>{moment(post.createdAt).format("YYYY-MM-DD")}</InfoText>
              <span style={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}>
                ·
              </span>
              <InfoText>{post.user}</InfoText>
              <span style={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}>
                ·
              </span>
              <InfoText>{post.category}</InfoText>
            </Info_Box>
            <LikeCommentBox>
              <div
                style={{
                  display: "flex",
                  lineHeight: "1.5",
                  color: "rgb(134, 142, 150)",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CommentButton />
                {comment_list.length}
              </div>
              <div style={{ width: "2rem" }}></div>
              <div
                style={{
                  display: "flex",
                  lineHeight: "1.5",
                  color: "rgb(134, 142, 150)",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <HeartButton _onClick={changeLike} />
                {post.recommendCnt}
              </div>
            </LikeCommentBox>
          </InfoWrap>
        </Grid>
        <Grid>
          <Image detail src={post.img}></Image>
        </Grid>
        <Grid>
          <ContentBox>{post.content}</ContentBox>
        </Grid>
        <Grid margin="1rem 0px 0px 0px">
          <CommentBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                _onChange={(e) => {
                  setComment(e.target.value);
                }}
                placeholder="댓글 내용을 입력하세요."
              />
              <CommentAddBtn onClick={addComment}>게시</CommentAddBtn>
            </div>
            <CommentListBox>
              {comment_list ? (
                comment_list.map((p, idx) => {
                  return <CommentPost key={p._id} {...p} />;
                })
              ) : (
                <></>
              )}
            </CommentListBox>
          </CommentBox>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
};

PostDetail.defaultProps = {
  title:
    "제목이 들어갈 자리입니다. 그래서 아무도 제목말고는 볼 수 없어요. 진짜에요.",
  user: "작성자",
  createdAt: "2000-00-00",
  category: "카테고리",
  commentCnt: 0,
  recommendCnt: 0,
  img:
    "https://cdn.crowdpic.net/list-thumb/thumb_l_1ED169F054035E14E5A306D7947BC544.jpg",
  content: "내용이 들어가는 자리입니다.",
  comment_user: "박민경",
  comment_content: "이게 대체 뭔소리에요??",
  comment_createdAt: "2021-04-13",
  is_like: false,
};

const CommentListBox = styled.div`
  margin-top: 1.5rem;
`;

const Button = styled.button`
  width: auto;
  height: 35px;
  margin: 0px;
  border: 0px solid;
  background-color: #ccd6f1;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: rgb(0 0 0 / 30%) 0px 1.5px 2.5px 0px;
`;

const CommentAddBtn = styled.button`
  width: 4.5rem;
  margin-left: 0.5rem;
  padding: 0.75rem 4px;
  align-items: center;
  border: 0px solid;
  background-color: #ccd6f1;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: rgb(0 0 0 / 30%) 0px 1.5px 2.5px 0px;
`;

const Wrapper = styled.div`
  width: 50rem;
  height: 100%;
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

  /* @media (max-width: 1270px) {
    width: calc(70% - 2rem);
  }

  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 767px) {
    width: calc(50% - 0.5rem);
  } */

  /* width 1024px 미만일 때 적용 */
  @media all and (min-width: 1024px) {
    width: 50%;
  }
  @media all and (max-width: 769px) {
    width: 30%;
  }
  /* @media all and (max-width: 376px) {
    width: 50%;
  } */
`;

const LikeCommentBox = styled.div`
  border: none;
  width: 6rem;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  overflow: scroll;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  font-size: 1.3rem;
  padding: 12px 4px;
  height: 25rem;
  padding: 2rem;
  margin-top: 1rem;
  @media all and (max-width: 1024px) {
    height: 10rem;
  }
`;

const CommentBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  font-size: 1.3rem;
  padding: 12px 4px;
  height: 100%;
  background-color: #f5f8ff;
  padding: 2rem;
`;

const Info_Box = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
`;

const InfoText = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: rgb(134, 142, 150);
`;

const InfoWrap = styled.div`
  margin: 0.7rem 0px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;

export default PostDetail;
