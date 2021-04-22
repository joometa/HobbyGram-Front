import React from "react";

const Upload = (props) => {
  const fileInput = React.useRef();

  const { _onChange, type } = props;
  return (
    <React.Fragment>
      <input type={type} onChange={_onChange} ref={fileInput} />
    </React.Fragment>
  );
};

Upload.defaultProps = {
  _onChange: () => {},
  type: "file",
};

export default Upload;
