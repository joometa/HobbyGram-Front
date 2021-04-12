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
          <div></div>
          <div></div>
        </ChatContainer>
      </TotalWrap>
    </React.Fragment>
  );
};

const ChatContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  height: 100%;
  max-height: 20rem;
  background: #cc66ff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
  margin: 2rem;
`;

const TotalWrap = styled.div`
  overflow: hidden;
  position: relative;
  height: 350px;
  margin: 40px 0 0;
  padding: 40px 0;
  background-color: #f5f5f5;
`;

ChattingBox.defaultProps = {
  me: false,
  name: "Stark",
};

export default ChattingBox;
