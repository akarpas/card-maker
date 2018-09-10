import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 2%;
  padding: 1vh 1vw;
  margin: 2vh 0;
  width: 90%;
`;

export const Cards = styled.div.attrs({
  className: "cards",
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div.attrs({
  className: "card",
})`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  height: 250px;
  min-width: 35%;
  border: 1px solid white;
  @media screen and (min-width:1000px) {
    min-width: 22%;
  }
  @media screen and (min-width:1600px) {
    min-width: 10%;
  }
`;

export const Line = styled.p`
  text-align: center;
`