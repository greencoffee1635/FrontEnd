import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";

// reducer
import detailSlice from "../../../redux/modules/detailSlice";

const AddScheduleModal = (props) => {
  const {
    course,
    setOpenModal,
    addScheduleModal,
    setAddScheduleModal,
    detailData,
  } = props;
  console.log("add schedule", detailData);
  console.log("course", course);

  const dispatch = useDispatch();

  const trashData = useSelector((state) => state.detail.trash);
  console.log("trash data", trashData);

  const isModal = useRef();

  const [tourData, setTourData] = useState({
    new: {
      title: "새로운 장소",
      items: [detailData],
    },
    currentSchedule: {
      title: "현재 스케줄",
      items: [...course],
    },
    trash: {
      title: "이건 뺄래요",
      items: [...trashData],
    },
  });
  console.log("스케줄모달", tourData);

  const clickOutsideModal = useCallback((e) => {
    if (
      addScheduleModal &&
      (!isModal.current || !isModal.current.contains(e.target))
    ) {
      setAddScheduleModal(false);
    }
  });

  useEffect(() => {
    document.addEventListener("click", clickOutsideModal);

    return () => {
      document.removeEventListener("click", clickOutsideModal);
    };
  });

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    // 출발지
    console.log("from (source)", source);
    // 목적지
    console.log("to (destination)", destination);

    if (!destination) {
      console.log("Drop 할 수 없는 공간입니다.");
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      console.log("같은 장소에 drop합니다.");
      return;
    }

    // 마우스로 잡은 아이템
    const itemCopy = { ...tourData[source.droppableId].items[source.index] };

    setTourData((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  return (
    <>
      <OutArea>
        <Modal ref={isModal}>
          <TourContainer>
            <DragDropContext onDragEnd={handleDragEnd}>
              {_.map(tourData, (data, key) => {
                return (
                  <Column key={key}>
                    <h3>{data.title}</h3>
                    <Droppable droppableId={key}>
                      {(provided) => {
                        return (
                          <DroppableCol
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            {data.items.map((element, index) => {
                              return (
                                <Draggable
                                  key={element.contentid}
                                  index={index}
                                  draggableId={element.contentid.toString()}
                                >
                                  {(provided) => {
                                    return (
                                      <Item
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        {element.title}
                                      </Item>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </DroppableCol>
                        );
                      }}
                    </Droppable>
                  </Column>
                );
              })}
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
                dispatch(
                  detailSlice.actions.addTourList(
                    tourData.currentSchedule.items
                  )
                );
                dispatch(detailSlice.actions.addTrash(tourData.trash.items));
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
  display: flex;
  justify-content: space-around;
`;

const Column = styled.div`
  width: 25%;
`;

const DroppableCol = styled.div`
  width: 100%;
  background-color: gray;
  padding: 10px 10px 0 10px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  margin-bottom: 10px;
  color: #fff;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 7px;
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
