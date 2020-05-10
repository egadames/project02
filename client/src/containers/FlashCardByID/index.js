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
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get(`/api/flashcard/${this.props.match.params.flashId}`);
      this.setState({ flashCard: data });
    } catch (e) {
      console.log(e);
    }
  }  

  // async componentDidUpdate(prevProps) {
  //   console.log('prevProps', prevProps);
  //   console.log(this.props);
  //   if (prevProps.match.params.flashId !== this.props.match.params.flashId) {
  //     try {
  //       const { data } = await axios.get(`/api/flashcard/${this.props.match.params.flashId}`);
  //       this.setState({ flashCard: data });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }
  
  renderCard = (id) => {
    return (
      <Card.quizCard
        id = {this.props.flashCard.id}
        question = {this.props.flashCard.question}
        answer = {this.props.flashCard.answer}
      />
    );

  }
  render() {
    console.log(this.props);
    return (
      <Wrapper>
        { this.renderCard() }
      </Wrapper>
    );
  }
}

export default FlashCardByID;
