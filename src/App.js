import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import FAQ from './components/FAQ';
import Membership from './components/Membership';
import WhyJoin from './components/WhyJoin';
import Footer from './components/Footer';
import MoveSlider from './components/MoveSlider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
      <div className='app'>
        <Header />
        <Banner />
        <MoveSlider />
        <WhyJoin />
        <FAQ />
        <Membership />
        <Footer />
      </div>
      }/>
      <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;