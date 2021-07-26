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

        <Text bold size="20px" margin="35px">어떤 여행을 원하시나요?</Text>

        <div>
        <Button 
          width="130px" 
          height="130px" 
          margin="10px" 
          fontSize="17px"
          fontWeight="400"
          color="black"
          borderRadius="30px"
          backgroundColor="#f5f6f7;"
          >옵션1
        </Button>
        <Button 
          width="130px" 
          height="130px" 
          margin="10px" 
          fontSize="17px"
          fontWeight="400"
          color="black"
          borderRadius="30px"
          backgroundColor="#f5f6f7;"
          >옵션2
        </Button>
        </div>

        <div>
        <Button 
          width="130px" 
          height="130px" 
          margin="10px" 
          fontSize="17px"
          fontWeight="400"
          color="black"
          borderRadius="30px"
          backgroundColor="#f5f6f7;"
          >옵션3
        </Button>
        <Button 
          width="130px" 
          height="130px" 
          margin="10px" 
          fontSize="17px"
          fontWeight="400"
          color="black"
          borderRadius="30px"
          backgroundColor="#f5f6f7;"
          >옵션4
        </Button>
        </div>

        <Button 
          width="300px" 
          height="50px" 
          margin="80px" 
          fontSize="18px"
          backgroundColor="black"
        >제출하기
        </Button>
    
      </Container>
    </>
  );
}

  
  export default Option01;