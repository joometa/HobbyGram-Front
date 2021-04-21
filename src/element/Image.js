import React from "react";
import styled from "styled-components";
import preview_img from "../image/no_image.png";

const Image = (props) => {
  const { shape, src, size, overflow, detail } = props;

  const styles = {
    src: src,
    size: size,
    overflow: overflow,
    shape: shape,
  };
  if (detail) {
    return <DetailImage src={src}></DetailImage>;
  } else {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
};

Image.defaultProps = {
  shape: "rectangle",
  src: preview_img,
  size: 36,
  overflow: "hidden",
  label: null,
  detail: false,
};

const DetailImage = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 30rem;
  max-height: 40rem;
  margin: 0px auto;
  background-repeat: no-repeat;
  object-fit: contain;

  @media (max-width: 1024px) {
    min-height: 16rem;
    max-height: 23rem;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    min-height: 14rem;
    max-height: 18rem;
    margin-bottom: 20px;
  }

  @media (max-width: 540px) {
    min-height: 12rem;
    max-height: 16rem;
    margin-bottom: 10px;
  }

  @media (max-width: 414px) {
    min-height: 11rem;
    max-height: 15rem;
    margin-bottom: 10px;
  }

  @media (max-width: 375px) {
    margin: 0px;
    box-sizing: border-box;
    min-height: 10.5rem;
    max-height: 15rem;
  }
  @media (max-width: 280px) {
    margin: 0px;
    box-sizing: border-box;
    min-height: 8rem;
    max-height: 12rem;
  }
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
  margin-bottom: 2rem;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;
