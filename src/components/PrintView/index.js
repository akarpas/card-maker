import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Cards, Line, Card, Button, Overlay } from "./style"
import SaveIcon from "../../assets/save.png"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

class PrintView extends Component {
  print = () => {
    const input = document.getElementById('divToPrint');
    console.warn(input.attributes)
    html2canvas(input)
      .then((canvas) => {
        console.warn(canvas)
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      })
    ;
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