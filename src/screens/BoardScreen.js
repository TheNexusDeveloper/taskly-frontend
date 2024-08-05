import React from 'react'
import { Row, Col, Container, Card  } from 'react-bootstrap'

function BoardScreen() {
  return (
    <div>
        <Row></Row>

        <Row>
            <Col>
                <Card>
                    <Card.Header>In Progress</Card.Header>
                    <Card.Body>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <p>
                                        Deploy backend to AWS servers 
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Header>Under Review </Card.Header>
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default BoardScreen