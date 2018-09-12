import styled from "styled-components"

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
  width: 90%;
  height: 98%;
  background-color: black;
  @media screen and (min-width:700px) {
    width: 80%;
  }
  @media screen and (min-width:800px) {
    width: 70%;
  }
  @media screen and (min-width:1000px) {
    width: 60%;
  }
  @media screen and (min-width:1100px) {
    width: 55%;
  }
  @media screen and (min-width:1200px) {
    width: 50%;
  }
  @media screen and (min-width:1400px) {
    width: 40%;
  }
  @media screen and (min-width:1600px) {
    width: 30%;
  }
  @media screen and (min-width:2000px) {
    width: 25%;
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
  max-height: 90%;
  overflow: visible;
  margin-bottom: 2vh;
  @media screen and (min-width:1400px) {
    width: 90%;
  }
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
  padding: 15px;
  height: 12vh;
  min-width: 10%;
  max-width: 10%;
  color: black;
  background-color: white;
  border: 1px solid black;
  font-size: 10px;
  @media screen and (min-width:550px) {
    min-width: 12%;
    max-width: 12%;
  }
  @media screen and (min-width:900px) {
    font-size: 12px;
  }
  @media screen and (min-width:1200px) {
    height: 18vh;
    font-size: 12px;
  }
  @media screen and (max-height:600px) {
    height: 13vh;
    font-size: 12px;
  }
`;

export const Button = styled.img`
  cursor: pointer;
  height: 20px;
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
  @media screen and (min-width:1400px) {
    height: 30px;
  }
  @media screen and (min-width:1600px) {
    height: 35px;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`