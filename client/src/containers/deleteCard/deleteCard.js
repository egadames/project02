import React from 'react';
import { Button, Card } from 'semantic-ui-react'

const Flashcard = ({ flashcards, remove }) => (
  <Card.Group>
    {
      flashcards.map( flashcard => (
        <Card key={flashcard.id}>
        <Card.Content>
          <Card.Header>{flashcard.question}</Card.Header>
          <Card.Description>
            <Button animated='fade' color='orange'>
              <Button.Content visible>Hover to reveal</Button.Content>
              <Button.Content hidden>{flashcard.answer}</Button.Content>
            </Button>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button color='blue'>Edit</Button>
            <Button color='red' onClick={() => remove(flashcard.id)}>Delete</Button>
          </div>
        </Card.Content>
      </Card>
      ))
    }
  </Card.Group>
  );

export default Flashcard;

