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
  /* background-image: url("${(props) => props.src}"); */
  background-repeat: no-repeat;
  object-fit: contain;
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
