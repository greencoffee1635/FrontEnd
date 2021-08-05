import React from "react";
import styled from "styled-components";

const ViewMoreModal = (props) => {
  return (
    <>
      <Outter>
        <Modal>hello</Modal>
      </Outter>
    </>
  );
};

const Outter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #808080;
  opacity: 0.5;
`;

const Modal = styled.div`
  width: 56.5rem;
  height: 79rem;
  border-radius: 2rem;
`;

export default ViewMoreModal;
