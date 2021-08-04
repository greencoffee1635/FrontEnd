import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// components
import DetailSchedule from "./DetailSchedule";

const { kakao } = window;

const DetailMap = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 37.5334919,
    longitude: 126.9863622,
    level: 7,
  });

  const tourList = useSelector((state) => state.detail.tourList);

  const location = [
    {
      name: "은평역사한옥박물관",
      latitude: 37.6403324,
      longitude: 126.9380102,
      address: "서울 은평구 연서로50길 8 은평역사한옥박물관",
    },
    {
      name: "금성당",
      latitude: 37.6351354,
      longitude: 126.9253799,
      address: "서울특별시 은평구 진관2로 57-23",
    },
    {
      name: "김광석거리",
      latitude: 35.860332,
      longitude: 128.6044187,
      address: "대구 중구 대봉동 6-11",
    },
    {
      name: "해운대",
      latitude: 35.1587142,
      longitude: 129.1516294,
      address: "부산 해운대구 우동",
    },
  ];

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
    tourList &&
      tourList.forEach((list) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(
            parseFloat(list.mapy),
            parseFloat(list.mapx)
          ),
          title: list.title,
        });

        marker.setMap(map);

        // const customOverlay = new kakao.maps.CustomOverlay({
        //   position: new kakao.maps.LatLng(
        //     parseFloat(list.mapy),
        //     parseFloat(list.mapx)
        //   ),
        //   zIndex: 3,
        //   map: map,
        // });
        // customOverlay.setMap(map);
      });

    // location.forEach((loc) => {
    //   const marker = new kakao.maps.Marker({
    //     map: map,
    //     position: new kakao.maps.LatLng(loc.latitude, loc.longitude),
    //     title: loc.name,
    //   });

    //   const customOverlay = new kakao.maps.CustomOverlay({
    //     position: new kakao.maps.LatLng(loc.latitude, loc.longitude),
    //     zIndex: 3,
    //     map: map,
    //   });
    //   customOverlay.setMap(map);
    // });
  }, [viewport]);

  return (
    <>
      <div style={{ width: "100%", height: "650px" }}>
        <MapContainer>
          <Map id="map"></Map>
          <Schedule>
            <ScheduleTitle>추천장소</ScheduleTitle>
            <ScheduleList>
              {tourList &&
                tourList.map((list, idx) => (
                  <DetailSchedule
                    key={idx}
                    list={list}
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
  font-size: 55px;
  font-weight: 600;
  margin: 0px 0px 60px 0px;
`;

const ScheduleList = styled.ul`
  height: 504px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: #f2f2f2;
    width: 10px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1dc6d1;
    border-radius: 5px;
  }
  /* &::-webkit-scrollbar-track {
    background-color: grey;
  } */
`;

export default DetailMap;
