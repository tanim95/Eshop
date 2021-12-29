import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Components/Screens/HomeScreen';
import ProductScreen from './Components/Screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact></Route>
            <Route path='/product/:id' element={<ProductScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
