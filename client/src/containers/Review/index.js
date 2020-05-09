import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card'
import Wrapper from '../../components/Wrapper';
import FlashCard from '../FlashCardByID';

class GetAll extends Component {
    state = {
      flashCard: [],
      currentIndex: 0,
      currentCard: ''
    }
  
  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/flashcard');
      this.setState({ flashCard: data, currentIndex: 0, currentCard: data[0] });
    } catch (e) {
      console.log(e);
    }
  }  

  async Reload() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/flashcard');
      this.setState({ flashCard: data, currentIndex: data[0].id });
    } catch (e) {
      console.log(e);
    }
  }  

  handleNext = () => {

    this.setState({currentIndex: this.state.currentIndex + 1, currentCard: this.state.flashCard[ this.state.currentIndex + 1 ] });
  }

  handlePrevious = () => {
    let { currentIndex,currentCard, flashCard } = this.state;
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      return;
    }
    this.setState({currentIndex: newIndex, currentCard: flashCard[newIndex] });
  }

  render() {
    return (
      <Wrapper>
        <title className="title">Flash Cards</title>
        {/* { this.renderCards() } */}
        <button onClick={this.handlePrevious}>Previous</button>
        {/* <Route exact path={`/review/:flashId`} component={FlashCard} /> */}
        <FlashCard flashCard={this.state.currentCard}/>
        <button onClick={this.handleNext}>Next</button>
      </Wrapper>
    );
  }
}

export default GetAll;
