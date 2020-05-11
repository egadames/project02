import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Card'
import Wrapper from '../../components/Wrapper';
import {
  Dimmer,
  Loader,
  Image,
  Segment,
} from "semantic-ui-react";

class GetAll extends Component {
  state = {
    flashCard: []
  }
  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/flashcard');
      this.setState({ flashCard: data });

      // localStorage.setItem('flashCardId', data[0].id);
    } catch (e) {
      console.log(e);
    }
  }  
  renderCards = () => {
    if (this.state.flashCard.length === 0) {
      return(
      <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  );
    } else {
      return this.state.flashCard.map(card => {
        return <Card.CardForm
          id = {card.id}
          key = {card.id}
          question = {card.question}
          answer = {card.answer}
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
