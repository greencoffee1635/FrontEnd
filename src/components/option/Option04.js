import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import left_arrow from "../../images/left_arrow.png";
import right_arrow from "../../images/right_arrow.png";
import search from "../../images/search.png";
import deleteImg from "../../images/deleteImg.png";

import LocationList from "./LocationList";
import { LocationCodeData } from "./LocationList";

// shared
import Header from "../../shared/Header";

import { setAreaCode } from "../../redux/modules/option";

function Option04(props) {
  const [startPoint, setStartPoint] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const dispatch = useDispatch();

  return (
    <>
      <Header page="main" />
      <Container>
        <QuestionBox>
          <div>
            <Number>4 / 7</Number>
            <Question>어디서 출발하시나요?</Question>
          </div>
          <SearchBox>
            <SearchInput
              placeholder="시/구까지 입력하세요"
              onChange={(e) => {
                setSearchValue(e.target.value);
                const filtered = LocationList.filter((location) => {
                  return location.includes(e.target.value);
                });
                setFilteredList(filtered);
              }}
              value={searchValue}
            ></SearchInput>
            <SearchButton>
              <img src={search} alt="" width="25px" />
            </SearchButton>
            {startPoint !== "" ? (
              <StartPointResult>
                {startPoint}
                <DeleteButton
                  onClick={() => {
                    setStartPoint("");
                  }}
                >
                  <img src={deleteImg} alt="deleteImg" />
                </DeleteButton>
              </StartPointResult>
            ) : null}
          </SearchBox>
          {searchValue !== "" ? (
            <SearchList>
              {filteredList.map((location, idx) => {
                return (
                  <SearchItem
                    key={idx}
                    onClick={() => {
                      setStartPoint(location);
                      for (const locationcode in LocationCodeData) {
                        if (location.includes(locationcode)) {
                          // console.log(LocationCodeData[locationcode]);
                          dispatch(setAreaCode(LocationCodeData[locationcode]));
                          break;
                        }
                      }
                      setSearchValue("");
                    }}
                  >
                    {location}
                  </SearchItem>
                );
              })}
            </SearchList>
          ) : null}
        </QuestionBox>

        <PageMoveBox>
          <ButtonWrap>
            <PastButton
              onClick={() => {
                props.history.push("/Option03");
              }}
            >
              <img src={left_arrow} alt="" width="25px" />
            </PastButton>
            <NextButton
              onClick={() => {
                props.history.push("/Option05");
              }}
            >
              <Text>
                다음으로
                <img
                  src={right_arrow}
                  alt=""
                  width="25px"
                  style={{ margin: "0 0 -4px 13px" }}
                />
              </Text>
            </NextButton>
          </ButtonWrap>
        </PageMoveBox>
      </Container>
    </>
  );
}

const StartPointResult = styled.span``;

const DeleteButton = styled.button``;

const Container = styled.div`
  width: 72rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const QuestionBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Number = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #bbbbbb;
`;

const Question = styled.p`
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: 1rem;
`;

const SearchBox = styled.div`
  width: 100%;
  border-radius: 125px;
  margin-top: 7rem;
  box-sizing: border-box;
  display: flex;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 5rem;
  border: 2px solid rgba(29, 198, 209, 0.6);
  border-radius: 125px;
  padding: 0px 0px 0px 20px;
  font-size: 1.5rem;
  color: #bbbbbb;
  :focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  margin-right: 1rem;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SearchList = styled.ul`
  width: 100%;
  height: 30rem;
  padding: 0px 0px 0px 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    border-radius: 6px;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(226, 226, 226, 0.9);
  }
`;

const SearchItem = styled.li`
  font-size: 2.1rem;
  margin-top: 4rem;
  color: #484848;
`;

const PageMoveBox = styled.div`
  width: 50%;
  margin-top: 23rem;
  z-index: 10;
`;

const ButtonWrap = styled.div`
  height: 100%;
  justify-content: space-between;
  display: flex;
`;

const PastButton = styled.button`
  width: 5.5rem;
  height: 5.5rem;
  background-color: #bbbbbb;
  border: none;
  border-radius: 2.75rem;
  cursor: pointer;
  padding: 11px;
`;

const NextButton = styled.button`
  width: 24rem;
  height: 5.5rem;
  border: none;
  border-radius: 2.75rem;
  background-color: #1dc6d1;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Text = styled.p`
  font-weight: 600;
`;

export default Option04;
