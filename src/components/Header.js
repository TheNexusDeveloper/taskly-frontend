import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button, Form } from 'react-bootstrap'

function Header() {
  return (
    <Navbar fixed='top' expand='lg' data-bs-theme="dark" bg='dark' className=' position-relative'>
        <Container>
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3 py-3">
            <Form className="d-flex ">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success" className='me-3 '>Search</Button>
            </Form>

                <Button variant='light' className='rounded me-3'><i className="bi bi-chat-left-dots-fill" ></i></Button>
                <Button variant='light'  className='rounded me-3'><i className="bi bi-bell-fill"></i></Button>
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

    // <div></div>
  )
}

export default Header