import React from 'react';
import { Button, Card} from 'semantic-ui-react';
import  { Link } from 'react-router-dom';
import "./style.css";
import Background from '../../asset/flashCardImg.jpg'

const CardForm = (props) => {
  return (
    <Card style= {{ width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
      <Card.Content header={`Flashcard # ${props.id}`} style ={{position: 'absolute', right: '27%'}}/>
      <Card.Content description={`Question: ${props.question}`} style ={{position: 'absolute', top: '54px'}}/>
      <Card.Content description={`Question: ${props.answer}`} style ={{position: 'absolute', top:'124px'}}/>
      <Button as={Link}to={`/update/${props.id}`} content= {'Edit Card'} primary style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
      <Button as={Link}to={`/delete/${props.id}`} content= {'Delete Card'} primary style={{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
    </Card>
  );
}

const editCard = (props) => {
  return (
    <Card style= {{ width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
      <Card.Content header={`Flashcard # ${props.id}`} style ={{position: 'absolute', right: '27%'}}/>
      <Card.Content description={`Question: ${props.question}`} style ={{position: 'absolute', top: '54px'}}/>
      <Card.Content description={`Question: ${props.answer}`} style ={{position: 'absolute', top:'124px'}}/>
      <Button onClick = {() => props.handleUpdate(props.id)} content= 'Confirm Changes' primary style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
      <Button as={Link}to={`/`} content= 'Cancel Changes' primary style={{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
    </Card>
  );
}

const deleteCard = (props) => {
  return (
    <Card style= {{ width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
      <Card.Content header={`Flashcard # ${props.id}`} style ={{position: 'absolute', right: '27%'}}/>
      <Card.Content description={`Question: ${props.question}`} style ={{position: 'absolute', top: '54px'}}/>
      <Card.Content description={`Question: ${props.answer}`} style ={{position: 'absolute', top:'124px'}}/>
      <Button onClick = {() => props.remove(props.id)} content= 'Delete Card' primary style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
      <Button as={Link}to={props.route2} onClick = {props.onClick2} content= 'Cancel Delete' primary style={{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
    </Card>
  );
}

export default {CardForm, editCard, deleteCard}

// as={Link}to={props.route1}
// onClick={props.click ? props.handleClick : ''}
// isClickNeeded
// const CardForm = (props) => {
//   return (
//     <Card style= {{ width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
//       <Card.Content header={`Flashcard # ${props.id}`} style ={{position: 'absolute', right: '27%'}}/>
//       <Card.Content description={`Question: ${props.question}`} style ={{position: 'absolute', top: '54px'}}/>
//       <Card.Content description={`Question: ${props.answer}`} style ={{position: 'absolute', top:'124px'}}/>
//       <Button as={Link}to={props.route1} onClick = {() => `${props.onClick1}(${props.id})`} content= {props.text1} primary style={{position: 'absolute', bottom: '5px', left: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
//       <Button as={Link}to={props.route2} onClick = {props.onClick2} content= {props.text2} primary style={{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px', lineHeight: 'normal'}}/>
//     </Card>
//   );
// }

{/* <div className="card" style={{width: '473px', height: '284px', backgroundImage: `url(${Background})`}}>
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
   to={props.routeID}
    >Edit Flashcard</Button>
   <Button 
   style = {{position: 'absolute', bottom: '5px', right: '5%', width: '150px',height: '50px'}} 
   as={Link}
   to={`/delete/${props.id}`}
   >Delete Card</Button>
 </span>
</div> */}