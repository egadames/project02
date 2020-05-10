import React from 'react';
// import { Button, Card } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';
import Background from '../../asset/flashCardImg.jpg';

const deleteCard = (props) => {
  console.log(props)
  return (
    <div className="card" style={{width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
       <h4 style = {{position: 'absolute', top: '9px', right: '37%'}}>Flashcard # {props.id}</h4>
        <Card.Body>
          <Card.Text style ={{position: 'absolute', top: '71px'}}>
          Question: {props.question}
          </Card.Text>
          <Card.Text style ={{position: 'absolute', top: '144px'}} >
          Answer: {props.answer}
          </Card.Text>
        </Card.Body>
        <span>
          <Button 
          style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}
          onClick = {() => props.remove(props.id)}>
          Confirm Delete</Button>
          <Button 
          style = {{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', textAlign: 'center', lineHeight: 'normal'}} 
          as={Link}
          to={`/`}
          >Cancel Delete</Button>
        </span>
    </div>
  );
}
export default deleteCard;

