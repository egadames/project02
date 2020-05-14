import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';

class DeleteCard extends Component {
  state = {
    flashCard: [],
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/flashcard/${this.props.match.params.flashId}`);
      console.log(data)
      this.setState({ flashCard: data });
    } catch (e) {
      console.log(e);
    }
  }  

  remove = async id => {
    try {
      const { data: flashCard } = await axios.delete(`/api/flashcard/${this.props.match.params.flashId}`);
      this.setState({ flashCard });
      this.props.history.push(`/flashcard`);
    } catch (e) {
      console.log(e);
    }
  }

  renderCard = (id) => {
    return (
      <Card.deleteCard
        id = {this.state.flashCard.id}
        // key = {this.state.flashCard.id}
        question = {this.state.flashCard.question}
        answer = {this.state.flashCard.answer}
        remove = {this.remove}
      />
    );
  }

  render() {
    console.log(this.props.match.params.flashId);
    return (
      <Wrapper style={{height: '70vh'}}>
        { this.renderCard() }
      </Wrapper>
    );
  }
}

export default DeleteCard;
