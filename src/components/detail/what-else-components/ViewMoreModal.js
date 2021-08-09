import React, { useCallback, useRef, useEffect } from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { BiPhone, BiHomeAlt } from "react-icons/bi";

toast.configure();
const ViewMoreModal = (props) => {
  const { openModal, setOpenModal, setAddScheduleModal, detailData, course } =
    props;
  // console.log("course", course);
  // console.log("detail data", detailData);

  // 코스의 title 배열
  const titleList = course.map((el, idx) => {
    return el.title;
  });
  // console.log("title list", titleList);

  const isModal = useRef();

  const clickOutsideModal = useCallback((e) => {
    if (
      openModal &&
      (!isModal.current || !isModal.current.contains(e.target))
    ) {
      setOpenModal(false);
    }
  });

  const notify = () => {
    toast.error("이미 추가한 여행지에요!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      style: { fontSize: "17px" },
    });
  };

  // const detailData = useSelector((state) => state.detail.detailInfo);

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
            {/* <InfoTab>기본정보</InfoTab> */}
            <DetailInfo>
              <Title>
                <h1>{detailData && detailData.title}</h1>
                <span>subtitle</span>
              </Title>
              <Ul>
                <Li>
                  <FaMapMarkerAlt color="#1DC6D1" />
                  <div>
                    {detailData && detailData.addr1
                      ? detailData.addr1
                      : "정보없음"}
                  </div>
                </Li>
                <Li>
                  <BsClock color="#1DC6D1" />
                  <div>
                    {detailData && detailData.opentime
                      ? parse(detailData.opentime)
                      : "정보없음"}
                  </div>
                </Li>
                <Li>
                  <BiPhone color="#1DC6D1" />
                  <div>
                    {detailData && detailData.infocenter
                      ? detailData.infocenter
                      : "정보없음"}
                  </div>
                </Li>
                <Li>
                  <BiHomeAlt color="#1DC6D1" />
                  <div>
                    {detailData && detailData.homepage
                      ? parse(detailData.homepage)
                      : "정보없음"}
                  </div>
                </Li>
              </Ul>
              <Intro>
                <h2>장소 소개</h2>
                <p>{detailData && parse(detailData.overview)}</p>
              </Intro>
            </DetailInfo>
            <AddContainer>
              <div>
                <AddScheduleBtn
                  onClick={() => {
                    if (titleList.includes(detailData.title)) {
                      // window.alert("이미 추가된 여행지에요!");
                      notify();
                    } else {
                      setAddScheduleModal(true);
                    }
                  }}
                >
                  일정 추가하기
                </AddScheduleBtn>
              </div>
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
  height: 100%;
  padding: 2rem 6.4rem 2rem;
  box-sizing: border-box;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: none;
    width: 10px;
    /* border-radius: 5px; */
  }

  &::-webkit-scrollbar-thumb {
    /* background-color: #1dc6d1; */
    background-color: none;
    border-radius: 5px;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;

  & h1 {
    font-size: 5rem;
    font-weight: 700;
    margin: 6rem 0 1rem 0;
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

const Li = styled.li`
  display: flex;

  & div {
    margin-left: 2.5rem;
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
    line-height: 3rem;
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

  & div {
    width: 100%;
    height: 8rem;
    text-align: center;
    border-radius: 0rem 0rem 2rem 2rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 0.6) 65%,
      rgba(255, 255, 255, 0.8) 100%
    );
  }
`;

const AddScheduleBtn = styled.button`
  width: 55.5rem;
  height: 5.8rem;
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
