import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// reducer
import detailSlice from "../../../redux/modules/detailSlice";

const AddScheduleModal = (props) => {
  const { tourList, setOpenModal, addScheduleModal, setAddScheduleModal } =
    props;

  const dispatch = useDispatch();

  const isModal = useRef();

  const [tourData, setTourData] = useState(tourList);
  // console.log("스케줄모달", tourData);

  const clickOutsideModal = useCallback((e) => {
    if (
      addScheduleModal &&
      (!isModal.current || !isModal.current.contains(e.target))
    ) {
      setAddScheduleModal(false);
    }
  });

  const handleChange = (result) => {
    if (!result.destination) {
      return;
    }
    console.log(result);

    const items = [...tourData];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTourData(items);
  };

  useEffect(() => {
    document.addEventListener("click", clickOutsideModal);

    return () => {
      document.removeEventListener("click", clickOutsideModal);
    };
  });

  return (
    <>
      <OutArea>
        <Modal ref={isModal}>
          <TourContainer>
            <DragDropContext onDragEnd={handleChange}>
              <Droppable droppableId="tour_data">
                {(provided) => (
                  <ul
                    className="tour_data"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {tourData.map((data, idx) => (
                      <Draggable
                        key={data.contentid}
                        draggableId={data.contentid}
                        index={idx}
                      >
                        {(provided) => (
                          <Li
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            {data.title}
                          </Li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </TourContainer>

          <AddBtnBox>
            <button
              onClick={() => {
                setAddScheduleModal(false);
                setOpenModal(true);
              }}
            >
              뒤로가기
            </button>
            <button
              onClick={() => {
                setAddScheduleModal(false);
                dispatch(detailSlice.actions.addTourList(tourData));
              }}
            >
              추가하기
            </button>
          </AddBtnBox>
        </Modal>
      </OutArea>
    </>
  );
};

const OutArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  z-index: 98;
`;

const Modal = styled.div`
  position: fixed;
  top: 9rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 79rem;
  height: 83rem;
  border-radius: 2rem;
  z-index: 99;
  background-color: #fff;
`;

const TourContainer = styled.div`
  width: 100%;
  font-size: 2.5rem;
  padding: 2rem;
  box-sizing: border-box;
`;

const Li = styled.li`
  border: 1px solid #000;
  margin: 5px 0px;
  padding: 5px;
`;

const AddBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & button {
    margin: 0 0.5rem 0;
  }
`;

export default AddScheduleModal;
