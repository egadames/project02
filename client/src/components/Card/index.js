import React from 'react';
import { Button, Card, Input} from 'semantic-ui-react';
import  { Link } from 'react-router-dom';
import "./style.css";
import Background from '../../asset/flashCardImg.jpg'

const CardForm = (props) => {
  return (
    <Card style= {{ width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
      <Card.Content header={`Flashcard # ${props.id}`} 
      style ={{position: 'absolute', right: '27%'}}/>
      <Card.Content description={`Question: ${props.question}`} 
      style ={{position: 'absolute', top: '54px'}}/>
      <Card.Content description={`Answer: ${props.answer}`} 
      style ={{position: 'absolute', top:'124px'}}/>
      <Button as={Link}to={`/update/${props.id}`} content= {'Edit Card'} primary 
      style={{position: 'absolute', bottom: '5px', left: '5%', 
      width: '150px',height: '50px', lineHeight: 'normal'}}/>
      <Button as={Link}to={`/delete/${props.id}`} content= {'Delete Card'} primary 
      style={{position: 'absolute', bottom: '5px', right: '5%', 
      width: '150px',height: '50px', lineHeight: 'normal'}}/>
    </Card>
  );
}

const editCard = (props) => {
  return (
    <Card style= {{ width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
      <Card.Content header={`Flashcard # ${props.id}`} style ={{position: 'absolute', right: '35%'}}/>
      <Card.Content description={`Question: ${props.question}`} style ={{position: 'absolute', top: '54px'}}/>
      <Card.Content description={`Answer: ${props.answer}`} style ={{position: 'absolute', top:'124px'}}/>
      <Button onClick = {() => props.handleUpdate(props.id)} content= 'Confirm Changes' primary style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
      <Button as={Link}to={`/`} content= 'Cancel Changes' primary style={{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
    </Card>
  );
}

const deleteCard = (props) => {
  return (
    <Card style= {{ width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
      <Card.Content header={`Flashcard # ${props.id}`} style ={{position: 'absolute', right: '35%'}}/>
      <Card.Content description={`Question: ${props.question}`} style ={{position: 'absolute', top: '54px'}}/>
      <Card.Content description={`Answer: ${props.answer}`} style ={{position: 'absolute', top:'124px'}}/>
      <Button onClick = {() => props.remove(props.id)} content= 'Delete Card' primary style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
      <Button as={Link}to={props.route2} onClick = {props.onClick2} content= 'Cancel Delete' primary style={{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
    </Card>
  );
}

const quizCard = (props) => {
  return (
    <Card style= {{ width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
      <Card.Content header={`Flashcard # ${props.id}`} style ={{position: 'absolute', right: '35%'}}/>
      <Card.Content description={`Question: ${props.question}`} style ={{position: 'absolute', top: '54px'}}/>
      <Input style = {{postion: 'absolute', top: '27px' }}fluid icon='search' placeholder='Search...' />
      {/* <Card.Content description={`Answer: ${props.answer}`} style ={{position: 'absolute', top:'124px'}}/> */}
      {/* <Button onClick = {() => props.remove(props.id)} content= 'Delete Card' primary style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
      <Button as={Link}to={props.route2} onClick = {props.onClick2} content= 'Cancel Delete' primary style={{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/> */}
    </Card>
  );
}

export default {CardForm, editCard, deleteCard,quizCard}

