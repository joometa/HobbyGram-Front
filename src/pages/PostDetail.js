import React from "react";
import styled from "styled-components";
import { Grid, Input, Text, Image } from "../element/Index";
import HeartButton from "../components/HeartButton";
import CommentButton from "../components/CommentButton";
import CommentPost from "../components/CommentPost";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const PostDetail = (props) => {
  const { comment_user, comment_content, comment_createdAt } = props;

  const post_id = props.match.params.id;
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);
  React.useEffect(() => {
    dispatch(commentActions.getCommentDB(post_id));
  }, []);

  return (
    <React.Fragment>
      <Wrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0px 0px 0px 0px",
          }}
        >
          <div style={{ marginRight: "0.5rem" }}>
            <Button>수정</Button>
          </div>
          <div>
            <Button>삭제</Button>
          </div>
        </div>
        <Grid padding="0px">
          <Text bold size="40px">
            {props.title}
          </Text>
          <InfoWrap>
            <Info_Box>
              <InfoText>{props.createdAt}</InfoText>
              <span style={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}>
                ·
              </span>
              <InfoText>{props.user}</InfoText>
              <span style={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}>
                ·
              </span>
              <InfoText>{props.category}</InfoText>
            </Info_Box>
            <LikeCommentBox>
              <div style={{ display: "flex" }}>
                <CommentButton />
                <CommentPost />
              </div>
            </LikeCommentBox>
          </InfoWrap>
        </Grid>
        <Grid>
          <Image src={props.img}></Image>
        </Grid>
        <Grid>
          <ContentBox>{props.content}</ContentBox>
        </Grid>
        <Grid margin="1rem 0px 0px 0px">
          <CommentBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input placeholder="댓글 내용을 입력하세요." />
              <CommentAddBtn>게시</CommentAddBtn>
            </div>
            <CommentListBox>
              {comment_list.map((p, idx) => {
                return <CommentPost key={p.idx} {...p} />;
              })}
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
  width: 5rem;
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

const LikeCommentBox = styled.div`
  border: none;
  width: 6rem;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  font-size: 1.3rem;
  padding: 12px 4px;
  height: 20rem;
  padding: 2rem;
`;

const CommentBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  font-size: 1.3rem;
  padding: 12px 4px;
  height: 20rem;
  background-color: #ebe8e8;
  padding: 2rem;
`;

const Info_Box = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
`;

const InfoText = styled.span`
  font-size: 1.3rem;
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
