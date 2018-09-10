import React, { Component } from "react";
import { ModalContainer, ModalContent, Card } from "./style.js"

export default class CardView extends Component {
  render() {
    return (
      <ModalContainer>
        <ModalContent>
          <Card>Card</Card>
        </ModalContent>
      </ModalContainer>
    );
  }
}
