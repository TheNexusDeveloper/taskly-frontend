// import './App.css';
import Header from './components/Header'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import DashBoard from './screens/DashBoard'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <Header/>
        <SideNav/>
        <main>
            <Container fluid>
                <DashBoard/>
            </Container>
            
        </main>
        
        <Footer/>
    </div>
  );
}

export default App;
