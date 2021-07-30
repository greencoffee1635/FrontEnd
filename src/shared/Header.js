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
            <span></span>Home
          </HeaderMenuItem>
          <HeaderMenuItem>
            <span></span>Explore
          </HeaderMenuItem>
          <HeaderMenuItem>
            <span onClick={LoginModalOpen}>Login</span>
            {loginModal && (
              <LoginModal {...props} LoginModalClose={LoginModalClose} />
            )}
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
`;

const HeaderLogo = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #1dc6d1;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderMenu = styled.ul`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
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
`;

export default Header;
