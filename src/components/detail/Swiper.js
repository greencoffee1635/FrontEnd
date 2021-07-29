import "../../css/detail/swiper.scss";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation]);

const VideoSwiper = (props) => {
  return (
    <div className="bigbox">
      <div className="secbox">
        <Swiper slidesPerView="auto" navigation tag="ul">
          {props.data.map((post) => (
            <SwiperSlide key={post.id} tag="li">
              <img className="video" src={post.src} alt="swiper"></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
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

export default VideoSwiper;
