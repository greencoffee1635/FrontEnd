import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import styled, { css } from "styled-components";

SwiperCore.use([Navigation]);

const VideoSwiper = (props) => {
  const [isEnd, setIsEnd] = useState(false);
  return (
    <SwiperBox isEnd={isEnd}>
      <Swiper
        slidesPerView="auto"
        navigation
        tag="ul"
        onSlideChange={() => setIsEnd(false)}
        onReachEnd={() => setIsEnd(true)}
      >
        {props.data.map((post) => (
          <SwiperSlide key={post.id} tag="li">
            <iframe
              width="384.95"
              height="216.53"
              src={post.src}
              title="YouTube video player"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperBox>
  );
};

VideoSwiper.defaultProps = {
  data: [
    {
      id: 1,
      src: "https://www.youtube.com/embed/RSRKFAmfqnI",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/RSRKFAmfqnI",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/RSRKFAmfqnI",
    },
  ],
};

const SwiperBox = styled.div`
  margin: 3rem auto 0;
  position: relative;
  border-radius: 2rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ isEnd }) =>
      isEnd
        ? ""
        : "background: linear-gradient(to left, white, transparent 5%);"}
    pointer-events: none;
    z-index: 9;
  }
  & li {
    width: auto;
    margin-right: 2.2rem;
  }
`;

export default VideoSwiper;
