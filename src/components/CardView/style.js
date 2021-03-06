import styled from "styled-components"

 export const ModalContainer = styled.div`
  position: fixed;
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

export const Controls = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  min-width: 50%;
  height: auto;
  color: black;
  background-color: white;
`

export const Control = styled.div`
  cursor: pointer;
  margin: 15px;
`

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  min-width: 50%;
  min-height: 90%;
  color: black;
  background-color: white;
`

export const CardText = styled.textarea`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 28px;
  background-color: rgba(0,0,0,0.2);
  border: 1px solid rgba(0,0,0,0.5);
  text-align: center;
  width: 90%;
  margin: 0 0 2em 0;
  height: 30vh;
`

export const AuthorText = styled.div`
  color: black;
`

export const Emoji = styled.div`
  color: black;
  padding: 20px;
`

export const EmojiIcon = styled.img`
  height: 4em;
`

export const Label = styled.label`
  color: rgba(0,0,0,0.5);
  font-style: italic;
`