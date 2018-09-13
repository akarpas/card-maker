import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Cards, Line, Card, Button, Overlay, Buttons, CardPage } from "./style"
import SaveIcon from "../../assets/save.png"
import CloseIcon from "../../assets/close.png"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import _ from "lodash"

class PrintView extends Component {
  state = {
    width: window.innerWidth
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.addEventListener('resize', null)
  }
  print = () => {

    const { width } = this.state
    const input = document.getElementById('divToPrint');

    html2canvas(input, width > 1600 ? { scale: 1 } : { scale: 1.4} )
      .then((canvas) => {
        var imgWidth = 210
        var pageHeight = 295
        var imgHeight = canvas.height * imgWidth / canvas.width
        var heightLeft = imgHeight
        var position = 0

        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm')
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          pdf.addPage()
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight
        }
        pdf.save('download.pdf')
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
    const cardPages = _.chunk(cards, 12)

    return (
      <Overlay>
        <Container>
          <Buttons>
            <Button onClick={this.print} src={SaveIcon}></Button>
            <Button onClick={this.back} src={CloseIcon}></Button>
          </Buttons>
          <Cards id="divToPrint">
          {cards &&
            _.map(cardPages, page => {
              return (
                <CardPage>
                {_.map(page, (card, index) => {
                  const cardNumber = cards.length - 1 - index
                  return (
                    <Card id={cardNumber} key={`${cardNumber}-card`}>
                      <Line>{card.text}</Line>
                    </Card>)
                })}
                </CardPage>
              )
            })
          }
          </Cards>
        </Container>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(PrintView)