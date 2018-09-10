import styled from "styled-components"

 export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  font-size: 20px;
  padding: 10px 0 10px 0;
  z-index: 99;
`

export const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-width: 90%;
  min-height: 90%;
  color: black;
  background-color: white;
`