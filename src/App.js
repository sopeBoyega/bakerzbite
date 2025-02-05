import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/about/AboutUs";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import BottomTicker from "./components/home/scrolling-ticker";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const listItems = ["Home", "Gallery", "About", "Contact"];
  const [visitorCount, setVisitorCount] = useState(null);
  const [location, setLocation] = useState("Fetching Location ...");
  const [visitorAdded, setVisitorAdded] = useState(false); // Add a state to track if visitor is added

  // Sends a request to our Count API then returns a response with the current Visitor Count
  useEffect(
    () => {
        getLocation();
        if (!visitorAdded) {
          addVisitor();
          setVisitorAdded(true); // Set the flag to true after adding visitor
        }
        getTotalVisitors();
    },
    [visitorAdded]
  );
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(
            `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`
          );

          return `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`
        },
        (error) => {
          setLocation(
            "Unable to fetch location.Please Connect to the Internet or Allow the site to use your Location"
          );
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  };

  const addVisitor = async () => {
try {
  console.log(location)
  const response = await axios.post("http://localhost:4000/api/visitorCount/add",{location: location})
} catch (error) {
  console.error("Error Adding user :" ,error)
}
  }


  const getTotalVisitors = async () => {
    try {
      const response =  await axios.get("http://localhost:4000/api/visitorCount/list")
      console.log(response.data.data);
      setVisitorCount(response?.data?.data)
    } catch (error) {
      console.error("Error getting Total Visitors")
    }
  }



  return (
    <div className="">
      {/* Pass Visitor Count */}
      <Navbar visitorCount={visitorCount} />
      <BottomTicker location={location}/>
      {/* Pass Visitor Count */}
      <Sidebar listItems={listItems} visitorCount={visitorCount} />{" "}
      {/* Sidebar Available Globally */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
