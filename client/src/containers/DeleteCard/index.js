import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/deleteCard';
import Wrapper from '../../components/Wrapper';
import { Form } from 'semantic-ui-react';

class DeleteCard extends Component {
  state = {
    flashCard: [],
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get(`/api/flashcard/${this.props.match.params.flashId}`);
      console.log(data)
      this.setState({ flashCard: data });
    } catch (e) {
      console.log(e);
    }
  }  

  // handleInputChange = event => {
  //   console.log(event)
  //   const { value, name } = event.target;
  //   console.log(value)
  //   console.log(name)
  //   this.setState({ [name]: value });
  // }

  remove = async id => {
    try {
      const { data: flashCard } = await axios.delete(`/api/flashcard/${this.props.match.params.flashId}`);
      this.setState({ flashCard });
    } catch (e) {
      console.log(e);
    }
  }

  renderCard = (id) => {
    return (
      <Card
        id = {this.state.flashCard.id}
        key = {this.state.flashCard.id}
        question = {this.state.flashCard.question}
        answer = {this.state.flashCard.answer}
        remove = {this.remove}
      />
    );
  }

  render() {
    console.log(this.props.match.params.flashId);
    return (
      <Wrapper>
        { this.renderCard() }
      </Wrapper>
    );
  }
}

export default DeleteCard;