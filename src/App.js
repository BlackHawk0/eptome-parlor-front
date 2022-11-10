import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactpage" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;