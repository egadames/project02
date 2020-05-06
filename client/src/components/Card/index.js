import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css";

import Background from '../../asset/flashCardImg.jpg'

function CardForm (props) {
  console.log(props.key)
  return (
    <div className="card" style={{width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
      {/* <Card className="text-center"> */}
       <h4 style = {{position: 'absolute', top: '9px', right: '37%'}}>Flashcard # {props.id}</h4>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text style ={{position: 'absolute', top: '71px'}}>
          Question: {props.question}
          </Card.Text>
          <Card.Text style ={{position: 'absolute', top: '144px'}} >
          Answer:{props.answer}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        {/* <span onClick = {() => props.handleDelete(props.id)} className="remove">𝘅</span>
        <Button>Go somewhere</Button> */}
    </div>
  );
}


export default CardForm;