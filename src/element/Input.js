import React from "react";
import styled from "styled-components";
import { Grid, Text } from "./Index";

const Input = (props) => {
  const { multiline, type, _onChange, label, placeholder, bold, value } = props;

  if (multiline) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={15}
          onChange={_onChange}
          placeholder={placeholder}
          value={value}
        ></ElTextarea>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid>
        <ElInput
          type={type}
          onChange={_onChange}
          placeholder={placeholder}
          bold={bold}
          label={label}
        ></ElInput>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiline: false,
  type: "text",
  _onChange: () => {},
  label: null,
  placeholder: "입력하세요.",
  bold: false,
  value: "",
};

const ElInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  padding: 12px 4px;
  font-size: 1.3rem;
  ${(props) => (props.placeholder ? `placeholder:${props.placeholder};` : "")};
  ${(props) => (props.bold ? `font-weight: bold;` : "")};
  ::placeholder {
    font: 400 18px Arial;
  }
`;

const ElTextarea = styled.textarea`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  font-size: 1.3rem;
  padding: 12px 4px;
  ${(props) => (props.placeholder ? `placeholder:${props.placeholder};` : "")};
  ::placeholder {
    font: 400 18px Arial;
  }
`;

export default Input;
