import React from 'react';
import { Button, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './style.css';

const RenderStartPage = (props) => {
  return(
  <div>
  <Jumbotron fluid
  style= {{height: '25vh', backgroundColor: 'blue', textAlign: 'center', color: 'white'}}>
  <Container>
    <h1>FLASHCARD APP</h1>
    <p style = {{textAlign: ''}}>
      Please choose from the follow options
    </p>
  </Container>
</Jumbotron >
  <Grid textAlign='center' style={{ height: '20vh'}} verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column 
        width={4}
        stretched = {true}>
        <Button as={Link} to='/flashcard' size = {'massive'} style={{ backgroundColor: 'red', color: 'black', height: '20vh', width: '50vh'}}> View All Cards</Button>
      </Grid.Column>
      <Grid.Column 
        width={4}
        stretched = {true}>
        <Button as={Link} to='/add' size = {'massive'} style={{ backgroundColor: 'red', color: 'black', height: '20vh', width: '50vh', }}> Add a Flash Card</Button>        
      </Grid.Column>
      <Grid.Column 
        width={4}
        stretched = {true}>
        <Button as={Link} to={`/review`} size = {'massive'} style={{ backgroundColor: 'red', color: 'black', height: '20vh', width: '50vh'}} > Review Quiz</Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
  );
};

export default RenderStartPage;