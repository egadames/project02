import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Card'
import Wrapper from '../../components/Wrapper'

class GetAll extends Component {
  state = {
    flashCard: []
  }
  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/flashcard');
      this.setState({ flashCard: data });
    } catch (e) {
      console.log(e);
    }
  }  
  renderCards = () => {
    if (this.state.flashCard.length === 0) {
      return <p>You're a loner</p>
    } else {
      return this.state.flashCard.map(card => {
        return <Card
          id = {card.id}
          key = {card.id}
          name = {card.name}
          question = {card.question}
          answer = {card.answer}
          // handleDelete = {this.handleDeleteFriend}
          />
      })
    }
  }
  render() {
    return (
      <Wrapper>
        <title className="title">Flash Cards</title>
        { this.renderCards() }
      </Wrapper>
    );
  }
}

export default GetAll;
