import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import ScrollTopButton from './components/Buttons/ScrollTopButton/ScrollTopButton';
import WhatsappButton from './components/Buttons/WhatsappButton/WhatsappButton';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
      <ScrollTopButton/>
      <WhatsappButton/>
    </div>
  );
}

export default App;
