import React from "react";
import styled from "styled-components";

const DetailModal = ({ list, closeModal }) => {
  return (
    <>
      <ModalContainer onClick={closeModal}>
        <ScheduleModal onClick={closeModal}>
          {/* <Image
            src={require("../../images/background_img.jpg").default}
            alt=""
          /> */}
          <Image src={list.firstimage} alt="" />
          <ModalContents>
            <TopContents>
              <PlaceTitle>
                <h1>{list.title}</h1>
                <span>카테고리?</span>
              </PlaceTitle>
              <Grade>
                <span>4.5</span>
                <span>구글 (11,611)</span>
                <div>별점</div>
              </Grade>
            </TopContents>
            <BottomContents>
              <div>주소</div>
              <div>운영시간</div>
            </BottomContents>
          </ModalContents>
        </ScheduleModal>
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ScheduleModal = styled.div`
  border-radius: 25px;
  width: 385px;
  height: 355px;
  position: relative;
  top: 20px;
  left: 25%;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 351px;
  height: 181px;
  border-radius: 25px;
`;

const ModalContents = styled.div`
  width: 351px;
  display: flex;
  flex-direction: column;
  margin: 16px 0px 0px 0px;
`;

const TopContents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlaceTitle = styled.div`
  width: 198px;

  & h1 {
    font-size: 26px;
    font-weight: 700;
    color: #121212;
    margin-bottom: 10px;
  }

  & span {
    font-size: 14px;
    font-weight: 500;
    color: #484848;
  }
`;

const Grade = styled.div`
  width: 147px;

  & span:first-child {
    font-size: 30px;
    font-weight: 700;
    color: #121212;
  }

  & span:nth-child(2) {
    font-size: 14px;
    font-weight: 500;
    color: #484848;
  }
`;

const BottomContents = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #484848;
  margin-top: 34px;

  & div {
    margin-bottom: 5px;
  }
`;

export default DetailModal;
