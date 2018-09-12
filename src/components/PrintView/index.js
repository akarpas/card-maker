import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Cards, Line, Card, Button, Overlay, Buttons } from "./style"
import SaveIcon from "../../assets/save.png"
import CloseIcon from "../../assets/close.png"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

class PrintView extends Component {
  state = {
    width: window.innerWidth
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }
  print = () => {
    const { width } = this.state
    const input = document.getElementById('divToPrint');
    html2canvas(input, width > 1600 ? { scale: 1 } : { scale: 1.4} )
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      });
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  back = event => {
    event.stopPropagation()
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { cards } = this.props

    return (
      <Overlay>
        <Container>
          <Buttons>
            <Button onClick={this.print} src={SaveIcon}></Button>
            <Button onClick={this.back} src={CloseIcon}></Button>
          </Buttons>
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