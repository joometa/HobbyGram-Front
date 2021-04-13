import styled from "styled-components";
import React, { ChangeEvent, FormEvent } from "react";

// interface Message { name: string, message: string }
// const App = React.FC = () => {

const ChattingBox = (props) => {
  const { name, description } = props;
  return (
    <React.Fragment>
      <TotalWrap>
        <ChatContainer>
          <div>채팅창</div>
          <div></div>
        </ChatContainer>
      </TotalWrap>
    </React.Fragment>
  );
};

const ChatContainer = styled.div`
  max-width: 70rem;
  width: 800px;
  height: 100%;
  max-height: 20rem;
  background: #ecc7ff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
  margin: 2rem;
`;

const TotalWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  height: 350px;
  margin: 0px auto;
  padding: 40px 0;
  background-color: #f5f5f5;
`;

ChattingBox.defaultProps = {
  me: false,
  name: "Stark",
};

export default ChattingBox;
