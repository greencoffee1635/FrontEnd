import React from "react";
import styled from "styled-components";

const TourItem = ({ data, category }) => {
  return (
    <>
      <Div>
        <TourImage src={data.img}>
          <Gradation />

          <TourItemTitle id="title">
            <Left>
              <h1>{data.name}</h1>
              <span>subtitle</span>
            </Left>
            {/* <Right>
              <div>
                <span>4.5</span>
                <span>구글 (11.611)</span>
              </div>
              <div>별점</div>
            </Right> */}
          </TourItemTitle>

          <HoverMenu id="hoverMenu">
            <HoverMenuTitle>
              <Left>
                <h1>{data.name}</h1>
                <span>subtitle</span>
              </Left>
              {/* <Right>
                <div>
                  <span>4.5</span>
                  <span>구글 (11.611)</span>
                </div>
                <div>별점</div>
              </Right> */}
            </HoverMenuTitle>

            <Explain>
              {data.overview} <a href="#">더보기</a>
            </Explain>

            {/* <Address>
              <p>경상북도 경주시 진현동 15-1</p>
              <p>평일 09:00 - 18:00</p>
            </Address> */}

            <AddScheduleBtn>
              <button>일정추가</button>
            </AddScheduleBtn>
          </HoverMenu>
        </TourImage>
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 495px;
  position: relative;
`;

const TourImage = styled.div`
  width: 485px;
  height: 315px;
  margin: 0 auto;
  background-image: ${(props) => props.src && `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }

  &:hover > #title {
    display: none;
  }

  &:hover > #hoverMenu {
    display: flex;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 65%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const Gradation = styled.div`
  position: absolute;
  top: 0;
  left: 5;
  width: 485px;
  height: 315px;
  border-radius: 20px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 65%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

const TourItemTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 25px 27px;
  box-sizing: border-box;
`;

const Left = styled.div`
  color: #fff;
  z-index: 1;
  & h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 7px;
  }

  & span {
    font-size: 20px;
    font-weight: 500;
  }
`;

const Right = styled.div`
  color: #fff;
  z-index: 1;

  & div:first-child {
    margin-bottom: 7px;
  }

  & div:first-child span:first-child {
    font-size: 30px;
    font-weight: 700;
  }

  & div:first-child span:last-child {
    font-size: 14px;
    font-weight: 500;
  }

  & div:last-child {
    font-size: 20px;
    font-weight: 500;
  }
`;

const HoverMenu = styled.div`
  width: 485px;
  height: 315px;
  position: absolute;
  top: 0;
  left: 5;
  border-radius: 20px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 27px 24px;
  box-sizing: border-box;
`;

const HoverMenuTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Explain = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #e2e2e2;
  margin: 15px 0px 20px 0px;
  line-height: 25px;
  height: 65px;
  overflow: auto;

  & a {
    color: #fff;
  }
`;

const Address = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #e2e2e2;

  & p {
    margin-bottom: 8px;
  }
`;

const AddScheduleBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & button {
    width: 146px;
    height: 51px;
    padding: 11px 15px;
    box-sizing: border-box;
    border: 2px solid #fff;
    border-radius: 10px;
    background: none;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin-top: 7px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default TourItem;
