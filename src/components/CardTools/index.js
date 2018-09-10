import React, { Component } from "react";
import { connect } from "react-redux"
import { Container, Button } from "./style"
import SaveIcon from "../../assets/save.png"
import ExportIcon from "../../assets/export.png"
import ReloadIcon from "../../assets/reload.png"
import * as actions from "../../actions"

class CardTools extends Component {
  clear = event => {
    event.preventDefault()
    this.props.eraseCards()
  }

  load = event => {
    event.preventDefault()
    this.props.getCards()
  }

  render() {
    return (
      <Container>
        <Button onClick={this.clear} src={ReloadIcon}></Button>
        <Button onClick={this.load} src={SaveIcon}></Button>
        <Button src={ExportIcon}></Button>
      </Container>
    );
  }
}

export default connect(null, actions)(CardTools)
