import React from "react";
import styled from "styled-components";

import heart_red from "../image/heart_red.png";
import heart_gray from "../image/heart_gray.png";

const HeartButton = (props) => {
  const icon_url = props.is_like ? heart_red : heart_gray;

  return (
    <React.Fragment>
      <Heart onClick={props._onClick} icon_url={icon_url}></Heart>
    </React.Fragment>
  );
};

const Heart = styled.div`
  width: 1.7rem;
  height: 1.5rem;
  display: flex;
  background: url(${(props) => props.icon_url});
  background-size: cover;
  cursor: pointer;
`;

export default HeartButton;
