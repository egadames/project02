import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';
import { Form } from 'semantic-ui-react';


class UpdateByID extends Component {
  state = {
    flashCard: [],

  }
  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get(`/api/flashcard/`);
      console.log(data)
      console.log(this.props.match.params.count)
      this.setState({ flashCard: data });
    } catch (e) {
      console.log(e);
    }
  }  

  render() {
   return (
      <Wrapper>
        <h1 className="title">Results of the Quiz</h1>
        {/* <h3></h3> */}
      </Wrapper>
    );
  }
}

export default UpdateByID;