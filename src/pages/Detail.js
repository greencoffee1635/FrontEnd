import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

// shared
import Header from "../shared/Header";
import Layout from "../shared/Layout";

// components
import DetailTitle from "../components/detail/DetailTitle";
import DetailAbout from "../components/detail/DetailAbout";
import DetailVideo from "../components/detail/DetailVideo";
import DetailMap from "../components/detail/DetailMap";
import DetailWhatElse from "../components/detail/DetailWhatElse";

function Detail(props) {
  const [navBar, setNavBar] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 400) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <>
      <Header page="main" bgColor={navBar ? "gray" : ""} {...props} />
      <HeadImage></HeadImage>

      <Layout>
        <ContentsBox>
          <DetailTitle />
          <DetailAbout />
        </ContentsBox>

        <VideoBox>
          <DetailVideo />
        </VideoBox>

        <MapBox>{/* <DetailMap /> */}</MapBox>

        <WhatElseContents>
          <DetailWhatElse />
        </WhatElseContents>
      </Layout>

      <UpBtn
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <AiOutlineArrowUp />
      </UpBtn>
    </>
  );
}

const UpBtn = styled.button`
  width: 65px;
  height: 65px;
  position: fixed;
  left: 92%;
  top: 855px;
  background: rgba(29, 198, 209, 0.3);
  border: 1px solid rgba(29, 198, 209, 0.6);
  border-radius: 32px;
  z-index: 99;
  font-size: 50px;
  color: #fff;
`;

const ContentsBox = styled.div`
  width: 108rem;
  margin-top: 29rem;
`;

const VideoBox = styled.div`
  width: 108rem;
  margin-top: 6rem;
`;

const MapBox = styled.div`
  width: 100%;
  margin-top: 141px;
`;

const WhatElseContents = styled.div`
  width: 149rem;
  /* width: 108rem; */
  margin: 185px 0px 0px auto;
`;

const HeadImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40rem;
  background: transparent;
  background-image: linear-gradient(to top, rgb(255, 255, 255), transparent 35%),
    url("https://waynabox.com/assets/road/routes_upfold_photo_hd.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Detail;
