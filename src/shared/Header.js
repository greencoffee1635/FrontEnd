import React, { useState } from "react";
import styled from "styled-components";

//components
import LoginModal from "../components/LoginModalForm";

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
    <>
      <Container>
        <HeaderLogo
          onClick={() => {
            history.push("/");
          }}
        >
          내일 어디가?
        </HeaderLogo>
        <HeaderMenu className="header__menu">
          <HeaderMenuItem>
            <div></div>
            <span>Home</span>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <div></div>
            <span>Explore</span>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <div onClick={LoginModalOpen}></div>
            {loginModal && (
              <LoginModal {...props} LoginModalClose={LoginModalClose} />
            )}
            <span>Login</span>
            {/* {loginModal === true ? (
                <LoginModal close={LoginModalClose} />
              ) : null} */}
          </HeaderMenuItem>
        </HeaderMenu>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  width: 69%;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 26px;
  z-index: 99;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: inline;
  }
`;

const HeaderLogo = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #1dc6d1;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeaderMenu = styled.ul`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  color: #fff;

  @media screen and (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 83px;
    background-color: #fff;
    color: #000;
  }
`;

const HeaderMenuItem = styled.li`
  width: 33%;
  text-align: center;
  font-size: 22px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: #1dc6d1;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    & div {
      width: 30px;
      height: 28px;
      background-color: #c4c4c4;
      margin: 5px auto 5px;
    }
  }
`;

export default Header;
