import styled from "styled-components"
import { Field } from "redux-form"

export const Label = styled.label`
  font-size: 20px;
  padding: 10px 0 10px 0;
`

export const TextArea = styled(Field)`
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

export const StyledInput = styled(Field)`
  font-size: 20px;
  border-radius: 10px;
`

export const StyledSelect = styled(Field)`
  font-size: 20px;
  background-color: white;
  border-radius: 0;
`

export const Radios = styled.div`
  background-color: white;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  padding: 1vh 1vw;
  border-radius: 5px;
  max-height: 60px;
  min-height: 50px;
  width: 35vw;
  @media screen and (min-width:1200px) {
    width: 10vw;
  }
`

export const RadioInput = styled(Field)`
  cursor: pointer;
  &:checked + label {
    border: 1px solid grey;
    background-color: lightgrey;
  }
`

export const RadioLabelA = styled.label.attrs({
  htmlFor: 'smiley'
})`
  padding-top: 25px;
  border: none;
  border-radius: 5px;
`

export const RadioLabelB = styled.label.attrs({
  htmlFor: 'angry'
})`
  padding-top: 25px;
  border: none;
  border-radius: 5px;
`

export const RadioLabelC = styled.label.attrs({
  htmlFor: 'sad'
})`
  padding-top: 25px;
  border: none;
  border-radius: 5px;
`

export const RadioButton = styled.div`
  cursor: pointer;
  & input[type="radio"] {
    display: none;
  }
`

export const EmojiIcon = styled.img`
  cursor: pointer;
  height: 2em;
  padding: 3px;
`

export const Button = styled.button`
  cursor: pointer;
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

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
`

export const Notice = styled.p`
  font-size: 2em;
  color: #C6A687;
  text-align: center;
`