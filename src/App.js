import NavBar from './components/NavBar';
import Home from './components/Home';
import Links from './components/Links';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';

import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Links/>
      <About/>
      <Portfolio/>
      <Experience/>
     
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
