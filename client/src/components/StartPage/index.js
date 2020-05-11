import React from 'react';
import { Button, Grid, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./style.css";

const RenderStartPage = (props) => {
  return(
<Container style = {{backgroundColor: 'black'}}>
  <Grid textAlign='center' style={{ height: '50vh', backgroundColor: 'black'}} verticalAlign='middle'>
    <Grid.Row columns={2}>
      <Grid.Column >
        <Button as={Link} to='/flashcard' size = {'massive'} primary style={{ color: 'black', height: '20vh', width: '50vh', lineHeight: 'normal'}}> View All Cards</Button>
      </Grid.Column>
      <Grid.Column 
        >
        <Button as={Link} to='/add' size = {'massive'} primary style={{ color: 'black', height: '20vh', width: '50vh', }}> Add a Flash Card</Button>        
      </Grid.Column>
      <Grid.Column 
       >
        <Button as={Link} to={`/review`} size = {'massive'} primary style={{ color: 'black', height: '20vh', width: '50vh'}} > Review Quiz</Button>
      </Grid.Column>
    </Grid.Row>

  </Grid>
  </Container>
  );
};

export default RenderStartPage;