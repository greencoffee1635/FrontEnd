import React from "react";
import classNames from "classnames";
// import styled from "styled-components";

// css
import headerStyles from "../css/header.scss";

const cx = classNames.bind(headerStyles);

function Header(props) {
  return (
    <>
      <div className={cx("header", `${props.page}`)}>
        <div className="header__logo">내일 어디가?</div>
        <ul className="header__menu">
          <li className="header__menu-item">
            <div></div>Home
          </li>
          <li className="header__menu-item">
            <div></div>Explore
          </li>
          <li className="header__menu-item">
            <div></div>My Trip
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
