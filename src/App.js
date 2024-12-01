import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/home';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact'
import Gallery from './pages/gallery';
import Footer from './components/footer';

function App() {
  return (
    <div className="">
<Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
