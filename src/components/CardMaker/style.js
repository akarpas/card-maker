import styled from "styled-components"

export const DrawerButton = styled.img`
  cursor: pointer;
  @media screen and (min-width:1200px) {
    display: none
  }
`

export const Container = styled.div`
  border: 1px solid white;
  padding: 1vh 1vw;
  width: 90%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  @media screen and (min-width:1200px) {
    max-height: 70vh;
    min-height: 70vh;
    width: 50%;
    margin: 0 1vw;
  }
`