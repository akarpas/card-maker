import styled from "styled-components"

export const Container = styled.label`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: auto;
  margin: 2vh 0;
  height: 50px;
  border-radius: 15px;
`

export const Button = styled.img`
  cursor: pointer;
  height: 35px;
  margin: 0 25px;
  border-radius: 15px;
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    background-color: grey;
  }
`