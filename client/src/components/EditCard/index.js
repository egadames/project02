import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';
import Background from '../../asset/flashCardImg.jpg'

const editCard = (props) => {
  console.log(props.key)
  return (
    <div className="card" style={{width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
       <h4 style = {{position: 'absolute', top: '9px', right: '37%'}}>Flashcard # {props.id}</h4>
        <Card.Body>
          <Card.Text style ={{position: 'absolute', top: '71px'}}>
          Question: {props.question}
          <input 
          style = {{border: "solid black", height: '20px'}}
          name = 'questionText'
          value = {props.questionText}
          onChange = {props.handleInputChange}/>
          </Card.Text>
          <Card.Text style ={{position: 'absolute', top: '144px'}} >
          Answer: {props.answer}
          <input 
          style = {{border: "solid black", height: '20px'}}
          name = {props.name}
          onChange = {props.handleInputChange}
          />
          </Card.Text>
        </Card.Body>
        <span>
          <Button 
          style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}
          onClick = {() => props.handleUpdate(props.id)}>
          Confirm Changes</Button>
          <Button 
          style = {{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', textAlign: 'center', lineHeight: 'normal'}} 
          as={Link}
          to={`/flashcard/`}
          >Cancel Changes</Button>
        </span>
    </div>
  );
}

export default editCard;