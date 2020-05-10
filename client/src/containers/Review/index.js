import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Input, Form } from 'semantic-ui-react';
import axios from 'axios';
import Card from '../../components/Card'
import Wrapper from '../../components/Wrapper';
import FlashCard from '../FlashCardByID';

class Quiz extends Component {
    state = {
      flashCard: [],
      currentIndex: 0,
      currentCard: '',
      totalCards: "",
      correctCount: 0,
      answerText: ''
    }
  
  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/flashcard');
      this.setState({ flashCard: data, currentIndex: 0, currentCard: data[0], totalCards: data.length });
    } catch (e) {
      console.log(e);
    }
  }  

  finalScreen = () => {
    let { currentIndex, currentCard, flashCard, totalCards } = this.state;
  }

  handleNext = () => {
    let { currentIndex, currentCard, flashCard, totalCards } = this.state;
    let newIndex = currentIndex + 1;
    console.log(totalCards)
    if (newIndex > totalCards - 1) {
      // handleLast();
      return;
    }
    this.setState({currentIndex: newIndex, currentCard: flashCard[newIndex] });
  }

  handlePrevious = () => {
    let { currentIndex,currentCard, flashCard } = this.state;
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      return;
    }
    this.setState({currentIndex: newIndex, currentCard: flashCard[newIndex] });
  }

  handleLast = () => {
    let { totalCards, correctCount } = this.state;
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePrevious}>Previous</button>
        <Wrapper>         
          <FlashCard flashCard={this.state.currentCard}/>
        </Wrapper>
        <Form >
      <Form.Field >
        <label>Updated Answer</label>
        <input 
        style = {{height: '10px', border: 'solid black'}}
        name = "answerText"
        value = {this.state.answerText}
        onChange = {this.handleInputChange}
        />
      </Form.Field>
    </Form>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default Quiz;
