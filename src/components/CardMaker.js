import React, { Component } from "react";
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid white;
  border-radius: 2%;
  padding: 1vh 1vw;
  width: 90%;
`
const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
`

const Label = styled.label`
  font-size: 20px;
  padding: 10px 0 10px 0;
`

const TextArea = styled.textarea`
  font-size: 30px;
`

const StyledInput = styled.input`
  font-size: 30px;
`

const StyledSelect = styled.select`
  font-size: 30px;
  background-color: white;
  width: 100%;
`

const Button = styled.button`
  border: 2px solid white;
  background-color: grey;
  padding: 10px;
  margin: 20px;
  font-size: 30px;
`
class CardMaker extends Component {
  state = {
    text: '',
    author: '',
    emoji: 'smiley'
  }

  handleSubmit = (event) => {
    this.setState({
      text: '',
      author: '',
      emoji: 'smiley'
    })
    event.preventDefault()
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Label>Card Text</Label>
          <TextArea
            name="text"
            type="textarea"
            placeholder="Add text to your card"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <Label>Author</Label>
          <StyledInput
            name="author"
            component="input"
            type="text"
            value={this.state.author}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <Label>Mood</Label>
          <StyledSelect
            name="emoji"
            component="select"
            onChange={this.handleChange}
            value={this.state.emoji}
          >
            <option value="smiley">Smiley</option>
            <option value="angry">Angry</option>
            <option value="sad">Sad</option>
          </StyledSelect>
          <Button type="submit"> Create </Button>
        </Form>
      </Container>
    );
  }
}

export default (CardMaker)
