import React from 'react'
import { Card, Col, Row, ProgressBar } from 'react-bootstrap'
import { BarChart, PieChart, Gauge, gaugeClasses } from '@mui/x-charts'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import team3 from '../assets/team3.jpg'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.jpg'
import lead from '../assets/lead.jpg'
import ceo from '../assets/ceo.jpg'

function DashBoard() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];

  return (
    <div>
        
        <Row className='mb-3 py-3'>
            <Col >
                <Row>
                    <h5>My Tasks</h5>
                    <Col>
                        <Card className='mb-2' style={{}}>
                            <Card.Header>Pending Tasks</Card.Header>
                            <Card.Title className='px-3'><h2>18</h2></Card.Title>
                            
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Header>Incoming Tasks</Card.Header>
                            <Card.Title className='px-3'><h2>12</h2></Card.Title>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Header>Completed Tasks</Card.Header>
                            <Card.Title className='px-3'><h2>124</h2></Card.Title>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Header>Total Tasks</Card.Header>
                            <Card.Title className='px-3'><h2>154</h2></Card.Title>
                        </Card>
                    </Col>
                    
                </Row>

                <Row>
                    <h5>Projects Overview</h5>
                    <Col>
                        <Card border='success'>
                            <Card.Header>PTRG Monitor</Card.Header>
                            <Card.Body>
                                <Col>
                                    <i class="bi bi-hourglass-bottom"></i><span className='mx-2'><small>4th July 2024</small></span>
                                </Col>

                                <Col>
                                    <small>Project Completed</small>
                                    <ProgressBar variant='success' striped animated now={100} label={100} />
                                </Col>
                               
                            </Card.Body>
                            <Card.Footer>Team Lead: Scott Summers</Card.Footer>
                        </Card>
                    </Col>

                    <Col>
                        <Card border='warning'>
                            <Card.Header>Project SHIELD </Card.Header>
                            <Card.Body>
                                <Col>
                                    <i class="bi bi-hourglass-bottom"></i><span className='mx-2'><small>1st December 2024</small></span>
                                </Col>

                                <Col>
                                    <small>Project Ongoing</small>
                                    <ProgressBar variant='warning' striped animated now={76} label={76} />
                                </Col>
                               
                            </Card.Body>
                            <Card.Footer>Team Lead: Maria Hill</Card.Footer>
                        </Card>
                    </Col>

                    <Col>
                        <Card border='danger'>
                            <Card.Header>ATOM</Card.Header>
                            <Card.Body>
                                <Col>
                                    <i class="bi bi-hourglass-bottom"></i><span className='mx-2'><small>N/A</small></span>
                                </Col>

                                <small>Project Aborted</small>
                                <ProgressBar variant='danger' animated now={100} label={'N/A'} />
                            </Card.Body>
                            <Card.Footer>Team Lead: Bruce Wayne</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Col>

            <Col lg={4}>
                <Card bg='secondary' color='white'>
                    <Card.Header>Schedule</Card.Header>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar  />
                    </LocalizationProvider>
                </Card>
            </Col>
        </Row>

        <Row className='mb-3'>
            <Col>
                <Card className='p-3'>
                    <Card.Header>Analytics</Card.Header>

                    <BarChart
                    width={700}
                    height={450}
                    series={[
                        { data: pData, label: 'pv', id: 'pvId' },
                        { data: uData, label: 'uv', id: 'uvId' },
                    ]}
                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
                </Card>

                

            </Col>
            <Col>
                <Card>
                    <Card.Header>Team Productivity</Card.Header>
                    <Card.Body>
                        <Row className='mb-3'>
                            <Col lg={2}>  
                                <img src={team3} alt='team-member' className='rounded-circle' width='80px'/>
                            </Col>
                            <Col lg={10}>
                                <small><b>Richard Allen</b></small> <br/>
                                <small>UI/UX Dev</small>
                               <ProgressBar animated now={76} label={76} size='sm' />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col lg={2}>  
                                <img src={team1} alt='team-member' className='rounded-circle' width='80px'/>
                            </Col>
                            <Col lg={10}>
                                <small><b>Amanda Spring</b></small> <br/>
                                <small>Scrum Master</small>
                               <ProgressBar animated now={70} label={70} size='sm' />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col lg={2}>  
                                <img src={team2} alt='team-member' className='rounded-circle' width='80px'/>
                            </Col>
                            <Col lg={10}>
                                <small><b>Nora Chesterfield</b></small> <br/>
                                <small>Data Analyst</small>
                               <ProgressBar animated now={60} label={60} size='sm' />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col lg={2}>  
                                <img src={team4} alt='team-member' className='rounded-circle' width='80px'/>
                            </Col>
                            <Col lg={10}>
                                <small><b>Olivia Nolan</b></small> <br/>
                                <small>Software Engineer</small>
                               <ProgressBar animated now={57} label={57} size='sm' />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col lg={2}>  
                                <img src={team5} alt='team-member' className='rounded-circle' width='80px'/>
                            </Col>
                            <Col lg={10}>
                                <small><b>Pedro Gustavo</b></small> <br/>
                                <small>NetDevOps</small>
                               <ProgressBar animated now={90} label={90} size='sm' />
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className='mb-3'>
            <Col>
                <Card lg={6} className='mb-2'>
                    <Card.Header>Overview</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className='mb-2'>
                                <ul>
                                    <li>Network Monitoring</li>
                                    <li>Mobile App Development </li>
                                    <li>Web Applicationts </li>
                                    <li>CI/CD</li>
                                    <li>Scripting</li>
                                    <li>Network Development</li>

                                </ul>
                            </Col>

                            <Col className='mb-2'>
                            <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                            </Col>

                            <Col className=''>
                                <Gauge width={100} height={100} value={50} valueMin={1} valueMax={100} />
                                <strong>Progress Rate</strong>
                  
                            </Col>

                            <Col className=''>
                                <Gauge width={100} height={100} value={70} valueMin={1} valueMax={100} />
                                <strong>Team Management</strong>
                  
                            </Col>

                            <Col className=''>
                                <Gauge width={100} height={100} value={30} valueMin={1} valueMax={100} />
                                <strong>Network Downtime</strong>
                  
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3}>
                <Card style={{height: '400px'}}>
                    <Card.Header>Planner</Card.Header>
                    <Card.Body>
                        <Row>
                            {/* <Col><small>10:00</small></Col> */}
                            <Col>
                                <Card className='mb-3'>
                                    <Card.Header>Meeting</Card.Header>
                                    <Card.Body>
                                        <p>Breakfast Meeting with the CEO</p>
                                        <small>10:00 - 11:00</small>
                                    </Card.Body>
                                </Card>

                                <Card className='mb-3'>
                                    <Card.Header>Break Time</Card.Header>
                                    <Card.Body>
                                        <p>Lunch Break</p>
                                        <small>12:00 - 13:00</small>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3}>
                <Card height={400}>
                    <Card.Header>Team</Card.Header>
                    <Card.Body>
                        <Row className='mb-3'>
                                <Col lg={2} className='me-2'>  
                                    <img src={lead} alt='team-member' className='rounded-circle' width='50px'/>
                                </Col>
                                <Col >
                                    <small><b>Sam Wilson</b></small> <br/>
                                    <small> Team Lead</small>
                                </Col>
                        </Row>

                        <Row className='mb-3'>
                                <Col lg={2} className='me-2'>  
                                    <img src={team1} alt='team-member' className='rounded-circle' width='50px'/>
                                </Col>
                                <Col >
                                    <small><b>Amanda Wallace Samantha</b></small> <br/>
                                    <small>Scrum Master</small>
                                </Col>
                        </Row>

                        
                        <Row className='mb-3'>
                                <Col lg={2} className='me-2'>  
                                    <img src={team4} alt='team-member' className='rounded-circle' width='50px'/>
                                </Col>
                                <Col >
                                    <small><b>Olivia Nolan</b></small> <br/>
                                    <small>Software Engineer</small>
                                </Col>
                        </Row>

                        <Row className='mb-3'>
                                <Col lg={2} className='me-2'>  
                                    <img src={ceo} alt='team-member' className='rounded-circle' width='50px'/>
                                </Col>
                                <Col >
                                    <small><b>Calvin Theodore</b></small> <br/>
                                    <small>Project Manager</small>
                                </Col>
                        </Row>

                        <Row className='mb-3'>
                                <Col lg={2} className='me-2'>  
                                    <img src={team2} alt='team-member' className='rounded-circle' width='50px'/>
                                </Col>
                                <Col >
                                    <small><b>Nora Chesterfield</b></small> <br/>
                                    <small>Data Engineer</small>
                                </Col>
                        </Row>

                    
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default DashBoard