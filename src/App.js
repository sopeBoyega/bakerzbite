import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/about/AboutUs';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import BottomTicker from './components/home/scrolling-ticker';
import { useEffect, useState } from 'react';

function App() {

  const listItems = ["Home", "Gallery", "About", "Contact"];
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
      fetch('https://countapi-p42r.onrender.com/api/visitor-count')
          .then((response) => response.json())
          .then((data) => setVisitorCount(data.count))
          .catch((err) => console.error('Error fetching visitor count:', err));
  }, []);
  
  return (
    <div className="">
<Navbar visitorCount={visitorCount}/>
<BottomTicker/>
<Sidebar listItems={listItems} /> {/* Sidebar Available Globally */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
