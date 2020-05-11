import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  GridRow,
  GridColumn,
} from "semantic-ui-react";
import axios from "axios";
import Wrapper from "../../components/Wrapper";
import FlashCard from "../FlashCardByID";

class Quiz extends Component {
  state = {
    flashCard: [],
    currentIndex: 0,
    currentCard: "",
    totalCards: "",
    correctCount: 0,
    answerText: "",
  };

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get("/api/flashcard");
      this.setState({
        flashCard: data,
        currentIndex: 0,
        currentCard: data[0],
        totalCards: data.length,
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleNext = () => {
    let { currentIndex, flashCard, totalCards, correctCount } = this.state;
    let newIndex = currentIndex + 1;
    if (newIndex > totalCards - 1) {
      this.props.history.push(`/final/${correctCount}`);
    }
    this.setState({ currentIndex: newIndex, currentCard: flashCard[newIndex],  });
  };

  handlePrevious = () => {
    let { currentIndex, flashCard } = this.state;
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      return;
    }
    this.setState({ currentIndex: newIndex, currentCard: flashCard[newIndex]});
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  handleAttempt = async (event) => {
    let { currentCard, answerText } = this.state;
    let guessAttempts = 0;
    if (currentCard.answer === answerText && guessAttempts === 0) {
      this.setState({ correctCount: this.state.correctCount + 1});
      guessAttempts++;
    }
    this.setState({ answerText: '' });

  };

  render() {
    return (
      <Container>
        <Grid>
          <GridRow columns={2} divided>
            <GridColumn></GridColumn>
          </GridRow>
        </Grid>
        <Grid >
          <GridRow>
            <GridColumn>
              <Wrapper>
                <Button
                  float={"right"}
                  style={{ width: "100px" }}
                  primary
                  onClick={this.handlePrevious}
                >
                  Previous{" "}
                </Button>
                <FlashCard
                  style={{ zIndex: 0 }}
                  flashCard={this.state.currentCard}
                  name={"answerText"}
                  answerText={this.state.answerText}
                  onChange={this.handleInputChange}
                />
                <Button
                  style={{ width: "100px" }}
                  primary
                  onClick={this.handleNext}
                >
                  Next
                </Button>
              </Wrapper>
            </GridColumn>
          </GridRow>
        </Grid>
        <Grid >
          <GridRow>
            <GridColumn>
              <Wrapper>
                <input
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    position: "absolute",
                    bottom: "17%",
                    right: "42%",
                    width: "300px",
                    height: "50px",
                    border: "solid black",
                  }}
                  placeholder="Enter Your Answer Here"
                  name="answerText"
                  value={this.state.answerText}
                  onChange={this.handleInputChange}
                />
                <Button
                  primary
                  onClick={this.handleAttempt}
                  style={{
                    color: "black",
                    position: "absolute",
                    bottom: "19px",
                    right: "350px",
                    width: "100px",
                    height: "50px",
                    border: "solid black",
                    textAlign: "center",
                  }}
                >
                  Submit
                </Button>
              </Wrapper>
            </GridColumn>
          </GridRow>
        </Grid>
        <Wrapper></Wrapper>
      </Container>
    );
  }
}

export default Quiz;
