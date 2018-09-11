import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Cards, Line, Card, Button, Overlay } from "./style"
import SaveIcon from "../../assets/save.png"

class PrintView extends Component {
  print = () => {

  }

  render() {
    const { cards } = this.props
    return (
      <Overlay>
        <Container>
          <Button onClick={this.print} src={SaveIcon}></Button>
          {cards &&
            (<Cards id="divToPrint">
              {
                cards.slice(0).reverse().map((card, index) => {
                  const cardNumber = cards.length - 1 - index
                  return (
                    <Card id={cardNumber} key={`${cardNumber}-card`}>
                        <Line>{card.text}</Line>
                    </Card>
                  )
                })
              }
            </Cards>)
          }
        </Container>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(PrintView)