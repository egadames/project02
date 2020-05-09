import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbar2 = (props) => {
  console.log(props.key)
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href={`/`}>Flashcard App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href={`/flashcard`}>View All</Nav.Link>
      <Nav.Link href={`/add`}>Add a Flashcard</Nav.Link>
      <Nav.Link href={`/review`}>Review Quiz</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default Navbar2;