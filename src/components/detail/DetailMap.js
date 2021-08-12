import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// components
import DetailSchedule from "./DetailSchedule";

// images
import Marker from "../../images/marker.png";

const { kakao } = window;

const DetailMap = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 37.5334919,
    longitude: 126.9863622,
    level: 7,
  });

  const tourList = useSelector((state) => state.detail.tourList);
  const courseData = tourList && tourList.course;
  // console.log(courseData);

  useEffect(() => {
    if (!tourList) {
      return;
    } else {
      var mapContainer = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(viewport.latitude, viewport.longitude),
        level: viewport.level,
      };

      // map
      var map = new kakao.maps.Map(mapContainer, options);
    }

    // marker
    courseData &&
      courseData.forEach((data) => {
        // 마커 이미지
        const imageSize = new kakao.maps.Size(48, 48);

        // 마커 이미지 생성
        const markerImg = new kakao.maps.MarkerImage(Marker, imageSize);

        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data && data.mapy, data && data.mapx),
          title: data && data.title,
          image: markerImg,
        });

        marker.setMap(map);
      });

    // const customOverlay = new kakao.maps.CustomOverlay({
    //   position: new kakao.maps.LatLng(
    //     parseFloat(list.mapy),
    //     parseFloat(list.mapx)
    //   ),
    //   zIndex: 3,
    //   map: map,
    // });
    // customOverlay.setMap(map);
    // });
  }, [viewport]);

  return (
    <>
      <div style={{ width: "100%", height: "650px" }}>
        <MapContainer>
          <Map id="map"></Map>
          <Schedule>
            <ScheduleTitle>Schedule</ScheduleTitle>
            <ScheduleList>
              {courseData &&
                courseData.map((data, idx) => (
                  <DetailSchedule
                    key={idx}
                    data={data}
                    setViewport={setViewport}
                  />
                ))}
            </ScheduleList>
          </Schedule>
        </MapContainer>
      </div>
    </>
  );
};

const MapContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 141px; */
`;

const Map = styled.div`
  width: 42%;
  height: 650px;
`;

const Schedule = styled.div`
  width: 58%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScheduleTitle = styled.h1`
  width: 55%;
  font-size: 55px;
  font-weight: 600;
  margin: 0px 0px 60px 0px;
`;

const ScheduleList = styled.ul`
  height: 504px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 55%;

  &::-webkit-scrollbar {
    background-color: #fff;
    width: 5px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f2f2f2;
    border-radius: 5px;
  }
  /* &::-webkit-scrollbar-track {
    background-color: grey;
  } */
`;

export default DetailMap;
