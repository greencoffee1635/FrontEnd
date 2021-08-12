import React, { useState } from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

// components
import DetailModal from "./DetailModal";

const DetailSchedule = ({ data, setViewport }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Schedule
        onClick={() => {
          setViewport({
            latitude: parseFloat(data.mapy),
            longitude: parseFloat(data.mapx),
            level: 5,
          });
          openModal();
        }}
      >
        <Div>
          <Circle>
            {data.cat2 === "A0502" ? (
              <BiRestaurant />
            ) : data.cat2 === "A0203" ||
              data.cat2 === "A0301" ||
              data.cat2 === "A0302" ||
              data.cat2 === "A0303" ||
              data.cat2 === "A0304" ||
              data.cat2 === "A0305" ? (
              <FiActivity />
            ) : (
              <FaMapMarkerAlt />
            )}
          </Circle>
          {data && data.title}
        </Div>
      </Schedule>
      {isModalOpen && <DetailModal data={data} closeModal={closeModal} />}
    </>
  );
};

const Schedule = styled.li`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  /* list-style: inside; */
  margin-bottom: 40px;

  &:hover {
    cursor: pointer;
    color: #1dc6d1;
    text-decoration: underline;
  }
`;

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #1dc6d1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8rem;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

export default DetailSchedule;
