import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { FaMapMarkerAlt, FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { BsList } from "react-icons/bs";

// reducer
import detailSlice from "../../../redux/modules/detailSlice";

const AddScheduleModal = (props) => {
  const dispatch = useDispatch();
  const trashData = useSelector((state) => state.detail.trash);
  const isModal = useRef();

  const {
    course,
    setOpenModal,
    addScheduleModal,
    setAddScheduleModal,
    detailData,
  } = props;
  console.log("add schedule", detailData);
  console.log("course", course);
  console.log("trash data", trashData);

  const [tourData, setTourData] = useState({
    new: {
      title: "NEW",
      items: [detailData],
    },
    currentSchedule: {
      title: "MY SCHEDULE",
      items: [...course],
    },
    trash: {
      title: "TRASH",
      items: [...trashData],
    },
  });
  console.log("스케줄모달", tourData);
  const [isDelete, setIsDelete] = useState(false);
  const [checkedItem, setCheckedItem] = useState([]);
  console.log("checked item", checkedItem);

  useEffect(() => {
    document.addEventListener("click", clickOutsideModal);

    return () => {
      document.removeEventListener("click", clickOutsideModal);
    };
  });

  const checkedItemHandler = (isChecked, contentid) => {
    console.log("id, isChecked", isChecked, contentid);
    if (isChecked) {
      setCheckedItem([...checkedItem, contentid]);
    } else {
      setCheckedItem(checkedItem.filter((item) => item !== contentid));
    }
  };

  const clickOutsideModal = useCallback((e) => {
    if (
      addScheduleModal &&
      (!isModal.current || !isModal.current.contains(e.target))
    ) {
      setAddScheduleModal(false);
    }
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
                  {/* <FaTrashAlt
                    color="#BBBBBB"
                    onClick={() => {
                      setIsDelete(!isDelete);
                    }}
                  /> */}
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
                                          <>
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
                                              <ItemInfo>
                                                <InfoDiv>
                                                  <Img
                                                    src={element.firstimage}
                                                    alt=""
                                                  />
                                                  <span>{element.title}</span>
                                                </InfoDiv>
                                                <span
                                                  {...provided.dragHandleProps}
                                                >
                                                  <BsList />
                                                </span>
                                              </ItemInfo>
                                              <CheckBox>
                                                {isDelete && (
                                                  <input
                                                    type="checkbox"
                                                    onChange={(e) =>
                                                      checkedItemHandler(
                                                        e.target.checked,
                                                        element.contentid
                                                      )
                                                    }
                                                    checked={
                                                      checkedItem.includes(
                                                        element.contentid
                                                      )
                                                        ? true
                                                        : false
                                                    }
                                                  />
                                                  // <FaCheckCircle color="#E2E2E2" />
                                                )}
                                              </CheckBox>
                                            </Item>
                                          </>
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
                <div style={{ width: "100%", height: "95px" }}></div>
              </Div>
            </DragDropContext>
          </TourContainer>

          <BottomDiv>
            <Button
              fontColor="#909090"
              onClick={() => {
                setAddScheduleModal(false);
                setOpenModal(true);
              }}
            >
              취소
            </Button>
            {isDelete ? (
              <Button
                fontColor="#fc6b6b"
                onClick={() => {
                  dispatch(detailSlice.actions.deleteTrash(checkedItem));
                }}
              >
                삭제
              </Button>
            ) : (
              <Button
                fontColor="#1DC6D1"
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
                적용
              </Button>
            )}
          </BottomDiv>
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
    display: none;
  }
`;

const TourContainer = styled.div`
  width: 100%;
  font-size: 2.5rem;
  padding: 4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
`;

const BottomDiv = styled.div`
  width: 79rem;
  height: 95px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0.4rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 0 0 7px 7px;
  box-shadow: 0px 0px 15px -3px gray;
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
  border-bottom: 1px solid #e2e2e2;
  /* background-color: gray; */
  padding: 10px;
  /* border-radius: 7px; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: right;
`;

const AddBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  & button {
    margin: 0 0.5rem 0;
  }
`;

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #1dc6d1;
  margin-right: 4.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #000;
  /* background-color: wheat; */
  /* padding: 20px; */
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* box-shadow: 0px 0px 15px -4px gray; */
  box-sizing: border-box;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49rem;
  /* background-color: green; */
  padding: 20px;
  border-radius: 7px;
  box-shadow: 0px 0px 15px -4px gray;
  background-color: #fff;
`;

const CheckBox = styled.div`
  width: 20px;
  height: 100%;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin-left: 20px;
  }
`;

const Img = styled.img`
  width: 67px;
  height: 67px;
  border-radius: 7px;
`;

const Button = styled.button`
  /* width: 10.6rem;
  height: 3.7rem; */
  border: none;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 1rem;
  background-color: #fff;
  margin: 0 5rem;
  color: ${(props) => props.fontColor};
  /* ${(props) => (props.isDelete ? "color: #fc6b6b;" : props.fontColor)} */

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
