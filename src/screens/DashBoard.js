import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function DashBoard() {
  return (
    <div>
        <header>Welcome to Taskly</header>
        <Row>
            <Col>
            </Col>
            <Col>
                <Card>
                    <Card.Title>July 2024</Card.Title>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card>
                    <Card.Title>Analytics</Card.Title>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Title>Tasks</Card.Title>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card>
                    <Card.Title>Overview</Card.Title>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Title>Planner</Card.Title>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Title>Team</Card.Title>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default DashBoard