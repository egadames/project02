import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Header, Modal } from "semantic-ui-react";

class UpdateByID extends Component {
  state = {
    flashCard: [],
    totalCards: "",
  };
  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get(`/api/flashcard/`);
      this.setState({ flashCard: data, totalCards: data.length });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let { totalCards } = this.state;
    let numberCorrect = `${this.props.match.params.count}`;
    let grade =
      numberCorrect === 0
        ? 0
        : parseFloat(numberCorrect / totalCards).toFixed(3);
    return (
      <Modal
        style={{ height: "38%" }}
        size={"tiny"}
        open={true}
        centered={false}
      >
        <Modal.Header>Results of the Quiz</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header content={`There were ${totalCards} questions.`}></Header>
            <Header
              content={`You got ${numberCorrect} questions correct.`}
            ></Header>
            <Header content={`Your grade for the quiz is ${grade} %`}></Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" as={Link} to={`/`}>
            Close
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Redo Quiz"
            as={Link}
            to={`/review`}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default UpdateByID;
