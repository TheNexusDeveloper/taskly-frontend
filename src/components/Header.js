import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <Navbar fixed='top' expand='lg'>
        <Container>
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Messages</Nav.Link>
                  <Nav.Link href="#action2">Notification</Nav.Link>
                  <NavDropdown title="John Doe" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
           </Nav>
        </Container>
    </Navbar>
  )
}

export default Header