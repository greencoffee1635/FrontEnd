import React, { useState } from "react";
import styled from "styled-components";

// components
import Entire from "./what-else-components/Entire";
import Nature from "./what-else-components/Nature";
import Humanities from "./what-else-components/Humanities";
import Sports from "./what-else-components/Sports";
import Shopping from "./what-else-components/Shopping";
import Food from "./what-else-components/Food";
import Lodgment from "./what-else-components/Lodgment";
import RecommendedJCourse from "./what-else-components/RecommendedJCourse";
import ViewMoreModal from "./what-else-components/ViewMoreModal";

const DetailWhatElse = (props) => {
  // 서버에서 받아온 데이터
  const { tourList } = props;

  // what else 모달 제어하기 위한 변수
  const [openModal, setOpenModal] = useState(false);

  // // 여행지 카테고리를 중복되지 않게 하기 위해 Set을 사용
  // const tourCategory = new Set();
  // tourList &&
  //   tourList.map((list, idx) => {
  //     tourCategory.add(list.cat1);
  //   });

  // // 여행지 카테고리를 정렬해주기 위해 배열로 바꿔주고 정렬
  // // Spread Operator를 이용하여 set을 array로 변환
  // const tourCategoryArr = [...tourCategory].sort();

  // // 각 카테고리 별로 데이터 분류
  // // 자연
  // const natureData =
  //   tourList &&
  //   tourList.filter((list) => {
  //     return list.cat1 === "A01";
  //   });

  // // 인문
  // const humanitiesData =
  //   tourList &&
  //   tourList.filter((list) => {
  //     return list.cat1 === "A02";
  //   });

  // // 레포츠
  // const sportsData =
  //   tourList &&
  //   tourList.filter((list) => {
  //     return list.cat1 === "A03";
  //   });

  // // 쇼핑
  // const shoppingData =
  //   tourList &&
  //   tourList.filter((list) => {
  //     return list.cat1 === "A04";
  //   });

  // // 음식
  // const foodData =
  //   tourList &&
  //   tourList.filter((list) => {
  //     return list.cat1 === "A05";
  //   });

  // // 숙박
  // const lodgmentData =
  //   tourList &&
  //   tourList.filter((list) => {
  //     return list.cat1 === "B02";
  //   });

  // // 추천코스
  // const recommendedCourseData =
  //   tourList &&
  //   tourList.filter((list) => {
  //     return list.cat1 === "C01";
  //   });

  // 카테고리 (자연, 인문, 레포츠, 쇼핑, 음식, 숙박, 추천코스 로 구분됨)
  // const nature = tourCategoryArr.includes("A01");
  // const humanities = tourCategoryArr.includes("A02");
  // const sports = tourCategoryArr.includes("A03");
  // const shopping = tourCategoryArr.includes("A04");
  // const food = tourCategoryArr.includes("A05");
  // const lodgment = tourCategoryArr.includes("B02");
  // const recommendedCourse = tourCategoryArr.includes("C01");

  // What else에 카테고리 버튼을 제어하기 위한 변수
  const [entireBtn, setEntireBtn] = useState(true);
  const [natureBtn, setNatureBtn] = useState(false);
  const [humanitiesBtn, setHumanitiesBtn] = useState(false);
  const [sportsBtn, setSportsBtn] = useState(false);
  const [shoppingBtn, setShoppingBtn] = useState(false);
  const [foodBtn, setFoodBtn] = useState(false);
  const [lodgmentBtn, setLodgmentBtn] = useState(false);
  const [recommendedCourseBtn, setRecommendedCourseBtn] = useState(false);

  return (
    <>
      <Title>What else</Title>

      <div>
        <Button
          isClick={entireBtn}
          onClick={() => {
            setEntireBtn(!entireBtn);
            setNatureBtn(false);
            setHumanitiesBtn(false);
            setSportsBtn(false);
            setShoppingBtn(false);
            setFoodBtn(false);
            setLodgmentBtn(false);
            setRecommendedCourseBtn(false);
          }}
        >
          전체
        </Button>

        {/* {nature && (
          <Button
            isClick={natureBtn}
            onClick={() => {
              setEntireBtn(false);
              setNatureBtn(!natureBtn);
            }}
          >
            자연
          </Button>
        )}

        {humanities && (
          <Button
            isClick={humanitiesBtn}
            onClick={() => {
              setEntireBtn(false);
              setHumanitiesBtn(!humanitiesBtn);
            }}
          >
            인문
          </Button>
        )}

        {sports && (
          <Button
            isClick={sportsBtn}
            onClick={() => {
              setEntireBtn(false);
              setSportsBtn(!sportsBtn);
            }}
          >
            레포츠
          </Button>
        )}

        {shopping && (
          <Button
            isClick={shoppingBtn}
            onClick={() => {
              setEntireBtn(false);
              setShoppingBtn(!shoppingBtn);
            }}
          >
            쇼핑
          </Button>
        )}

        {food && (
          <Button
            isClick={foodBtn}
            onClick={() => {
              setEntireBtn(false);
              setFoodBtn(!foodBtn);
            }}
          >
            음식
          </Button>
        )}

        {lodgment && (
          <Button
            isClick={lodgmentBtn}
            onClick={() => {
              setEntireBtn(false);
              setLodgmentBtn(!lodgmentBtn);
            }}
          >
            숙박
          </Button>
        )}

        {recommendedCourse && (
          <Button
            isClick={recommendedCourseBtn}
            onClick={() => {
              setEntireBtn(false);
              setRecommendedCourseBtn(!recommendedCourseBtn);
            }}
          >
            추천코스
          </Button>
        )} */}
      </div>

      {openModal && <ViewMoreModal setOpenModal={setOpenModal} />}

      {entireBtn && <Entire tourData={tourList} setOpenModal={setOpenModal} />}
      {/* {natureBtn && <Nature tourData={natureData} />}
      {humanitiesBtn && <Humanities tourData={humanitiesData} />}
      {sportsBtn && <Sports tourData={sportsData} />}
      {shoppingBtn && <Shopping tourData={shoppingData} />}
      {foodBtn && <Food tourData={foodData} />}
      {lodgmentBtn && <Lodgment tourData={lodgmentData} />}
      {recommendedCourseBtn && (
        <RecommendedJCourse tourData={recommendedCourseData} />
      )} */}
    </>
  );
};

const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 55px;
  font-weight: 700;
  color: #121212;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-right: 15px;
  border: 2px solid #1dc6d1;
  padding: 14px 24px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 22px;
  font-weight: 600;
  background-color: ${(props) => (props.isClick ? "#1dc5d1;" : "#fff;")};
  color: ${(props) => (props.isClick ? "#fff;" : "#1dc5d1;")};
`;

export default DetailWhatElse;
