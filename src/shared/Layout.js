import React from "react";
// import styled from "styled-components";
import classNames from "classnames";

// css
import styles from "../css/layout.scss";

const cx = classNames.bind(styles);

function Container(props) {
  return (
    <>
      <div className={cx("container", props.page)}>{props.children}</div>
    </>
  );
}

export default Container;
