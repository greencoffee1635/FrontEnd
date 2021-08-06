import React, { useState } from "react";
import styled from "styled-components";

// components
import DetailModal from "./DetailModal";

const DetailSchedule = ({ list, setViewport }) => {
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
            latitude: parseFloat(list.mapy),
            longitude: parseFloat(list.mapx),
            level: 5,
          });
          openModal();
        }}
      >
        {list.title}
        {/* {list.title} */}
      </Schedule>
      {isModalOpen && <DetailModal list={list} closeModal={closeModal} />}
    </>
  );
};

const Schedule = styled.li`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  list-style: inside;
  margin-bottom: 40px;

  &:hover {
    cursor: pointer;
    color: #1dc6d1;
    text-decoration: underline;
  }
`;

export default DetailSchedule;
