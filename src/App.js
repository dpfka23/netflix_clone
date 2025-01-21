import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <FAQ />
    </div>
  );
};

export default App;