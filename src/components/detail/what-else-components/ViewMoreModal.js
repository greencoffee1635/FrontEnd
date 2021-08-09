import React, { useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import parse from "html-react-parser";

const ViewMoreModal = (props) => {
  const { openModal, setOpenModal, setAddScheduleModal } = props;

  const isModal = useRef();

  const clickOutsideModal = useCallback((e) => {
    if (
      openModal &&
      (!isModal.current || !isModal.current.contains(e.target))
    ) {
      setOpenModal(false);
    }
  });

  const detailData = useSelector((state) => state.detail.detailInfo);

  useEffect(() => {
    document.addEventListener("click", clickOutsideModal);

    return () => {
      document.removeEventListener("click", clickOutsideModal);
    };
  });

  return (
    <>
      <OutArea>
        <Modal ref={isModal}>
          <Image src={detailData && detailData.firstimage} alt="" />
          <Container>
            <InfoTab>기본정보</InfoTab>
            <DetailInfo>
              <Title>
                <h1>{detailData && detailData.title}</h1>
                <span>subtitle</span>
              </Title>
              <Ul>
                <li>
                  {detailData && detailData.opentime
                    ? parse(detailData.opentime)
                    : ""}
                </li>
                <li>{detailData && detailData.infocenter}</li>
                <li>
                  {detailData && detailData.homepage
                    ? parse(detailData.homepage)
                    : ""}
                </li>
              </Ul>
              <Intro>
                <h2>장소 소개</h2>
                <p>{detailData && parse(detailData.overview)}</p>
              </Intro>
            </DetailInfo>
            <AddContainer>
              <AddScheduleBtn
                onClick={() => {
                  setOpenModal(false);
                  setAddScheduleModal(true);
                }}
              >
                일정 추가하기
              </AddScheduleBtn>
            </AddContainer>
          </Container>
        </Modal>
      </OutArea>
    </>
  );
};

const OutArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  z-index: 98;
`;

const Modal = styled.div`
  position: fixed;
  top: 9rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 79rem;
  height: 83rem;
  border-radius: 2rem;
  z-index: 99;
  background-color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 28rem;
  border-radius: 2rem 2rem 0rem 0rem;
`;

const Container = styled.div`
  width: 100%;
  height: 55rem;
  background-color: #fff;
  border-radius: 0rem 0rem 2rem 2rem;
  position: relative;
`;

const InfoTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7.4rem;
  font-size: 2.4rem;
  font-weight: 600;
  color: #1dc6d1;
`;

const DetailInfo = styled.div`
  width: 100%;
  height: 47rem;
  padding: 2rem 6.4rem 2rem;
  box-sizing: border-box;
  overflow: auto;
`;

const Title = styled.div`
  margin-bottom: 4rem;

  & h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  & span {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const Ul = styled.ul`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 5rem;

  & li {
    margin-bottom: 1.1rem;
  }
`;

const Intro = styled.div`
  & h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 8rem;
  }
`;

const AddContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 47rem;
  left: 0;
`;

const AddScheduleBtn = styled.button`
  width: 50rem;
  height: 7rem;
  background-color: #1dc6d1;
  border: none;
  border-radius: 4.9rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export default ViewMoreModal;
