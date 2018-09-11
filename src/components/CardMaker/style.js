import styled from "styled-components"

 export const Label = styled.label`
  font-size: 20px;
  padding: 10px 0 10px 0;
`

 export const TextArea = styled.textarea`
  resize: none;
  font-size: 20px;
  height: 100px;
  min-height: 80px;
  width: 80vw;
  border-radius: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  @media screen and (min-width:1200px) {
    width: 30vw;
  }
`

 export const StyledInput = styled.input`
  font-size: 20px;
  border-radius: 10px;
`

 export const StyledSelect = styled.select`
  font-size: 20px;
  background-color: white;
  border-radius: 0;
`

 export const Button = styled.button`
  border: 2px solid white;
  background-color: grey;
  padding: 10px;
  margin: 20px;
  font-size: 30px;
  border-radius: 10px;
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    background-color: grey;
  }
`

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

 export const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
`