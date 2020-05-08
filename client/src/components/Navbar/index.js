import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Navbar2 = (props) => {
  console.log(props.key)
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Flashcard App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href={`/flashcard/update/${props.id}`}>View All</Nav.Link>
      <Nav.Link href={`/flashcard/update/${props.id}`}>Add a Flashcard</Nav.Link>
      <Nav.Link href={`/delete/${props.id}`}>Review Quiz</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default Navbar2;