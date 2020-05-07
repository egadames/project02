import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Card/index';
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

  renderCard = (id) => {
    return (
      <Card
        id = {this.state.flashCard.id}
        buttonlink = 'flashcard/flashId'
        question = {this.state.flashCard.question}
        answer = {this.state.flashCard.answer}
        // button1 = 'Homepage'
        // button2 = "onClick = {() => props.handleDelete(props.id)}"
      />
    );

  }
  render() {
    console.log(this.props.match.params.flashId);
    return (
      <Wrapper>
        {/* <h1 className="title">Friends List</h1> */}
        { this.renderCard() }
      </Wrapper>
    );
  }
}

export default FlashCardByID;
