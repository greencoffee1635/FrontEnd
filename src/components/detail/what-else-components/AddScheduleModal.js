import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgArrowsVAlt } from "react-icons/cg";
import { BiRestaurant } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

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
      title: "NEW",
      items: [detailData],
    },
    currentSchedule: {
      title: "CURRENT",
      items: [...course],
    },
    trash: {
      title: "TRASH",
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
              <Div>
                <AddBtnBox>
                  <Button
                    onClick={() => {
                      setAddScheduleModal(false);
                      setOpenModal(true);
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    isApply
                    onClick={() => {
                      setAddScheduleModal(false);
                      dispatch(
                        detailSlice.actions.addTourList(
                          tourData.currentSchedule.items
                        )
                      );
                      dispatch(
                        detailSlice.actions.addTrash(tourData.trash.items)
                      );
                    }}
                  >
                    적용
                  </Button>
                </AddBtnBox>
                <Title>
                  <h1>Schedule</h1>
                  <span>드래그해서 일정을 원하는 위치에 추가해보세요</span>
                </Title>
                {_.map(tourData, (data, key) => {
                  return (
                    <>
                      <Column key={key}>
                        <H3>{data.title}</H3>
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
                                          >
                                            <Circle>
                                              {element.cat2 === "A0502" ? (
                                                <BiRestaurant />
                                              ) : element.cat2 === "A0203" ||
                                                element.cat2 === "A0301" ||
                                                element.cat2 === "A0302" ||
                                                element.cat2 === "A0303" ||
                                                element.cat2 === "A0304" ||
                                                element.cat2 === "A0305" ? (
                                                <FiActivity />
                                              ) : (
                                                <FaMapMarkerAlt />
                                              )}
                                            </Circle>
                                            <span>{element.title}</span>
                                            <span {...provided.dragHandleProps}>
                                              <CgArrowsVAlt />
                                            </span>
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
                    </>
                  );
                })}
              </Div>
            </DragDropContext>
          </TourContainer>
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
`;

const TourContainer = styled.div`
  width: 100%;
  font-size: 2.5rem;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  width: 100%;
`;

const DroppableCol = styled.div`
  width: 100%;
  border: 1px solid #1dc6d1;
  /* background-color: gray; */
  padding: 10px 10px 0 10px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: right;
`;

const Item = styled.div`
  margin-bottom: 10px;
  color: #000;
  background-color: #f2f2f2;
  /* border: 1px solid #000; */
  padding: 20px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & span:nth-child(2) {
    margin-left: 5rem;
  }
`;

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: -8px;
  box-shadow: 0px 0px 15px -4px gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & button {
    margin: 0 0.5rem 0;
  }
`;

const Button = styled.button`
  width: 10.6rem;
  height: 3.7rem;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 1rem;
  ${(props) =>
    props.isApply ? "background-color: #1DC6D1;" : "background-color: #909090;"}

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  & h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  & span {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const H3 = styled.h3`
  margin: 2rem 0 0.4rem 0;
`;

export default AddScheduleModal;
