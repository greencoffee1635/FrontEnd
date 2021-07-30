import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import styled from "styled-components";

SwiperCore.use([Navigation]);

const VideoSwiper = (props) => {
  return (
    <SwiperBox>
      <Swiper slidesPerView="auto" navigation tag="ul">
        {props.data.map((post) => (
          <SwiperSlide key={post.id} tag="li">
            <img className="video" src={post.src} alt="swiper"></img>
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
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
    {
      id: 2,
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
    {
      id: 3,
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
    {
      id: 4,
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
    {
      id: 5,
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
    {
      id: 6,
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
    {
      id: 7,
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
    {
      id: 8,
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
    {
      id: 9,
      src: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/driving-ride-travel.gif",
    },
  ],
};

const SwiperBox = styled.div`
  margin: 3rem auto 0;
  & li {
    width: auto;
    margin-right: 1rem;
  }
`;

export default VideoSwiper;
