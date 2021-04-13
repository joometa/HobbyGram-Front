import React from "react";
import styled from "styled-components";
import preview from "../image/no_image.png";

const Image = (props) => {
  const { shape, src, size, overflow } = props;

  const styles = {
    src: src,
    size: size,
    overflow: overflow,
    shape: shape,
  };

  return (
    <AspectOutter>
      <AspectInner {...styles}></AspectInner>
    </AspectOutter>
  );
};

Image.defaultProps = {
  shape: "rectangle",
  src: preview,
  size: 36,
  overflow: "hidden",
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
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
