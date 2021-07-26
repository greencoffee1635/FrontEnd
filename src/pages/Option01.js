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
      
        <Text bold size="20px" margin="35px">동행인이 있나요?</Text>

        <Button 
          width="300px" 
          height="50px" 
          margin="10px" 
          fontSize="17px"
          fontWeight="400"
          color="black"
          backgroundColor="#f5f6f7;"
          >네 있습니다.
          </Button>
        
        <Button 
          width="300px" 
          height="50px" 
          margin="10px" 
          fontSize="17px"
          fontWeight="400"
          color="black"
          backgroundColor="#f5f6f7;"
        >아니요 없습니다.
        </Button>
        
        <Button 
          width="300px" 
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