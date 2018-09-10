import React, { Component } from "react";
import { connect } from "react-redux"
import { 
  Container,
  DrawerButton,
  TextArea,
  Label,
  StyledInput,
  StyledSelect,
  Form,
  Button
} from "./style"
import ExpandLessIcon from "../../assets/expandLess.png"
import ExpandMoreIcon from "../../assets/expandMore.png"
import * as actions from "../../actions"

class CardMaker extends Component {
  state = {
    text: "",
    author: "",
    emoji: "smiley",
    open: true
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { text, author, emoji } = this.state
    this.props.saveCard({
      text,
      author,
      emoji
    })
    this.setState({
      text: "",
      author: "",
      emoji: "smiley"
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleClick = (event) => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { open } = this.state

    return (
      <Container>
        {!open && <DrawerButton src={ExpandMoreIcon} onClick={this.handleClick}/>}
        {open && 
          <Form id="form" onSubmit={this.handleSubmit}>
            <Label>Card Text</Label>
            <TextArea
              name="text"
              placeholder="Add text to your card"
              value={this.state.text}
              onChange={this.handleChange}
              required
            />
            <Label>Author</Label>
            <StyledInput
              name="author"
              component="input"
              value={this.state.author}
              onChange={this.handleChange}
              placeholder="Name"
              required
            />
            <Label>Mood</Label>
            <StyledSelect
              name="emoji"
              required
              component="select"
              onChange={this.handleChange}
              value={this.state.emoji}
            >
              <option value="smiley">Smiley</option>
              <option value="angry">Angry</option>
              <option value="sad">Sad</option>
            </StyledSelect>
            <Button type="submit"> Create </Button>
            <DrawerButton src={ExpandLessIcon} onClick={this.handleClick}/>
          </Form>
        }
      </Container>
    );
  }
}


export default connect(null, actions)(CardMaker)
