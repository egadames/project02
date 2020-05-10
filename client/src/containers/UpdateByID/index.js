import React, { Component } from 'react';
import axios from 'axios';
import EditCard from '../../components/EditCard';
import Wrapper from '../../components/Wrapper';
import { Form } from 'semantic-ui-react';


class UpdateByID extends Component {
  state = {
    flashCard: [],
    questionText: '',
    answerText: ''
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
  handleInputChange = event => {
    console.log(event)
    const { value, name } = event.target;
    console.log(value)
    console.log(name)
    this.setState({ [name]: value });
  }

  handleUpdate = async id => {
    try {
      const { data: flashCard } = await axios.patch(`/api/flashcard/${this.props.match.params.flashId}`, {question: `${this.state.questionText}`, answer: `${this.state.answerText}`});
      this.setState({ flashCard });
    } catch (e) {
      console.log(e);
    }
  }

  renderCard = (id) => {
    return (
      <div>
      <EditCard
        id = {this.state.flashCard.id}
        question = {this.state.flashCard.question}
        answer = {this.state.flashCard.answer}
        name = ""
        value = {this.state.questionText}
        onChange = {this.handleInputChange}
  
        handleUpdate={this.handleUpdate}
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
  <Form >
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
    console.log(this.props.match.params.flashId);
    return (
      <Wrapper>
        {/* <h1 className="title">Friends List</h1> */}
        { this.renderCard() }
      </Wrapper>
    );
  }
}

export default UpdateByID;