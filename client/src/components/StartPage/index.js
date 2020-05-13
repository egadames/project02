import React from 'react';
import { Button, Grid, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./style.css";

const RenderStartPage = (props) => {
  return(
  <Container textAlign='center' style = {{ margin: "25vh", height: '60vh', width: '100vh'}}>
    <Grid>
      <Grid.Column mobile = {16} >
        <Button as={Link} to='/flashcard' size = {'massive'} primary style={{ color: 'black', width: '50vh'}}> View All Cards</Button>
      </Grid.Column>
      <Grid.Column mobile = {16}>
        <Button as={Link} to='/add' size = {'massive'} primary style={{ color: 'black',width: '50vh'}}> Add a FlashCard</Button>        
      </Grid.Column>
      <Grid.Column mobile = {16}>
        <Button as={Link} to={`/review`} size = {'massive'} primary style={{ color: 'black', width: '50vh'}} > Review Quiz</Button>
      </Grid.Column>
  </Grid>
  </Container>
  );
};

export default RenderStartPage;