// import './App.css';
import Header from './components/Header'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import DashBoard from './screens/DashBoard'
import { Row, Col, Container } from 'react-bootstrap';

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
                        <DashBoard/>
                    </Container>
                    
                </main>
                {/* <Footer/> */}
            </Col>
        </Row>
    </div>
  );
}

export default App;
