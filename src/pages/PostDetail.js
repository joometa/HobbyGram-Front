import React from "react";
import styled from "styled-components";
import { Grid, Input, Text, Image } from "../element/Index";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Text bold size="40px">
            {props.title}
          </Text>
          <Grid is_flex padding="30px 0px">
            <Button>수정</Button>
            <Button>취소</Button>
          </Grid>
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
              <div>댓글</div>
              <div>좋아요수</div>
            </LikeCommentBox>
          </InfoWrap>
        </Grid>
        <Grid>
          <Image></Image>
        </Grid>
        <Grid>
          <ContentBox>컨텐츠 들어가는 자리</ContentBox>
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

const LikeCommentBox = styled.div`
  border: 1px solid #dddddd;
  border-radius: 5px;
  width: 10rem;
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
