import React from "react";
import styled from "styled-components";

const ViewMoreModal = (props) => {
  const { setOpenModal } = props;

  return (
    <>
      <Outter
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <Modal>
          <Image
            src="https://lh3.googleusercontent.com/proxy/y6DhjxPpH1gHKsDjtgde7Poof6xWyzmCTx9a401fYCl3u4S5rUb5bEyNMCOLYHJiYKiIifhAprS0FX1GcKty0YAA0Ushw_D4q65MaSseoh4qC251X0BsfCvj34LDUPpfPg"
            alt=""
          />
          <Container>
            <InfoTab>기본정보</InfoTab>
            <DetailInfo>
              <Title>
                <h1>불국사</h1>
                <span>불교사찰</span>
              </Title>
              <Ul>
                <li>평일 09:00 - 18:00</li>
                <li>054-746-9913</li>
                <li>http://www.bulguksa.or.kr/</li>
              </Ul>
              <Intro>
                <h2>장소 소개</h2>
                <p>
                  경주 불국사 대웅전은 경상북도 경주시, 불국사의 대웅전으로
                  조선시대의 건축물이다. 2011년 12월 30일 대한민국의 보물
                  제1744호로 지정되었다. 석가여래 부처님을 모시는 법당으로,
                  불국사 경 내 중심이 되는 건물이다.
                </p>
              </Intro>
            </DetailInfo>
          </Container>
        </Modal>
      </Outter>
    </>
  );
};

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 79rem;
  height: 75.5rem;
  border-radius: 2rem;
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
  padding: 2rem 6.4rem 0rem;
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
  }
`;

export default ViewMoreModal;
