import React, { Component } from "react"
import { connect } from "react-redux"
import ReduxForm from "../ReduxForm"
import { 
  Container,
  DrawerButton,
} from "./style"
import ExpandMoreIcon from "../../assets/expandMore.png"
import * as actions from "../../actions"

class CardMaker extends Component {
  state = {
    text: "",
    author: "",
    emoji: "smiley",
    open: true
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', null)
  }

  updateDimensions = () => {
    if (window.innerWidth > 1199) {
      this.setState({ open: true })
    }
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

    this.setState({
      text: "",
      author: "",
      emoji: "smiley"
    })
  }

  handleClick = (event) => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  setChecked = (e, emoji) => {
    this.setState({ emoji })
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
            setChecked={this.setChecked}
          />
        }
      </Container>
    );
  }
}

export default connect(null, actions)(CardMaker)