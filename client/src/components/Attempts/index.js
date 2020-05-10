import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import  { Link } from 'react-router-dom';
import modalPic from '../../asset/goodJob.png'


const ModalExampleTopAligned = () => (
  <Modal style = {{height: "38%"}}size={'tiny'} open={true} centered={false}>
    <Modal.Header>Results of the Quiz</Modal.Header>
    <Modal.Content >
      <Modal.Description>
        <Header>You Answered</Header>
        <p> Out of 20 questions you answered 10 correct!!
        </p>
        <p>You grade is 50%</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
            <Button color='black' as={Link}to={`/`}>
              Close
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Redo Quiz"
              as={Link}to={`/review`}
            />
          </Modal.Actions>
  </Modal>
)

export default ModalExampleTopAligned