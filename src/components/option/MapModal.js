import React from 'react'; 
import styled from "styled-components";


const MapModal = ( {close , title} ) => {
    
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴 
    // const {close} = props; 
    // const title = props.title;

    return ( 
        <ModalBg>
        <Modal>
            <button style={{marginLeft:"145px"}}onClick={close}>X</button>
            <Title> {title} 입니다</Title> 
            <div>도시를 선택해주세요</div>
               
        </Modal>
        </ModalBg>


    ) 

}

export default MapModal;


const ModalBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0);
    z-index: 0;
`;

const Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-30%, -20%);
    max-height: 80%;
    width: 20rem;
    height: 15%;
    padding: 16px;
    background: #fff;
    border: 2px solid #1DC6D1;
    border-radius: 10px;
    text-align: center;
`;

const Title = styled.p`
    font-size : 18px;
    font-weight : bold; 
    margin: 5px;
`;

