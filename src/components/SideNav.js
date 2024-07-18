import React from 'react'
import { Col, Container, Nav, Row  } from 'react-bootstrap'
import logo from '../assets/T logo.png'
// import { LinkContainer } from 'react-router-bootstrap'

function SideNav() {
  return (
    <Row bg='secondary' className='flex-column position-fixed overflow-auto z-3 text-center' >
        <Col>
            {/* <Container fluid> */}
            <Nav className='flex-column mb-5 m-auto'>
                <div className='py-3 mb-3'><Nav.Link><img src={logo} alt='logo' width='50px'/></Nav.Link></div>
                <Nav.Link><i class="bi bi-boxes"></i> <br/> <small>Projects</small></Nav.Link>
                <Nav.Link><i class="bi bi-briefcase-fill"></i><br/> <small>Boards</small></Nav.Link>
                <Nav.Link><i class="bi bi-calendar-day"></i><br/> <small>Schedules</small></Nav.Link>
                <Nav.Link><i class="bi bi-bar-chart-line-fill"></i><br/> <small>Analytics</small></Nav.Link>
                <Nav.Link><i class="bi bi-journal-check"></i><br/> <small>Reports</small></Nav.Link>
                <Nav.Link><i class="bi bi-people-fill"></i><br/> <small>Team</small></Nav.Link>
            </Nav>
            {/* </Container> */}
           
        </Col>
        
        <Col>
            <Nav className='flex-column'>
                <Nav.Link><i class="bi bi-gear"></i><br/><small>Settings</small></Nav.Link>
                <Nav.Link><i class="bi bi-box-arrow-in-right"></i><br/><small>Log Out </small></Nav.Link>
            </Nav>
        </Col>
       
    </Row>
  )
}

export default SideNav