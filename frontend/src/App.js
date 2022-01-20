import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Components/Screens/HomeScreen';
import ProductScreen from './Components/Screens/ProductScreen';
import CartScreen from './Components/Screens/CartScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            {/* <Route path='/cart/:id?' element={<CartScreen />} /> */}
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
