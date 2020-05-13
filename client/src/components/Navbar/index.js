import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import {
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='FlashCard App'
      // inverted

      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        textAlign: 'top',
        marginBottom: 0,
        marginTop: mobile ? '.25em' : '.55em',
        color: '#ECEFF1'
      }}
    />
    <Header
      as='h2'
      content='A better way to learn.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        color: 'red',
        marginTop: mobile ? '0.25em' : '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            // inverted
            textAlign='center'
            style={{ minHeight: 50, padding: '1em 0em', backgroundColor: 'black' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as={Link} to = '/' active>Start Page</Menu.Item>
                <Menu.Item as={Link} to = '/flashcard'>View All</Menu.Item>
                <Menu.Item as={Link} to = '/add'>Add a Flashcard</Menu.Item>
                <Menu.Item as={Link} to = '/review'>Review</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}
  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })
  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to = '/' active>Start Page</Menu.Item>
                <Menu.Item as={Link} to = '/flashcard'>View All</Menu.Item>
                <Menu.Item as={Link} to = '/add'>Add a Flashcard</Menu.Item>
                <Menu.Item as={Link} to = '/review'>Review</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment  
            inverted
            textAlign='center'
            style={{ minHeight: 100, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer;
