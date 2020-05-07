import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';
import "./style.css";

import Background from '../../asset/flashCardImg.jpg'

const CardForm = (props) => {
  console.log(props.key)
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
          style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px'}}
          as={Link}
          to={`/flashcard/update/${props.id}`}
           >Edit Flashcard</Button>
          <Button 
          style = {{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px'}} 
          as={Link}
          to={`/flashcard/delete/${props.id}`}
          >Delete Card</Button>
        </span>
    </div>
  );
}

export default CardForm;
