import React, { Component } from 'react';
import axios from 'axios';
import NewCard from '../../components/NewCard/index';
import Wrapper from '../../components/Wrapper';
import { Form } from 'semantic-ui-react';

class NewFlashCard extends Component {
  state = {
    flashCard: [],
    questionText: '',
    answerText: ''
  }
  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get(`/api/flashcard/`);
      this.setState({ flashCard: data });
    } catch (e) {
      console.log(e);
    }
  }  
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  // handleadd = async () => {
  //   try {
  //     const { data: flashCard } = await axios.post(`/api/flashcard/`, {question: `${this.state.questionText}`, answer: `${this.state.answerText}`});
  //     this.setState({ flashCard });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  handleAdd = async () => {
    // event.preventDefault();
    try {
      const { data } = await axios.post('/api/flashcard', {question: `${this.state.questionText}`, answer: `${this.state.answerText}`});
      const flashCard = [...this.state.flashCard, data];
      console.log(flashCard)
      // this.setState({ todos, todoInput: '' });
    } catch (e) {
      console.log(e);
    }
  }

  renderNewCard = () => {
    return (
      <div>
        <NewCard
          id = {''}
          question = {''}
          answer = {''}
          handleAdd={this.handleAdd}
        />
        <Form>
          <Form.Field>
            <label>Updated Question</label>
            <input 
            style = {{height: '20px'}}
            name = "questionText"
            value = {this.state.questionText}
            onChange = {this.handleInputChange}
            />
          </Form.Field>
        </Form>
        <Form>
          <Form.Field >
            <label>Updated Answer</label>
            <input 
            style = {{height: '20px'}}
            name = "answerText"
            value = {this.state.answerText}
            onChange = {this.handleInputChange}
            />
          </Form.Field>
      </Form>
    </div>
  );
}
  render() {
    return (
      // if()
      <Wrapper>
        {/* <h1 className="title">Friends List</h1> */}
        { this.renderNewCard() }
      </Wrapper>
    );
  }
}

export default NewFlashCard;