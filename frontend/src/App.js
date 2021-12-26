import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import HomeScreens from './Components/Screens/HomeScreens';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreens />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
