import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Codesamples from './Components/Codesamples';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Socials from './Components/Socials';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Socials />
        <Home/>
        <About />
        <Experience />
        <Codesamples />
        <Contact />
      </div>
    </div>
  );
}

export default App;
