import styled from "styled-components"
import {
  Link
} from "react-router-dom"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
`

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 1px solid white;
  margin: 1vh 0;
  width: 95%;
  height: fit-content;
  background-color: black;
  @media screen and (min-width:1000px) {
    width: 70%;
  }
  @media screen and (min-width:1200px) {
    width: 50%;
  }
  @media screen and (min-width:1600px) {
    width: 35%;
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
  height: fit-content;
  margin-bottom: 3000px;
`

export const Line = styled.p`
  text-align: center;
  word-wrap: break-word;
  width: 200px;
  overflow: hidden;
  max-height: 300px;
`

export const Card = styled.div`
  display: flex;
  color: white;
  overflow: hidden;
  text-decoration: none;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  height: 20vh;
  min-width: 12%;
  max-width: 12%;
  color: black;
  background-color: white;
  border: 1px solid black;
  @media screen and (max-height:600px) {
    height: 13vh;
    font-size: 15px;
  }
`;

export const Button = styled.img`
  cursor: pointer;
  height: 35px;
  margin: 0 25px;
  border-radius: 15px;
  background-color: white;
  padding: 10px;
  margin: 5px;
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    background-color: grey;
  }
`