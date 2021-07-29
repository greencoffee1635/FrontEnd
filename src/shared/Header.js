import React, { useState } from "react";
import classNames from "classnames";

// css
import headerStyles from "../css/header.scss";

//components
import LoginModal from "../components/LoginModalForm";

const cx = classNames.bind(headerStyles);

function Header(props) {
  const { history } = props;
  const [loginModal, setLogin] = useState(false);

  const LoginModalOpen = () => {
    setLogin(true);
  };
  const LoginModalClose = () => {
    setLogin(false);
  };

  return (
    <React.Fragment>
      <>
        <div className={cx("header", `${props.page}`)}>
          <div
            className="header__logo"
            onClick={() => {
              history.push("/");
            }}
          >
            내일 어디가?
          </div>
          <ul className="header__menu">
            <li className="header__menu-item">
              <div></div>Home
            </li>
            <li className="header__menu-item">
              <div></div>Explore
            </li>
            <li className="header__menu-item">
              <span className="loginBtn" onClick={LoginModalOpen}>
                Login
              </span>
              {loginModal && (
                <LoginModal {...props} LoginModalClose={LoginModalClose} />
              )}
              {/* {loginModal === true ? (
                <LoginModal close={LoginModalClose} />
              ) : null} */}
            </li>
          </ul>
        </div>
      </>
    </React.Fragment>
  );
}

export default Header;
