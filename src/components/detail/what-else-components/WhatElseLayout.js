import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TourItem from "./TourItem";

const TouristSpot = ({ category, tourData, setOpenModal }) => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    arrows: false,
    dots: true,
    infinite: false,
  };

  return (
    <>
      <SliderContainer>
        <TouristSpotTitle># {category}</TouristSpotTitle>
        <Slider {...settings}>
          {tourData &&
            tourData.map((data, idx) => (
              <TourItem key={idx} data={data} setOpenModal={setOpenModal} />
            ))}
          {/* {tourData &&
            tourData.map((data, idx) => (
              <TourItem key={idx} data={data} category={category} />
            ))} */}
        </Slider>
      </SliderContainer>
    </>
  );
};

const SliderContainer = styled.div`
  width: 100%;

  .slick-prev:before {
    opacity: 1;
    color: #eee;
  }
  .slick-next:before {
    opacity: 1;
    color: #eee;
  }
`;

const TouristSpotTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #121212;
  margin: 92px 0px 23px 0px;
`;

export default TouristSpot;
