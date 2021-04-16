import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  //   const dispatch = useDispatch();
  const fileInput = React.useRef();

  const { _onChange, type } = props;
  return (
    <React.Fragment>
      <form encType="multipart/form-data" style={{ display: "flex" }}>
        <input
          type={type}
          onChange={_onChange}
          ref={fileInput}
          // disabled={is_uploading}
        />
      </form>
    </React.Fragment>
  );
};

Upload.defaultProps = {
  _onChange: () => {},
  type: "file",
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

export default Upload;
