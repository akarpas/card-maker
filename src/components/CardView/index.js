import React, { Component } from "react";
import { connect } from "react-redux"
import {
  ModalContainer,
  ModalContent,
  Card,
  Controls,
  Control,
  CardText,
  AuthorText,
  Emoji,
  EmojiIcon,
  Label
} from "./style.js"
import * as actions from "../../actions"
import SmileyIcon from "../../assets/laugh.png"
import AngryIcon from "../../assets/angry.png"
import SadIcon from "../../assets/sad.png"
import _ from "lodash"

class CardView extends Component {
  state = {
    text: '',
    author: '',
    emoji: '',
    cardNumber: null,
    originalText: ''
  }

  componentDidMount() {
    const { state } = this.props.location

    this.setState({
      ...state.card,
      originalText: state.card.text,
      cardNumber: state.index
    })
  }

  handleDelete = event => {
    event.stopPropagation()
    this.props.deleteCard(this.state)
    const { history } = this.props
    history.goBack()
  }

  handleSave = (event, showSave) => {
    event.stopPropagation()
    if(showSave) {
      this.props.editCard(this.state)
      const { history } = this.props
      history.goBack()
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ text: event.target.value })
  }

  back = event => {
    event.stopPropagation()
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { text, author, emoji, originalText } = this.state
    const icons = {
      SmileyIcon,
      AngryIcon,
      SadIcon
    }
    const icon = icons[`${_.startCase(emoji)}Icon`]
    const showSave = originalText !== text
    const saveStyle = !showSave ? { color: 'lightgrey', cursor: 'default' } : {}
    return (
      <ModalContainer>
        <ModalContent>
          <Card>
            <Label> You can modify the text here: </Label>
            <CardText value={text} onChange={this.handleChange}/>
            <AuthorText>Author: {author}</AuthorText>
            <Emoji><EmojiIcon src={icon} /></Emoji>
          </Card>
          <Controls>
            <Control onClick={this.handleDelete}>Delete</Control>
            <Control style={saveStyle} onClick={(event) => this.handleSave(event, showSave)}>Save</Control>
            <Control onClick={this.back}>Close</Control>
          </Controls>
        </ModalContent>
      </ModalContainer>
    );
  }
}

export default connect(null, actions)(CardView)

