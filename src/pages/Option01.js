import React from "react";
import styled from "styled-components"

// shared
import Header from "../shared/Header";
import Container from "../shared/Container";

// elements
import Button from "../elements/Button";
import Text from "../elements/Text";

// components

// css


function Option01(props) {
  return (
    <>
      <Header />
      <Container  justifyContent="center">
      
        <Text bold size="20px" margin="35px">출발 예정일을 알려주세요</Text>

        <Text bold size="20px" margin="35px">정확한 날짜가 미정이라면 월만 정해주세요</Text>
        
        <Button 
          width="20vw" 
          height="50px" 
          margin="80px" 
          fontSize="18px"
          backgroundColor="black"
        >다음으로
        </Button>
      
      </Container>
    </>
  );
}

  
  export default Option01;