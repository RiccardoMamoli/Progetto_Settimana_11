import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import CustomSidebar from './components/CustomSidebar';
import { Container, Row } from 'react-bootstrap'
import Home from './components/Home';
import CustomPlayer from './components/CustomPlayer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import YourLibrary from './components/YourLibrary';
import SearchResult from './components/SearchResult';


function App() {

  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <CustomSidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/library' element={<YourLibrary />} />
              <Route path='/search-results' element={ <SearchResult />} />
            </Routes>
          </Row>
        </Container>
        <CustomPlayer />
      </BrowserRouter>
    </>

  )
}

export default App;
