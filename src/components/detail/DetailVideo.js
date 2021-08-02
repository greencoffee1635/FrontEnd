import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailVideo = (props) => {
  const images = [
    {
      src: "https://a.cdn-hotels.com/gdcs/production102/d1023/e3c18663-14e2-49e3-b9f0-bd7a029a661f.jpg",
    },
    {
      src: "https://blog.hmgjournal.com/images_n/contents/180222_gyeongju01.png",
    },
    {
      src: "https://post-phinf.pstatic.net/MjAxOTEwMjRfMTI1/MDAxNTcxODkwMjEzMzQ2.wY_6tI_6OV392BfeqVJHrACosmiKzU2QIrWxvfGQxC4g.3jJcW3VIqoIMqPQ7qSdou4KFCjLotfFdLLkYZaPXWZog.JPEG/01.%EC%BB%A4%EB%B2%84%EC%9D%B4%EB%AF%B8%EC%A7%80_%ED%9B%84%EB%B3%B4_%EB%8C%80%EB%A6%89%EC%9B%90_%ED%95%AD%EA%B3%B5%28%EA%B2%BD%EC%A3%BC%EC%8B%9C%EC%A0%9C%EA%B3%B5%29_%283%29.jpg?type=w1200",
    },
    {
      src: "https://pix10.agoda.net/hotelImages/15903874/0/3e223cef8793443e81711dc28a31dfc6.jpg?s=1024x768",
    },
    {
      src: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/k6N5KfFXlYEaZMLdWok0Tpr6_X8.jpg",
    },
  ];

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    arrows: true,
    dots: true,
    infinite: false,
  };

  return (
    <>
      <SliderContainer>
        <Slider {...settings}>
          {images.map((image, idx) => (
            <Div key={idx}>
              <SlideImage src={image.src} />
            </Div>
          ))}
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

const Div = styled.div`
  width: 360px;
`;

const SlideImage = styled.div`
  width: 350px;
  height: 216px;
  margin: 0 auto;
  background-image: ${(props) => props.src && `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
  }
`;

export default DetailVideo;
