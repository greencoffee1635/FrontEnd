import React from "react";

// css
import "../css/header.scss";

function Header(props) {
  return (
    <>
      <div className="header">
        <div className="header__logo">내일 어디가?</div>
        <ul className="header__menu">
          <li className="header__menu-item">Home</li>
          <li className="header__menu-item">Explore</li>
          <li className="header__menu-item">My Trip</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
