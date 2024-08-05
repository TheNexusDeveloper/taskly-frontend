import React from 'react'
import ProjectsDB from '../ProjectsDB'
import { Button, Col, Row, Card, ProgressBar } from 'react-bootstrap'

function ProjectsScreen() {
  return (
    <div>
        <Row className='mb-3'>
            <Col>
            <h4>Projects</h4>
            </Col>

            <Col><Button variant='primary' className='rounded-cirle'>Create Project</Button></Col>
        </Row>

        <Row>
            {/* <Col xl={12}>
                <Row>
                    <Col>
                        <Card bg='success' variant='light' className='mb-3'>
                            <Card.Header><strong>Completed</strong></Card.Header>
                            <Card.Title className='px-3'><h2>20</h2></Card.Title>
                        </Card>
                    </Col>

                    <Col>
                        <Card bg='warning' variant='light' className='mb-3'>
                            <Card.Header><strong>In Progress</strong></Card.Header>
                            <Card.Title className='px-3'><h2>20</h2></Card.Title>
                        </Card>
                    </Col>

                    <Col>
                        <Card bg='danger' variant='light' className='mb-3'>
                            <Card.Header><strong>Delayed</strong></Card.Header>
                            <Card.Title className='px-3'><h2>20</h2></Card.Title>
                        </Card>
                    </Col>

                    <Col>
                        <Card bg='secondary' variant='light' className='mb-3'>
                            <Card.Header><strong>Aborted</strong></Card.Header>
                            <Card.Title className='px-3'><h2>20</h2></Card.Title>
                        </Card>
                    </Col>
                </Row>
            </Col> */}

            {ProjectsDB.map(projects =>
                <Col key={projects.id}>
                    <Card style={{width: '19rem'}} className='mb-5'>
                        {/* <Card.Header>{projects.category}</Card.Header> */}
                        <Card.Body>
                            <Card.Title>{projects.title}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>{projects.category}</Card.Subtitle>

                            <Card.Text>
                            {projects.desc} <br/>
                            <Card.Link href="#">Details</Card.Link>
                            </Card.Text>

                            <ProgressBar variant='warning'  now={projects.progress} label={projects.progress}/>
                        </Card.Body>

                        <Card.Footer>
                            Team: {projects.team}
                        </Card.Footer>
                    </Card>
                </Col>
            )}
        </Row>
    </div>
  )
}

export default ProjectsScreen