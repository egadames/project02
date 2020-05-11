import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Card/';
import Wrapper from '../../components/Wrapper';

class FlashCardByID extends Component {
  state = {
    flashCard: {
      question: '',
      answer: ''
    }
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/flashcard/${this.props.match.params.flashId}`);
      this.setState({ flashCard: data });
    } catch (e) {
      console.log(e);
    }
  }  
  
  renderCard = (id) => {
    return (
      <Card.quizCard
        id = {this.props.flashCard.id}
        question = {this.props.flashCard.question}
        answer = {this.props.flashCard.answer}
        answerText = {this.props.answerText}
        handleInputChange = {this.props.handleInputChange}
      />
    );

  }
  render() {
    return (
      <Wrapper>
        { this.renderCard() }
      </Wrapper>
      
    );
  }
}

export default FlashCardByID;
