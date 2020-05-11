import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

const Footer = () => (
  <div>
    <Segment inverted vertical style={{ padding: '3em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header inverted as='h4' content='Sitemap' />
              <List link inverted>
                <List.Item as={Link} to = '/' >Start Page</List.Item>
                <List.Item as={Link} to = '/flashcard'>View All</List.Item>
                <List.Item as={Link} to = '/add'>Add a Flashcard</List.Item>
                <List.Item as={Link} to = '/review'>Review</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)

export default Footer;