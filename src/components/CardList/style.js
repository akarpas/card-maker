import styled from "styled-components"
import {
  Link
} from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 1px solid white;
  padding: 1vh 1vw;
  margin: 2vh 0;
  width: 90%;
  background-color: black;
  @media screen and (min-width:1200px) {
    max-height: 70vh;
    min-height: 70vh;
    overflow: scroll;
    margin: 0 1vw;
  }
`;

export const Cards = styled.div.attrs({
  className: "cards",
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width:1200px) {
    max-height: 80vh;
  }
`

export const Line = styled.p`
  text-align: center;
  word-wrap: break-word;
  width: 200px;
  overflow: hidden;
  max-height: 300px;
`

export const CardLink = styled(Link)`
  display: flex;
  color: white;
  overflow: hidden;
  text-decoration: none;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  height: 250px;
  min-width: 35%;
  max-width: 35%;
  color: black;
  background-color: white;
  border: 1px solid black;
  @media screen and (min-width:1200px) {
    min-width: 22%;
  }
  @media screen and (min-width:1600px) {
    min-width: 10%;
  }
`;