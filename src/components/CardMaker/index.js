import React, { Component } from "react";
import { connect } from "react-redux"
import ReduxForm from "../ReduxForm"
import { 
  Container,
  DrawerButton
} from "./style"
import ExpandMoreIcon from "../../assets/expandMore.png"
import * as actions from "../../actions"

class CardMaker extends Component {
  state = {
    text: "",
    author: "",
    emoji: "",
    open: true
  }

  handleSubmit = values => {
    if (!values.emoji) {
      values.emoji = "smiley"
    }
    const { text, author, emoji } = values
    this.props.saveCard({
      text,
      author,
      emoji
    })
    this.props.clearForm()
    // this.props.clearForm()
    this.setState({
      text: "",
      author: "",
      emoji: ""
    })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleClick = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { open, text, author, emoji } = this.state

    return (
      <Container>
        {!open && <DrawerButton src={ExpandMoreIcon} onClick={this.handleClick}/>}
        {open && 
          <ReduxForm
            onSubmit={this.handleSubmit}
            handleClick={this.handleClick}
            text={text}
            author={author}
            emoji={emoji}
          />
        }
      </Container>
    );
  }
}

export default connect(null, actions)(CardMaker)
