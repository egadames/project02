import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

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
      <Link to='/flashcard'><Button size = {'massive'} style={{ backgroundColor: 'red', color: 'black', height: '20vh', width: '50vh'}}> View All Cards</Button></Link>
    </Grid.Column>
    <Grid.Column 
    width={4}
    stretched = {true}>
      <Link to='/counter'><Button size = {'massive'} style={{ backgroundColor: 'red', color: 'black', height: '20vh', width: '50vh'}}> Edit A Flash Card</Button></Link>
    </Grid.Column>
    <Grid.Column 
    width={4}
    stretched = {true}>
      <Button size = {'massive'} style={{ backgroundColor: 'red', color: 'black', height: '20vh', width: '50vh'}} > Add A Flash Card</Button>
    </Grid.Column>
  </Grid.Row>
  </Grid>

  </div>
  );
};

export default RenderStartPage;