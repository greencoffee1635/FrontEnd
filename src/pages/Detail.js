import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

// async
import { getTourInfo } from "../redux/async/detail";

// reducer
import detailSlice from "../redux/modules/detailSlice";

// shared
import Header from "../shared/Header";
import Layout from "../shared/Layout";

// components
import DetailTitle from "../components/detail/DetailTitle";
import DetailAbout from "../components/detail/DetailAbout";
import DetailVideo from "../components/detail/DetailVideo";
import DetailMap from "../components/detail/DetailMap";
import DetailWhatElse from "../components/detail/DetailWhatElse";
import SaveButton from "../components/detail/SaveButton";

function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTourInfo());
    dispatch(detailSlice.actions.emptyTrash());
  }, []);

  const tourList = useSelector((state) => state.detail.tourList);
  const whatElse = useSelector((state) => state.detail.whatElse);
  // console.log("Detail", tourList, whatElse);

  return (
    <>
      <Header page="main" {...props} />
      <HeadImage></HeadImage>

      <Layout>
        <ContentsBox>
          <DetailTitle tourList={tourList} />
          <DetailAbout tourList={tourList} />
        </ContentsBox>

        <VideoBox>
          <DetailVideo images={tourList.courseImages} />
        </VideoBox>

        <MapBox>
          <DetailMap />
        </MapBox>

        <WhatElseContents>
          <DetailWhatElse course={tourList.course} whatElse={whatElse} />
        </WhatElseContents>

        <BottomButton>
          <SaveButton tourList={tourList} />
        </BottomButton>
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
  left: 95%;
  top: 90%;
  background: rgba(29, 198, 209, 0.3);
  border: 1px solid rgba(29, 198, 209, 0.6);
  border-radius: 32px;
  z-index: 98;
  font-size: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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

const BottomButton = styled.div`
  width: 526px;
  display: flex;
  justify-content: space-between;
  margin-top: 254px;
  padding-bottom: 100px;
`;

export default Detail;
