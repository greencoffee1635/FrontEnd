import React, { useState } from "react";
import styled from "styled-components";

// components
import WhatElseLayout from "./what-else-components/WhatElseLayout";
import ViewMoreModal from "./what-else-components/ViewMoreModal";
import AddScheduleModal from "./what-else-components/AddScheduleModal";

const DetailWhatElse = (props) => {
  // 서버에서 받아온 데이터
  const { whatElse } = props;
  // console.log("what else", whatElse);

  // what else 모달 제어하기 위한 변수
  const [openModal, setOpenModal] = useState(false);
  const [addScheduleModal, setAddScheduleModal] = useState(false);

  const keys = Object.keys(whatElse);
  // const values = Object.values(whatElse);
  // const entires = Object.entries(whatElse);
  // console.log("keys", keys);
  // console.log("values", values);
  // console.log("entires", entires);

  // 여행 카테고리별 데이터
  const natureSpotData = whatElse && whatElse["A0101"];
  const tourismResourcesData = whatElse && whatElse["A0102"];

  const historyData = whatElse && whatElse["A0201"];

  const vacationSpotData = whatElse && whatElse["A0202"];

  const experienceData = whatElse && whatElse["A0203"];
  const leisureSportIntroData = whatElse && whatElse["A0301"];
  const athleticsData = whatElse && whatElse["A0302"];
  const waterData = whatElse && whatElse["A0303"];
  const airData = whatElse && whatElse["A0304"];
  const complexData = whatElse && whatElse["A0305"];

  const industrialTouristData = whatElse && whatElse["A0204"];
  const constructData = whatElse && whatElse["A0205"];
  const cultureData = whatElse && whatElse["A0206"];

  const restaurantData = whatElse && whatElse["A0502"];

  const familyCourseData = whatElse && whatElse["C0112"];
  const aloneCourseData = whatElse && whatElse["C0113"];
  const healingCourseData = whatElse && whatElse["C0114"];
  const roadCourseData = whatElse && whatElse["C0115"];
  const tasteCourseData = whatElse && whatElse["C0117"];

  // 카테고리 (힐링, 역사, 휴양관광지, 액티비티, 문화예술, 음식점, 가족코스, 나홀로코스, 힐링코스, 도보코스, 맛코스)
  const _natureSpot = keys.includes("A0101");
  const _tourismResources = keys.includes("A0102");

  const _history = keys.includes("A0201");

  const _vacationSpot = keys.includes("A0202");

  const _experience = keys.includes("A0203");
  const _leisureSportIntro = keys.includes("A0301");
  const _athletics = keys.includes("A0302");
  const _water = keys.includes("A0303");
  const _air = keys.includes("A0304");
  const _complex = keys.includes("A0305");

  const _industrialTourist = keys.includes("A0204");
  const _construct = keys.includes("A0205");
  const _culture = keys.includes("A0206");

  const _restaurant = keys.includes("A0502");

  const _familyCourse = keys.includes("C0112");
  const _aloneCourse = keys.includes("C0113");
  const _healingCourse = keys.includes("C0114");
  const _roadCourse = keys.includes("C0115");
  const _tasteCourse = keys.includes("C0117");

  // What else에 카테고리 버튼을 제어하기 위한 변수
  const [entireBtn, setEntireBtn] = useState(true);
  const [natureSpotBtn, setNatureSpotBtn] = useState(false);
  const [tourismResourcesBtn, setTourismResourcesBtn] = useState(false);
  const [historyBtn, setHistoryBtn] = useState(false);
  const [vacationSpotBtn, setVacationSpotBtn] = useState(false);
  const [experienceBtn, setExperienceBtn] = useState(false);
  const [leisureSportIntroBtn, setLeisureSportIntroBtn] = useState(false);
  const [athleticsBtn, setAthleticsBtn] = useState(false);
  const [waterBtn, setWaterBtn] = useState(false);
  const [airBtn, setAirBtn] = useState(false);
  const [complexBtn, setComplexBtn] = useState(false);
  const [industrialTouristBtn, setIndustrialTouristBtn] = useState(false);
  const [constructBtn, setConstructBtn] = useState(false);
  const [cultureBtn, setCultureBtn] = useState(false);
  const [restaurantBtn, setRestaurantBtn] = useState(false);
  const [familyCourseBtn, setFamilyCourseBtn] = useState(false);
  const [aloneCourseBtn, setAloneCourseBtn] = useState(false);
  const [healingCourseBtn, setHealingCourseBtn] = useState(false);
  const [roadCourseBtn, setRoadCourseBtn] = useState(false);
  const [tasteCourseBtn, setTasteCourseBtn] = useState(false);

  return (
    <>
      <Title>What else</Title>
      <div>
        <Button
          isClick={entireBtn}
          onClick={() => {
            setEntireBtn(!entireBtn);
            setNatureSpotBtn(false);
            setTourismResourcesBtn(false);
            setHistoryBtn(false);
            setVacationSpotBtn(false);
            setExperienceBtn(false);
            setLeisureSportIntroBtn(false);
            setAthleticsBtn(false);
            setWaterBtn(false);
            setAirBtn(false);
            setComplexBtn(false);
            setIndustrialTouristBtn(false);
            setConstructBtn(false);
            setCultureBtn(false);
            setRestaurantBtn(false);
            setFamilyCourseBtn(false);
            setAloneCourseBtn(false);
            setHealingCourseBtn(false);
            setRoadCourseBtn(false);
            setTasteCourseBtn(false);
          }}
        >
          전체
        </Button>

        {_natureSpot && (
          <Button
            isClick={natureSpotBtn}
            onClick={() => {
              setEntireBtn(false);
              setNatureSpotBtn(!natureSpotBtn);
            }}
          >
            자연관광지
          </Button>
        )}

        {_tourismResources && (
          <Button
            isClick={tourismResourcesBtn}
            onClick={() => {
              setEntireBtn(false);
              setTourismResourcesBtn(!tourismResourcesBtn);
            }}
          >
            관광자원
          </Button>
        )}

        {_history && (
          <Button
            isClick={historyBtn}
            onClick={() => {
              setEntireBtn(false);
              setHistoryBtn(!historyBtn);
            }}
          >
            역사
          </Button>
        )}

        {_vacationSpot && (
          <Button
            isClick={vacationSpotBtn}
            onClick={() => {
              setEntireBtn(false);
              setVacationSpotBtn(!vacationSpotBtn);
            }}
          >
            휴양
          </Button>
        )}

        {_experience && (
          <Button
            isClick={experienceBtn}
            onClick={() => {
              setEntireBtn(false);
              setExperienceBtn(!experienceBtn);
            }}
          >
            체험
          </Button>
        )}

        {_leisureSportIntro && (
          <Button
            isClick={leisureSportIntroBtn}
            onClick={() => {
              setEntireBtn(false);
              setLeisureSportIntroBtn(!leisureSportIntroBtn);
            }}
          >
            레포츠소개
          </Button>
        )}

        {_athletics && (
          <Button
            isClick={athleticsBtn}
            onClick={() => {
              setEntireBtn(false);
              setAthleticsBtn(!athleticsBtn);
            }}
          >
            육상레포츠
          </Button>
        )}

        {_water && (
          <Button
            isClick={waterBtn}
            onClick={() => {
              setEntireBtn(false);
              setWaterBtn(!waterBtn);
            }}
          >
            수상레포츠
          </Button>
        )}

        {_air && (
          <Button
            isClick={airBtn}
            onClick={() => {
              setEntireBtn(false);
              setAirBtn(!airBtn);
            }}
          >
            항공레포츠
          </Button>
        )}

        {_complex && (
          <Button
            isClick={complexBtn}
            onClick={() => {
              setEntireBtn(false);
              setComplexBtn(!complexBtn);
            }}
          >
            복합레포츠
          </Button>
        )}

        {_industrialTourist && (
          <Button
            isClick={industrialTouristBtn}
            onClick={() => {
              setEntireBtn(false);
              setIndustrialTouristBtn(!industrialTouristBtn);
            }}
          >
            산업관광지
          </Button>
        )}

        {_construct && (
          <Button
            isClick={constructBtn}
            onClick={() => {
              setEntireBtn(false);
              setConstructBtn(!constructBtn);
            }}
          >
            건축/조형물
          </Button>
        )}

        {_culture && (
          <Button
            isClick={cultureBtn}
            onClick={() => {
              setEntireBtn(false);
              setCultureBtn(!cultureBtn);
            }}
          >
            문화시설
          </Button>
        )}

        {_restaurant && (
          <Button
            isClick={restaurantBtn}
            onClick={() => {
              setEntireBtn(false);
              setRestaurantBtn(!restaurantBtn);
            }}
          >
            음식점
          </Button>
        )}

        {_familyCourse && (
          <Button
            isClick={familyCourseBtn}
            onClick={() => {
              setEntireBtn(false);
              setFamilyCourseBtn(!familyCourseBtn);
            }}
          >
            가족코스
          </Button>
        )}

        {_aloneCourse && (
          <Button
            isClick={aloneCourseBtn}
            onClick={() => {
              setEntireBtn(false);
              setAloneCourseBtn(!aloneCourseBtn);
            }}
          >
            나홀로코스
          </Button>
        )}

        {_healingCourse && (
          <Button
            isClick={healingCourseBtn}
            onClick={() => {
              setEntireBtn(false);
              setHealingCourseBtn(!healingCourseBtn);
            }}
          >
            힐링코스
          </Button>
        )}

        {_roadCourse && (
          <Button
            isClick={roadCourseBtn}
            onClick={() => {
              setEntireBtn(false);
              setRoadCourseBtn(!roadCourseBtn);
            }}
          >
            도보코스
          </Button>
        )}

        {_tasteCourse && (
          <Button
            isClick={tasteCourseBtn}
            onClick={() => {
              setEntireBtn(false);
              setTasteCourseBtn(!tasteCourseBtn);
            }}
          >
            맛코스
          </Button>
        )}
      </div>

      {openModal && (
        <ViewMoreModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setAddScheduleModal={setAddScheduleModal}
        />
      )}

      {addScheduleModal && (
        <AddScheduleModal
          setOpenModal={setOpenModal}
          addScheduleModal={addScheduleModal}
          setAddScheduleModal={setAddScheduleModal}
        />
      )}

      {entireBtn && (
        <WhatElseLayout category="이런건 어때요?" setOpenModal={setOpenModal} />
      )}
      {natureSpotBtn && (
        <WhatElseLayout
          category="자연관광지"
          data={natureSpotData}
          setOpenModal={setOpenModal}
        />
      )}
      {tourismResourcesBtn && (
        <WhatElseLayout
          category="관광자원"
          data={tourismResourcesData}
          setOpenModal={setOpenModal}
        />
      )}
      {historyBtn && (
        <WhatElseLayout
          category="역사"
          data={historyData}
          setOpenModal={setOpenModal}
        />
      )}
      {vacationSpotBtn && (
        <WhatElseLayout
          category="휴양"
          data={vacationSpotData}
          setOpenModal={setOpenModal}
        />
      )}
      {experienceBtn && (
        <WhatElseLayout
          category="체험"
          data={experienceData}
          setOpenModal={setOpenModal}
        />
      )}
      {leisureSportIntroBtn && (
        <WhatElseLayout
          category="레포츠소개"
          data={leisureSportIntroData}
          setOpenModal={setOpenModal}
        />
      )}
      {athleticsBtn && (
        <WhatElseLayout
          category="육상레포츠"
          data={athleticsData}
          setOpenModal={setOpenModal}
        />
      )}
      {waterBtn && (
        <WhatElseLayout
          category="수상레포츠"
          data={waterData}
          setOpenModal={setOpenModal}
        />
      )}
      {airBtn && (
        <WhatElseLayout
          category="항공레포츠"
          data={airData}
          setOpenModal={setOpenModal}
        />
      )}
      {complexBtn && (
        <WhatElseLayout
          category="복합레포츠"
          data={complexData}
          setOpenModal={setOpenModal}
        />
      )}
      {industrialTouristBtn && (
        <WhatElseLayout
          category="산업관광지"
          data={industrialTouristData}
          setOpenModal={setOpenModal}
        />
      )}
      {constructBtn && (
        <WhatElseLayout
          category="건축/조형물"
          data={constructData}
          setOpenModal={setOpenModal}
        />
      )}
      {cultureBtn && (
        <WhatElseLayout
          category="문화시설"
          data={cultureData}
          setOpenModal={setOpenModal}
        />
      )}
      {restaurantBtn && (
        <WhatElseLayout
          category="음식점"
          data={restaurantData}
          setOpenModal={setOpenModal}
        />
      )}
      {familyCourseBtn && (
        <WhatElseLayout
          category="가족코스"
          data={familyCourseData}
          setOpenModal={setOpenModal}
        />
      )}
      {aloneCourseBtn && (
        <WhatElseLayout
          category="나홀로코스"
          data={aloneCourseData}
          setOpenModal={setOpenModal}
        />
      )}
      {healingCourseBtn && (
        <WhatElseLayout
          category="힐링코스"
          data={healingCourseData}
          setOpenModal={setOpenModal}
        />
      )}
      {roadCourseBtn && (
        <WhatElseLayout
          category="도보코스"
          data={roadCourseData}
          setOpenModal={setOpenModal}
        />
      )}
      {tasteCourseBtn && (
        <WhatElseLayout
          category="맛코스"
          data={tasteCourseData}
          setOpenModal={setOpenModal}
        />
      )}
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
