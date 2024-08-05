// import './App.css';
import Header from './components/Header'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import DashBoard from './screens/DashBoard'
import ProjectsScreen from './screens/ProjectsScreen'
import BoardScreen from './screens/BoardScreen'
import { Row, Col, Container } from 'react-bootstrap';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Row className='m-auto'>
            <Col  className='flex-column text-center'>
                <SideNav/>
            </Col>

            <Col lg={11} md={11}>
                <main>
                    <Container >
                    <Header/> 
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<DashBoard/>} exact ></Route>
                            <Route path='/projects' element={<ProjectsScreen/>} ></Route>
                            <Route path='/boards' element={<BoardScreen/>} ></Route>
                        </Routes>
                    </BrowserRouter>
                       
                    </Container>
                    
                </main>
                {/* <Footer/> */}
            </Col>
        </Row>
    </div>
  );
}

export default App;
