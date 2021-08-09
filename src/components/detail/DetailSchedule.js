import React, { useState } from "react";
import styled from "styled-components";

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
        {data && data.title}
        {/* {data.title} */}
      </Schedule>
      {isModalOpen && <DetailModal data={data} closeModal={closeModal} />}
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
