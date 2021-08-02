import React, { useState } from "react";
import styled from "styled-components";

// components
import DetailModal from "./DetailModal";

const DetailSchedule = ({ loc, setViewport }) => {
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
            latitude: loc.latitude,
            longitude: loc.longitude,
            level: 5,
          });
          openModal();
        }}
      >
        {loc.name}
      </Schedule>
      {isModalOpen && <DetailModal loc={loc} closeModal={closeModal} />}
    </>
  );
};

const Schedule = styled.li`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  list-style: inside;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    color: #1dc6d1;
    text-decoration: underline;
  }
`;

export default DetailSchedule;
